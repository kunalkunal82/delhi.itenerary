/* ===========================================================
   Delhi Winter Chronicles — script.js
   Data + tiny router for the 4 pages.
   =========================================================== */

/* ----------------------------- helpers ---------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const img = (seed, w = 800, h = 600) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

const mapLink = (q) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

/* ----------------------------- categories ------------------------- */
const CATEGORIES = [
  {
    id: "fun",
    icon: "⚡",
    title: "Fun & Adventure",
    tagline: "Arcades, pottery, pet cafes, ice skating & kayaks on cold mornings.",
    accent: "#C86B4A",
    accentSoft: "#F3E1D5",
    eyebrow: "Chapter Two · Playtime",
    sub: "Days built on giggling, throwing snacks to strays, and losing at air hockey."
  },
  {
    id: "history",
    icon: "🏛️",
    title: "History & Culture",
    tagline: "Stepwells, Mughal tombs, heritage walks and the murals of Lodhi.",
    accent: "#8A5A1E",
    accentSoft: "#EFDFC2",
    eyebrow: "Chapter Two · Time Travel",
    sub: "Wander through sandstone arches, whispered djinns, and winter-slanted sunlight."
  },
  {
    id: "thrift",
    icon: "🛍️",
    title: "Local Markets & Thrift",
    tagline: "Bargain hunts, winter woolens, tibetan bites and handicraft bazaars.",
    accent: "#7A5A9A",
    accentSoft: "#E7DDEF",
    eyebrow: "Chapter Two · Treasure Hunt",
    sub: "Sweaters, secondhand denim, silver rings, and momos steaming into the cold."
  },
  {
    id: "nature",
    icon: "🌿",
    title: "Parks & Gardens",
    tagline: "Sunlit picnic lawns, bird sanctuaries, and flower festivals in full bloom.",
    accent: "#6E8A6A",
    accentSoft: "#DDE9D5",
    eyebrow: "Chapter Two · Slow Sunlight",
    sub: "A blanket, a thermos, a paperback each — and a whole lot of nothing to do."
  },
  {
    id: "food",
    icon: "🍗",
    title: "Food & Butter Chicken Trails",
    tagline: "Iconic butter chicken spots, street legends, and fairy-lit cafes.",
    accent: "#B94E36",
    accentSoft: "#F5D7CB",
    eyebrow: "Chapter Two · The Great Gravy",
    sub: "The city's warmest hug is a bowl of makhani and a plate of buttery naan."
  }
];

