/* ------------------------------------------------------------------
   Turns a table of numbers into a PDF the owner can keep or send on.

   Same approach as the customer's order sheet: the file is written byte
   by byte, so there is nothing to install and it works offline. Reports
   can run to any length, so this one paginates and repeats the column
   headings on every page.
   ------------------------------------------------------------------ */
window.RPT = (function () {
  'use strict';

  var W1 = [278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584];
  var W2 = [278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584];

  function wOf(t, size, bold) {
    var tb = bold ? W2 : W1, w = 0;
    for (var i = 0; i < t.length; i++) { var c = t.charCodeAt(i) - 32; w += (c >= 0 && c < 95 ? tb[c] : 556); }
    return w * size / 1000;
  }
  function clean(t) {
    return String(t == null ? '' : t)
      .replace(/[·•]/g, '-').replace(/×/g, 'x')
      .replace(/[–—]/g, '-').replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"').replace(/[\r\t\n]/g, ' ')
      .replace(/[^\x20-\x7E]/g, '');
  }
  function esc(t) { return t.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)'); }
  function cut(t, maxW, size, bold) {
    t = clean(t);
    if (wOf(t, size, bold) <= maxW) return t;
    while (t.length > 1 && wOf(t + '..', size, bold) > maxW) t = t.slice(0, -1);
    return t.replace(/[\s-]+$/, '') + '..';
  }

  var PW = 595, PH = 842, M = 34;
  var INK = '#0E3B33', GOLD = '#B9832B', DARK = '#1B2B27', GREY = '#5A6863',
      BAND = '#EADFC8', ZEBRA = '#F7F1E6', LINE = '#DDD3BF';

  function build(o) {
    var cols = o.columns, rows = o.rows || [];
    var pages = [], ops = null, y = 0;

    var n2 = function (v) { return (Math.round(v * 100) / 100).toString(); };
    var col = function (hex) {
      var n = parseInt(hex.slice(1), 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(function (v) { return (v / 255).toFixed(3); }).join(' ');
    };
    var Y = function (t) { return PH - t; };
    var rect = function (x, t, w, h, hex) { ops.push(col(hex) + ' rg ' + n2(x) + ' ' + n2(Y(t) - h) + ' ' + n2(w) + ' ' + n2(h) + ' re f'); };
    var text = function (x, b, t, s, bold, hex) {
      ops.push('BT /' + (bold ? 'F2' : 'F1') + ' ' + s + ' Tf ' + col(hex) + ' rg ' + n2(x) + ' ' + n2(Y(b)) + ' Td (' + esc(clean(t)) + ') Tj ET');
    };
    var rtext = function (xr, b, t, s, bold, hex) { text(xr - wOf(clean(t), s, bold), b, t, s, bold, hex); };
    var rule = function (x1, t, x2, hex, w) {
      ops.push(col(hex) + ' RG ' + n2(w || 0.6) + ' w ' + n2(x1) + ' ' + n2(Y(t)) + ' m ' + n2(x2) + ' ' + n2(Y(t)) + ' l S');
    };

    // column x positions from the given weights
    var total = cols.reduce(function (a, c) { return a + c.w; }, 0);
    var CW = PW - 2 * M, x0 = [], acc = 0;
    cols.forEach(function (c) { x0.push(M + CW * acc / total); acc += c.w; });
    var colW = cols.map(function (c) { return CW * c.w / total - 8; });

    function header(first) {
      ops = [];
      rect(0, 0, PW, first ? 76 : 44, INK);
      text(M, first ? 32 : 26, o.title, first ? 20 : 13, true, '#FBF6EA');
      if (first) {
        text(M, 50, 'DRAGON EMPIRE CATERING', 8, true, '#E9C77E');
        if (o.subtitle) text(M, 66, o.subtitle, 9, false, '#9FB5AE');
        var d = new Date();
        rtext(PW - M, 32, 'Generated ' + d.getDate() + ' ' +
          ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()] + ' ' + d.getFullYear(),
          8.5, false, '#9FB5AE');
      }
      y = first ? 92 : 60;
      rect(M, y - 13, CW, 18, BAND);
      cols.forEach(function (c, i) {
        var t = cut(c.label.toUpperCase(), colW[i], 7.5, true);
        if (c.right) rtext(x0[i] + colW[i], y, t, 7.5, true, '#6A5A38');
        else text(x0[i], y, t, 7.5, true, '#6A5A38');
      });
      y += 12;
    }

    header(true);
    var zebra = false;
    rows.forEach(function (r) {
      if (y > PH - 58) { pages.push(ops); header(false); zebra = false; }
      if (zebra) rect(M, y - 9.5, CW, 14, ZEBRA);
      zebra = !zebra;
      cols.forEach(function (c, i) {
        var v = r[i] == null ? '' : String(r[i]);
        var bold = !!c.bold, size = 8.5;
        var t = cut(v, colW[i], size, bold);
        if (c.right) rtext(x0[i] + colW[i], y, t, size, bold, c.dim ? GREY : DARK);
        else text(x0[i], y, t, size, bold, c.dim ? GREY : DARK);
      });
      y += 14;
    });

    if (!rows.length) { text(M, y + 6, 'Nothing to report for this period.', 9.5, false, GREY); y += 20; }

    if (o.totals && o.totals.length) {
      y += 4;
      rule(M, y - 8, PW - M, GOLD, 0.8);
      o.totals.forEach(function (t) {
        if (y > PH - 58) { pages.push(ops); header(false); }
        text(M, y + 6, t[0], 9.5, true, INK);
        rtext(PW - M, y + 6, t[1], 9.5, true, INK);
        y += 15;
      });
    }
    if (o.note) { y += 8; text(M, y, o.note, 8, false, GREY); }

    pages.push(ops);

    // page furniture
    pages.forEach(function (p, i) {
      var save = ops; ops = p;
      rule(M, PH - 26, PW - M, LINE, 0.6);
      text(M, PH - 15, 'Dragon Empire Catering', 7.5, false, '#8A9491');
      rtext(PW - M, PH - 15, 'Page ' + (i + 1) + ' of ' + pages.length, 7.5, false, '#8A9491');
      ops = save;
    });

    // assemble
    var out = '%PDF-1.4\n', offs = [];
    function add(b) { offs.push(out.length); out += offs.length + ' 0 obj\n' + b + '\nendobj\n'; }
    var first = 5;
    add('<< /Type /Catalog /Pages 2 0 R >>');
    add('<< /Type /Pages /Kids [' + pages.map(function (_, i) { return (first + i * 2 + 1) + ' 0 R'; }).join(' ') + '] /Count ' + pages.length + ' >>');
    add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
    add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
    pages.forEach(function (p, i) {
      var body = p.join('\n');
      add('<< /Length ' + body.length + ' >>\nstream\n' + body + '\nendstream');
      add('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + PW + ' ' + PH + '] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ' + (first + i * 2) + ' 0 R >>');
    });
    var xr = out.length;
    out += 'xref\n0 ' + (offs.length + 1) + '\n0000000000 65535 f \n' +
      offs.map(function (v) { return String(v).padStart(10, '0') + ' 00000 n \n'; }).join('');
    out += 'trailer\n<< /Size ' + (offs.length + 1) + ' /Root 1 0 R >>\nstartxref\n' + xr + '\n%%EOF';
    var u8 = new Uint8Array(out.length);
    for (var i = 0; i < out.length; i++) u8[i] = out.charCodeAt(i) & 255;
    return new Blob([u8], { type: 'application/pdf' });
  }

  function save(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 20000);
  }

  return { build: build, save: save, pages: function (b) { return b; } };
})();
