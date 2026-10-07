class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { screen: null, name: '', cc: '+971', phone: '', emirate: '', date: '', time: '', pax: 18, paxEdit: null, pureVeg: false, minWarn: false, custMinOk: false, detailsWarn: false, type: null, layout: null, venue: null, cuisine: 'ic', pkg: null, theme: null, themeView: null, themeShot: 1, eventNote: '', returnTo: null, pdfMsg: '', zoom: null, notes: {}, noteFor: null, noteDraft: '', consent: false, setupEdit: null, counters: {}, counterItems: {}, cmNudge: 0, terms: false, termsWarn: false, tab: 'starters', fcu: 'all', sub: 0, note: '', sel: {}, selKey: '' };
    // Dummy photo tiles for now; real photos replace the glyph tile later.
    this.ITEMS = [];
    const add = (cu, cat, diet, sub, list) => list.forEach((n) => {
      const p = Array.isArray(n) ? n : [n, ''];
      this.ITEMS.push({ name: p[0], note: p[1], cu: cu, cat: cat, diet: diet, sub: sub });
    });
    const SAUCE3 = 'Regular / Burnt Garlic / Schezwan';
    const VCP = 'Veg / Chicken / Prawns';
    // ---------- CHINESE ----------
    add('ch', 'starter', 'veg', 'Dim sum', ['Vegetable Spring Roll', 'Vegetable Gyoza', 'Steamed Wonton Pickle Chilli', 'Vegetable Basil Dumplings', 'Edamame Dumpling With Truffle Oil', 'Vegetable Crystal Dumpling']);
    add('ch', 'starter', 'veg', 'Bao', ['Vegetable Sanchoi Bao', 'Cottage Cheese Smoked Chilli Bao']);
    add('ch', 'starter', 'veg', 'Sushi roll', ['Asparagus Tempura Roll', 'Crispy Spicy Avocado Roll', 'Philippine Mango Roll']);
    add('ch', 'starter', 'veg', 'Wok starter', ['Asian Crispy Potato', 'Crispy Thai Lotus Stem With Curry Leaves', 'Crispy Vegetable Konji', 'Veg Manchurian Dry', 'Asian Paneer Chilli', 'Diced Tofu Smoked Chilli', 'Crispy Schezwan Chilli Baby Corn', 'Sauteed Zucchini, Baby Corn & Mushroom Ginger Chilli']);
    add('ch', 'starter', 'nonveg', 'Dim sum', ['Crescent Chicken Dumplings', 'Chicken Gyoza', 'Prawn Har Gao', 'Chicken Siu Mai', 'Chicken Basil Dumplings', 'Chicken Spring Roll']);
    add('ch', 'starter', 'nonveg', 'Bao', ['Prawn Tempura Bao', 'Chicken BBQ Bao']);
    add('ch', 'starter', 'nonveg', 'Sushi roll', ['Prawn Tempura Roll', 'Salmon Roll']);
    add('ch', 'starter', 'nonveg', 'Wok starter', ['Diced Chicken With Assorted Pepper & Ginger', 'Drums Of Heaven Hong Kong', 'Drums Of Heaven Shang Dong', 'Drums Of Heaven Hunan', 'Asian Chicken Chilli', 'Chicken Tai Pei', 'Dragon Chicken', 'Chicken Hunan Dry', 'Sea Bass Chilli Basil', 'Crispy Chicken', 'Fish Pepper Garlic', 'Asian Fried Chilli Fish', 'Dynamite Prawns', ['King Prawns', 'Sauce: Hunan / Kimlee / Butter Garlic']]);
    add('ch', 'main', 'veg', 'Wok & curry', [['Mixed Vegetable', 'Sauce: Chilli Basil / Hot Garlic'], 'Wok Tossed Greens', 'Tofu In Smoked Chilli', 'Asian Paneer Chilli Sauce', 'Tofu Schezwan Chilli', 'Veg Croquettes Manchurian Sauce', ['Thai Curry', 'Red / Green'], 'Corn Potato In Asian Chilli']);
    add('ch', 'main', 'nonveg', 'Wok & curry', ['Asian Chicken Chilli In Jiang Sauce', 'Smoked Chicken', 'Hot Pot Chicken With Mushroom', 'Chilli Basil Chicken', 'Diced Chicken In Hot Garlic Sauce', 'Lemon Honey Glazed Chicken', ['Thai Curry (Chicken or Prawns)', 'Red / Green'], 'Fish In Hot Garlic Sauce', ['Sea Bass', 'Sauce: Chilli Basil / Schezwan Chilli'], ['King Prawns', 'Sauce: Chilli Basil / Hot Garlic / Oyster'], ['Lobster', 'Sauce: Hot Basil / Sichuan Chilli / Seafood Coriander'], ['Wok Tossed Greens', 'With Chicken / Fish / Prawns']]);
    add('ch', 'rice', null, 'Rice', ['Steamed Rice', 'Steamed Jasmine Rice', ['Vegetable Fried Rice', SAUCE3], ['Egg Fried Rice', SAUCE3], ['Chicken Fried Rice', SAUCE3], ['Prawns Fried Rice', SAUCE3], ['Black Pepper Fried Rice', VCP], ['Nasi Goreng Rice', VCP]]);
    add('ch', 'noodle', null, 'Noodles', [['Wok Tossed Hakka Noodles', 'Regular / Schezwan - ' + VCP]]);
    add('ch', 'dessert', null, 'Dessert', ['Sizzling Brownie With Ice Cream', 'Chocolate Rolls', 'Steamed Coconut Dumpling With Honey Sesame Sauce', 'Caramel Custard', 'Rambutan With Vanilla Ice Cream']);
    // ---------- INDIAN ----------
    add('in', 'starter', 'veg', 'Tandoor', ['Bharwani Tandoori Kumbh', 'Malai Paneer Tikka', 'Veg Seekh Kebab', 'Malai Broccoli', 'Veg Harabhara Kebab', 'Punjabi Paneer Tikka', 'Malai Soya Chaap', 'Tandoori Soya Chaap', 'Aatishi Aaloo']);
    add('in', 'starter', 'veg', 'Kathi roll', ['Soya Chaap Roll', 'Paneer Tikka Roll']);
    add('in', 'starter', 'nonveg', 'Tandoor - Chicken', ['Firangi Chicken Tikka', 'Achari Chicken Tikka', 'Kasturi Chicken Tikka', 'Murgh Malai Tikka', 'Tandoori Chicken (Full)', 'Tandoori Chicken (Half)', 'Chicken Seekh Kebab']);
    add('in', 'starter', 'nonveg', 'Tandoor - Mutton', ['Lakhnowi Tunday Kabab', 'Dum Pukht Kakori', 'Mutton Boti Kebab']);
    add('in', 'starter', 'nonveg', 'Tandoor - Seafood', ['Loshani Jhinga Kalimirch', 'Ajwani Fish Tikka']);
    add('in', 'starter', 'nonveg', 'Kathi roll', ['Chicken Tikka Roll', 'Mutton Boti Roll', 'Egg Roll']);
    add('in', 'main', 'veg', 'Curry & dal', ['Paneer Tikka Masala', 'Palak Paneer', 'Mirch Masala Soya Chaap', 'Matar Mushroom', 'Kadhai Paneer', 'Dal Makhani', 'Double Dal Tadka', 'Dil Khush Kofta', 'Subz Diwani Handi']);
    add('in', 'main', 'nonveg', 'Curry - Chicken', ['Butter Chicken', 'Chicken Labab Dar', 'Bhatti Ka Dum Murgh', 'Murgh Masaalam', 'Chicken Tikka Masala']);
    add('in', 'main', 'nonveg', 'Curry - Egg', ['Egg Masala']);
    add('in', 'main', 'nonveg', 'Curry - Mutton', ['Lahori Gosht', 'Mutton Kheema Pav', 'Mutton Rogan Josh', 'Bhuna Tawa Maas', 'Dum Handi Ka Gosht']);
    add('in', 'rice', null, 'Rice', ['Jeera Rice', 'Dal Khichdi', 'Steamed Rice']);
    add('in', 'biryani', null, 'Biryani - Veg', ['Subz Veg Biryani', 'Soya Chaap Biryani', 'Paneer Tikka Biryani']);
    add('in', 'biryani', null, 'Biryani - Chicken', ['Chicken Tikka Biryani', 'Awadhi Murgh Dum Biryani', 'Egg Masala Biryani']);
    add('in', 'biryani', null, 'Biryani - Mutton', ['Nalli Biryani', 'Raan Biryani (Half)', 'Raan Biryani (Special)', 'Yakhni Dum Gosht Biryani']);
    add('in', 'bread', null, 'Indian bread', [['Tandoori Roti', 'Butter / Plain'], ['Pyaaz Mirch Ki Roti', 'Butter / Plain'], ['Laccha Paratha', 'Butter / Plain'], ['Mint Laccha Paratha', 'Butter / Plain'], ['Ajwani Laccha Paratha', 'Butter / Plain'], ['Tandoori Naan', 'Butter / Plain'], ['Romali Roti', 'Butter / Plain'], ['Garlic Naan', 'Butter / Plain'], ['Chilli Garlic Naan', 'Butter / Plain']]);
    add('in', 'dessert', null, 'Dessert', ['Gulab Jamun', 'Kesar Da Phirni']);
    this.ITEMS.forEach((x, i) => { x.id = 'i' + i; });
    // Diet tags for staples (rice / biryani), so Pure Veg can hide the non-veg ones
    const NV = ['Egg Fried Rice', 'Chicken Fried Rice', 'Prawns Fried Rice', 'Chicken Tikka Biryani', 'Awadhi Murgh Dum Biryani', 'Egg Masala Biryani', 'Nalli Biryani', 'Raan Biryani (Half)', 'Raan Biryani (Special)', 'Yakhni Dum Gosht Biryani'];
    const VG = ['Steamed Rice', 'Steamed Jasmine Rice', 'Vegetable Fried Rice', 'Jeera Rice', 'Dal Khichdi', 'Subz Veg Biryani', 'Soya Chaap Biryani', 'Paneer Tikka Biryani'];
    this.ITEMS.forEach((x) => {
      if (x.diet) return;
      if (NV.indexOf(x.name) >= 0) x.diet = 'nonveg';
      else if (VG.indexOf(x.name) >= 0 || x.cat === 'bread') x.diet = 'veg';
    });
    // Per-person prices, from the menu sheet: [package 1..4]
    this.PRICES = {
      ic: { buffet: [130, 145, 170, 199], delivery: [49, 69, 99, 110], live: [110, 130, 150, 175], both: [0, 0, 0, 0] },
      in: { buffet: [130, 145, 170, 199], delivery: [59, 79, 99, 119], live: [139, 159, 169, 189], both: [0, 0, 0, 0] },
      ch: { buffet: [99, 135, 155, 190], delivery: [59, 79, 99, 119], live: [139, 159, 169, 189], both: [0, 0, 0, 0] }
    };
    // What the customer is shown as saved on a buffet package. The struck-out
    // price is worked out as price + saving, never stored on its own, so it
    // cannot drift below the real price when a price is edited later.
    this.SAVE = {
      buffet: { ic: [19, 14, 15, 16], in: [19, 14, 15, 16], ch: [16, 14, 14, 15] }
    };
    // Total dishes in each package (starters + mains + staples + dessert), used to price custom menus
    this.COMP = [[3, 2, 2, 1], [4, 4, 2, 2], [5, 5, 4, 2], [6, 6, 4, 2]]; // starters, mains, staples, dessert per package
    this.CAT_W = [1, 1.5, 0.8, 0.7]; // relative cost weight of one dish: starter, main, staple, dessert
    this.CUSTOM_MARKUP = 1.10;
    // Event themes: first 3 included with the package, last 3 are premium (dummy prices, flat per event)
    this.THEMES = [
      { id: 't1', name: 'Classic Ivory', desc: 'Ivory and gold, timeless elegance', price: 0, c: ['#F6EFDD', '#E7DAB8', '#C9963B', '#8A6A2A'] },
      { id: 't2', name: 'Garden Green', desc: 'Fresh foliage, calm and natural', price: 0, c: ['#DCEBDD', '#B9D3B5', '#4E8B5A', '#145244'] },
      { id: 't3', name: 'Festive Marigold', desc: 'Warm marigold and orange, joyful', price: 0, c: ['#FCE9C4', '#F2CE86', '#E58A1F', '#B5502B'] },
      { id: 't4', name: 'Royal Mughal', desc: 'Deep maroon, gold arches, royal feel', price: 900, c: ['#5A1A25', '#3E1119', '#E9C77E', '#C9963B'] },
      { id: 't5', name: 'Arabian Nights', desc: 'Lanterns, crescent moon and starlight', price: 1200, c: ['#14264A', '#0C1830', '#F0C868', '#C9963B'] },
      { id: 't6', name: 'Crystal Luxe', desc: 'Chandeliers, crystal and white florals', price: 1800, c: ['#EEF1F5', '#D5DBE5', '#8FA3BF', '#FFFFFF'] }
    ];
    // Themes that have photographs in deploy/images/themes, three to a theme.
    // Anything not listed falls back to the drawing, so a new theme is never bare.
    this.THEME_SHOT = ['t1', 't2', 't3', 't4', 't5', 't6'];
    this.THEME_IMG = {};       // "t5-2" -> photo, for when the panel can set them
    this.THEME_INFO = {
      t1: { long: 'A timeless ivory and gold setup with soft fairy lights, classic arches and elegant table styling. Suits almost any celebration.', incl: ['Ivory and gold backdrop with arch frames', 'Fairy-light canopy', 'Elegant table centrepieces with candles', 'Matching table linen and napkins', 'Welcome signboard'], best: ['Weddings', 'Anniversaries', 'Corporate dinners'] },
      t2: { long: 'Fresh green foliage, hanging vines and natural textures create a calm, relaxed garden-party mood.', incl: ['Foliage wall and leafy arch', 'Hanging greenery accents', 'Wood and greenery table centrepieces', 'Natural linen table runners', 'Welcome signboard'], best: ['Birthdays', 'Baby showers', 'Outdoor lunches'] },
      t3: { long: 'Bright marigold garlands, warm orange tones and traditional accents for a joyful, festive feel.', incl: ['Marigold garland hangings', 'Warm-coloured drapes', 'Brass diya and floral centrepieces', 'Traditional table decor', 'Welcome signboard'], best: ['Festivals', 'Engagements', 'Family gatherings'] },
      t4: { long: 'Deep maroon drapes, gold-framed Mughal arches and rich detailing for a truly royal evening.', incl: ['Maroon and gold stage backdrop', 'Gold-framed Mughal arches', 'Premium drapes and floor styling', 'Brass and gold table centrepieces', 'Custom signage and entrance decor'], best: ['Weddings', 'Receptions', 'Grand celebrations'] },
      t5: { long: 'Lanterns, a crescent moon and starlit ceiling effects create a magical Arabian night atmosphere.', incl: ['Hanging lantern installation', 'Crescent and star backdrop', 'Deep-blue draping and starlit lighting', 'Gold lantern table centrepieces', 'Custom signage and entrance decor'], best: ['Ramadan gatherings', 'Eid parties', 'Gala dinners'] },
      t6: { long: 'Crystal chandeliers, white florals and soft silver tones for a luxurious, modern look.', incl: ['Crystal chandelier installation', 'White floral arrangements', 'Silver and white table styling', 'Mirror-top table centrepieces', 'Custom signage and entrance decor'], best: ['Weddings', 'Award nights', 'Luxury launches'] }
    };
    const d0 = new Date();
    const p2 = (n) => (n < 10 ? '0' : '') + n;
    this.REF = 'CM-' + String(d0.getFullYear()).slice(2) + p2(d0.getMonth() + 1) + p2(d0.getDate()) + '-' + (1000 + Math.floor(Math.random() * 9000));
    /* What each BUFFET package contains, from the menu sheet. Indian and
       Indian & Chinese share a shape: one daal every time, and the staples
       picked from a single pool. Chinese has no daal and counts its rice and
       its noodles separately.

       Delivery and Live Cooking Station are not in that sheet, so they keep
       the older Q below. */
    this.QB = {
      ic: [
        { sv: 1, snv: 1, mv: 1, mnv: 1, dl: 1, stp: 1, ds: 1 },
        { sv: 2, snv: 2, mv: 2, mnv: 2, dl: 1, stp: 2, ds: 2 },
        { sv: 2, snv: 3, mv: 2, mnv: 3, dl: 1, stp: 4, ds: 3 },
        { sv: 3, snv: 3, mv: 3, mnv: 3, dl: 1, stp: 4, ds: 3 }
      ],
      in: [
        { sv: 1, snv: 1, mv: 1, mnv: 1, dl: 1, stp: 1, ds: 1 },
        { sv: 2, snv: 2, mv: 2, mnv: 2, dl: 1, stp: 2, ds: 2 },
        { sv: 2, snv: 3, mv: 2, mnv: 3, dl: 1, stp: 4, ds: 3 },
        { sv: 3, snv: 3, mv: 3, mnv: 3, dl: 1, stp: 4, ds: 3 }
      ],
      ch: [
        { sv: 1, snv: 1, mv: 1, mnv: 1, rc: 1, nd: 1, ds: 1 },
        { sv: 2, snv: 1, mv: 1, mnv: 2, rc: 1, nd: 1, ds: 2 },
        { sv: 2, snv: 2, mv: 2, mnv: 2, rc: 2, nd: 1, ds: 2 },
        { sv: 3, snv: 3, mv: 2, mnv: 3, rc: 2, nd: 1, ds: 3 }
      ]
    };
    /* What each live counter serves. A section with a `need` is chosen from;
       a section without one is served whole, which is how the sheet reads
       wherever it gives no number. A counter missing from here has no menu to
       show - Amritsari Chole Kulche and Makki di Roti are the dish itself. */
    this.COUNTER_MENUS = {
      chole: { sections: [ { title: 'Served at the counter', items: [
        'Amritsari Chole', 'Kulche'] } ] },

      makki: { sections: [ { title: 'Served at the counter', items: [
        'Makki di Roti', 'Sarson da Saag'] } ] },

      bbq: { sections: [ { title: 'On the grill', items: [
        'Royal Firangi Barbecued Chicken',
        'Charcoal Kissed Harissa Lamb Chops Royale',
        'Charcoal Grilled Prawns with Garlic & Green Chillies',
        'Charcoal Grilled Fish in Traditional Indian Spices',
        'Lamb Mishaki Skewers',
        'Ember Roasted Chicken Kebab Reserve',
        'Golden Flame Mutton Kebab',
        'Fire Roasted Corn with Lemon Butter Dust',
        'Charcoal Grilled Cottage Cheese',
        'Assorted Grilled Vegetable Lemon Butter Dust',
        'Charcoal Grilled Fish',
        'Shish Taouk'] } ] },

      sizzler: { note: 'Choose one from each section', sections: [
        { title: 'Staple', need: 1, items: ['Noodles', 'Rice'] },
        { title: 'Mains', need: 1, items: ['Protein', 'Exotic Vegetables', 'Tofu'] },
        { title: 'Sauces', need: 1, items: [
          'Black Pepper', 'Hot Garlic', 'Sichuan Chilli',
          'Orange Black Bean', 'BBQ Onion'] } ] },

      mocktail: { sections: [ { title: 'Mocktails', items: [
        'Mandarin Swirl', 'Orange Mojito', 'Lychee Lemongrass Iced Tea',
        'Mango Basil Mojito', 'Frozen Lime', 'Watermelon Cilantro Crush',
        'Kaffir Lime Cooler', 'Lychee Basil Quencher'] } ] },

      chaat: { sections: [ { title: 'Chaat', items: [
        'Semolina Panipuri', 'Samosa Chaat', 'Papdi Chaat', 'Dahi Bhalla',
        'Aloo Tikki Chaat', 'Sev Puri', 'Dahi Puri', 'Palak Patta Chaat',
        'Fruit Chaat', 'Raj Kachori'] } ] },

      pasta: { note: 'Pick 2 from each section', sections: [
        { title: 'Sauce', need: 2, items: [
          "Rosso - Sugo all'Arrabbiata", 'Alfredo Cream Sauce', 'Marinara'] },
        { title: 'Pasta', need: 2, items: [
          'Penne', 'Fusilli', 'Spaghetti', 'Macaroni', 'Ravioli'] },
        { title: 'Add-ons', need: 2, items: [
          'Poultry', 'Exotic Vegetables', 'Shrimps'] } ] },

      khowsuey: { sections: [ { title: 'Khao Suey with', items: [
        'Exotic Vegetables', 'Poultry', 'Shrimps'] } ] },

      wok: { sections: [
        { title: 'Base', items: ['Rice', 'Noodles'] },
        { title: 'Protein', items: [
          'Poultry', 'Shrimps', 'Lamb', 'Tofu', 'Cottage Cheese'] },
        { title: 'Exotic Vegetables', need: 4, items: [
          'Broccoli', 'Baby Corn', 'Mushroom', 'Chinese Cabbage', 'Bok Choy',
          'Bell Pepper', 'French Beans', 'Carrots', 'Spinach', 'Snow Peas'] } ] }
    };
    /* Live counters, offered when there is a live station. Grouped so the
       list reads at a glance rather than as sixteen rows, and ordered with
       the ones most often asked for at the top of each group. */
    /* Breakfast: four packages, each choosing from its own list rather than
       from the 147 dishes. Tea and coffee come with every one of them and are
       not counted against the choice, which is how the Indian menu is written
       ("any 4 items with tea & coffee") and how the others read alongside it. */
    this.PICK_MENUS = {
      bf: {
        label: 'Breakfast',
        packages: [
          { name: 'Indian Breakfast', price: 90, min: 1800,
            sections: [
              { title: 'Breakfast dishes', need: 4, items: [
                'Poha', 'Dosa', 'Idli', 'Paratha', 'Puri Bhaji', 'Lassi', 'Buttermilk'] }
            ],
            included: ['Tea', 'Coffee'] },

          { name: 'English Breakfast', price: 105, min: 2600,
            sections: [
              { title: 'Breakfast dishes', need: 5, items: [
                'Assorted Eggs', 'Crispy Bacon', 'Chicken / Beef Sausages',
                'Assorted Cereals', 'Bakery Basket', 'Assorted Meat Selection',
                'Fish Selection', 'Assorted Yoghurt', 'Fresh Seasonal Fruits'] }
            ],
            included: ['Tea', 'Coffee'] },

          { name: 'American Breakfast', price: 105, min: 2600,
            sections: [
              { title: 'Breakfast dishes', need: 5, items: [
                'Assorted Eggs', 'Crispy Bacon', 'Chicken / Beef Sausages',
                'Assorted Cereals', 'Bakery Basket', 'Assorted Meat Selection',
                'Assorted Yoghurt', 'Fresh Seasonal Fruits'] }
            ],
            included: ['Tea', 'Coffee'] },

          { name: 'Continental Breakfast', price: 105, min: 2600,
            sections: [
              { title: 'Fresh Juices', need: 2, items: [
                'Fresh Orange Juice', 'Fresh Watermelon Juice', 'Fresh Pineapple Juice'] },
              { title: 'Cut Fruits', need: 2, items: [
                'Fresh Seasonal Cut Fruits Platter', 'Sliced Watermelon',
                'Fresh Pineapple', 'Seasonal Melon'] },
              { title: 'Breads & Bakery', need: 2, items: [
                'Assorted Bread Rolls', 'White & Brown Bread', 'Butter Croissants',
                'Danish Pastries', 'Toasted Bread'] },
              { title: 'Butter & Preserves', need: 2, items: [
                'Salted Butter', 'Unsalted Butter', 'Strawberry Jam',
                'Orange Marmalade', 'Honey'] },
              { title: 'Tea & Coffee', need: 2, items: [
                'English Breakfast Tea', 'Green Tea', 'Masala Tea',
                'Freshly Brewed Coffee', 'Cappuccino', 'Espresso'] }
            ],
            included: [] }
        ]
      }
    };
    /* Set menus: a package is the whole list, not a choice from it, so these
       skip the dish-picking screen entirely. Each carries its own minimum
       order value, unlike the Indian and Chinese packages which share one.
       Prices are before VAT, as the menus are quoted. */
    this.SET_MENUS = {
      ht: {
        label: 'High Tea',
        packages: [
          { name: 'Finger Bites High Tea', price: 85, min: 2000, sections: [
            { title: 'Tea & Coffee', items: ['English Breakfast', 'Green Tea', 'Masala Chai', 'Coffee'] },
            { title: 'Finger Sandwiches & Sliders', items: [
              'Veg Finger Sandwich - Cucumber & Cream Cheese',
              'Veg Finger Sandwich - Tomato & Cheese',
              'Veg Finger Sandwich - Veg Mayo',
              'Mini Veg Cheese Slider',
              'Mini Butter Chicken Slider'] },
            { title: 'Finger Bite Appetizers', items: [
              'Tandoori Chicken Wings', 'Shanghai Spring Rolls',
              'Double Crumbed Fried Fish', 'Mini Chicken Kibbeh'] },
            { title: 'Croissants', items: ['Butter Croissant', 'Cheese Croissant'] },
            { title: 'Cookies & Biscuits', items: [
              'Choco-chip Cookie', 'Butter Cookie', 'Chocolate Roll', 'Assorted Biscuits'] }
          ] },
          { name: 'High Tea Menu Plan', price: 95, min: 2500, sections: [
            { title: 'Tea & Coffee', items: ['English Breakfast', 'Green Tea', 'Masala Chai', 'Coffee'] },
            { title: 'Finger Sandwiches', items: [
              'Veg Finger Sandwich - Cucumber & Cream Cheese',
              'Veg Finger Sandwich - Tomato & Cheese',
              'Veg Finger Sandwich - Veg Mayo',
              'Mini Veg Cheese Slider'] },
            { title: 'Savory', items: [
              'Shanghai Spring Rolls', 'Cottage Cheese Wrap',
              'Corn Cheese Bowl', 'Firangi Chicken Tikka'] },
            { title: 'Croissants', items: ['Butter Croissant', 'Cheese Croissant'] },
            { title: 'Pastries', items: ['Chocolate Pastry', 'Black Forest Pastry'] },
            { title: 'Cakes', items: ['Vanilla Sponge Cake', 'Chocolate Brownie'] },
            { title: 'Cookies & Biscuits', items: [
              'Choco-chip Cookie', 'Butter Cookie', 'Chocolate Roll', 'Assorted Biscuits'] }
          ] }
        ]
      }
    };
    /* What the customer agrees to before the request goes in. The first three
       are the owner's own wording; the rest come from the terms already on
       Dragon Empire's written proposals, so nothing here is invented. */
    this.TERMS = [
      'Please ask our experts for the appropriate setup for your indoor live stations.',
      'Event duration is 4 hours. Beyond that, AED 300 per hour applies.',
      'Packages do not apply to house helpers or drivers unless they are counted in the guest list. We have separate combo meals designed for them.',
      'The prices shown are an estimate. Your final quote is confirmed by our team after review.',
      'A minimum order value applies to each package.',
      'A 60% advance payment confirms your booking.',
      'Cancellations must be made at least 48 hours before the event. After that, the full amount is charged.',
      'Charges apply for any guests beyond the confirmed number.',
      'Entry permits for the villa or community are arranged by you.'
    ];
    this.COUNTER_IMG = {};     // counter id -> photo, set from the panel
    // counters that ship with a photograph in this page's own images folder
    this.COUNTER_SHOT = ['bao', 'bbq', 'chaat', 'chole', 'dimsum', 'khowsuey', 'makki', 'mocktail', 'pasta', 'pizza', 'shawarma', 'sizzler', 'sushi', 'tandoor', 'tawa', 'wok'];
    this.COUNTERS = [
      { group: 'Grill & BBQ', bg: '#F6E1CE', items: [
        { id: 'bbq', name: 'BBQ Counter', icon: 'flame' },
        { id: 'shawarma', name: 'Shawarma Counter', icon: 'skew' },
        { id: 'tandoor', name: 'Tandoor Counter', icon: 'flame' },
        { id: 'tawa', name: 'Tawa Counter', icon: 'pan' },
        { id: 'sizzler', name: 'Sizzler Counter', icon: 'pan' }
      ] },
      { group: 'Indian street food', bg: '#F8EBCB', items: [
        { id: 'chaat', name: 'Chaat Counter', icon: 'bowl' },
        { id: 'chole', name: 'Amritsari Chole Kulche', icon: 'bread' },
        { id: 'makki', name: 'Makki di Roti - Sarson da Saag', icon: 'bread' }
      ] },
      { group: 'Asian', bg: '#E2EDE1', items: [
        { id: 'dimsum', name: 'Dimsum Counter', icon: 'dump' },
        { id: 'bao', name: 'Bao Counter', icon: 'dump' },
        { id: 'sushi', name: 'Sushi Counter', icon: 'roll' },
        { id: 'wok', name: 'Oriental Wok Station', icon: 'pan' },
        { id: 'khowsuey', name: 'Khow Suey', icon: 'bowl' }
      ] },
      { group: 'Italian', bg: '#F5E4DE', items: [
        { id: 'pasta', name: 'Pasta Counter', icon: 'bowl' },
        { id: 'pizza', name: 'Pizza Counter', icon: 'slice' }
      ] },
      { group: 'Drinks', bg: '#E1EDF3', items: [
        { id: 'mocktail', name: 'Mocktail Bar', icon: 'glass' }
      ] }
    ];
    // Choices allowed per package, from the menu sheet
    this.Q = {
      '1': { sv: 1, snv: 2, mv: 1, mnv: 1, rn: 1, bb: 1, ds: 1 },
      '2': { sv: 2, snv: 2, mv: 2, mnv: 2, rn: 1, bb: 1, ds: 2 },
      '3': { sv: 2, snv: 3, mv: 2, mnv: 3, rn: 2, bb: 2, ds: 2 },
      '4': { sv: 3, snv: 3, mv: 3, mnv: 3, rn: 2, bb: 2, ds: 2 }
    };
  }
  // Category rates for custom menus. Package price = base (salads, sides, service) + dishes x category rate.
  // Fitted from the 4 package prices: weighted dishes per package vs price (least squares), then +10%.
  catRates() {
    const st = this.state;
    const setup = this.setupKey();
    const P = (this.PRICES[st.cuisine] || {})[setup] || [0, 0, 0, 0];
    const w = this.CAT_W, X = this.COMP.map((c) => c[0] * w[0] + c[1] * w[1] + c[2] * w[2] + c[3] * w[3]);
    const mx = X.reduce((a, b) => a + b, 0) / 4, my = P.reduce((a, b) => a + b, 0) / 4;
    let sxy = 0, sxx = 0;
    for (let k = 0; k < 4; k++) { sxy += (X[k] - mx) * (P[k] - my); sxx += (X[k] - mx) * (X[k] - mx); }
    const unit = sxy / sxx, base = Math.max(my - unit * mx, 0);
    const r = (v) => Math.round(Math.round(v * this.CUSTOM_MARKUP * 1e6) / 1e6 + 1e-9);
    return { base: r(base), starters: r(unit * w[0]), mains: r(unit * w[1]), staples: r(unit * w[2]), dessert: r(unit * w[3]) };
  }
  customPP(n) {
    const c = this.catRates();
    return c.base + n.starters * c.starters + n.mains * c.mains + n.staples * c.staples + n.dessert * c.dessert;
  }
  // What one package holds. Null when this setup is not in the menu sheet,
  // and the older per-tier Q is used instead.
  comp(tierIdx) {
    const st = this.state;
    const setup = this.setupKey();
    if (setup !== 'buffet' && setup !== 'both') return null;
    const byCu = (this.QB || {})[st.cuisine];
    return (byCu && byCu[tierIdx]) || null;
  }
  pkgVals() {
    const MIN = 2000;
    const st = this.state;
    const setup = this.setupKey();
    const popular = (this.props.popular ?? 2) - 1;
    const pax = st.pax;
    const pv = st.pureVeg;
    const fmt = (n) => n.toLocaleString('en-US');

    const PRICES = this.PRICES;
    const TIERS = [
      { st: '1 Veg · 2 Non Veg', stv: '3 Veg', mc: '1 Veg · 1 Non Veg', mcv: '2 Veg', rice: 'Rice / Noodles', bir: 'Biryani / Breads', ds: '1 selection' },
      { st: '2 Veg · 2 Non Veg', stv: '4 Veg', mc: '2 Veg · 2 Non Veg', mcv: '4 Veg', rice: 'Rice / Noodles', bir: 'Biryani / Breads', ds: '2 selections' },
      { st: '2 Veg · 3 Non Veg', stv: '5 Veg', mc: '2 Veg · 3 Non Veg', mcv: '5 Veg', rice: 'Rice + Noodles', bir: 'Biryani + Breads', ds: '2 selections' },
      { st: '3 Veg · 3 Non Veg', stv: '6 Veg', mc: '3 Veg · 3 Non Veg', mcv: '6 Veg', rice: 'Rice + Noodles', bir: 'Biryani + Breads', ds: '2 selections' }
    ];
    const CUISINES = [
      { id: 'ic', label: 'Indian & Chinese', grow: 1.7 },
      { id: 'in', label: 'Indian', grow: 1 },
      { id: 'ch', label: 'Chinese', grow: 1 }
    ].concat(setup === 'buffet' || setup === 'both'
      ? Object.keys(this.SET_MENUS || {}).map((k) => ({ id: k, label: this.SET_MENUS[k].label, grow: 1.2 }))
          .concat(Object.keys(this.PICK_MENUS || {}).map((k) => ({ id: k, label: this.PICK_MENUS[k].label, grow: 1.2 })))
      : []);
    const sm = this.setMenu(st.cuisine);
    const pm = this.pickMenu(st.cuisine);
    const prices = sm ? sm.packages.map((x) => x.price)
                 : pm ? pm.packages.map((x) => x.price)
                      : ((PRICES[st.cuisine] || {})[setup] || [0, 0, 0, 0]);
    const sel = (on) => ({
      border: on ? '#C9963B' : '#E4D9C2',
      shadow: on ? '0 6px 16px rgba(201,150,59,0.35)' : '0 1px 2px rgba(14,59,51,0.06)'
    });

    const saves = ((this.SAVE || {})[setup] || {})[st.cuisine] || [];
    // A set menu's cards are the menu itself: every section, every item, and
    // the minimum order that package carries.
    const setPkgs = sm ? sm.packages.map((pk, i) => {
      const on = st.pkg === i;
      return Object.assign({
        name: pk.name,
        price: pk.price,
        priceUnit: 'Dh + VAT / person',
        priceFont: '34px',
        onOffer: false, wasPrice: '', saveText: '',
        cardW: '238px', rowDisplay: 'flex', rowDir: 'row', rowGap: '10px', rowAlign: 'right',
        popular: false,
        on: on,
        pick: () => this.setState({ pkg: st.pkg === i ? null : i, consent: false, minWarn: false }),
        rows: pk.sections.map((sec) => ({
                 k: sec.title,
                 v: sec.items.length + (sec.items.length === 1 ? ' item' : ' items') }))
      }, sel(on));
    }) : null;

    // a pick menu's card says how many are chosen from each of its sections
    const pickPkgs = pm ? pm.packages.map((pk, i) => {
      const on = st.pkg === i;
      const rows = pk.sections.map((sec) => ({
        k: sec.title,
        v: 'Any ' + sec.need + ' of ' + sec.items.length
      }));
      if (pk.included && pk.included.length) {
        rows.push({ k: 'Included', v: pk.included.join(' · ') });
      }
      return Object.assign({
        name: pk.name, price: pk.price, priceUnit: 'Dh / person', priceFont: '34px',
        onOffer: false, wasPrice: '', saveText: '',
        cardW: '238px', rowDisplay: 'flex', rowDir: 'row', rowGap: '10px', rowAlign: 'right',
        popular: false, on: on,
        pick: () => this.setState({ pkg: st.pkg === i ? null : i, consent: false, minWarn: false, sel: {}, notes: {} }),
        rows: rows
      }, sel(on));
    }) : null;

    const pkgs = setPkgs || pickPkgs || TIERS.map((t, i) => {
      const on = st.pkg === i;
      const save = Math.max(0, parseInt(saves[i], 10) || 0);
      // the card lists whatever the picker is going to ask for, so the two
      // can never tell the customer different things
      const c = this.comp(i);
      const many = (n, word) => n + ' ' + word + (n === 1 ? '' : 's');
      const pair = (v, nv) => (pv ? many(v + nv, 'Veg dish') : v + ' Veg · ' + nv + ' Non Veg');
      let rows;
      if (c) {
        rows = [{ k: 'Starters', v: pair(c.sv, c.snv) },
                { k: 'Main course', v: pair(c.mv, c.mnv) }];
        if (c.dl) rows.push({ k: 'Daal', v: many(c.dl, 'selection') });
        rows.push({ k: 'Staples', v: c.stp != null ? 'Any ' + c.stp
                                                   : c.rc + ' Rice · ' + c.nd + ' Noodles' });
        rows.push({ k: 'Dessert', v: many(c.ds, 'selection') });
      } else {
        rows = [
          { k: 'Starters', v: pv ? t.stv : t.st },
          { k: 'Main course', v: pv ? t.mcv : t.mc },
          { k: 'Staples', v: t.rice + '\n' + t.bir },
          { k: 'Dessert', v: t.ds }
        ];
      }
      const shown = this.priced(setup);
      return Object.assign({
        name: 'Package ' + (i + 1),
        price: shown ? prices[i] : 'On request',
        priceUnit: shown ? 'Dh / person' : 'our team will quote',
        priceFont: shown ? '34px' : '19px',
        onOffer: shown && save > 0,
        wasPrice: save > 0 ? fmt(prices[i] + save) : '',
        saveText: save > 0 ? 'SAVE ' + save + ' Dh' : '',
        cardW: '238px', rowDisplay: 'flex', rowDir: 'row', rowGap: '10px', rowAlign: 'right',
        popular: i === popular,
        on: on,
        pick: () => this.setState({ pkg: st.pkg === i ? null : i, consent: false, minWarn: false }),
        rows: rows
      }, sel(on));
    });

    const isCustom = st.pkg === 'custom';
    const hasPkg = typeof st.pkg === 'number';
    const priced = (sm || pm) ? true : this.priced(setup);
    const price = hasPkg ? prices[st.pkg] : 0;
    const raw = price * pax;
    const smp = sm || pm;
    const minFor = (smp && hasPkg && smp.packages[st.pkg]) ? smp.packages[st.pkg].min : MIN;
    const belowMin = priced && hasPkg && raw < minFor;
    const applied = belowMin && st.consent;
    let totalText = '—', totalSub = 'Pick a package to see the price', totalColor = '#0E3B33';
    if (isCustom) { totalText = 'Custom menu'; totalSub = 'Base ' + this.catRates().base + ' Dh + price of each dish you pick'; }
    if (hasPkg) {
      totalText = priced ? fmt(applied ? minFor : raw) + ' Dh' + (sm ? ' + VAT' : '') : 'On request';
      totalSub = !priced ? 'Our team will confirm the price for this setup'
               : (applied ? 'Minimum applied (was ' + fmt(raw) + ' Dh)'
                          : pax + ' guests × ' + price + ' Dh' + (sm ? ' + VAT' : ''));
      if (belowMin && !st.consent) totalColor = st.minWarn ? '#B3261E' : '#8A3B12';
    }
    const ready = isCustom || hasPkg;

    return {
      picksDishes: !sm,
      offersCustom: !sm && !pm,
      cuisines: CUISINES.map((c) => {
        const on = st.cuisine === c.id;
        return {
          label: c.label, grow: c.grow, on: on,
          bg: on ? '#D3E7DE' : '#FFFFFF',
          color: '#0E3B33',
          border: on ? '#2F7A64' : '#DDD3BF',
          pick: () => this.setState({ cuisine: c.id, consent: false, minWarn: false })
        };
      }),
      pkgs: pkgs,
      custom: Object.assign({ on: isCustom, off: !isCustom, pick: () => this.setState({ pkg: isCustom ? null : 'custom', consent: false, minWarn: false }) }, sel(isCustom)),
      pax: pax,
      pkgCaption: sm ? 'Everything listed is included'
        : pm ? 'Tea & coffee included'
        : (pv ? 'Pure Veg menu · salads & sides incl.' : 'Salads & sides included'),
      belowMin: belowMin,
      needPax: hasPkg ? Math.ceil(minFor / price) : pax,
      bumpPax: () => this.setState({ pax: Math.ceil(minFor / price), consent: false, minWarn: false }),
      consent: st.consent,
      toggleConsent: () => this.setState({ consent: !this.state.consent }),
      totalText: totalText,
      totalSub: totalSub,
      totalColor: totalColor,
      ready: ready,
      // under the minimum and not yet accepted: short hint under the total, and the main button accepts it
      // under the minimum: one line under the total; it turns red if Save & Next is tapped
      minOpen: belowMin && !st.minWarn && !st.consent,
      totalSubShown: !belowMin || !!st.consent,
      minHint: hasPkg ? 'Min. ' + fmt(minFor) + ' Dh · Add ' + (Math.ceil(minFor / price) - pax) + (Math.ceil(minFor / price) - pax === 1 ? ' guest' : ' guests') : '',
      minHintColor: '#8A3B12',
      minWarnOn: false,
      // after Save & Next is refused: add guests, or tick to pay the minimum
      minRowShown: belowMin && !!st.minWarn,
      minPayLabel: "I'll pay the " + fmt(minFor) + ' Dh minimum',
      minAddLabel: hasPkg ? 'Add ' + (Math.ceil(minFor / price) - pax) + (Math.ceil(minFor / price) - pax === 1 ? ' guest' : ' guests') : '',
      notReady: !ready,
      btnOpacity: 1
    };
  }

  itemsVals() {
    const st = this.state;
    const cuisine = st.cuisine;
    const tier = st.pkg === 'custom' ? 'custom' : String((typeof st.pkg === 'number' ? st.pkg : 1) + 1);
    const isCustom = tier === 'custom';
    const Q = this.Q;
    const pv = st.pureVeg;
    const tierIdx = typeof st.pkg === 'number' ? st.pkg : 0;
    // the menu sheet's buffet packages where there is one, the older Q otherwise
    const q = isCustom ? null : (this.comp(tierIdx) || Q[tier]);
    const both = isCustom || tier === '3' || tier === '4';
    // Daal is its own choice only when a package asks for one. Where it does
    // not, the daals stay among the veg mains so they never drop off the menu.
    const wantDaal = !!(q && q.dl);
    const isDaal = (x) => x.cat === 'main' &&
      (x.sub === 'Daal' || /(^|\s)daa?l(\s|$)/i.test(x.name));
    const cuLabel = { ic: 'Indian & Chinese', in: 'Indian', ch: 'Chinese' }[cuisine];
    // a pick menu brings its own items and its own sections
    const pm = this.pickPool();
    const pool = pm ? pm.items
      : this.ITEMS.filter((x) => (cuisine === 'ic' || x.cu === cuisine) && !(pv && x.diet === 'nonveg'));

    const PICK_DEFS = {}, PICK_TABS = [];
    if (pm) {
      pm.pack.sections.forEach((sec, si) => {
        const key = 'sec' + si;
        PICK_TABS.push({ id: key, label: sec.title });
        PICK_DEFS[key] = [{ id: key, title: sec.title, short: sec.title,
                            match: (x) => x.cat === key, need: sec.need }];
      });
    }
    const DEFS = pm ? PICK_DEFS : {
      starters: [
        { id: 'sv', title: 'Veg Starters', short: 'Veg', match: (x) => x.cat === 'starter' && x.diet === 'veg', need: q && (pv ? q.sv + q.snv : q.sv) },
        { id: 'snv', title: 'Non-Veg Starters', short: 'Non-Veg', match: (x) => x.cat === 'starter' && x.diet === 'nonveg', need: q && q.snv }
      ],
      mains: [
        { id: 'mv', title: 'Veg Main Course', short: 'Veg', match: (x) => x.cat === 'main' && x.diet === 'veg' && !(wantDaal && isDaal(x)), need: q && (pv ? q.mv + q.mnv : q.mv) },
        { id: 'mnv', title: 'Non-Veg Main Course', short: 'Non-Veg', match: (x) => x.cat === 'main' && x.diet === 'nonveg', need: q && q.mnv }
      ].concat(wantDaal
        ? [{ id: 'dl', title: 'Daal', short: 'Daal', match: isDaal, need: q.dl }]
        : []),
      staples: (q && q.stp != null)
        ? [{ id: 'stp', short: 'Staples',
             title: cuisine === 'in' ? 'Rice, Biryani or Breads' : 'Rice, Noodles, Biryani or Breads',
             match: (x) => ['rice', 'noodle', 'biryani', 'bread'].indexOf(x.cat) !== -1, need: q.stp }]
        : (q && q.rc != null)
          ? [{ id: 'rc', short: 'Rice', title: 'Rice', match: (x) => x.cat === 'rice', need: q.rc },
             { id: 'nd', short: 'Noodles', title: 'Noodles', match: (x) => x.cat === 'noodle', need: q.nd }]
          : [
            { id: 'rn', short: 'Rice / Noodles', title: both ? 'Rice & Noodles' : 'Rice or Noodles', match: (x) => x.cat === 'rice' || x.cat === 'noodle', need: q && q.rn },
            { id: 'bb', short: 'Biryani / Breads', title: both ? 'Biryani & Breads' : 'Biryani or Breads', match: (x) => x.cat === 'biryani' || x.cat === 'bread', need: q && q.bb }
          ],
      dessert: [
        { id: 'ds', title: 'Desserts', match: (x) => x.cat === 'dessert', need: q && q.ds }
      ]
    };
    const TABS = pm ? PICK_TABS : [
      { id: 'starters', label: 'Starters' },
      { id: 'mains', label: 'Mains' },
      { id: 'staples', label: 'Staples' },
      { id: 'dessert', label: 'Dessert' }
    ];

    const TILE = { iBowl: '#EEE0C4', iDump: '#F3E6C9', iRoll: '#E4EBD5', iSkew: '#F3DCCB', iBread: '#F1E3C0', iSweet: '#F3DCE0', iCup: '#E7E3D2' };
    const iconOf = (x) => {
      // a pick menu's items are not dishes from the menu, so they are read by
      // name; a breakfast of identical bowls tells the customer nothing
      if (pm) {
        const n = x.name.toLowerCase();
        if (/juice|tea|coffee|lassi|buttermilk|cappuccino|espresso/.test(n)) return 'iCup';
        if (/bread|croissant|pastry|toast|bakery|paratha|puri|dosa|idli|roll/.test(n)) return 'iBread';
        if (/egg|bacon|sausage|meat|fish|tikka/.test(n)) return 'iSkew';
        if (/fruit|melon|pineapple|watermelon|jam|marmalade|honey|yoghurt|cereal|butter/.test(n)) return 'iSweet';
        return 'iBowl';
      }
      if (x.cat === 'dessert') return 'iSweet';
      if (x.cat === 'bread') return 'iBread';
      if (x.sub.indexOf('Dim sum') === 0 || x.sub.indexOf('Bao') === 0) return 'iDump';
      if (x.sub.indexOf('Sushi') === 0 || x.sub.indexOf('Kathi') === 0) return 'iRoll';
      if (x.sub.indexOf('Tandoor') === 0) return 'iSkew';
      return 'iBowl';
    };

    // Build every group of every tab, with counts
    const built = {};
    let totalNeed = 0, totalDone = 0, totalPicked = 0;
    TABS.forEach((tb) => {
      built[tb.id] = [];
      DEFS[tb.id].forEach((d) => {
        const gp = pool.filter(d.match);
        if (!gp.length) return; // nothing on the menu for this cuisine
        if (!isCustom && !d.need) return; // this package does not ask for any
        const count = gp.filter((x) => st.sel[x.id]).length;
        const need = isCustom ? null : Math.min(d.need, gp.length);
        built[tb.id].push({ def: d, items: gp, count: count, need: need });
      });
    });

    const curTab = (built[st.tab] ? st.tab : (TABS[0] ? TABS[0].id : st.tab));
    const tabInfo = TABS.map((tb) => {
      const gs = built[tb.id];
      const need = gs.reduce((a, g) => a + (g.need || 0), 0);
      const done = gs.reduce((a, g) => a + (isCustom ? g.count : Math.min(g.count, g.need)), 0);
      totalNeed += need; totalDone += done;
      const complete = !isCustom && need > 0 && done >= need;
      return { tb: tb, need: need, done: done, complete: complete };
    });
    Object.keys(built).forEach((k) => built[k].forEach((g) => { totalPicked += g.count; }));

    const tabs = tabInfo.map((t) => {
      const on = curTab === t.tb.id;
      return {
        label: t.tb.label, on: on,
        count: isCustom ? (t.done + ' picked') : (t.done + ' of ' + t.need),
        bg: on ? '#0E3B33' : '#FFFFFF',
        color: on ? '#FBF6EA' : '#0E3B33',
        subColor: on ? '#E9C77E' : (t.complete ? '#1F6B4E' : '#5A6863'),
        border: on ? '#0E3B33' : (t.complete ? '#2F7A64' : '#DDD3BF'),
        pick: () => { this._scrollTo = 'itemsTop'; this.setState({ tab: t.tb.id, sub: 0, note: '' }); }
      };
    });

    const showFilter = cuisine === 'ic';
    const filters = [['all', 'All'], ['in', 'Indian'], ['ch', 'Chinese']].map((f) => {
      const on = st.fcu === f[0];
      return {
        label: f[1], on: on,
        bg: on ? '#D3E7DE' : '#FFFFFF',
        border: on ? '#2F7A64' : '#DDD3BF',
        pick: () => this.setState({ fcu: f[0] })
      };
    });

    const tabGroups = built[curTab] || [];
    const subIdx = Math.min(st.sub || 0, Math.max(tabGroups.length - 1, 0));
    const showSubs = tabGroups.length > 1;
    const subs = tabGroups.map((g, i) => {
      const on = i === subIdx;
      const done = !isCustom && g.count >= g.need;
      return {
        label: g.def.short,
        count: isCustom ? (g.count + ' picked') : (g.count + ' of ' + g.need),
        on: on,
        bg: on ? '#D3E7DE' : '#FFFFFF',
        border: on ? '#2F7A64' : (done ? '#2F7A64' : '#DDD3BF'),
        countColor: done ? '#1F6B4E' : '#5A6863',
        done: done,
        segBg: on ? '#FFFFFF' : 'transparent',
        segShadow: on ? '0 1px 3px rgba(14,59,51,0.18)' : 'none',
        pick: () => { this._scrollTo = 'itemsTop'; this.setState({ sub: i, note: '' }); }
      };
    });
    const shownGroups = showSubs ? [tabGroups[subIdx]] : tabGroups;
    const objById = {};
    const groups = shownGroups.map((g) => {
      const full = !isCustom && g.count >= g.need;
      const filtered = g.items.filter((x) => cuisine !== 'ic' || st.fcu === 'all' || x.cu === st.fcu);
      // the same dish can sit on both cuisine lists (e.g. Steamed Rice): show it once
      const shownNames = {};
      const visible = filtered.filter((x) => (shownNames[x.name] ? false : (shownNames[x.name] = true)));
      return {
        showHeader: !showSubs,
        title: g.def.title,
        pillText: isCustom ? (g.count + ' picked') : (g.count + ' of ' + g.need + (full ? ' - Done' : '')),
        pillBg: full ? '#D3E7DE' : '#EADFC8',
        pillColor: '#0E3B33',
        items: visible.map((x) => {
          const on = !!st.sel[x.id];
          const locked = !on && full;
          const icon = iconOf(x);
          const o = {
            name: x.name,
            caption: [cuisine === 'ic' ? (x.cu === 'in' ? 'Indian' : 'Chinese') : '', (pv ? (x.note || '').replace('Veg / Chicken / Prawns', 'Veg') : x.note) || x.sub, (pv && !x.diet && x.cat !== 'dessert') ? 'made Veg' : ''].filter(Boolean).join(' · '),
            tile: TILE[icon],
            hasDiet: !!x.diet,
            dietColor: x.diet === 'veg' ? '#2E7D32' : '#A8461B',
            on: on,
            locked: locked,
            opacity: locked ? 0.45 : 1,
            border: on ? '#C9963B' : '#E4D9C2',
            shadow: on ? '0 6px 16px rgba(201,150,59,0.35)' : '0 1px 2px rgba(14,59,51,0.06)',
            pick: () => {
              const sel = Object.assign({}, this.state.sel);
              const adding = !sel[x.id];
              if (adding) sel[x.id] = true; else delete sel[x.id];
              const extra = { note: '', minWarn: false, custMinOk: false };
              if (!adding) { const nn = Object.assign({}, this.state.notes); delete nn[x.id]; extra.notes = nn; }
              this.setState(Object.assign({ sel: sel }, extra));
              // group just filled: after a short pause (so the tick is seen) move on to what still needs items
              if (isCustom || !adding || g.items.filter((y) => sel[y.id]).length < g.need) return;
              const open = (h) => h.items.filter((y) => sel[y.id]).length < h.need;
              let move = null;
              const idx = tabGroups.findIndex((h, i) => i !== subIdx && open(h));
              if (idx >= 0) {
                move = { sub: idx, note: g.def.short + ' done. Now choose ' + tabGroups[idx].need + ' ' + tabGroups[idx].def.short + '.' };
              } else {
                const here = TABS.findIndex((t) => t.id === curTab);
                const order = TABS.slice(here + 1).concat(TABS.slice(0, here));
                for (let k = 0; k < order.length && !move; k++) {
                  const gs = built[order[k].id];
                  const gi = gs.findIndex(open);
                  if (gi >= 0) move = { tab: order[k].id, sub: gi, note: TABS[here].label + ' done. Now choose ' + gs[gi].need + ' ' + gs[gi].def.title + '.' };
                }
                if (!move) move = { note: 'All dishes chosen. Tap Save & Next to continue.' };
              }
              clearTimeout(this._advanceTimer);
              this._advanceTimer = setTimeout(() => {
                if (this.state.screen !== 'items') return;
                // the dish may have been un-ticked during the pause: then stay put
                if (g.items.filter((y) => this.state.sel[y.id]).length < g.need) return;
                this._scrollTo = 'itemsTop';
                this.setState(move);
              }, 550);
            }
          };
          ['iBowl', 'iDump', 'iRoll', 'iSkew', 'iBread', 'iSweet', 'iCup'].forEach((k) => { o[k] = (k === icon); });
          // the owner's own photo first, then the one built into this page,
          // and the drawn icon when there is neither
          const byCourse = window.DISH_PHOTOS_BY_COURSE || {};
          const shot = byCourse[x.name + '|' + x.cat + '|' + (x.diet || '')] ||
                       byCourse[x.name + '|' + x.cat] ||
                       (window.DISH_PHOTOS || {})[x.name];
          o.photo = x.img || (shot ? 'images/web/' + shot + '.jpg' : '');
          o.hasPhoto = !!o.photo;
          o.noPhoto = !o.photo;
          o.zoom = () => this.setState({ zoom: x.id });
          const nt = (st.notes[x.id] || '').trim();
          o.hasNote = on && !!nt;
          o.noteText = nt;
          o.noteLabel = nt ? 'Edit note' : 'Add note';
          o.noteBg = nt ? '#F3D48F' : 'rgba(255,255,255,0.95)';
          o.openNote = () => this.setState({ noteFor: x.id, noteDraft: st.notes[x.id] || '' });
          objById[x.id] = o;
          return o;
        })
      };
    });

    const CHIPS = ['Extra spicy', 'Less spicy', 'Mild', 'No onion / garlic', 'Less oil', 'Extra gravy', 'Jain'];
    const nItem = st.noteFor ? this.ITEMS.find((y) => y.id === st.noteFor) : null;
    const draft = st.noteDraft || '';
    const noteChips = CHIPS.map((c) => {
      const has = draft.toLowerCase().indexOf(c.toLowerCase()) >= 0;
      return {
        label: c, on: has,
        bg: has ? '#D3E7DE' : '#FFFFFF', border: has ? '#2F7A64' : '#DDD3BF',
        pick: () => {
          const cur = this.state.noteDraft || '';
          const i = cur.toLowerCase().indexOf(c.toLowerCase());
          let next;
          if (i >= 0) next = (cur.slice(0, i) + cur.slice(i + c.length)).replace(/^[\s,]+|[\s,]+$/g, '').replace(/\s*,\s*,/g, ',');
          else next = cur.trim() ? cur.trim().replace(/[,\s]+$/, '') + ', ' + c : c;
          this.setState({ noteDraft: next });
        }
      };
    });
    const zo = st.zoom ? (objById[st.zoom] || null) : null;
    const zLabel = zo ? (zo.on ? 'Remove from my menu' : (zo.locked ? 'Limit reached for this group' : 'Add to my menu')) : '';
    const remaining = totalNeed - totalDone;
    const ready = isCustom ? totalPicked > 0 : remaining === 0;
    let hint, hintColor = '#5A6863';
    if (isCustom) {
      hint = totalPicked > 0 ? 'Add as many items as you like' : 'Pick the items you would like';
    } else if (ready) {
      hint = 'All items chosen - you are all set'; hintColor = '#1F6B4E';
    } else {
      hint = 'Choose ' + remaining + ' more item' + (remaining === 1 ? '' : 's') + ' to continue';
    }
    let custTotal = '', custSub = '', custPP = '', custSubColor = '#5A6863';
    let custBelowMin = false, custNeedPax = 0, custTotalColor = '#0E3B33';
    if (isCustom) {
      const fmt = (n) => n.toLocaleString('en-US');
      const pax = st.pax;
      if (!totalPicked) { custTotal = '-'; custPP = '-'; custSub = 'Pick dishes to see the approx. price'; }
      else {
        const pp = this.customPP({ starters: tabInfo[0].done, mains: tabInfo[1].done, staples: tabInfo[2].done, dessert: tabInfo[3].done });
        const raw = pp * pax;
        custPP = pp + ' Dh';
        custTotal = fmt(raw) + ' Dh';
        custSub = pax + ' guests × ' + pp + ' Dh · ' + totalPicked + ' dishes';
        if (raw < 2000) {
          custSub += ' — below the 2,000 Dh minimum'; custSubColor = '#8A5A00';
          custBelowMin = true; custNeedPax = Math.ceil(2000 / pp); custTotalColor = '#8A3B12';
        }
      }
    }
    return {
      context: (isCustom ? 'Custom menu' : 'Package ' + tier) + ' · ' + cuLabel + (pv ? ' · Pure Veg' : ''),
      tabs: tabs,
      showFilter: showFilter,
      filters: filters,
      fcu: st.fcu,
      setFilter: (e) => { this._scrollTo = 'itemsTop'; this.setState({ fcu: e.target.value }); },
      showToolRow: showFilter || showSubs,
      groups: groups,
      showSubs: showSubs,
      hasNote: !!st.note,
      note: st.note,
      subs: subs,
      hint: hint,
      hintColor: hintColor,
      progressText: isCustom ? (totalPicked + ' picked') : (totalDone + ' of ' + totalNeed),
      anyPicked: totalPicked > 0,
      clearAll: () => this.setState({ sel: {}, notes: {}, noteFor: null, minWarn: false, custMinOk: false }),
      pct: isCustom ? (totalPicked > 0 ? 100 : 0) : (totalNeed ? Math.round(100 * totalDone / totalNeed) : 0),
      showCustPrice: isCustom,
      showProgress: !isCustom,
      custHasPrice: isCustom && totalPicked > 0,
      custNoPrice: isCustom && !totalPicked,
      custBelowMin: custBelowMin,
      custTotalColor: custTotalColor,
      custWarnShown: isCustom && custBelowMin && !!st.minWarn,
      custWarnText: 'Total is below the 2,000 Dh minimum. Add guests or dishes.',
      custBumpLabel: 'Make it ' + custNeedPax + ' guests',
      custBump: () => this.setState({ pax: custNeedPax, minWarn: false, custMinOk: false }),
      custMinOk: !!st.custMinOk,
      toggleCustMin: () => this.setState({ custMinOk: !this.state.custMinOk }),
      noteOpen: !!nItem,
      noteItemName: nItem ? nItem.name : '',
      noteChips: noteChips,
      noteDraft: draft,
      noteHasSaved: !!(nItem && (st.notes[nItem.id] || '').trim()),
      setNoteDraft: (e) => this.setState({ noteDraft: String(e.target.value).slice(0, 200) }),
      saveNote: () => {
        const nn = Object.assign({}, this.state.notes); const v = (this.state.noteDraft || '').trim();
        if (v) nn[st.noteFor] = v; else delete nn[st.noteFor];
        this.setState({ notes: nn, noteFor: null, noteDraft: '' });
      },
      clearNote: () => { const nn = Object.assign({}, this.state.notes); delete nn[st.noteFor]; this.setState({ notes: nn, noteFor: null, noteDraft: '' }); },
      closeNote: () => this.setState({ noteFor: null, noteDraft: '' }),
      zoomOpen: !!zo,
      z: zo || { name: '', caption: '', tile: '#EEE0C4', hasDiet: false, dietColor: '#2E7D32', locked: false, hasPhoto: false, noPhoto: true, photo: '' },
      closeZoom: () => this.setState({ zoom: null }),
      zPick: () => { if (zo) { zo.pick(); this.setState({ zoom: null }); } },
      zBtnLabel: zLabel,
      zBtnBg: zo && zo.on ? '#FFFFFF' : '#0E3B33',
      zBtnColor: zo && zo.on ? '#0E3B33' : '#FBF6EA',
      zBtnOpacity: zo && zo.locked ? 0.45 : 1,
      showRate: isCustom,
      // only a custom menu is priced per dish, and a pick menu's tabs are its
      // own sections, which this never knew about
      rateText: (() => {
        if (!isCustom) return '';
        const c = this.catRates();
        const k = { starters: ['starter', c.starters], mains: ['main course dish', c.mains],
                    staples: ['staple', c.staples], dessert: ['dessert', c.dessert] }[st.tab];
        return k ? 'Each ' + k[0] + ' adds ' + k[1] + ' Dh / person' : '';
      })(),
      custTotal: custTotal,
      custPP: custPP,
      custSub: custSub,
      custSubColor: custSubColor,
      iNotReady: !ready,
      iBtnOpacity: ready ? 1 : 0.45
    };
  }

  // ---------- everything the theme, review and PDF screens need ----------
  summary() {
    const st = this.state;
    const MIN = 2000;
    const fmt = (n) => n.toLocaleString('en-US');
    const setup = this.setupKey();
    const sm = this.setMenu(st.cuisine);
    const pmenu = this.pickMenu(st.cuisine);
    const pp2 = this.pickPool();
    const P = sm ? sm.packages.map((x) => x.price)
              : pmenu ? pmenu.packages.map((x) => x.price)
                 : ((this.PRICES[st.cuisine] || {})[setup] || [0, 0, 0, 0]);
    const cuisine = sm ? sm.label : pmenu ? pmenu.label
                       : { ic: 'Indian & Chinese', in: 'Indian', ch: 'Chinese' }[st.cuisine];
    const isCustom = st.pkg === 'custom', hasPkg = typeof st.pkg === 'number';
    const g = { starters: [], mains: [], staples: [], dessert: [] };
    this.ITEMS.forEach((x) => {
      if (!st.sel[x.id]) return;
      const k = x.cat === 'starter' ? 'starters' : x.cat === 'main' ? 'mains' : x.cat === 'dessert' ? 'dessert' : 'staples';
      const note = (st.notes[x.id] || '').trim();
      g[k].push({ name: x.name, note: note, hasNote: !!note });
    });
    // a set menu's groups are the menu itself, not what was ticked
    const smPack = (sm && hasPkg) ? sm.packages[st.pkg] : null;
    let pickGroups = null;
    if (pp2) {
      pickGroups = pp2.pack.sections.map((sec, si) => ({
        title: sec.title,
        items: pp2.items.filter((x) => x.cat === 'sec' + si && st.sel[x.id])
                        .map((x) => ({ name: x.name, note: '', hasNote: false }))
      })).filter((g) => g.items.length)
        .map((g) => ({ title: g.title + ' (' + g.items.length + ')', items: g.items }));
      if (pp2.pack.included && pp2.pack.included.length) {
        pickGroups.push({ title: 'Included',
          items: pp2.pack.included.map((n) => ({ name: n, note: '', hasNote: false })) });
      }
    }
    const groups = pickGroups || (smPack
      ? smPack.sections.map((sec) => ({ title: sec.title + ' (' + sec.items.length + ')',
          items: sec.items.map((n) => ({ name: n, note: '', hasNote: false })) }))
      : [['Starters', g.starters], ['Main course', g.mains], ['Staples', g.staples], ['Dessert', g.dessert]].filter((a) => a[1].length).map((a) => ({ title: a[0] + ' (' + a[1].length + ')', items: a[1] })));
    const counterGroups = this.counterGroupsForQuote();
    const withCounters = groups.concat(counterGroups);
    let pp = 0;
    if (hasPkg) pp = P[st.pkg];
    else if (isCustom) pp = this.customPP({ starters: g.starters.length, mains: g.mains.length, staples: g.staples.length, dessert: g.dessert.length });
    const raw = pp * st.pax;
    const pkPack = pp2 ? pp2.pack : null;
    const noPkg = !this.offersPackages();
    const minFor = smPack ? smPack.min : (pkPack ? pkPack.min : MIN);
    const vat = sm ? ' + VAT' : '';
    const menuTotal = pp > 0 ? Math.max(raw, minFor) : 0;
    const th = this.THEMES.find((t) => t.id === st.theme) || null;
    const themePrice = th ? th.price : 0;
    const grand = menuTotal + themePrice;
    const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dateText = 'Not provided';
    const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(st.date || '');
    if (dm) dateText = parseInt(dm[3], 10) + ' ' + MON[parseInt(dm[2], 10) - 1] + ' ' + dm[1];
    const when = dateText + (st.time ? ', ' + st.time : '');
    return {
      ref: this.REF, fmt: fmt,
      name: (st.name || '').trim() || 'Not provided',
      contact: (st.phone || '').trim() ? st.cc + ' ' + st.phone.trim() : 'Not provided',
      emirate: st.emirate || 'Not selected',
      when: when, pax: String(st.pax), veg: st.pureVeg ? 'Yes' : 'No',
      typeLabel: st.type === 'delivery' ? 'Delivery' : (st.type === 'onsite' ? 'Onsite Catering' : 'Not selected'),
      layoutLabel: this.layoutLabelOf(st.layout) || 'Not selected',
      venueLabel: st.venue === 'indoor' ? 'Indoor' : (st.venue === 'outdoor' ? 'Outdoor' : 'Not selected'),
      isOnsite: st.type === 'onsite',
      isSetMenu: !!this.setMenu(st.cuisine),
      dishesLabel: this.setMenu(st.cuisine) ? 'What is included'
        : (this.offersPackages() ? 'Selected dishes' : 'What will be served'),
      canEditDishes: !this.setMenu(st.cuisine) && this.offersPackages(),
      picksDishes: !this.setMenu(st.cuisine),
      hasCounters: this.hasCounters(),
      hasPackages: this.offersPackages(),
      noPackages: !this.offersPackages(),
      countersText: this.pickedCounters().join(', ') || 'None chosen',
      pkgLabel: isCustom ? 'Custom menu'
        : ((smPack || pkPack) ? (smPack || pkPack).name
           : (hasPkg ? 'Package ' + (st.pkg + 1) : 'Not selected')),
      cuisine: cuisine + (st.pureVeg ? ' (Pure Veg)' : ''),
      ppText: pp > 0 ? pp + ' Dh' + vat : ((noPkg || !this.priced()) ? 'On request' : '-'),
      groups: withCounters,
      dishGroups: groups,
      counterGroups: counterGroups,
      counterIds: counterGroups.map((g) => g.id),
      themeLabel: th ? th.name + (th.price ? ' (+ ' + fmt(th.price) + ' Dh)' : ' (Free)') : 'No theme',
      notesText: (st.eventNote || '').trim() || 'None',
      menuRowLabel: pp > 0 ? 'Menu: ' + st.pax + ' guests x ' + pp + ' Dh' : 'Menu',
      menuRowValue: pp > 0 ? fmt(raw) + ' Dh' + vat : ((noPkg || !this.priced()) ? 'On request' : '-'),
      showMin: pp > 0 && raw < minFor,
      minValue: '+ ' + fmt(Math.max(minFor - raw, 0)) + ' Dh',
      themeRowLabel: th ? 'Theme: ' + th.name : 'Theme',
      themeRowValue: th ? (th.price ? '+ ' + fmt(th.price) + ' Dh' : 'Free') : 'None',
      grand: (noPkg && pp === 0) ? 'On request'
        : ((grand > 0 || this.priced()) ? fmt(grand) + ' Dh' + vat : 'On request'), grandNum: grand, menuTotal: menuTotal, themePrice: themePrice, th: th
    };
  }
  /* One page, on the printed border. `bg` is optional:
     { data: Uint8Array, w, h } holding a baseline JPEG, which a PDF carries
     as-is through /DCTDecode. It is laid over the whole sheet at low opacity,
     and every line of the order is placed inside the clear middle of it. */
  buildPdf(bg, counterShots, themeShot) {
    const S = this.summary();
    const W1 = [278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584], W2 = [278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 333, 584, 584, 584, 611, 975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333, 278, 333, 584, 556, 333, 556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889, 611, 611, 611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389, 280, 389, 584];
    const wOf = (t, size, bold) => { const tb = bold ? W2 : W1; let w = 0; for (let i = 0; i < t.length; i++) { const c = t.charCodeAt(i) - 32; w += (c >= 0 && c < 95 ? tb[c] : 556); } return w * size / 1000; };
    const clean = (t) => String(t == null ? '' : t).replace(/[·•]/g, '-').replace(/×/g, 'x').replace(/[–—]/g, '-').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[\r\t]/g, ' ').replace(/[^\x20-\x7E\n]/g, '');
    const esc = (t) => t.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

    const PW = 595, PH = 842;
    const IM = 66, CW = PW - 2 * IM;                 // stay inside the printed border
    const INK = '#0E3B33', GOLD = '#B9832B', SOFT = '#9A7D4A', DARK = '#1B2B27', PAPER = '#FBF6EA';

    const ops = [], ops2 = [];        // page one, and page two when the menu needs it
    const n2 = (v) => (Math.round(v * 100) / 100).toString();
    const col = (hex) => { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => (v / 255).toFixed(3)).join(' '); };
    const Y = (yTop) => PH - yTop;

    const text = (x, yb, t, size, bold, hex, into) => (into || ops).push('BT /' + (bold ? 'F2' : 'F1') + ' ' + size + ' Tf ' + col(hex) + ' rg ' + n2(x) + ' ' + n2(Y(yb)) + ' Td (' + esc(clean(t)) + ') Tj ET');
    const ctext = (cx, yb, t, size, bold, hex, into) => text(cx - wOf(clean(t), size, bold) / 2, yb, t, size, bold, hex, into);
    const rtext = (xr, yb, t, size, bold, hex, into) => text(xr - wOf(clean(t), size, bold), yb, t, size, bold, hex, into);
    const rule = (x1, yt, x2, hex, w, into) => (into || ops).push(col(hex) + ' RG ' + n2(w || 0.7) + ' w ' + n2(x1) + ' ' + n2(Y(yt)) + ' m ' + n2(x2) + ' ' + n2(Y(yt)) + ' l S');
    const dot = (cx, cy, r, hex, into) => {
      const k = 0.5523 * r, y = Y(cy);
      (into || ops).push(col(hex) + ' rg ' + n2(cx + r) + ' ' + n2(y) + ' m ' +
        n2(cx + r) + ' ' + n2(y + k) + ' ' + n2(cx + k) + ' ' + n2(y + r) + ' ' + n2(cx) + ' ' + n2(y + r) + ' c ' +
        n2(cx - k) + ' ' + n2(y + r) + ' ' + n2(cx - r) + ' ' + n2(y + k) + ' ' + n2(cx - r) + ' ' + n2(y) + ' c ' +
        n2(cx - r) + ' ' + n2(y - k) + ' ' + n2(cx - k) + ' ' + n2(y - r) + ' ' + n2(cx) + ' ' + n2(y - r) + ' c ' +
        n2(cx + k) + ' ' + n2(y - r) + ' ' + n2(cx + r) + ' ' + n2(y - k) + ' ' + n2(cx + r) + ' ' + n2(y) + ' c f');
    };
    const wrap = (t, maxW, size, bold, maxLines) => {
      const words = clean(t).split(' ');
      const lines = []; let line = '';
      words.forEach((w) => {
        const trial = line ? line + ' ' + w : w;
        if (wOf(trial, size, bold) <= maxW) line = trial;
        else { if (line) lines.push(line); line = w; }
      });
      if (line) lines.push(line);
      if (maxLines && lines.length > maxLines) {
        lines.length = maxLines;
        lines[maxLines - 1] = cut(lines[maxLines - 1] + ' ...', maxW, size, bold);
      }
      return lines;
    };
    const cut = (t, maxW, size, bold) => {
      t = clean(t);
      if (wOf(t, size, bold) <= maxW) return t;
      while (t.length > 1 && wOf(t + '..', size, bold) > maxW) t = t.slice(0, -1);
      return t.replace(/[\s-]+$/, '') + '..';
    };
    const rrect = (x, yTop, w, h, r, fillHex, strokeHex, lw) => {
      const yb = Y(yTop + h), k = 0.5523 * r;
      const parts = [
        n2(x + r) + ' ' + n2(yb) + ' m',
        n2(x + w - r) + ' ' + n2(yb) + ' l',
        n2(x + w - r + k) + ' ' + n2(yb) + ' ' + n2(x + w) + ' ' + n2(yb + r - k) + ' ' + n2(x + w) + ' ' + n2(yb + r) + ' c',
        n2(x + w) + ' ' + n2(yb + h - r) + ' l',
        n2(x + w) + ' ' + n2(yb + h - r + k) + ' ' + n2(x + w - r + k) + ' ' + n2(yb + h) + ' ' + n2(x + w - r) + ' ' + n2(yb + h) + ' c',
        n2(x + r) + ' ' + n2(yb + h) + ' l',
        n2(x + r - k) + ' ' + n2(yb + h) + ' ' + n2(x) + ' ' + n2(yb + h - r + k) + ' ' + n2(x) + ' ' + n2(yb + h - r) + ' c',
        n2(x) + ' ' + n2(yb + r) + ' l',
        n2(x) + ' ' + n2(yb + r - k) + ' ' + n2(x + r - k) + ' ' + n2(yb) + ' ' + n2(x + r) + ' ' + n2(yb) + ' c'
      ].join(' ');
      let op = '';
      if (fillHex) op += col(fillHex) + ' rg ';
      if (strokeHex) op += col(strokeHex) + ' RG ' + n2(lw || 0.8) + ' w ';
      ops.push(op + parts + ' ' + (fillHex && strokeHex ? 'B' : fillHex ? 'f' : 'S'));
    };
    // Helvetica has no small caps, so space the letters out by hand
    const spaced = (t) => clean(t).toUpperCase().split('').join(' ');

    /* ---------------- page one ----------------

       The theme the customer chose carries the top of the sheet, full bleed,
       with the title over it. A dark scrim sits between the photograph and the
       type so the type reads whatever the photograph happens to be doing. When
       there is no theme photograph the green band stands in. */
    ops.push(col(PAPER) + ' rg 0 0 ' + PW + ' ' + PH + ' re f');

    const HERO = 318;
    const placed = [];
    const photo = (im, x, yTop, w, h, into) => {
      const name = 'Im' + placed.length;
      placed.push({ name: name, img: im });
      const s2 = Math.max(w / im.w, h / im.h);
      const dw = im.w * s2, dh = im.h * s2;
      const dx = x - (dw - w) / 2, dy = Y(yTop + h) - (dh - h) / 2;
      (into || ops).push('q ' + n2(x) + ' ' + n2(Y(yTop + h)) + ' ' + n2(w) + ' ' + n2(h) + ' re W n ' +
        n2(dw) + ' 0 0 ' + n2(dh) + ' ' + n2(dx) + ' ' + n2(dy) + ' cm /' + name + ' Do Q');
    };

    if (themeShot) {
      photo(themeShot, 0, 0, PW, HERO);
      // the scrim: solid at the foot of the hero, so the wordmark sits on ink
      ops.push('q /GSdim gs ' + col('#07211C') + ' rg 0 ' + n2(Y(HERO)) + ' ' + PW + ' ' + HERO + ' re f Q');
    } else {
      ops.push(col(INK) + ' rg 0 ' + n2(Y(HERO)) + ' ' + PW + ' ' + HERO + ' re f');
    }
    // a gold hairline along the bottom edge of the hero
    ops.push(col(GOLD) + ' RG 1.4 w 0 ' + n2(Y(HERO)) + ' m ' + PW + ' ' + n2(Y(HERO)) + ' l S');

    let y = 118;
    ctext(PW / 2, y, spaced('Dragon Empire'), 9, true, GOLD);
    y += 46;
    ctext(PW / 2, y, 'Build your Menu!', 36, true, PAPER);
    y += 20;
    const rw = 70;
    rule(PW / 2 - rw - 18, y, PW / 2 - 11, GOLD, 1);
    rule(PW / 2 + 11, y, PW / 2 + rw + 18, GOLD, 1);
    dot(PW / 2, y - 2.6, 2.6, GOLD);
    y += 22;
    ctext(PW / 2, y, spaced(S.th ? S.th.name : 'Catering Order'), 8, true, '#CFE0D8');

    // the order number on a chip across the hero's edge
    const chipW = 208, chipH = 42, chipX = (PW - chipW) / 2, chipY = HERO - chipH / 2;
    rrect(chipX, chipY, chipW, chipH, 21, PAPER, GOLD, 1.2);
    ctext(PW / 2, chipY + 27, S.ref, 17, true, INK);

    /* ---------------- the event ---------------- */
    y = HERO + 62;
    text(IM, y, spaced('The Event'), 7, true, GOLD);
    rule(IM + wOf(spaced('The Event'), 7, true) + 12, y - 3, PW - IM, '#E0CFA8', 0.7);
    y += 22;
    const pairs = [
      ['Guest', S.name], ['Contact', S.contact],
      ['Date & time', S.when], ['Guests', S.pax + (S.veg === 'Yes' ? ' - pure veg' : '')],
      ['Service', S.isOnsite ? S.typeLabel + ', ' + S.layoutLabel : S.typeLabel],
      ['Venue', S.isOnsite ? S.venueLabel : S.emirate]
    ];
    const half = CW / 2;
    pairs.forEach((p, i) => {
      const x = IM + (i % 2) * half;
      const ry = y + Math.floor(i / 2) * 34;
      text(x, ry, spaced(p[0]), 6.5, true, SOFT);
      text(x, ry + 14, cut(p[1], half - 26, 11, true), 11, true, DARK);
    });
    y += Math.ceil(pairs.length / 2) * 34 + 20;

    /* ---------------- what they are having ---------------- */
    text(IM, y, spaced('Your Selection'), 7, true, GOLD);
    rule(IM + wOf(spaced('Your Selection'), 7, true) + 12, y - 3, PW - IM, '#E0CFA8', 0.7);
    y += 24;

    const selRows = [];
    if (S.pkgLabel && S.pkgLabel !== 'Not selected') selRows.push([S.pkgLabel, S.cuisine]);
    if (S.hasCounters) selRows.push(['Live stations', S.countersText]);
    selRows.forEach((r) => {
      text(IM, y, cut(r[0], CW * 0.42, 13, true), 13, true, DARK);
      text(IM + CW * 0.44, y, cut(r[1], CW * 0.56, 10, false), 10, false, SOFT);
      y += 22;
    });
    if (S.ppText && S.ppText !== '-') {
      text(IM, y, cut('Per person  ' + S.ppText, CW, 10, false), 10, false, SOFT);
      y += 22;
    }

    /* ---------------- money ---------------- */
    const nRows = 2 + (S.showMin ? 1 : 0);
    const hasNote = !!(S.notesText && S.notesText !== 'None');
    const FOOT = PH - 54;
    const panelH = 26 + nRows * 16 + (hasNote ? 16 : 0) + 44;
    const panelTop = FOOT - 30 - panelH;

    rrect(IM, panelTop, CW, panelH, 14, '#F4EDDC', '#E0CFA8', 0.9);
    let ty = panelTop + 26;
    const lineRow = (label, value) => {
      text(IM + 20, ty, label, 9.5, false, SOFT);
      rtext(PW - IM - 20, ty, value, 9.5, false, DARK);
      ty += 16;
    };
    lineRow(S.menuRowLabel, S.menuRowValue);
    if (S.showMin) lineRow('Minimum order top-up', S.minValue);
    lineRow(S.themeRowLabel, S.themeRowValue);
    if (hasNote) { text(IM + 20, ty, 'Note: ' + cut(S.notesText, CW - 60, 8.5, false), 8.5, false, SOFT); ty += 16; }
    rule(IM + 20, ty - 4, PW - IM - 20, '#DCC89C', 0.8);
    ty += 28;
    text(IM + 20, ty - 6, spaced('Approx. total'), 9, true, GOLD);
    rtext(PW - IM - 20, ty, S.grand, 25, true, INK);

    ctext(PW / 2, FOOT - 10, 'Approximate price. Final quote is confirmed by our team after review.', 7.5, false, SOFT);
    ctext(PW / 2, FOOT + 4, 'Dragon Empire Catering  -  order.dubaicateringservice.com', 7.5, true, SOFT);

    /* ---------------- page two ----------------

       The food, on its own sheet. Courses first, then the live stations as
       their own section with each counter's photograph beside what it serves -
       an order can have both, and flattening the counters in among the courses
       made a buffet look like it came with a Mocktail Bar course. */
    const dishG = S.dishGroups || [];
    const ctrG = S.counterGroups || [];
    const ctrIds = S.counterIds || [];

    ops2.push(col(PAPER) + ' rg 0 0 ' + PW + ' ' + PH + ' re f');
    ops2.push(col(INK) + ' rg 0 ' + n2(Y(104)) + ' ' + PW + ' 104 re f');
    ctext(PW / 2, 42, spaced('Dragon Empire'), 8, true, GOLD, ops2);
    ctext(PW / 2, 72, 'Your Menu', 25, true, PAPER, ops2);
    ops2.push(col(GOLD) + ' RG 1.2 w 0 ' + n2(Y(104)) + ' m ' + PW + ' ' + n2(Y(104)) + ' l S');
    // a live-stations order has no package, so do not announce one that is not there
    const sub2 = (S.pkgLabel && S.pkgLabel !== 'Not selected')
      ? S.ref + '   ' + S.pkgLabel + '  -  ' + S.cuisine
      : S.ref + '   Live stations';
    ctext(PW / 2, 128, sub2, 9, true, SOFT, ops2);

    let y2 = 164;

    /* --- the courses --- */
    const FOOT2 = PH - 54;
    // with no courses above them the stations carry the page on their own,
    // so they get a bigger photograph and a taller row
    const bigStn = !dishG.length;
    const STNW = bigStn ? 112 : 62;
    const stnLines = (g) => wrap(g.items.map((it) => it.name).join('  -  '), PW - IM - (IM + STNW + 14), 8.5, false, 3);
    const stnH = (g) => Math.max(bigStn ? 76 : 46, 22 + stnLines(g).length * 11);
    const ctrH = ctrG.length ? 34 + ctrG.reduce((a, g) => a + stnH(g) + 10, 0) : 0;
    const roomCourses = FOOT2 - 30 - ctrH - y2;

    const measure = (list, ncol, lead) => {
      let h = 0;
      list.forEach((g) => { h += 26 + Math.ceil(g.items.length / ncol) * lead; });
      return h;
    };
    const ladder = [[2, 21, 12], [2, 19, 11.5], [2, 17, 11], [2, 15.5, 10.5], [2, 14, 10],
                    [2, 12.8, 9.5], [3, 13, 9], [3, 11.5, 8.5], [3, 10, 8]];
    let fit = ladder[ladder.length - 1];
    for (let i = 0; i < ladder.length; i++) {
      if (measure(dishG, ladder[i][0], ladder[i][1]) <= roomCourses) { fit = ladder[i]; break; }
    }
    const NCOL = fit[0], LEAD = fit[1], SIZE = fit[2];
    const colW = (CW - (NCOL - 1) * 20) / NCOL;
    const units = Math.max(dishG.length + ctrG.length, 1);
    const spare = (FOOT2 - 30 - y2) - measure(dishG, NCOL, LEAD) - ctrH;
    const slack = Math.max(0, Math.min(spare / units, 52));

    dishG.forEach((g) => {
      y2 += 20 + slack;
      const head = spaced(g.title.replace(/\s*\(\d+\)$/, ''));
      const hw = wOf(clean(head), 7.5, true);
      dot(IM + 2, y2 - 2.8, 2, GOLD, ops2);
      text(IM + 9, y2, head, 7.5, true, GOLD, ops2);
      rule(IM + 9 + hw + 12, y2 - 2.8, PW - IM, '#E6D8B8', 0.6, ops2);
      y2 += 8;
      g.items.forEach((it, i) => {
        const c = i % NCOL, r = Math.floor(i / NCOL);
        const x = IM + c * (colW + 20), ly = y2 + r * LEAD + LEAD - 4;
        dot(x + 2.2, ly - SIZE * 0.29, 1.5, '#CBA85F', ops2);
        text(x + 10, ly, cut(it.name + (it.hasNote ? '  (' + it.note + ')' : ''), colW - 14, SIZE, false), SIZE, false, DARK, ops2);
      });
      y2 += Math.ceil(g.items.length / NCOL) * LEAD;
    });

    /* --- the live stations --- */
    if (ctrG.length) {
      y2 += dishG.length ? 34 : 10;
      const head = spaced('Live Stations');
      dot(IM + 2, y2 - 2.8, 2, GOLD, ops2);
      text(IM + 9, y2, head, 7.5, true, GOLD, ops2);
      rule(IM + 9 + wOf(clean(head), 7.5, true) + 12, y2 - 2.8, PW - IM, '#E6D8B8', 0.6, ops2);
      y2 += 14;

      ctrG.forEach((g, k) => {
        const px = IM, pw2 = STNW, twx = PW - IM - (px + pw2 + 14);
        const lines = stnLines(g);
        const rowH = stnH(g);
        const shot = (counterShots || {})[ctrIds[k]];
        if (shot) photo(shot, px, y2, pw2, rowH, ops2);
        else ops2.push(col('#F0E7D2') + ' rg ' + n2(px) + ' ' + n2(Y(y2 + rowH)) + ' ' + n2(pw2) + ' ' + n2(rowH) + ' re f');
        ops2.push(col('#E0CFA8') + ' RG 0.6 w ' + n2(px) + ' ' + n2(Y(y2 + rowH)) + ' ' + n2(pw2) + ' ' + n2(rowH) + ' re S');

        const tx = px + pw2 + 14;
        text(tx, y2 + 13, cut(g.title.replace(/\s*\(\d+\)$/, ''), twx, 11, true), 11, true, DARK, ops2);
        if (lines.length && lines[0]) lines.forEach((ln, li) => text(tx, y2 + 27 + li * 11, ln, 8.5, false, SOFT, ops2));
        else text(tx, y2 + 27, 'Served live at the station', 8.5, false, SOFT, ops2);
        y2 += rowH + 10 + slack;
      });
    }

    ctext(PW / 2, FOOT2 + 4, 'Dragon Empire Catering  -  order.dubaicateringservice.com', 7.5, true, SOFT, ops2);

    /* ---------------- assemble ----------------
       Any number of photographs can be placed on the page, so the objects are
       numbered as they are written rather than counted out by hand. */
    const bodies = [ops.join('\n'), ops2.join('\n')];
    const body = bodies[0];
    let out = '%PDF-1.4\n'; const offs = [];
    const add = (b) => { offs.push(out.length); out += offs.length + ' 0 obj\n' + b + '\nendobj\n'; return offs.length; };

    const CAT = add('<< /Type /Catalog /Pages 2 0 R >>');          // 1
    add('<< /Type /Pages /Kids [PAGEREF] /Count ' + bodies.length + ' >>');   // 2, patched below
    const F1 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
    const F2 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
    const GS = add('<< /Type /ExtGState /ca ' + (this.PDF_BG_ALPHA || 0.5) + ' >>');
    const GSD = add('<< /Type /ExtGState /ca 0.46 >>');

    const bin = (u8) => {
      let s = '';
      for (let i = 0; i < u8.length; i += 8192) s += String.fromCharCode.apply(null, u8.subarray ? u8.subarray(i, i + 8192) : u8.slice(i, i + 8192));
      return s;
    };
    const imgObj = (im) => add('<< /Type /XObject /Subtype /Image /Width ' + im.w + ' /Height ' + im.h +
      ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + im.data.length +
      ' >>\nstream\n' + bin(im.data) + '\nendstream');

    const xobj = [];
    if (bg) xobj.push('/Bg ' + imgObj(bg) + ' 0 R');
    placed.forEach((p) => { xobj.push('/' + p.name + ' ' + imgObj(p.img) + ' 0 R'); });

    const pageRefs = bodies.map((bd) => {
      const c = add('<< /Length ' + bd.length + ' >>\nstream\n' + bd + '\nendstream');
      return add('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + PW + ' ' + PH + ']' +
        ' /Resources << /Font << /F1 ' + F1 + ' 0 R /F2 ' + F2 + ' 0 R >>' +
        ' /ExtGState << /GSbg ' + GS + ' 0 R /GSdim ' + GSD + ' 0 R >>' +
        (xobj.length ? ' /XObject << ' + xobj.join(' ') + ' >>' : '') +
        ' >> /Contents ' + c + ' 0 R >>');
    });

    // object 2 had to be written before the page's number was known
    const before = out.length;
    out = out.replace('/Kids [PAGEREF]', '/Kids [' + pageRefs.map((n) => n + ' 0 R').join(' ') + ']');
    const shift = out.length - before;
    for (let i = 2; i < offs.length; i++) offs[i] += shift;

    const xr = out.length;
    out += 'xref\n0 ' + (offs.length + 1) + '\n0000000000 65535 f \n' + offs.map((o) => String(o).padStart(10, '0') + ' 00000 n \n').join('');
    out += 'trailer\n<< /Size ' + (offs.length + 1) + ' /Root ' + CAT + ' 0 R >>\nstartxref\n' + xr + '\n%%EOF';
    const u8 = new Uint8Array(out.length);
    for (let i = 0; i < out.length; i++) u8[i] = out.charCodeAt(i) & 255;
    return new Blob([u8], { type: 'application/pdf' });
  }
  /* Swap in the menu held in the database. Called once at start-up by menu.js;
     if it is never called, the copy built into this page is used instead. */
  applyMenu(items, config) {
    if (Array.isArray(items) && items.length > 20) {
      this.ITEMS = items.map(function (r) {
        return { name: r.name, note: r.note || '', cu: r.cu, cat: r.cat,
                 diet: r.diet || null, sub: r.sub || '', img: r.img || '' };
      });
      this.ITEMS.forEach((x, i) => { x.id = 'i' + i; });
    }
    if (config) {
      if (config.PRICES) {
        // The saved config can be older than this page and not carry every
        // setup. Merging keeps a column the config has never heard of, which
        // would otherwise go missing the moment a customer chose it.
        const merged = {};
        Object.keys(this.PRICES).forEach((cu) => {
          merged[cu] = Object.assign({}, this.PRICES[cu], config.PRICES[cu] || {});
        });
        Object.keys(config.PRICES).forEach((cu) => {
          if (!merged[cu]) merged[cu] = config.PRICES[cu];
        });
        this.PRICES = merged;
      }
      if (config.Q) this.Q = config.Q;
      if (Array.isArray(config.THEMES) && config.THEMES.length) this.THEMES = config.THEMES;
      if (Array.isArray(config.CAT_W)) this.CAT_W = config.CAT_W;
      if (Array.isArray(config.COMP)) this.COMP = config.COMP;
      if (typeof config.CUSTOM_MARKUP === 'number') this.CUSTOM_MARKUP = config.CUSTOM_MARKUP;
      if (config.SAVE) this.SAVE = config.SAVE;
      if (config.QB) this.QB = config.QB;
      if (config.COUNTER_IMG) this.COUNTER_IMG = config.COUNTER_IMG;
      if (config.THEME_IMG) this.THEME_IMG = config.THEME_IMG;
      if (Array.isArray(config.TERMS) && config.TERMS.length) this.TERMS = config.TERMS;
    }
    // dish ids are positions, so anything picked before the swap no longer means the same thing
    this.setState({ sel: {}, notes: {} });
  }
  // The order number comes from the database, so the run is unbroken and no two
  // customers can be given the same one. Asking twice returns the same number.
  async ensureRef() {
    if (/^CO-/.test(this.REF)) return this.REF;
    const cfg = window.BYM_CONFIG || {};
    const sid = window.BYM_SESSION;
    if (!cfg.tracking || !cfg.supabaseUrl || !cfg.anonKey || !sid) return this.REF;
    try {
      const res = await fetch(cfg.supabaseUrl + '/rest/v1/rpc/assign_order_ref', {
        method: 'POST',
        headers: {
          apikey: cfg.anonKey,
          Authorization: 'Bearer ' + cfg.anonKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ p_session: sid })
      });
      if (res.ok) {
        const v = await res.json();
        if (typeof v === 'string' && v) this.REF = v;
      }
    } catch (e) { /* offline: keep the local number rather than block the order */ }
    return this.REF;
  }
  /* A JPEG's size lives in its start-of-frame marker, and a PDF has to be
     told it, so it is read out here rather than guessed. */
  static jpegSize(b) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xFF) { i++; continue; }
      const m = b[i + 1];
      if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) {
        return { h: (b[i + 5] << 8) | b[i + 6], w: (b[i + 7] << 8) | b[i + 8] };
      }
      i += 2 + ((b[i + 2] << 8) | b[i + 3]);
    }
    return null;
  }
  async loadJpeg(url) {
    try {
      const r = await fetch((this.PDF_BASE || '') + url);
      if (!r.ok) return null;
      const b = new Uint8Array(await r.arrayBuffer());
      const s = Component.jpegSize(b);
      return s ? { data: b, w: s.w, h: s.h } : null;
    } catch (e) { return null; }
  }
  // the theme photograph and a photograph for every counter on the order
  async pdfShots() {
    const st = this.state;
    const out = { theme: null, counters: {} };
    const jobs = [];
    if (st.theme) jobs.push(this.loadJpeg('images/themes/' + st.theme + '-1.jpg')
      .then((im) => { out.theme = im; }));
    (this.COUNTERS || []).forEach((g) => g.items.forEach((c) => {
      if ((st.counters || {})[c.id]) {
        jobs.push(this.loadJpeg('images/counters/' + c.id + '.jpg')
          .then((im) => { if (im) out.counters[c.id] = im; }));
      }
    }));
    try { await Promise.all(jobs); } catch (e) {}
    return out;
  }
  async downloadPdf() {
    if (!this.state.terms) {
      this._scrollTo = 'terms';
      this.setState({ termsWarn: true, pdfMsg: '' });
      return;
    }
    this.setState({ pdfMsg: 'Confirming and preparing your PDF...' });
    await this.ensureRef();                 // must happen before the PDF is drawn
    const filename = 'Catering-Order-' + this.REF + '.pdf';
    let blob;
    const shots = await this.pdfShots();
    try { blob = this.buildPdf(null, shots.counters, shots.theme); }
    catch (e) { this.setState({ pdfMsg: 'Could not create the PDF. Please try again.' }); return; }
    let dl = null;
    try { dl = (window.claude && window.claude.use) ? await window.claude.use('downloads') : null; } catch (e) { dl = null; }
    try {
      if (dl) {
        await dl.save({ filename: filename, data: blob });
        this.setState({ screen: 'thanks', pdfMsg: '' });
      } else {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = filename;
        document.body.appendChild(a); a.click(); a.remove();
        this.setState({ screen: 'thanks', pdfMsg: '' });
      }
    } catch (e) {
      this.setState({ pdfMsg: (e && e.code === 'declined') ? 'Not confirmed yet - download was cancelled' : 'Download was blocked here. Please open the link in your browser and try again.' });
    }
  }
  didRender() {
    const target = this._scrollTo;
    if (!target) return;
    this._scrollTo = null;
    const calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (target === 'itemsTop') {
      const list = document.querySelector('[data-anchor="items-list"]');
      if (list) list.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' });
      return;
    }
    const el = document.querySelector('[data-anchor="' + target + '"]');
    if (!el) return;
    el.scrollIntoView({ block: 'nearest', behavior: calm ? 'auto' : 'smooth' });
  }
  // which column of PRICES this setup is quoted from
  setupKey() {
    const st = this.state;
    if (st.type === 'delivery') return 'delivery';
    if (st.layout === 'live') return 'live';
    if (st.layout === 'both') return 'both';
    return 'buffet';
  }
  // a price column with nothing in it yet means "we will quote you"
  priced(setup) {
    const col = (this.PRICES[this.state.cuisine] || {})[setup || this.setupKey()];
    return !!(col && col.length && col.some((v) => +v > 0));
  }
  // A photograph of this counter, when the owner has put one in the panel.
  // Anything missing just falls back to the drawing, so the page is never bare.
  counterPhoto(id) {
    const u = (this.COUNTER_IMG || {})[id];
    if (u) return 'url("' + String(u).replace(/"/g, '%22') + '")';
    return (this.COUNTER_SHOT || []).indexOf(id) !== -1
      ? 'url("images/counters/' + id + '.jpg")' : '';
  }
  // One of a theme's three photographs, as a CSS background value.
  themePhoto(id, n) {
    const key = id + '-' + (n || 1);
    const u = (this.THEME_IMG || {})[key];
    if (u) return 'url("' + String(u).replace(/"/g, '%22') + '")';
    return (this.THEME_SHOT || []).indexOf(id) !== -1
      ? 'url("images/themes/' + key + '.jpg")' : '';
  }
  /* A little illustration for every counter, in the same flat style as the
     setup cards. They are drawn here rather than in the template because
     sixteen scenes written out per card would be a very large page; built as
     a data URI, each one is just a background image on a tile. */
  counterArt(id, bg) {
    const top = '<rect y="72" width="160" height="28" fill="#0E3B33"/>' +
                '<rect y="68" width="160" height="5" fill="#C9963B"/>';
    const steam = (a, b, c) => '<path d="M' + a + ' 34q-3-7 0-12M' + b + ' 31q-3-7 0-12M' +
                               c + ' 34q-3-7 0-12" stroke="#C9B98F" stroke-width="2.2" fill="none" stroke-linecap="round"/>';
    const BODY = {
      bbq: '<rect x="46" y="40" width="68" height="28" rx="5" fill="#1B2B27"/>' +
           '<path d="M50 47h60M50 54h60M50 61h60" stroke="#6E7673" stroke-width="2.2" stroke-linecap="round"/>' +
           '<path d="M72 38q-5-9 2-16q1 7 5 9q1-6 5-8q0 8 4 11q-2 7-9 7z" fill="#E0752B"/>' +
           '<path d="M78 38q-3-5 1-9q1 4 3 5q0-3 2-4q0 5 2 6q-1 4-5 4z" fill="#F4C25B"/>',
      shawarma: '<rect x="77" y="14" width="5" height="54" fill="#8A928D"/>' +
                '<path d="M79.5 22q16 3 16 22t-16 24q-16-5-16-24t16-22z" fill="#B5652B"/>' +
                '<path d="M79.5 30q10 2 10 15t-10 17q-10-4-10-17t10-15z" fill="#D9A441"/>' +
                '<path d="M104 44h16l-4 10h-12z" fill="#FBF6EA" stroke="#C9B98F" stroke-width="1.5"/>',
      tandoor: '<path d="M56 68V46a24 15 0 0 1 48 0v22z" fill="#B5652B"/>' +
               '<ellipse cx="80" cy="46" rx="24" ry="9" fill="#7A3F1C"/>' +
               '<path d="M80 62q-8-7-3-15q1 5 5 6q1-5 4-6q0 6 4 8q0 6-10 7z" fill="#E0752B"/>' +
               '<path d="M118 50a13 10 0 0 1 26 0z" fill="#E9C77E" stroke="#C9963B" stroke-width="1.5"/>',
      tawa: '<ellipse cx="80" cy="60" rx="36" ry="9" fill="#3A3A3A"/>' +
            '<path d="M46 60a34 14 0 0 1 68 0z" fill="#5A5A5A"/>' +
            '<path d="M60 56a20 9 0 0 1 40 0z" fill="#D9A441"/>' + steam(66, 80, 94),
      sizzler: '<ellipse cx="80" cy="60" rx="38" ry="12" fill="#7A5A34"/>' +
               '<ellipse cx="80" cy="56" rx="30" ry="10" fill="#2B2B2B"/>' +
               '<ellipse cx="74" cy="54" rx="8" ry="4" fill="#B5652B"/>' +
               '<ellipse cx="90" cy="56" rx="7" ry="3.5" fill="#6E9B4A"/>' + steam(64, 80, 96),
      chaat: '<path d="M48 48h64a32 21 0 0 1-64 0z" fill="#FBF6EA" stroke="#C9B98F" stroke-width="2"/>' +
             '<path d="M56 44q24-13 48 0" stroke="#E0752B" stroke-width="3" fill="none" stroke-linecap="round"/>' +
             '<circle cx="66" cy="43" r="3.4" fill="#6E9B4A"/><circle cx="80" cy="40" r="3.4" fill="#B3261E"/>' +
             '<circle cx="94" cy="43" r="3.4" fill="#D9A441"/>' +
             '<path d="M112 40l10 22" stroke="#C9963B" stroke-width="3" stroke-linecap="round"/>',
      chole: '<path d="M38 46h44a22 17 0 0 1-44 0z" fill="#8A4A22"/>' +
             '<ellipse cx="60" cy="46" rx="22" ry="4.5" fill="#B5652B"/>' +
             '<circle cx="54" cy="44" r="2.6" fill="#D9A441"/><circle cx="64" cy="43" r="2.6" fill="#D9A441"/>' +
             '<circle cx="112" cy="50" r="19" fill="#E9C77E" stroke="#C9963B" stroke-width="2.5"/>' +
             '<circle cx="106" cy="45" r="1.8" fill="#B5652B"/><circle cx="117" cy="53" r="1.8" fill="#B5652B"/>' +
             '<circle cx="110" cy="56" r="1.8" fill="#B5652B"/>',
      makki: '<path d="M38 48h44a22 17 0 0 1-44 0z" fill="#2F6B3C"/>' +
             '<ellipse cx="60" cy="48" rx="22" ry="4.5" fill="#4E8B5A"/>' +
             '<path d="M50 44q6-6 12 0" stroke="#7FB069" stroke-width="2.5" fill="none"/>' +
             '<circle cx="112" cy="50" r="19" fill="#F0C14B" stroke="#C9963B" stroke-width="2.5"/>' +
             '<path d="M103 46q9-5 18 0M103 54q9-5 18 0" stroke="#C9963B" stroke-width="1.6" fill="none"/>',
      dimsum: '<ellipse cx="80" cy="44" rx="34" ry="9" fill="#E3B964"/>' +
              '<rect x="46" y="44" width="68" height="11" fill="#C9963B"/>' +
              '<rect x="46" y="55" width="68" height="11" fill="#B0802C"/>' +
              '<path d="M46 50h68M46 61h68" stroke="#8A6420" stroke-width="1.2"/>' + steam(66, 80, 94),
      bao: '<path d="M48 64a32 24 0 0 1 64 0z" fill="#FBF6EA" stroke="#C9B98F" stroke-width="2"/>' +
           '<path d="M56 56q24-16 48 0" stroke="#B5652B" stroke-width="6" fill="none" stroke-linecap="round"/>' +
           '<circle cx="68" cy="50" r="2.6" fill="#6E9B4A"/><circle cx="92" cy="50" r="2.6" fill="#D9A441"/>',
      sushi: '<rect x="36" y="46" width="34" height="20" rx="9" fill="#FBF6EA" stroke="#C9B98F" stroke-width="2"/>' +
             '<path d="M36 50q17-12 34 0z" fill="#E0752B"/>' +
             '<circle cx="104" cy="54" r="17" fill="#FBF6EA" stroke="#1B2B27" stroke-width="3.5"/>' +
             '<circle cx="104" cy="54" r="6.5" fill="#E0752B"/>' +
             '<circle cx="104" cy="54" r="2.4" fill="#6E9B4A"/>',
      wok: '<path d="M42 42h60a30 22 0 0 1-60 0z" fill="#2B2B2B"/>' +
           '<path d="M102 44l18-7" stroke="#2B2B2B" stroke-width="6" stroke-linecap="round"/>' +
           '<path d="M66 40q-5-9 2-16q1 7 5 9q1-6 5-8q0 8 4 11q-2 7-9 7z" fill="#E0752B"/>' +
           '<path d="M50 38l24-14M54 42l24-14" stroke="#C9963B" stroke-width="2.4" stroke-linecap="round"/>',
      khowsuey: '<path d="M46 46h68a34 21 0 0 1-68 0z" fill="#FBF6EA" stroke="#C9B98F" stroke-width="2"/>' +
                '<path d="M54 45q9-9 18 0t18 0 18 0" stroke="#E3B964" stroke-width="3.4" fill="none" stroke-linecap="round"/>' +
                '<circle cx="68" cy="39" r="3" fill="#6E9B4A"/><circle cx="92" cy="40" r="3" fill="#E0752B"/>' +
                '<path d="M104 36l12-10" stroke="#C9963B" stroke-width="2.4" stroke-linecap="round"/>',
      pasta: '<path d="M44 48h72a36 21 0 0 1-72 0z" fill="#FBF6EA" stroke="#C9B98F" stroke-width="2"/>' +
             '<path d="M54 46q12-14 26-7t26 7" stroke="#E9C77E" stroke-width="4.5" fill="none" stroke-linecap="round"/>' +
             '<path d="M58 44q12-10 22-5t22 5" stroke="#D9A441" stroke-width="2.6" fill="none"/>' +
             '<circle cx="80" cy="38" r="4.6" fill="#B3261E"/><circle cx="68" cy="42" r="3" fill="#6E9B4A"/>',
      pizza: '<circle cx="80" cy="46" r="28" fill="#E9C77E" stroke="#C9963B" stroke-width="3"/>' +
             '<circle cx="80" cy="46" r="21" fill="#E07B52"/>' +
             '<circle cx="71" cy="39" r="4" fill="#B3261E"/><circle cx="90" cy="44" r="4" fill="#B3261E"/>' +
             '<circle cx="77" cy="55" r="4" fill="#B3261E"/>' +
             '<path d="M80 18v56" stroke="#C9963B" stroke-width="1.6" opacity="0.6"/>',
      mocktail: '<path d="M62 24h36l-5 44h-26z" fill="#DCEBF2" stroke="#0E3B33" stroke-width="2.2"/>' +
                '<path d="M65 38h30l-4 28h-22z" fill="#E0752B" opacity="0.85"/>' +
                '<path d="M94 24l10-12" stroke="#C9963B" stroke-width="3.4" stroke-linecap="round"/>' +
                '<circle cx="72" cy="46" r="2.4" fill="#FBF6EA"/><circle cx="84" cy="54" r="1.8" fill="#FBF6EA"/>' +
                '<circle cx="78" cy="60" r="1.6" fill="#FBF6EA"/>' +
                '<path d="M98 30a9 9 0 0 1 0 14z" fill="#6E9B4A"/>'
    };
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100">' +
      '<rect width="160" height="100" fill="' + bg + '"/>' + top + (BODY[id] || '') + '</svg>';
    return 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")';
  }
  /* Which drawn icon a set-menu item gets, and the tile colour behind it,
     matching the dish tiles so the two screens look like one app. Chosen from
     the item's own name first, then from the section it sits in. */
  setIcon(name, section) {
    const n = (name || '').toLowerCase(), sc = (section || '').toLowerCase();
    const pick = (k) => ({
      sCup: k === 'cup', sBread: k === 'bread', sRoll: k === 'roll',
      sSkew: k === 'skew', sSweet: k === 'sweet', sBowl: k === 'bowl',
      tile: { cup: '#E7E3D2', bread: '#F1E3C0', roll: '#E4EBD5',
              skew: '#F3DCCB', sweet: '#F3DCE0', bowl: '#EEE0C4' }[k]
    });
    // the section wins for drinks: "English Breakfast" is a tea, and nothing
    // in its own name says so
    if (/tea|coffee/.test(sc)) return pick('cup');
    if (/tea|coffee|chai/.test(n)) return pick('cup');
    if (/roll|wrap|spring/.test(n) && !/chocolate/.test(n)) return pick('roll');
    if (/wing|tikka|kibbeh|kebab|grill|barbecu|bbq|roast|chop|skewer|taouk|shish|mishaki/.test(n))
      return pick('skew');
    if (/sandwich|slider|croissant|bread|kulcha|roti/.test(n)) return pick('bread');
    if (/cookie|biscuit|pastry|cake|brownie|chocolate/.test(n)) return pick('sweet');
    if (/cookie|biscuit|pastr|cake/.test(sc)) return pick('sweet');
    if (/croissant|sandwich/.test(sc)) return pick('bread');
    return pick('bowl');
  }
  // a menu whose items are chosen from its own lists, not from the 147 dishes
  pickMenu(cu) {
    const m = (this.PICK_MENUS || {})[cu || this.state.cuisine];
    return m && m.packages && m.packages.length ? m : null;
  }
  /* The items of the chosen pick-menu package, shaped like dishes so the
     choosing screen, the counts and the order sheet all work unchanged.
     One synthetic category per section. */
  pickPool() {
    const st = this.state;
    const m = this.pickMenu(st.cuisine);
    const pk = (m && typeof st.pkg === 'number') ? m.packages[st.pkg] : null;
    if (!pk) return null;
    const out = [];
    pk.sections.forEach((sec, si) => {
      sec.items.forEach((n, ni) => {
        out.push({ id: 'p' + si + '_' + ni, name: n, cat: 'sec' + si,
                   cu: st.cuisine, diet: null, sub: sec.title, note: '' });
      });
    });
    return { pack: pk, items: out };
  }
  // the set menu for this cuisine, or null when it picks dishes the usual way
  setMenu(cu) {
    const m = (this.SET_MENUS || {})[cu || this.state.cuisine];
    return m && m.packages && m.packages.length ? m : null;
  }
  // one group per chosen counter, listing what it will serve
  counterGroupsForQuote() {
    const st = this.state;
    const sel = st.counterItems || {};
    const withMenu = {};
    this.menuCounters().forEach((c) => { withMenu[c.id] = true; });
    const bare = [];
    (this.COUNTERS || []).forEach((g) => g.items.forEach((c) => {
      if ((st.counters || {})[c.id] && !withMenu[c.id]) {
        bare.push({ id: c.id, title: c.name, items: [] });
      }
    }));
    return this.menuCounters().map((c) => {
      const names = [];
      c.menu.sections.forEach((sec, si) => {
        sec.items.forEach((n, ii) => {
          const chosen = sec.need ? !!sel[this.cmKey(c.id, si, ii)] : true;
          if (chosen) names.push(n);
        });
      });
      return { id: c.id, title: c.name + ' (' + names.length + ')',
               items: names.map((n) => ({ name: n, note: '', hasNote: false })) };
    }).filter((g) => g.items.length).concat(bare);
  }
  // the counters the customer picked that actually have a menu to show
  menuCounters() {
    const on = this.state.counters || {};
    const out = [];
    (this.COUNTERS || []).forEach((g) => g.items.forEach((c) => {
      const m = (this.COUNTER_MENUS || {})[c.id];
      if (on[c.id] && m && m.sections && m.sections.length) out.push({ id: c.id, name: c.name, menu: m });
    }));
    return out;
  }
  // one key per item, so a choice survives changing counters and coming back
  cmKey(counterId, si, ii) { return counterId + ':' + si + ':' + ii; }

  /* Every section of every chosen counter, with how many are still needed.
     Sections without a number are served whole and have nothing to tick. */
  counterMenuState() {
    const st = this.state;
    const list = this.menuCounters();
    const sel = st.counterItems || {};
    const counters = list.map((c) => {
      const sections = c.menu.sections.map((sec, si) => {
        const items = sec.items.map((n, ii) => {
          const key = this.cmKey(c.id, si, ii);
          return { name: n, key: key, on: !!sel[key] };
        });
        const picked = items.filter((x) => x.on).length;
        const need = sec.need || 0;
        return { title: sec.title, need: need, picked: picked, items: items,
                 choose: need > 0, full: need > 0 && picked >= need };
      });
      const need = sections.reduce((a, s) => a + s.need, 0);
      const done = sections.reduce((a, s) => a + Math.min(s.picked, s.need || s.picked), 0);
      return { id: c.id, name: c.name, note: c.menu.note || '', sections: sections,
               need: need, done: done, ready: need === 0 || done >= need };
    });
    return counters;
  }
  /* Packages belong to a buffet. A live cooking station on its own is priced
     from its counters, so the package and dish screens are skipped. */
  offersPackages() {
    const st = this.state;
    if (st.type === 'delivery') return true;
    return st.layout === 'buffet' || st.layout === 'both';
  }
  // a live station means there are counters to choose
  hasCounters() {
    const l = this.state.layout;
    return this.state.type === 'onsite' && (l === 'live' || l === 'both');
  }
  pickedCounters() {
    const on = this.state.counters || {};
    const out = [];
    this.COUNTERS.forEach((g) => g.items.forEach((c) => { if (on[c.id]) out.push(c.name); }));
    return out;
  }
  typeLabelOf(t) {
    return t === 'delivery' ? 'Delivery' : (t === 'onsite' ? 'Onsite Catering' : '');
  }
  layoutLabelOf(l) {
    return l === 'live' ? 'Live Cooking Station'
         : (l === 'both' ? 'Buffet + Live Station'
         : (l === 'buffet' ? 'Buffet' : ''));
  }
  renderVals() {
    const st = this.state;
    const screen = st.screen || this.props.start || 'details';
    const isOnsite = st.type === 'onsite';
    const sReady = st.type === 'delivery' || (isOnsite && !!st.layout && !!st.venue);
    // a question is open while it has no answer, or while the pencil is on it
    const edit = st.setupEdit || null;
    const nCounters = Object.keys(st.counters || {}).length;
    const typeOpen = !st.type || edit === 'type';
    const layoutOpen = !typeOpen && (!st.layout || edit === 'layout');
    const venueOpen = !typeOpen && !layoutOpen && (!st.venue || edit === 'venue');
    const opt = (on, pick) => ({
      on: on, pick: pick,
      border: on ? '#C9963B' : '#E4D9C2',
      shadow: on ? '0 6px 16px rgba(201,150,59,0.35)' : '0 1px 2px rgba(14,59,51,0.06)'
    });
    const pvOpt = (on, val) => ({
      on: on,
      pick: () => this.setState({ pureVeg: val }),
      bg: on ? '#0E3B33' : '#FFFFFF',
      color: on ? '#FBF6EA' : '#0E3B33',
      border: on ? '#0E3B33' : '#DDD3BF'
    });
    const pax = st.pax;
    const ret = st.returnTo;
    const go = (scr, clearRet, setRet) => this.setState({ screen: scr, returnTo: setRet ? 'review' : (clearRet && scr === 'review' ? null : st.returnTo), pdfMsg: '' });
    const openItems = (fromReview) => {
      const key = st.cuisine + '|' + st.pkg + '|' + (st.pureVeg ? 'pv' : 'all');
      const pmOpen = this.pickMenu(st.cuisine);
      const firstTab = pmOpen ? 'sec0' : 'starters';
      this.setState({ screen: 'items', minWarn: false, returnTo: fromReview ? 'review' : st.returnTo, tab: firstTab, fcu: 'all', sub: 0, note: '', sel: st.selKey === key ? st.sel : {}, notes: st.selKey === key ? st.notes : {}, noteFor: null, zoom: null, selKey: key });
    };
    const S = this.summary();
    const themes = this.THEMES.map((t) => {
      const on = st.theme === t.id, free = t.price === 0;
      const shot = this.themePhoto(t.id, 1);
      return {
        name: t.name, desc: t.desc, c1: t.c[0], c2: t.c[1], c3: t.c[2], c4: t.c[3],
        shot: shot, hasShot: !!shot, noShot: !shot,
        k1: t.id === 't1', k2: t.id === 't2', k3: t.id === 't3', k4: t.id === 't4', k5: t.id === 't5', k6: t.id === 't6',
        tag: free ? 'FREE' : 'PREMIUM', tagBg: free ? '#D3E7DE' : '#C9963B', tagColor: '#0E3B33',
        priceText: free ? 'Free' : '+ ' + S.fmt(t.price) + ' Dh',
        priceColor: free ? '#1F6B4E' : '#8A5A00',
        on: on, border: on ? '#C9963B' : '#E4D9C2',
        shadow: on ? '0 6px 16px rgba(201,150,59,0.35)' : '0 1px 2px rgba(14,59,51,0.06)',
        pick: () => this.setState({ theme: on ? null : t.id }),
        open: () => this.setState({ screen: 'themeDetail', themeView: t.id, themeShot: 1 })
      };
    });
    const dt = this.THEMES.find((t) => t.id === st.themeView) || this.THEMES[3];
    const di = this.THEME_INFO[dt.id];
    const dOn = st.theme === dt.id, dFree = dt.price === 0;
    const dShotNo = st.themeShot || 1;
    const dShot = this.themePhoto(dt.id, dShotNo) || this.themePhoto(dt.id, 1);
    const dShots = [1, 2, 3].map((n) => ({
      url: this.themePhoto(dt.id, n), on: n === dShotNo,
      ring: n === dShotNo ? '2.5px solid #C9963B' : '1.5px solid #E4D9C2',
      pick: () => this.setState({ themeShot: n })
    })).filter((x) => !!x.url);
    const dObj = {
      name: dt.name, c1: dt.c[0], c2: dt.c[1], c3: dt.c[2], c4: dt.c[3],
      shot: dShot, hasShot: !!dShot, noShot: !dShot, shots: dShots,
      k1: dt.id === 't1', k2: dt.id === 't2', k3: dt.id === 't3', k4: dt.id === 't4', k5: dt.id === 't5', k6: dt.id === 't6',
      tag: dFree ? 'FREE WITH PACKAGE' : 'PREMIUM', tagBg: dFree ? '#D3E7DE' : '#C9963B', tagColor: '#0E3B33',
      priceLong: dFree ? 'Free with your package' : '+ ' + S.fmt(dt.price) + ' Dh per event',
      priceColor: dFree ? '#1F6B4E' : '#8A5A00',
      priceNote: dFree ? 'Included with your package at no extra charge.' : 'Premium theme: a flat charge per event, added to your approx. total. Final price is confirmed by our team.',
      long: di.long, incl: di.incl.map((x) => ({ text: x })), best: di.best.map((x) => ({ text: x })),
      btnLabel: dOn ? 'Selected - tap to remove' : (dFree ? 'Select this theme' : 'Select theme · + ' + S.fmt(dt.price) + ' Dh'),
      btnBg: dOn ? '#FFFFFF' : '#0E3B33', btnColor: dOn ? '#0E3B33' : '#FBF6EA', btnBorder: dOn ? '1.5px solid #0E3B33' : 'none',
      choose: () => this.setState({ theme: dOn ? null : dt.id, screen: 'theme' })
    };
    return Object.assign({
      isDetails: screen === 'details',
      isSetup: screen === 'setup',
      isPkgScreen: screen === 'pkg',
      isItemsScreen: screen === 'items',
      isThemeScreen: screen === 'theme',
      isReviewScreen: screen === 'review',
      isThanks: screen === 'thanks',
      thanksTitle: (st.name || '').trim() ? 'Thank you, ' + st.name.trim().split(/\s+/)[0] + '!' : 'Thank you!',
      backToReview: () => this.setState({ screen: 'review', pdfMsg: '' }),
      // navigation: while editing from the review page, every "Save & Next" / Back returns there
      nextFromDetails: () => {
        const missing = [];
        if (!(st.name || '').trim()) missing.push('name');
        if (!(st.phone || '').trim()) missing.push('contact number');
        if (!st.date) missing.push('event date');
        if (!(st.pax > 0)) missing.push('number of guests');
        if (missing.length) { this.setState({ detailsWarn: true }); return; }
        go(ret ? 'review' : 'setup', true);
      },
      backSetup: () => go(ret ? 'review' : 'details', true),
      nextFromSetup: () => go(ret ? 'review'
        : (this.hasCounters() ? 'counters' : (this.offersPackages() ? 'pkg' : 'theme')), true),
      backCounters: () => go(ret ? 'review' : 'setup', true),
      nextFromCounters: () => go(ret ? 'review'
        : (this.menuCounters().length ? 'countermenu'
           : (this.offersPackages() ? 'pkg' : 'theme')), true),
      backCounterMenu: () => go(ret ? 'review' : 'counters', true),
      nextFromCounterMenu: () => go(ret ? 'review'
        : (this.offersPackages() ? 'pkg' : 'theme'), true),
      backPkg: () => go(ret ? 'review'
        : (this.menuCounters().length ? 'countermenu'
           : (this.hasCounters() ? 'counters' : 'setup')), true),
      nextFromPkg: () => {
        if (this.pkgVals().belowMin && !st.consent) { this.setState({ minWarn: true }); return; }
        openItems();
      },
      backItems: () => go(ret ? 'review' : 'pkg', true),
      nextFromItems: () => {
        if (this.itemsVals().custBelowMin && !st.custMinOk) { this.setState({ minWarn: true }); return; }
        go(ret ? 'review' : 'theme', true);
      },
      backTheme: () => go(ret ? 'review'
        : (this.offersPackages() ? 'items'
           : (this.menuCounters().length ? 'countermenu'
              : (this.hasCounters() ? 'counters' : 'setup'))), true),
      nextFromTheme: () => go('review', true),
      backReview: () => go('theme', true),
      editDetails: () => go('details', false, true),
      editSetup: () => go('setup', false, true),
      editPkg: () => go('pkg', false, true),
      editItems: () => openItems(true),
      editTheme: () => go('theme', false, true),
      themes: themes,
      d: dObj,
      isThemeDetail: screen === 'themeDetail',
      closeThemeDetail: () => this.setState({ screen: 'theme' }),
      eventNote: st.eventNote,
      setEventNote: (e) => this.setState({ eventNote: String(e.target.value).slice(0, 500) }),
      themeSumText: S.th ? S.th.name + (S.th.price ? ' · + ' + S.fmt(S.th.price) + ' Dh' : ' · Free') : 'None selected',
      grandText: (S.grandNum > 0 || !this.priced()) ? S.grand : '-',
      rv: S,
      hasPdfMsg: !!st.pdfMsg,
      pdfMsg: st.pdfMsg,
      downloadPdf: () => this.downloadPdf(),
      terms: this.TERMS.map((t) => ({ text: t })),
      termsOn: st.terms,
      termsWarn: st.termsWarn,
      termsBorder: st.termsWarn && !st.terms ? '#C62828' : '#E4D9C2',
      termsBg: st.termsWarn && !st.terms ? '#FDECEA' : '#FFFFFF',
      termsColor: st.termsWarn && !st.terms ? '#9B1C1C' : '#0E3B33',
      toggleTerms: () => this.setState({ terms: !st.terms, termsWarn: false }),
      // details
      name: st.name, cc: st.cc, phone: st.phone, emirate: st.emirate, date: st.date, time: st.time,
      dWarn: !!st.detailsWarn,
      dNameBorder:  (st.detailsWarn && !(st.name || '').trim()) ? '#B3261E' : '#DDD3BF',
      dPhoneBorder: (st.detailsWarn && !(st.phone || '').trim()) ? '#B3261E' : '#DDD3BF',
      dDateBorder:  (st.detailsWarn && !st.date) ? '#B3261E' : '#DDD3BF',
      dWarnText: (() => {
        const m = [];
        if (!(st.name || '').trim()) m.push('name');
        if (!(st.phone || '').trim()) m.push('contact number');
        if (!st.date) m.push('event date');
        if (!(st.pax > 0)) m.push('guests');
        if (!m.length) return '';
        return 'Please add your ' + (m.length === 1 ? m[0] : m.slice(0, -1).join(', ') + ' and ' + m[m.length - 1]) + '.';
      })(),
      dWarnShown: !!st.detailsWarn && !!((!(st.name || '').trim()) || (!(st.phone || '').trim()) || !st.date || !(st.pax > 0)),
      dConsentShown: !(!!st.detailsWarn && !!((!(st.name || '').trim()) || (!(st.phone || '').trim()) || !st.date || !(st.pax > 0))),
      setName: (e) => this.setState({ name: e.target.value }),
      setCc: (e) => this.setState({ cc: e.target.value }),
      setPhone: (e) => this.setState({ phone: e.target.value }),
      setEmirate: (e) => this.setState({ emirate: e.target.value }),
      setDate: (e) => this.setState({ date: e.target.value }),
      dateEmpty: !st.date,
      setTime: (e) => this.setState({ time: e.target.value }),
      paxText: st.paxEdit !== null ? st.paxEdit : String(pax),
      typePax: (e) => {
        const d = String(e.target.value).replace(/[^0-9]/g, '').slice(0, 4);
        const n = parseInt(d, 10);
        this.setState({ paxEdit: d, pax: n > 0 ? Math.min(n, 5000) : pax, consent: false });
      },
      blurPax: () => this.setState({ paxEdit: null }),
      incPax: () => this.setState({ pax: Math.min(pax + 1, 5000), paxEdit: null, consent: false, minWarn: false }),
      decPax: () => this.setState({ pax: Math.max(pax - 1, 1), paxEdit: null, consent: false, minWarn: false }),
      pvYes: pvOpt(st.pureVeg, true),
      pvNo: pvOpt(!st.pureVeg, false),
      // setup
      isOnsite: isOnsite,
      showVenue: isOnsite && !!st.layout,
      sReady: sReady,
      sNotReady: !sReady,
      // Each question folds into one line once it is answered, so only the
      // question still being asked takes up the screen. The pencil opens it
      // again without losing the answer.
      // every question answered and folded away: nothing left but to go on.
      // Delivery asks no layout or venue, so those only count when onsite.
      setupDone: sReady && !typeOpen &&
                 !(isOnsite && layoutOpen) && !(isOnsite && venueOpen),
      isSetItems: !!(this.setMenu(st.cuisine) && typeof st.pkg === 'number'),
      setMenuName: (() => {
        const m = this.setMenu(st.cuisine);
        return (m && typeof st.pkg === 'number' && m.packages[st.pkg]) ? m.packages[st.pkg].name : '';
      })(),
      setSections: (() => {
        const m = this.setMenu(st.cuisine);
        const pk = (m && typeof st.pkg === 'number') ? m.packages[st.pkg] : null;
        if (!pk) return [];
        return pk.sections.map((sec) => ({
          title: sec.title,
          items: sec.items.map((n) => Object.assign({ name: n }, this.setIcon(n, sec.title)))
        }));
      })(),
      isCounterMenu: screen === 'countermenu',
      cmTabs: (() => {
        const cs = this.counterMenuState();
        const cur = (cs.some((c) => c.id === st.cmTab) ? st.cmTab : (cs[0] && cs[0].id));
        return cs.map((c) => ({
          label: c.name,
          count: c.need ? c.done + ' of ' + c.need : 'All served',
          on: c.id === cur,
          subColor: c.id === cur ? '#E9C77E' : '#8A928D',
          bg: c.id === cur ? '#0E3B33' : '#FFFFFF',
          color: c.id === cur ? '#FBF6EA' : '#0E3B33',
          border: c.id === cur ? '#0E3B33' : '#DDD3BF',
          pick: () => this.setState({ cmTab: c.id })
        }));
      })(),
      cmActive: (() => {
        const cs = this.counterMenuState();
        const cur = cs.filter((c) => c.id === st.cmTab)[0] || cs[0];
        if (!cur) return { name: '', note: '', sections: [] };
        return {
          name: cur.name,
          note: cur.note || (cur.need ? '' : 'Everything here is served'),
          hasNote: !!(cur.note || !cur.need),
          sections: cur.sections.map((sec) => ({
            title: sec.title,
            anchor: (sec.choose && !sec.full && sec === cur.sections.filter((x) => x.choose && !x.full)[0])
              ? 'cm-next' : '',
            pill: sec.choose ? sec.picked + ' of ' + sec.need : 'Included',
            pillBg: sec.choose ? (sec.full ? '#D3E7DE' : '#EADFC8') : '#D3E7DE',
            pillColor: sec.choose ? (sec.full ? '#12604B' : '#5A6863') : '#12604B',
            items: sec.items.map((it) => Object.assign({
              name: it.name,
              on: it.on || !sec.choose,
              locked: !sec.choose,
              border: (it.on || !sec.choose) ? '#C9963B' : '#E4D9C2',
              bg: (it.on || !sec.choose) ? '#FDF7EA' : '#FFFFFF',
              opacity: !sec.choose ? 0.92 : 1,
              pick: () => {
                if (!sec.choose) return;
                const n = Object.assign({}, this.state.counterItems);
                if (n[it.key]) delete n[it.key]; else n[it.key] = true;
                this.setState({ counterItems: n });
              }
            }, this.setIcon(it.name, sec.title)))
          }))
        };
      })(),
      cmReady: this.counterMenuState().every((c) => c.ready),
      cmNotReady: !this.counterMenuState().every((c) => c.ready),
      cmNextLabel: (() => {
        const next = this.counterMenuState().filter((c) => !c.ready)[0];
        return next ? 'Choose for ' + next.name : '';
      })(),
      cmGoNext: () => {
        const cs = this.counterMenuState();
        const next = cs.filter((c) => !c.ready)[0];
        if (!next) return;
        this._scrollTo = 'cm-next';
        this.setState({ cmTab: next.id, cmNudge: (st.cmNudge || 0) + 1 });
      },
      isCounters: screen === 'counters',
      counterGroups: this.COUNTERS.map((g) => ({
        group: g.group,
        items: g.items.map((c) => {
          const on = !!(st.counters || {})[c.id];
          return {
            name: c.name, on: on,
            art: this.counterPhoto(c.id) || this.counterArt(c.id, g.bg),
            border: on ? '#C9963B' : '#E4D9C2',
            bg: on ? '#FDF7EA' : '#FFFFFF',
            nameColor: on ? '#6A4E12' : '#0E3B33',
            shadow: on ? '0 6px 16px rgba(201,150,59,0.35)' : '0 1px 2px rgba(14,59,51,0.06)',
            pick: () => {
              const n = Object.assign({}, this.state.counters);
              if (n[c.id]) delete n[c.id]; else n[c.id] = true;
              this.setState({ counters: n });
            }
          };
        })
      })),
      countersPicked: nCounters,
      countersCount: nCounters === 0 ? 'None chosen yet'
        : nCounters + (nCounters === 1 ? ' counter chosen' : ' counters chosen'),
      cReady: nCounters > 0,
      cNotReady: nCounters === 0,
      typeOpen: typeOpen,
      typeDone: !typeOpen && !!st.type,
      typeLine: this.typeLabelOf(st.type),
      editType: () => this.setState({ setupEdit: 'type' }),
      layoutOpen: isOnsite && layoutOpen,
      layoutDone: isOnsite && !layoutOpen && !!st.layout,
      layoutLine: this.layoutLabelOf(st.layout),
      editLayout: () => this.setState({ setupEdit: 'layout' }),
      venueOpen: isOnsite && !!st.layout && venueOpen,
      venueDone: isOnsite && !!st.layout && !venueOpen && !!st.venue,
      venueLine: st.venue === 'indoor' ? 'Indoor' : (st.venue === 'outdoor' ? 'Outdoor' : ''),
      editVenue: () => this.setState({ setupEdit: 'venue' }),

      delivery: opt(st.type === 'delivery', () => this.setState({ type: 'delivery', layout: null, venue: null, consent: false, setupEdit: null })),
      onsite: opt(isOnsite, () => { this._scrollTo = 'layout'; this.setState({ type: 'onsite', consent: false, setupEdit: null }); }),
      buffet: opt(st.layout === 'buffet', () => { this._scrollTo = 'venue'; this.setState({ layout: 'buffet', consent: false, setupEdit: null }); }),
      live: opt(st.layout === 'live', () => { this._scrollTo = 'venue'; this.setState({ layout: 'live', consent: false, setupEdit: null }); }),
      both: opt(st.layout === 'both', () => { this._scrollTo = 'venue'; this.setState({ layout: 'both', consent: false, setupEdit: null }); }),
      indoor: opt(st.venue === 'indoor', () => this.setState({ venue: 'indoor', setupEdit: null })),
      outdoor: opt(st.venue === 'outdoor', () => this.setState({ venue: 'outdoor', setupEdit: null }))
    }, this.pkgVals(), this.itemsVals());
  }
}