/* ----------------------------- places ----------------------------- */
const PLACES = {

  /* =========================== FUN & ADVENTURE =========================== */
  fun: [
    {
      id: "puppychino",
      name: "Puppychino",
      area: "Sector 29, Gurgaon",
      tag: "🐶 Dog Friendly",
      tagClass: "pet",
      seed: "puppychino-cafe",
      map: "Puppychino Sector 29 Gurgaon",
      hours: "11:00 am – 11:00 pm",
      cost: "₹ 1,200 for two",
      narrative:
        "A whole café that runs on wagging tails. You'll be greeted at the door by a resident golden or two, and by the time your hot chocolate arrives, there's usually a beagle curled at your feet.\n\nOrder the pancakes for us and the pupcake for whichever tail-wagger has picked you as their person for the afternoon. On sunny winter days the rooftop is the softest, warmest spot in Gurgaon — a good hour of nothing but sunlight, coffee, and dogs."
    },
    {
      id: "bark-street",
      name: "Bark Street Café",
      area: "Multiple outlets (Vasant Kunj, Gurgaon)",
      tag: "🐶 Dog Friendly",
      tagClass: "pet",
      seed: "bark-street-cafe",
      map: "Bark Street Cafe Delhi",
      hours: "12:00 pm – 11:00 pm",
      cost: "₹ 1,400 for two",
      narrative:
        "The kind of place where you'll spend more time petting other people's dogs than eating your pizza — and that's the point. Fairy lights, wooden benches, and a menu that has actual dishes for the dogs.\n\nSit outside if you can; the winter sun on the patio is unbeatable, and the resident retriever will absolutely try to steal a fry."
    },
    {
      id: "leos-artisanal",
      name: "Leo's Artisanal Pizza",
      area: "Chattarpur / Shahpur Jat",
      tag: "🐶 Dog Friendly",
      tagClass: "pet",
      seed: "leos-artisanal-pizza",
      map: "Leo's Artisanal Pizza Delhi",
      hours: "12:00 pm – 11:00 pm",
      cost: "₹ 1,600 for two",
      narrative:
        "Wood-fired pizza in a courtyard where the neighbourhood dogs quietly hold court. Bring a jacket, order the truffle mushroom, and split a tiramisu.\n\nOn a cold evening, ask for a corner table near the heater and the fairy lights — that's the softest slice of Chattarpur."
    },
    {
      id: "clay-company",
      name: "The Clay Company",
      area: "Ghitorni",
      tag: "🎨 Try Pottery",
      tagClass: "arcade",
      seed: "pottery-clay-studio",
      map: "The Clay Company Ghitorni Delhi",
      hours: "By appointment, 11 am – 7 pm",
      cost: "₹ 1,500 per person",
      narrative:
        "Two hours at a wheel, hands muddy, laughing at whatever lopsided little vase we end up with. Studio owners are patient and warm, and you keep whatever you make (they fire and glaze it later).\n\nThe best romantic-comedy afternoon in the city — and yes, we will do the Ghost re-enactment, we just will."
    },
    {
      id: "damdama-kayak",
      name: "Damdama Lake",
      area: "Sohna, near Gurgaon",
      tag: "🛶 Kayaking",
      tagClass: "nature",
      seed: "damdama-lake-kayak",
      map: "Damdama Lake Sohna",
      hours: "8:00 am – 5:00 pm",
      cost: "₹ 500 per kayak",
      narrative:
        "An hour and a half out of the city and suddenly there are Aravalli hills, still water, and no traffic. Rent a two-seater kayak and paddle badly out to the middle where nobody can hear us.\n\nGo for a late-morning slot in December so the sun does most of the warming. Pack a flask of coffee and a packet of Parle-G — non-negotiable."
    },
    {
      id: "iskate-ambience",
      name: "iSkate — Ambience Mall",
      area: "Vasant Kunj",
      tag: "⛸️ Ice Skating",
      tagClass: "arcade",
      seed: "iskate-rink-delhi",
      map: "iSkate Ambience Mall Vasant Kunj",
      hours: "12:00 pm – 10:00 pm",
      cost: "₹ 800 per person (1 hr)",
      narrative:
        "Delhi's proper indoor ice rink. Skates, gloves, penguin trainers if you need one — and no ego required. First lap is disaster, tenth lap is love.\n\nGrab momos and hot chocolate afterwards on the mall's terrace; your legs will thank you."
    },
    {
      id: "smaaash-cyberhub",
      name: "Smaaash Cyberhub",
      area: "DLF Cyberhub, Gurgaon",
      tag: "🎮 Arcade Night",
      tagClass: "arcade",
      seed: "smaaash-arcade-games",
      map: "Smaaash Cyberhub Gurgaon",
      hours: "12:00 pm – 1:00 am",
      cost: "₹ 1,500 for two (games + food)",
      narrative:
        "Bowling, VR cricket, a hundred flashing arcade machines and the smell of nachos in the air. It's loud and silly and perfect for a low-stakes date night.\n\nWinter bonus: Cyberhub outside is strung with fairy lights and live music — grab a drink at any of the open-air bars afterwards."
    },
    {
      id: "escape-hour",
      name: "Escape Hour",
      area: "Rajouri Garden",
      tag: "🔐 Escape Room",
      tagClass: "arcade",
      seed: "escape-room-delhi-mystery",
      map: "Escape Hour Rajouri Garden Delhi",
      hours: "11:00 am – 11:00 pm",
      cost: "₹ 1,200 per person",
      narrative:
        "60 minutes locked in a themed room, solving puzzles, finding hidden keys, blaming each other for time running out. There is no better way to find out how someone thinks under pressure.\n\nPick the ‘Detective' room for your first go — it's clever without being scary."
    },
    {
      id: "wow-noida",
      name: "Worlds of Wonder",
      area: "Sector 38A, Noida",
      tag: "🎢 Amusement Park",
      tagClass: "arcade",
      seed: "worlds-of-wonder-park",
      map: "Worlds of Wonder Noida",
      hours: "11:00 am – 8:00 pm",
      cost: "₹ 999 per person",
      narrative:
        "A full-day silliness plan — bumper cars, a giant wheel, a mini roller coaster, and popcorn every fifteen minutes. Winter is the only reasonable time to actually enjoy the queues.\n\nStay until the sun sets — the whole park is lit up in fairy lights by 6 pm."
    },
    {
      id: "snow-world",
      name: "Snow World",
      area: "DLF Mall of India, Noida",
      tag: "❄️ Real Snow",
      tagClass: "arcade",
      seed: "snow-world-noida",
      map: "Snow World Mall of India Noida",
      hours: "11:00 am – 10:00 pm",
      cost: "₹ 700 per person",
      narrative:
        "An actual sub-zero snow park inside a mall — jackets and boots included in the ticket. Ridiculous, meme-worthy, and secretly a lot of fun.\n\nWorth it purely for the snowfight photos and the very confused-looking penguin statues."
    },
    {
      id: "kingdom-of-dreams",
      name: "Kingdom of Dreams",
      area: "Sector 29, Gurgaon",
      tag: "🎭 Live Show",
      tagClass: "arcade",
      seed: "kingdom-of-dreams-show",
      map: "Kingdom of Dreams Gurgaon",
      hours: "1:00 pm – 11:00 pm",
      cost: "₹ 1,500 per person",
      narrative:
        "A big glittery Broadway-style musical (Jhumroo, Zangoora) with dinner from the Culture Gully food street after. Cheesy in the best way.\n\nGood plan for a night when we both need to feel like we're in a movie."
    },
    {
      id: "adventure-island",
      name: "Adventure Island",
      area: "Rohini, near Metro Walk",
      tag: "🎡 Rides",
      tagClass: "arcade",
      seed: "adventure-island-rohini",
      map: "Adventure Island Rohini Delhi",
      hours: "12:00 pm – 8:00 pm",
      cost: "₹ 1,000 per person",
      narrative:
        "The kind of amusement park where you scream on the ride and immediately want to go again. Winter afternoons are golden here — no summer wilting, all thrill.\n\nSplit a giant blue slushie afterwards on the boardwalk beside the artificial lake."
    },
    {
      id: "cyberhub-live",
      name: "Cyberhub Open-Air Nights",
      area: "DLF Cyberhub, Gurgaon",
      tag: "🎶 Live Music",
      tagClass: "arcade",
      seed: "cyberhub-live-music",
      map: "DLF Cyberhub Gurgaon",
      hours: "6:00 pm – 1:00 am",
      cost: "₹ 2,000 for two (drinks)",
      narrative:
        "Fairy lights strung across the whole promenade, live acoustic sets spilling from Social and Molecule, warm outdoor heaters, and a hundred restaurants to pick from.\n\nStart at Warehouse Café, end at a Beer Café dessert plate. Layer up — the wind picks up around 10."
    }
  ],

  /* =========================== HISTORY & CULTURE =========================== */
  history: [
    {
      id: "agrasen-ki-baoli",
      name: "Agrasen ki Baoli",
      area: "Hailey Road, Connaught Place",
      tag: "🏛️ Hidden Stepwell",
      tagClass: "history",
      seed: "agrasen-ki-baoli-stepwell",
      map: "Agrasen ki Baoli Connaught Place Delhi",
      hours: "7:00 am – 6:00 pm",
      cost: "Free",
      narrative:
        "A 14th-century stepwell tucked between glass towers behind CP — 108 steps descending into cool shadow. The light hits the arches at around 3 pm and the whole place turns gold.\n\nGo on a weekday morning; it's almost empty and you can sit at the top and read to each other."
    },
    {
      id: "humayuns-tomb",
      name: "Humayun's Tomb",
      area: "Nizamuddin East",
      tag: "🏛️ Mughal Grandeur",
      tagClass: "history",
      seed: "humayuns-tomb-delhi",
      map: "Humayun's Tomb Delhi",
      hours: "6:00 am – 6:00 pm",
      cost: "₹ 40 (Indians)",
      narrative:
        "The rehearsal for the Taj — red sandstone, geometric gardens, and a dome that catches the winter sun beautifully. Enter through the Isa Khan tomb complex; it's older and quieter.\n\nBest at 4 pm in December — the light is honey, the crowd is gone, and the lawns are just for walking."
    },
    {
      id: "qutub-minar",
      name: "Qutub Minar Complex",
      area: "Mehrauli",
      tag: "🏛️ UNESCO Site",
      tagClass: "history",
      seed: "qutub-minar-delhi",
      map: "Qutub Minar Delhi",
      hours: "7:00 am – 5:00 pm",
      cost: "₹ 40 (Indians)",
      narrative:
        "The 73-metre victory tower and around it — the Iron Pillar that hasn't rusted in 1,600 years, the ruins of the Quwwat-ul-Islam mosque, arches of carved verse.\n\nCombine with a walk through Mehrauli Archaeological Park next door — half the tombs there don't even have signs."
    },
    {
      id: "safdarjung-tomb",
      name: "Safdarjung's Tomb",
      area: "Safdarjung / AIIMS",
      tag: "🏛️ Quiet Mughal Gem",
      tagClass: "history",
      seed: "safdarjung-tomb-delhi",
      map: "Safdarjung Tomb Delhi",
      hours: "7:00 am – 5:00 pm",
      cost: "₹ 25 (Indians)",
      narrative:
        "The last great Mughal garden tomb — always half-empty, all yours. Sit on the platform behind the main dome; the winter sun is direct and there are almost no tourists.\n\nBring a book. Stay two hours."
    },
    {
      id: "hauz-khas-fort",
      name: "Hauz Khas Fort & Lake",
      area: "Hauz Khas Village",
      tag: "🏛️ Sunset Fort",
      tagClass: "history",
      seed: "hauz-khas-fort-lake",
      map: "Hauz Khas Fort Deer Park",
      hours: "10:30 am – 7:00 pm",
      cost: "Free",
      narrative:
        "A 13th-century madrasa and tomb overlooking a lake full of ducks and cormorants. Walk down through Deer Park (yes, actual deer) and come out at Hauz Khas Village for coffee.\n\nReach by 5 pm for the sunset from the fort's balcony — the light on the lake is unreasonably pretty."
    },
    {
      id: "rajon-baoli",
      name: "Rajon ki Baoli",
      area: "Mehrauli Archaeological Park",
      tag: "🏛️ Hidden Stepwell",
      tagClass: "history",
      seed: "rajon-ki-baoli-mehrauli",
      map: "Rajon ki Baoli Mehrauli",
      hours: "Sunrise – sunset",
      cost: "Free",
      narrative:
        "A 16th-century stepwell buried inside the Mehrauli Archaeological Park — you have to walk fifteen minutes through overgrown ruins to find it, and that's the whole magic. Almost nobody's here.\n\nParakeets, ruined arches, a stepwell that goes three storeys down. It feels like a secret."
    },
    {
      id: "lodhi-art",
      name: "Lodhi Art District",
      area: "Lodhi Colony",
      tag: "🎨 Street Murals",
      tagClass: "history",
      seed: "lodhi-art-district-murals",
      map: "Lodhi Art District Delhi",
      hours: "Anytime (best in daylight)",
      cost: "Free",
      narrative:
        "India's first public art district — dozens of massive murals across the Lodhi Colony blocks, by artists from all over the world. Wander with no plan, get lost, take too many photos.\n\nEnd at Meharchand Market for coffee at Blue Tokai — the perfect winter-Sunday loop."
    },
    {
      id: "red-fort",
      name: "Red Fort (Lal Qila)",
      area: "Chandni Chowk",
      tag: "🏛️ UNESCO Site",
      tagClass: "history",
      seed: "red-fort-delhi-lal-qila",
      map: "Red Fort Delhi",
      hours: "9:30 am – 4:30 pm (closed Mon)",
      cost: "₹ 50 (Indians)",
      narrative:
        "Sandstone ramparts, Diwan-i-Aam, the Rang Mahal, the marble Hammam — the whole Mughal capital's ceremonial spine in one walk.\n\nDo the fort in the morning and follow it with breakfast at Karim's or paranthe wali gali. Classic Old-Delhi winter Sunday."
    },
    {
      id: "purana-qila",
      name: "Purana Qila",
      area: "Mathura Road",
      tag: "🏛️ Ancient Walls",
      tagClass: "history",
      seed: "purana-qila-delhi",
      map: "Purana Qila Delhi",
      hours: "7:00 am – 5:00 pm",
      cost: "₹ 25 (Indians)",
      narrative:
        "The fort claimed to sit on the site of the Mahabharata's Indraprastha — massive walls, three gates, a wide grassy interior perfect for lazing on a picnic mat.\n\nThe boat ride on the moat is oddly charming; take it once, laugh about it forever."
    },
    {
      id: "tughlaqabad",
      name: "Tughlaqabad Fort",
      area: "Mehrauli-Badarpur Road",
      tag: "🏛️ Ruined Fort",
      tagClass: "history",
      seed: "tughlaqabad-fort-delhi",
      map: "Tughlaqabad Fort Delhi",
      hours: "7:00 am – 5:00 pm",
      cost: "₹ 25 (Indians)",
      narrative:
        "A 14th-century fort left mostly wild — massive cyclopean walls, cactus-covered ramparts, nobody around. The kind of place that feels like Ozymandias.\n\nWear real shoes; the ground is rocky. Go with a flask of chai and don't rush."
    },
    {
      id: "nizamuddin-dargah",
      name: "Nizamuddin Dargah",
      area: "Nizamuddin West",
      tag: "🎶 Qawwali Nights",
      tagClass: "history",
      seed: "nizamuddin-dargah-qawwali",
      map: "Hazrat Nizamuddin Dargah Delhi",
      hours: "24 hrs (qawwali Thu 6 pm)",
      cost: "Free (bring a chaadar)",
      narrative:
        "Thursday evenings, the qawwals sit in the marble courtyard of Nizamuddin's shrine and the whole place vibrates. Cover your head, take off your shoes, sit quietly at the edge and listen.\n\nWalk back through the lanes for kebabs at Ghalib Kabab Corner — 200 metres, worth every step."
    },
    {
      id: "chandni-chowk",
      name: "Chandni Chowk Heritage Walk",
      area: "Old Delhi",
      tag: "🏛️ Heritage Walk",
      tagClass: "history",
      seed: "chandni-chowk-old-delhi",
      map: "Chandni Chowk Delhi",
      hours: "Best 8 – 11 am",
      cost: "Free (guided walks ₹ 800/pp)",
      narrative:
        "Havelis, silver shops, the Sisganj Gurudwara, the town hall, Ballimaran (where Ghalib lived) — a whole city compressed into two square kilometres.\n\nDo it early on a Sunday — quieter streets, better light, and jalebi at Old Famous Jalebi Wala tastes best at 9 am in December."
    },
    {
      id: "isa-khan",
      name: "Isa Khan's Tomb",
      area: "Inside Humayun's Tomb complex",
      tag: "🏛️ Older than the Taj",
      tagClass: "history",
      seed: "isa-khan-tomb-delhi",
      map: "Isa Khan Tomb Nizamuddin Delhi",
      hours: "6:00 am – 6:00 pm",
      cost: "Included with Humayun's ticket",
      narrative:
        "An octagonal Lodhi-era tomb standing in a sunken garden, twenty years older than Humayun's tomb next door and half as visited.\n\nSit on the platform, watch the parakeets. Perfect ten-minute detour, or perfect one-hour lingering."
    }
  ],

  /* =========================== MARKETS & THRIFT =========================== */
  thrift: [
    {
      id: "sarojini",
      name: "Sarojini Nagar Market",
      area: "South West Delhi",
      tag: "🛍️ Bargain Hunt",
      tagClass: "thrift",
      seed: "sarojini-nagar-market",
      map: "Sarojini Nagar Market Delhi",
      hours: "10:00 am – 9:00 pm (closed Mon)",
      cost: "₹ 100 per haul, honestly",
      narrative:
        "The queen. Export-surplus sweaters for ₹ 300, denim jackets for ₹ 500, and a coffee break at every corner. The trick is to go on a weekday morning and to be ruthless.\n\nStart at the export block, work your way toward Baba Nagpal Corner for chaat, end with momos on the street. Bring cash and small bags."
    },
    {
      id: "janpath",
      name: "Janpath Market",
      area: "Connaught Place",
      tag: "🛍️ Silver & Boho",
      tagClass: "thrift",
      seed: "janpath-market-delhi",
      map: "Janpath Market Delhi",
      hours: "11:00 am – 9:00 pm",
      cost: "₹ 800 for two, with lunch",
      narrative:
        "Silver rings, oxidised earrings, embroidered jhola bags, Rajasthani quilts, and stacks of secondhand books at the Tibetan Market end.\n\nHaggle hard — start at a third of the asking price. End the trip with a masala dosa at Saravana Bhavan around the corner."
    },
    {
      id: "dilli-haat",
      name: "Dilli Haat",
      area: "INA",
      tag: "🛍️ Handicraft Bazaar",
      tagClass: "thrift",
      seed: "dilli-haat-ina",
      map: "Dilli Haat INA Delhi",
      hours: "10:30 am – 10:00 pm",
      cost: "₹ 30 entry",
      narrative:
        "Every state of India in one open-air bazaar — Kashmiri shawls, Nagaland weaves, Kerala coir, Rajasthani puppets. Stalls rotate every fortnight so it never feels the same twice.\n\nDo the food court for lunch: momos from Sikkim, litti chokha from Bihar, kahwa from Kashmir. Sit at a picnic bench, order too much."
    },
    {
      id: "majnu-ka-tilla",
      name: "Majnu-ka-Tilla",
      area: "North Delhi",
      tag: "🥟 Little Tibet",
      tagClass: "thrift",
      seed: "majnu-ka-tilla-tibet",
      map: "Majnu ka Tilla Delhi",
      hours: "10:00 am – 10:00 pm",
      cost: "₹ 600 for two",
      narrative:
        "A whole Tibetan colony on the banks of the Yamuna — narrow lanes, prayer flags, thukpa steaming in every doorway, backpacker cafes with the softest chairs.\n\nEat laphing at Rigo's, drink butter tea at Ama Café, and buy a woollen cardigan you don't need but absolutely want."
    },
    {
      id: "humayunpur",
      name: "Humayunpur",
      area: "Safdarjung Enclave",
      tag: "🥟 Northeast Food Hub",
      tagClass: "thrift",
      seed: "humayunpur-delhi-food",
      map: "Humayunpur Delhi",
      hours: "12:00 pm – 11:00 pm",
      cost: "₹ 500 for two",
      narrative:
        "Delhi's little Northeast — Naga, Manipuri, and Tibetan kitchens jammed into a two-street village. Order the smoked pork at Nagaland's Kitchen and thenthuk anywhere.\n\nCheap, warming, honest food — exactly what winter afternoons ask for."
    },
    {
      id: "shahpur-jat",
      name: "Shahpur Jat",
      area: "South Delhi",
      tag: "🛍️ Designer + Thrift",
      tagClass: "thrift",
      seed: "shahpur-jat-boutiques",
      map: "Shahpur Jat Delhi",
      hours: "11:00 am – 8:00 pm (many closed Sun)",
      cost: "Depends on willpower",
      narrative:
        "An urban village turned into a warren of small designer boutiques, cafés with murals on the walls, and thrift stores that turn up gold if you dig.\n\nStart at Green Grass Café for coffee, wander the alleys, end at Kunzum for a coffee and a bookshop hour."
    },
    {
      id: "meharchand",
      name: "Meharchand Market",
      area: "Lodhi Colony",
      tag: "🛍️ Slow Shopping",
      tagClass: "thrift",
      seed: "meharchand-market-lodhi",
      map: "Meharchand Market Delhi",
      hours: "10:00 am – 9:00 pm",
      cost: "₹ 1,500 for two, with coffee",
      narrative:
        "A slow, curated market — Nappa Dori, Blue Tokai, Elgin, Ivy & Bean, a handful of design stores. Pair with a walk through the Lodhi Art District right next door.\n\nOne of the softest, gentlest Sunday plans in the city."
    },
    {
      id: "khan-market",
      name: "Khan Market",
      area: "Central Delhi",
      tag: "📚 Books + Bites",
      tagClass: "thrift",
      seed: "khan-market-delhi",
      map: "Khan Market Delhi",
      hours: "10:00 am – 10:00 pm",
      cost: "₹ 2,000 for two",
      narrative:
        "Bahrisons for books, Faqir Chand for backlist gems, Perch for wine, Big Chill for tiramisu the size of a brick, Mamagoto for late lunch.\n\nExpensive, worth it once a month. Go for a long lazy Saturday and don't count the receipts."
    },
    {
      id: "karol-bagh",
      name: "Karol Bagh Market",
      area: "West Delhi",
      tag: "🧥 Winter Woolens",
      tagClass: "thrift",
      seed: "karol-bagh-market",
      map: "Karol Bagh Market Delhi",
      hours: "11:00 am – 9:00 pm (closed Mon)",
      cost: "₹ 1,000 for a full haul",
      narrative:
        "The best place in Delhi to buy actual winter clothes — down jackets, sweaters, boots, socks, thermals — at prices that don't sting.\n\nEat chole bhature at Roshan Di Kulfi afterwards; you've earned it."
    },
    {
      id: "lajpat-nagar",
      name: "Lajpat Nagar Central Market",
      area: "South Delhi",
      tag: "🛍️ Local Bazaar",
      tagClass: "thrift",
      seed: "lajpat-nagar-market",
      map: "Lajpat Nagar Central Market Delhi",
      hours: "11:00 am – 9:00 pm (closed Mon)",
      cost: "₹ 1,200 for two, with dinner",
      narrative:
        "Kurta shopping, mehendi stalls, embroidered juttis, and the loudest cheerfulest chaos in South Delhi. End at Moolchand Parathas for a butter-swimming aloo pyaaz.\n\nCome in the evening for the lights and the buzz."
    },
    {
      id: "kamla-nagar",
      name: "Kamla Nagar Market",
      area: "North Campus",
      tag: "🛍️ Student Vibe",
      tagClass: "thrift",
      seed: "kamla-nagar-market",
      map: "Kamla Nagar Market Delhi",
      hours: "11:00 am – 9:00 pm",
      cost: "₹ 700 for two",
      narrative:
        "Around Delhi University — cheap sweaters, phone cases, chunky boots, and a college-town buzz that makes you feel eighteen again.\n\nDo a chowmein-and-momo crawl on Tibetan Lane; the whole trip won't cross ₹ 400."
    },
    {
      id: "chor-bazaar",
      name: "Chor Bazaar (Sunday Book & Curio Market)",
      area: "Daryaganj",
      tag: "📚 Sunday Only",
      tagClass: "thrift",
      seed: "chor-bazaar-sunday-delhi",
      map: "Sunday Book Market Daryaganj Delhi",
      hours: "Sunday 9:00 am – 6:00 pm",
      cost: "Books ₹ 50 upward",
      narrative:
        "Every Sunday, the pavement from Delite Cinema to Daryaganj is carpeted with secondhand books, comics, first editions and forgotten hardcovers.\n\nHours of digging. Go with cash, an empty tote, and no plan for the rest of the day."
    },
    {
      id: "ina-market",
      name: "INA Market",
      area: "South Delhi",
      tag: "🐟 Deli Runs",
      tagClass: "thrift",
      seed: "ina-market-delhi",
      map: "INA Market Delhi",
      hours: "9:00 am – 8:00 pm (closed Mon)",
      cost: "₹ 1,500 for a week's groceries",
      narrative:
        "Where the city's cooks come — fresh fish, imported cheese, olive oil, pomegranate molasses, actual truffle salt. Cross the road to Dilli Haat afterwards for lunch.\n\nBring a big bag. You will overbuy."
    }
  ],

  /* =========================== PARKS & GARDENS =========================== */
  nature: [
    {
      id: "sunder-nursery",
      name: "Sunder Nursery",
      area: "Nizamuddin",
      tag: "☀️ Sunny Picnic Spot",
      tagClass: "sunny",
      seed: "sunder-nursery-delhi-picnic",
      map: "Sunder Nursery Delhi",
      hours: "7:00 am – 7:00 pm",
      cost: "₹ 50 (Indians)",
      narrative:
        "The most beautiful garden in Delhi — 90 acres of restored Mughal charbagh with 15 heritage tombs scattered like jewels. In winter, the roses are in full bloom and the lawns are gold.\n\nBring a picnic mat, samosas from Khan Chacha, and a whole afternoon. Sit near the Sunken Garden — no crowd, all sun."
    },
    {
      id: "lodhi-gardens",
      name: "Lodhi Gardens",
      area: "Lodhi Road",
      tag: "☀️ Sunny Picnic Spot",
      tagClass: "sunny",
      seed: "lodhi-gardens-delhi",
      map: "Lodhi Gardens Delhi",
      hours: "6:00 am – 8:00 pm",
      cost: "Free",
      narrative:
        "The city's living room. Bara Gumbad and Sheesh Gumbad on their little rises, joggers in the morning, families in the evening, us on a bench somewhere with coffee.\n\nGo late afternoon — the winter sun slants through the palm trees and everything turns cinematic."
    },
    {
      id: "yamuna-biodiversity",
      name: "Yamuna Biodiversity Park",
      area: "Wazirabad",
      tag: "🦉 Birding",
      tagClass: "nature",
      seed: "yamuna-biodiversity-park",
      map: "Yamuna Biodiversity Park Delhi",
      hours: "7:30 am – 4:00 pm (closed Mon)",
      cost: "Free (register at gate)",
      narrative:
        "457 acres of wetlands, meadows and native forest reclaimed from the Yamuna floodplain. Migratory ducks, waders, painted storks — free binoculars at the interpretation centre.\n\nStart at 8 am for the best bird activity. Wear layers; it's colder than the city."
    },
    {
      id: "okhla-bird",
      name: "Okhla Bird Sanctuary",
      area: "On the Delhi–Noida border",
      tag: "🦆 Migratory Birds",
      tagClass: "nature",
      seed: "okhla-bird-sanctuary",
      map: "Okhla Bird Sanctuary Noida",
      hours: "7:00 am – 5:30 pm",
      cost: "₹ 30 (Indians)",
      narrative:
        "The winter migrant capital of Delhi — flamingos, pelicans, coots, spot-billed ducks, sometimes a lone bar-headed goose. The barrage keeps the water still and the birds close.\n\nBinoculars help but even without them, a two-hour walk here in December is medicinal."
    },
    {
      id: "asola-bhatti",
      name: "Asola Bhatti Wildlife Sanctuary",
      area: "Southern Delhi Ridge",
      tag: "🌿 Wild Aravallis",
      tagClass: "nature",
      seed: "asola-bhatti-wildlife",
      map: "Asola Bhatti Wildlife Sanctuary Delhi",
      hours: "7:00 am – 5:00 pm (permit at gate)",
      cost: "₹ 30 (Indians)",
      narrative:
        "The wildest patch left in the city — leopards (very rarely), nilgai, jackals, hundreds of birds, and Neeli Jheel, an actual turquoise lake in a former mine.\n\nGo with a guide from Bombay Natural History Society if you can — they run walks on winter weekends."
    },
    {
      id: "garden-of-five-senses",
      name: "Garden of Five Senses",
      area: "Saket",
      tag: "🌸 Flower Festival",
      tagClass: "nature",
      seed: "garden-of-five-senses",
      map: "Garden of Five Senses Delhi",
      hours: "9:00 am – 7:00 pm",
      cost: "₹ 35 (Indians)",
      narrative:
        "Sculpture, water features, terraced flowerbeds, and the annual Garden Tourism Festival in February — the whole place turns into a riot of colour.\n\nCatch a live music evening at the amphitheatre if the calendar aligns."
    },
    {
      id: "deer-park",
      name: "Deer Park",
      area: "Hauz Khas",
      tag: "🦌 Deer + Peacocks",
      tagClass: "nature",
      seed: "deer-park-hauz-khas",
      map: "Deer Park Hauz Khas Delhi",
      hours: "5:00 am – 8:00 pm",
      cost: "Free",
      narrative:
        "A shady green loop with an actual deer enclosure and roaming peacocks, connected to the Hauz Khas fort and lake at one end.\n\nGood for an unplanned wander that becomes a two-hour date without you noticing."
    },
    {
      id: "nehru-park",
      name: "Nehru Park",
      area: "Chanakyapuri",
      tag: "☀️ Sunny Picnic Spot",
      tagClass: "sunny",
      seed: "nehru-park-chanakyapuri",
      map: "Nehru Park Chanakyapuri Delhi",
      hours: "5:00 am – 8:00 pm",
      cost: "Free",
      narrative:
        "80 acres of soft rolling lawn tucked into the diplomatic enclave. Free live music on winter Saturday mornings (Bhoola Bisra Geet, Music in the Park).\n\nBring bhajji and chai from the corner stall and lie in the sun."
    },
    {
      id: "national-zoo",
      name: "National Zoological Park",
      area: "Purana Qila Road",
      tag: "🦓 Family Day Out",
      tagClass: "nature",
      seed: "national-zoo-delhi",
      map: "National Zoological Park Delhi",
      hours: "9:00 am – 4:30 pm (closed Fri)",
      cost: "₹ 80 (Indians)",
      narrative:
        "The white tigers, the leopards, the elephants, the huge wetland with waterbirds — surprisingly good in winter when everyone (including the animals) is awake.\n\nBattery-operated cart if walking feels like too much."
    },
    {
      id: "buddha-jayanti",
      name: "Buddha Jayanti Park",
      area: "Ridge, near Vasant Vihar",
      tag: "🌿 Quiet Forest",
      tagClass: "nature",
      seed: "buddha-jayanti-park",
      map: "Buddha Jayanti Park Delhi",
      hours: "5:00 am – 8:00 pm",
      cost: "Free",
      narrative:
        "A quieter, wilder alternative to Lodhi — dense trees, a golden Buddha statue, meandering paths, and almost nobody on a weekday morning.\n\nA good pre-lunch walk if we're doing Karim's or Andhra Bhavan afterward."
    },
    {
      id: "sanjay-van",
      name: "Sanjay Van",
      area: "Mehrauli",
      tag: "🌳 Forest Walk",
      tagClass: "nature",
      seed: "sanjay-van-forest-delhi",
      map: "Sanjay Van Mehrauli Delhi",
      hours: "6:00 am – 6:00 pm",
      cost: "Free",
      narrative:
        "784 acres of actual forest inside the city — ruined tombs, wild peacocks, and trails that go on longer than you think. It's the Delhi you didn't know existed.\n\nGo with company, wear real shoes, and take the marked trails."
    },
    {
      id: "aravalli-biodiversity",
      name: "Aravalli Biodiversity Park",
      area: "Vasant Vihar",
      tag: "🌿 Restored Wilderness",
      tagClass: "nature",
      seed: "aravalli-biodiversity-park",
      map: "Aravalli Biodiversity Park Delhi",
      hours: "6:00 am – 6:00 pm",
      cost: "Free",
      narrative:
        "A mining wasteland turned into 700 acres of Aravalli forest. Butterflies, birds, wildflowers in February, and a great sunset point over the ridge.\n\nEnter from the Vasant Vihar gate; walk to the amphitheatre for the view."
    },
    {
      id: "mughal-gardens",
      name: "Amrit Udyan (Mughal Gardens)",
      area: "Rashtrapati Bhavan",
      tag: "🌷 Feb Only",
      tagClass: "sunny",
      seed: "mughal-gardens-rashtrapati",
      map: "Amrit Udyan Rashtrapati Bhavan Delhi",
      hours: "Feb only, 10 am – 4 pm (book online)",
      cost: "Free (booking essential)",
      narrative:
        "The president's gardens, open to the public only in February. Tulips, roses in every colour, bonsai, cactus, a musical fountain, the works.\n\nBook the earliest slot online, get there before the crowds, wander for two hours."
    }
  ],

  /* =========================== FOOD & BUTTER CHICKEN =========================== */
  food: [
    {
      id: "moti-mahal",
      name: "Moti Mahal Daryaganj",
      area: "Daryaganj, Old Delhi",
      tag: "🧈 Iconic Butter Chicken",
      tagClass: "food",
      seed: "moti-mahal-butter-chicken",
      map: "Moti Mahal Daryaganj Delhi",
      hours: "11:00 am – 12:00 midnight",
      cost: "₹ 1,800 for two",
      narrative:
        "The alleged birthplace of butter chicken and dal makhani — Kundan Lal Gujral's original 1947 kitchen. The gravy is famously restrained; not too sweet, not too heavy, just deeply savoury.\n\nOrder the butter chicken, the dal makhani, and rumali roti. Come hungry; the portions are generous."
    },
    {
      id: "havemore",
      name: "Havemore",
      area: "Pandara Road",
      tag: "🧈 Iconic Butter Chicken",
      tagClass: "food",
      seed: "havemore-pandara-road",
      map: "Havemore Pandara Road Delhi",
      hours: "12:00 pm – 12:00 midnight",
      cost: "₹ 1,800 for two",
      narrative:
        "The Pandara Road butter chicken vs Gulati war is a religious matter in this city. Havemore's is on the buttery-tangy end; the paneer tikka masala is legendary; the naan is soft and thin.\n\nSit outside if it's a warm winter evening — Pandara Road has the best hush of any old market at night."
    },
    {
      id: "gulati",
      name: "Gulati",
      area: "Pandara Road",
      tag: "🧈 Iconic Butter Chicken",
      tagClass: "food",
      seed: "gulati-pandara-road",
      map: "Gulati Restaurant Pandara Road Delhi",
      hours: "12:00 pm – 12:30 am",
      cost: "₹ 2,000 for two",
      narrative:
        "The other titan of Pandara. Gulati's butter chicken is a touch sweeter, richer, more indulgent — the mutton burra is superb, the peshawari naan is worth the calories.\n\nOrder both butter chicken versions (theirs and Havemore's) on separate nights. Compare. Fight about it lovingly."
    },
    {
      id: "aslam",
      name: "Aslam Chicken Corner",
      area: "Matia Mahal, Jama Masjid",
      tag: "🧈 Street Legend",
      tagClass: "food",
      seed: "aslam-chicken-jama-masjid",
      map: "Aslam Chicken Corner Jama Masjid Delhi",
      hours: "6:00 pm – 1:00 am",
      cost: "₹ 700 for two",
      narrative:
        "Butter chicken street-style — grilled tandoori chicken drowned in a bath of molten butter, cream and green chilli. Absurd. Delicious. A must at least once a winter.\n\nSit on the plastic stools, ignore your cholesterol, order rumali roti, thank us later."
    },
    {
      id: "rajinder-da-dhaba",
      name: "Rajinder Da Dhaba",
      area: "Safdarjung Enclave",
      tag: "🧈 Butter Chicken",
      tagClass: "food",
      seed: "rajinder-da-dhaba-safdarjung",
      map: "Rajinder Da Dhaba Safdarjung Enclave Delhi",
      hours: "12:00 pm – 12:00 midnight",
      cost: "₹ 800 for two",
      narrative:
        "Order at the counter, sit in your car, eat butter chicken and tandoori chicken from foil trays with the heater on and the windows fogging up.\n\nThis is Delhi winter in its purest form. The reshmi kebab is genuinely great."
    },
    {
      id: "kake-da-hotel",
      name: "Kake Da Hotel",
      area: "Connaught Place",
      tag: "🧈 Butter Chicken",
      tagClass: "food",
      seed: "kake-da-hotel-cp",
      map: "Kake Da Hotel CP Delhi",
      hours: "12:00 pm – 11:00 pm",
      cost: "₹ 800 for two",
      narrative:
        "Since 1931. The kind of Punjabi eating house where the plates are steel, the chairs are wooden, and the butter chicken has the texture of a dhaba grandfather.\n\nOrder the mutton kadhai too. Ignore the queue — it moves."
    },
    {
      id: "minar-cp",
      name: "Minar Restaurant",
      area: "Connaught Place",
      tag: "🧈 Old-school Punjabi",
      tagClass: "food",
      seed: "minar-restaurant-cp",
      map: "Minar Restaurant Connaught Place Delhi",
      hours: "11:00 am – 11:00 pm",
      cost: "₹ 900 for two",
      narrative:
        "A CP institution nobody talks about but everyone eats at. The butter chicken is honest, the roti is fresh, the paneer bhurji at breakfast is unreasonable.\n\nGo for a lazy 10 am breakfast — chole bhature, kulcha and lassi — before a Sunday walk."
    },
    {
      id: "karims",
      name: "Karim's",
      area: "Jama Masjid",
      tag: "🥘 Mughlai Legend",
      tagClass: "food",
      seed: "karims-jama-masjid",
      map: "Karims Jama Masjid Delhi",
      hours: "9:00 am – 12:30 am",
      cost: "₹ 900 for two",
      narrative:
        "Since 1913, in a lane behind Jama Masjid. Mutton burra, mutton korma, seekh kebabs, and the legendary chicken jahangiri. The naans are two feet long.\n\nGo for lunch on a winter Sunday. Walk the mosque steps afterwards to work off the coma."
    },
    {
      id: "al-jawahar",
      name: "Al Jawahar",
      area: "Jama Masjid",
      tag: "🥘 Mughlai Rival",
      tagClass: "food",
      seed: "al-jawahar-jama-masjid",
      map: "Al Jawahar Jama Masjid Delhi",
      hours: "7:00 am – 12:00 midnight",
      cost: "₹ 700 for two",
      narrative:
        "Right beside Karim's. Half the city swears it's better — the mutton korma is a touch lighter, the nihari is superb in the morning.\n\nTry both, argue for a decade, never resolve. That's the tradition."
    },
    {
      id: "paranthe-wali-gali",
      name: "Paranthe Wali Gali",
      area: "Chandni Chowk",
      tag: "🥘 Street Legend",
      tagClass: "food",
      seed: "paranthe-wali-gali",
      map: "Paranthe Wali Gali Chandni Chowk",
      hours: "8:00 am – 10:00 pm",
      cost: "₹ 300 for two",
      narrative:
        "A whole lane of stalls frying stuffed parathas — potato, cauliflower, paneer, banana, khoya, cashew, even karela. Served in ghee, with pickles and pumpkin curry.\n\nBreakfast plan. Do the Old Delhi walk first, arrive by 10, roll home by noon."
    },
    {
      id: "daulat-ki-chaat",
      name: "Daulat Ki Chaat",
      area: "Chandni Chowk (winter only)",
      tag: "🍬 Winter Only",
      tagClass: "food",
      seed: "daulat-ki-chaat-chandni-chowk",
      map: "Daulat Ki Chaat Chandni Chowk",
      hours: "8:00 am – 12:00 noon (Nov–Feb)",
      cost: "₹ 100 a plate",
      narrative:
        "A Delhi miracle. Milk foam whipped overnight under the moon, topped with saffron, pistachio and khoya, served on a paper leaf that dissolves in seconds.\n\nOnly winter. Only mornings. Absolutely non-negotiable."
    },
    {
      id: "chache-di-hatti",
      name: "Chache Di Hatti",
      area: "Kamla Nagar",
      tag: "🥘 Legendary Chole Bhature",
      tagClass: "food",
      seed: "chache-di-hatti-kamla-nagar",
      map: "Chache Di Hatti Kamla Nagar Delhi",
      hours: "8:00 am – 4:00 pm",
      cost: "₹ 300 for two",
      narrative:
        "A north-campus institution — the bhatura is enormous, puffs like a football, and the chole is tangy and dark. Eat standing, on newspaper, and love every bite.\n\nBest at 10 am on a cold morning. There's always a queue. It's fine."
    },
    {
      id: "sita-ram",
      name: "Sita Ram Diwan Chand",
      area: "Paharganj",
      tag: "🥘 Chole Bhature Legend",
      tagClass: "food",
      seed: "sita-ram-diwan-chand",
      map: "Sita Ram Diwan Chand Paharganj Delhi",
      hours: "8:00 am – 4:00 pm",
      cost: "₹ 250 for two",
      narrative:
        "The Paharganj chole bhature that food critics fly in for. The chole has a paneer stuffing in the bhatura — genius, a little unhinged, absolutely worth it.\n\nGo early. Sold out by 2 pm most days."
    },
    {
      id: "bille-di-hatti",
      name: "Bille Di Hatti",
      area: "Kamla Nagar",
      tag: "🍗 Butter Chicken",
      tagClass: "food",
      seed: "bille-di-hatti",
      map: "Bille Di Hatti Kamla Nagar Delhi",
      hours: "12:00 pm – 11:00 pm",
      cost: "₹ 600 for two",
      narrative:
        "A campus butter chicken cult favourite — rich, slightly smoky, generous on the cream. Eat with kulcha, not naan.\n\nGo after a Kamla Nagar shopping loop; sit on the terrace above."
    },
    {
      id: "kuremal-kulfi",
      name: "Kuremal Mohanlal Kulfi Wale",
      area: "Sitaram Bazaar, Old Delhi",
      tag: "🍬 Old Delhi Sweet",
      tagClass: "food",
      seed: "kuremal-kulfi",
      map: "Kuremal Mohanlal Kulfi Sitaram Bazaar",
      hours: "10:00 am – 11:00 pm",
      cost: "₹ 200 for two",
      narrative:
        "Since 1908. Kulfi stuffed inside whole fruits — mango, pomegranate, jamun, even mango-chilli. Yes, in winter, yes, still.\n\nA weird, wonderful thing to do at 4 pm on a January afternoon. Trust us."
    },
    {
      id: "bukhara",
      name: "Bukhara",
      area: "ITC Maurya",
      tag: "🍖 Big Night Out",
      tagClass: "food",
      seed: "bukhara-itc-maurya",
      map: "Bukhara ITC Maurya Delhi",
      hours: "12:30 pm – 2:45 pm, 7:00 pm – 11:45 pm",
      cost: "₹ 6,000 for two",
      narrative:
        "The most famous restaurant in India. Dal Bukhara, sikandari raan, murgh malai kebab, the tandoori everything. No cutlery, no menu changes since 1978, no argument.\n\nSave for an anniversary. Wear something you can eat naan with your hands in. Worth every rupee."
    },
    {
      id: "andhra-bhavan",
      name: "Andhra Bhavan Canteen",
      area: "Ashoka Road",
      tag: "🍛 South Indian Thali",
      tagClass: "food",
      seed: "andhra-bhavan-thali",
      map: "Andhra Bhavan Canteen Delhi",
      hours: "12:00 pm – 3:00 pm, 7:00 pm – 10:00 pm",
      cost: "₹ 400 for two",
      narrative:
        "The ₹ 200 Andhra thali of dreams — rice, rasam, sambhar, three curries, papad, avakaya pickle, and unlimited refills. Order the chicken curry on the side.\n\nGo at 12:30 pm sharp. The queue is real but the turnover is fast."
    },
    {
      id: "wengers",
      name: "Wenger's Bakery",
      area: "Connaught Place",
      tag: "🥐 1926 Bakery",
      tagClass: "food",
      seed: "wengers-bakery-cp",
      map: "Wengers Bakery Connaught Place Delhi",
      hours: "10:00 am – 8:00 pm",
      cost: "₹ 400 for two",
      narrative:
        "A CP survivor from 1926. Chicken patties, cream cakes, hazelnut chocolate truffles, and shami kebabs sold from a counter that hasn't changed in decades.\n\nBuy a box, eat half on the walk to Central Park. Perfect winter afternoon."
    },
    {
      id: "diggin",
      name: "Diggin Café",
      area: "Anand Lok / Chanakyapuri",
      tag: "🌟 Fairy-lit Café",
      tagClass: "food",
      seed: "diggin-cafe-delhi",
      map: "Diggin Cafe Anand Lok Delhi",
      hours: "10:00 am – 11:00 pm",
      cost: "₹ 2,000 for two",
      narrative:
        "Fairy lights strung across a courtyard, wood tables, thin-crust pizzas and mulled wine in December. The most reliably romantic outdoor cafe in the city.\n\nBook the courtyard, not the indoor room. Order the truffle mushroom pizza and the tiramisu."
    },
    {
      id: "olive-qutub",
      name: "Olive Bar & Kitchen",
      area: "Mehrauli",
      tag: "🌟 Candlelit Date",
      tagClass: "food",
      seed: "olive-bar-mehrauli",
      map: "Olive Bar and Kitchen Mehrauli Delhi",
      hours: "12:30 pm – 3:30 pm, 7:00 pm – 12:00 midnight",
      cost: "₹ 5,000 for two",
      narrative:
        "The Qutub Minar rising over the terrace, whitewashed Mediterranean walls, fairy lights, wood-fired pizza and a very good wine list.\n\nGo for dinner. Ask for a courtyard table with the Qutub view. That's the whole plan."
    }
  ]
};

/* ----------------------------- state ------------------------------ */
let currentCategory = null;
let currentPlace = null;

/* ----------------------------- routing ---------------------------- */
function showPage(id) {
  $$(".page").forEach((p) => p.classList.remove("active"));
  $(`#${id}`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ----------------------------- renderers -------------------------- */
function renderCategories() {
  const grid = $("#category-grid");
  grid.innerHTML = CATEGORIES.map(
    (c) => `
    <button class="category-card" type="button" data-cat="${c.id}"
      style="--accent:${c.accent}; --accent-soft:${c.accentSoft};">
      <span class="cat-icon" aria-hidden="true">${c.icon}</span>
      <h3>${c.title}</h3>
      <p>${c.tagline}</p>
      <span class="cat-arrow">Explore ${c.title.split(" ")[0]} <span aria-hidden="true">→</span></span>
    </button>
  `
  ).join("");

  $$(".category-card", grid).forEach((card) => {
    card.addEventListener("click", () => {
      const catId = card.dataset.cat;
      openCategory(catId);
    });
  });
}

function openCategory(catId) {
  const cat = CATEGORIES.find((c) => c.id === catId);
  if (!cat) return;
  currentCategory = cat;

  $("#places-eyebrow").textContent = cat.eyebrow;
  $("#places-title").textContent = `${cat.icon}  ${cat.title}`;
  $("#places-sub").textContent = cat.sub;

  renderPlaces(catId);
  showPage("page-places");
}

function renderPlaces(catId) {
  const list = PLACES[catId] || [];
  const grid = $("#places-grid");
  grid.innerHTML = list
    .map(
      (p) => `
    <button class="place-card" type="button" data-id="${p.id}">
      <div class="place-thumb">
        <img src="${img(p.seed, 800, 600)}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="place-body">
        <h4>${p.name}</h4>
        <p class="place-area">${p.area}</p>
        <span class="tag ${p.tagClass || ""}">${p.tag}</span>
      </div>
    </button>
  `
    )
    .join("");

  $$(".place-card", grid).forEach((card) => {
    card.addEventListener("click", () => openPlace(catId, card.dataset.id));
  });
}

function openPlace(catId, placeId) {
  const list = PLACES[catId] || [];
  const place = list.find((p) => p.id === placeId);
  if (!place) return;
  currentPlace = place;

  const card = $("#detail-card");
  card.innerHTML = `
    <div class="detail-banner">
      <img src="${img(place.seed, 1600, 900)}" alt="${place.name}" />
    </div>
    <div class="detail-body">
      <div class="detail-tag-row">
        <span class="tag ${place.tagClass || ""}">${place.tag}</span>
      </div>
      <h2 class="detail-title">${place.name}</h2>
      <p class="detail-area">📍 ${place.area}</p>
      <p class="detail-narrative">${place.narrative}</p>

      <div class="detail-meta">
        <div>
          <div class="meta-label">Best Hours</div>
          <div class="meta-value">${place.hours || "Anytime"}</div>
        </div>
        <div>
          <div class="meta-label">Rough Cost</div>
          <div class="meta-value">${place.cost || "Varies"}</div>
        </div>
        <div>
          <div class="meta-label">Season</div>
          <div class="meta-value">Nov – Feb</div>
        </div>
      </div>

      <a class="btn maps-btn" href="${mapLink(place.map)}" target="_blank" rel="noopener noreferrer">
        📍 Open in Google Maps
      </a>
    </div>
  `;
  showPage("page-detail");
}

/* ----------------------------- init ------------------------------- */
function init() {
  renderCategories();

  $("#start-btn").addEventListener("click", () => showPage("page-categories"));

  $("#back-to-categories").addEventListener("click", () =>
    showPage("page-categories")
  );

  $("#back-to-places").addEventListener("click", () => {
    if (currentCategory) {
      openCategory(currentCategory.id);
    } else {
      showPage("page-categories");
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
