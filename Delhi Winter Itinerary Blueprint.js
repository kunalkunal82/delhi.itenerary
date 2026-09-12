// Data structure containing niche & curated places for Delhi Nov-Feb
const placesData = {
    adventure: [
        {
            id: 'pup-cafe',
            name: 'Puppychino / Bark Street (Noida/Gurugram)',
            tag: '🐱🐶 Pet Lovers Must Visit',
            img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
            desc: 'Spend a cozy winter afternoon surrounded by cute dogs and cats! Great coffee, pet treats, and warm sunshine outdoor seating.',
            map: 'https://maps.google.com/?q=Bark+Street+Noida'
        },
        {
            id: 'pottery-village',
            name: 'Kumhar Gram (Potters Village, Uttam Nagar)',
            tag: '🎨 Hands-on Craft',
            img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80',
            desc: 'Walk through thousands of artisan potters crafting clay diyas, kulhads, and pots. Try your hand at the potter\'s wheel together.',
            map: 'https://maps.google.com/?q=Kumhar+Gram+Uttam+Nagar'
        },
        {
            id: 'waste-to-wonder',
            name: 'Waste to Wonder Park',
            tag: '📸 Fun Photo Walks',
            img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
            desc: 'Replicas of 7 Wonders of the World created entirely from industrial scrap metal. Perfect for an evening stroll under winter lights.',
            map: 'https://maps.google.com/?q=Waste+to+Wonder+Park+Delhi'
        },
        {
            id: 'isate-bowling',
            name: 'ISATE / Smaaash Bowling & Arcade',
            tag: '🎮 Gaming & Arcade',
            img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
            desc: 'Challenge each other to bowling, VR gaming, and arcade classic games on a chilly winter evening.',
            map: 'https://maps.google.com/?q=Cyberhub+Gurgaon+Bowling'
        },
        {
            id: 'sanjay-lake-kayak',
            name: 'Sanjay Lake Adventure Park',
            tag: '🚣 Boating & Zip-line',
            img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
            desc: 'Peaceful lake in East Delhi with pedal boating, jungle walks, and gentle ropes adventure courses.',
            map: 'https://maps.google.com/?q=Sanjay+Lake+Mayur+Vihar'
        },
        {
            id: 'bouldering-delhi',
            name: 'BoulderBox (Vasant Kunj)',
            tag: '🧗 Active & Fun',
            img: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80',
            desc: 'Indoor bouldering and climbing gym. Super fun partner activity to try bouldering for beginner fitness levels.',
            map: 'https://maps.google.com/?q=BoulderBox+Vasant+Kunj'
        },
        {
            id: 'ice-skating',
            name: 'ISKATE by Roseate (Gurugram)',
            tag: '⛸️ Winter Special',
            img: 'https://images.unsplash.com/photo-1517177646641-83fe12d1d73b?auto=format&fit=crop&w=600&q=80',
            desc: 'India’s premier indoor ice-skating rink. Gliding on real ice with romantic winter tunes playing.',
            map: 'https://maps.google.com/?q=ISKATE+Ambience+Mall+Gurgaon'
        },
        {
            id: 'museum-of-illusions',
            name: 'Museum of Illusions (Connaught Place)',
            tag: '🌀 Mind-bending Fun',
            img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
            desc: 'Interactive optical illusions, vortex tunnels, and photo ops that will make you both laugh out loud.',
            map: 'https://maps.google.com/?q=Museum+of+Illusions+CP+Delhi'
        },
        {
            id: 'craft-museum-cafe',
            name: 'National Crafts Museum & Lota Cafe',
            tag: '🧵 Village Vibe',
            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
            desc: 'Open-air village craft exhibits paired with regional Indian snacks in a peaceful courtyard setting.',
            map: 'https://maps.google.com/?q=National+Crafts+Museum+Delhi'
        },
        {
            id: 'dilli-haat-shopping',
            name: 'Dilli Haat (INA Market)',
            tag: '🛍️ Winter Shopping & Stalls',
            img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
            desc: 'Handicrafts from all Indian states, hot momos from Sikkim stall, and winter shawls under warm sunshine.',
            map: 'https://maps.google.com/?q=Dilli+Haat+INA'
        }
    ],

    culture: [
        {
            id: 'sunder-nursery-ruins',
            name: 'Sunder Nursery Heritage Monuments',
            tag: '🏛️ 16th Century Marvels',
            img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80',
            desc: 'Beautifully restored UNESCO heritage site featuring Mughal-era tombs, water channels, and quiet marble benches.',
            map: 'https://maps.google.com/?q=Sunder+Nursery+Delhi'
        },
        {
            id: 'agrarsen-ki-baoli',
            name: 'Agrasen ki Baoli',
            tag: '📜 Stepwell Architecture',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
            desc: 'A hidden 108-step ancient stepwell right in the middle of central Delhi. Mystical vibe and cool breeze.',
            map: 'https://maps.google.com/?q=Agrasen+ki+Baoli'
        },
        {
            id: 'humayun-tomb',
            name: 'Humayun’s Tomb Garden Complex',
            tag: '🕌 Mughal Heritage',
            img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
            desc: 'The red sandstone inspiration behind the Taj Mahal. Perfect for golden hour winter photography.',
            map: 'https://maps.google.com/?q=Humayuns+Tomb'
        },
        {
            id: 'safdarjung-tomb',
            name: 'Safdarjung Tomb Sunset Stroll',
            tag: '🌅 Peaceful Ruins',
            img: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80',
            desc: 'Far less crowded than other spots, offering grand archways, gardens, and quiet corners for conversation.',
            map: 'https://maps.google.com/?q=Safdarjung+Tomb'
        },
        {
            id: 'hauz-khas-fort',
            name: 'Hauz Khas Fort & Lake Overlook',
            tag: '🏰 14th Century Fort',
            img: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80',
            desc: 'Explore Medieval madrasa ruins overlooking a serene lake filled with winter migratory ducks.',
            map: 'https://maps.google.com/?q=Hauz+Khas+Fort'
        },
        {
            id: 'mehrauli-archaeological-park',
            name: 'Mehrauli Archaeological Park',
            tag: '🌳 Hidden History Forest',
            img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
            desc: '200 acres of lush forest housing over 100 historical monuments, including Jamali Kamali tomb.',
            map: 'https://maps.google.com/?q=Mehrauli+Archaeological+Park'
        },
        {
            id: 'ngma-art',
            name: 'National Gallery of Modern Art (NGMA)',
            tag: '🎨 Fine Art & Quiet Courtyards',
            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
            desc: 'Housed in the former palace of the Maharaja of Jaipur. World-class modern Indian art collections.',
            map: 'https://maps.google.com/?q=NGMA+Delhi'
        },
        {
            id: 'tughlaqabad-fort',
            name: 'Tughlaqabad Fort Ruins',
            tag: '⛰️ Massive Stone Fortress',
            img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
            desc: 'Colossal stone fort walls and secret underground passages. Offers panoramic views of Delhi skyline.',
            map: 'https://maps.google.com/?q=Tughlaqabad+Fort'
        },
        {
            id: 'lodhi-art-district',
            name: 'Lodhi Art District (Street Murals)',
            tag: '🎨 India\'s First Open Art Gallery',
            img: 'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?auto=format&fit=crop&w=600&q=80',
            desc: 'Take a relaxed walk through Lodhi Colony streets to view massive wall murals painted by global artists.',
            map: 'https://maps.google.com/?q=Lodhi+Art+District'
        },
        {
            id: 'qutub-minar',
            name: 'Qutub Minar Complex',
            tag: '🗼 UNESCO Landmark',
            img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
            desc: 'Marvel at the world\'s tallest brick minaret surrounded by iron pillars and intricate carved arcades.',
            map: 'https://maps.google.com/?q=Qutub+Minar'
        }
    ],

    nature: [
        {
            id: 'sunder-nursery-gardens',
            name: 'Sunder Nursery Arboretum',
            tag: '🌳 300+ Tree Species & Birds',
            img: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80',
            desc: 'Lush green lawns, bonsai gardens, winter floral beds, and serene ponds. Best winter picnic spot!',
            map: 'https://maps.google.com/?q=Sunder+Nursery'
        },
        {
            id: 'lodhi-gardens',
            name: 'Lodhi Gardens Sunny Lawns',
            tag: '☀️ Classic Delhi Winter Sunbathing',
            img: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80',
            desc: 'Pack a cozy blanket, hot chai in a flask, and spend the afternoon reading or chatting on soft grass.',
            map: 'https://maps.google.com/?q=Lodhi+Gardens'
        },
        {
            id: 'yamuna-biodiversity-park',
            name: 'Yamuna Biodiversity Park',
            tag: '🌿 Wetlands & Winter Migratory Birds',
            img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
            desc: 'A natural haven housing native Delhi flora, butterfly conservatories, and thousands of winter birds.',
            map: 'https://maps.google.com/?q=Yamuna+Biodiversity+Park'
        },
        {
            id: 'asola-bhatti',
            name: 'Asola Bhatti Wildlife Sanctuary & Hidden Lakes',
            tag: '🥾 Nature Hike & Blue Waters',
            img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
            desc: 'Hike through Southern Ridge forest trails leading to serene quarry lakes like Neelmaug lake.',
            map: 'https://maps.google.com/?q=Asola+Bhatti+Wildlife+Sanctuary'
        },
        {
            id: 'oakhla-bird-sanctuary',
            name: 'Okhla Bird Sanctuary',
            tag: '🦆 Bird Watching Haven',
            img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
            desc: 'Situated where Yamuna enters Noida. Spot northern pintails, flamingoes, and migratory winter ducks.',
            map: 'https://maps.google.com/?q=Okhla+Bird+Sanctuary'
        },
        {
            id: 'aravali-biodiversity-park',
            name: 'Aravali Biodiversity Park (Gurugram)',
            tag: '🌵 Desert Forest Trails',
            img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
            desc: 'Restored native forest with walking and cycling trails. Beautiful golden morning sunlight.',
            map: 'https://maps.google.com/?q=Aravali+Biodiversity+Park+Gurgaon'
        },
        {
            id: 'garden-of-five-senses',
            name: 'Garden of Five Senses (Said-ul-Ajaib)',
            tag: '🌺 Bamboo Courts & Sculptures',
            img: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80',
            desc: '20-acre park designed to stimulate all senses with solar energy park, lily pools, and quiet walks.',
            map: 'https://maps.google.com/?q=Garden+of+Five+Senses'
        },
        {
            id: 'amrit-udyan',
            name: 'Amrit Udyan (Mughal Gardens - Feb Special)',
            tag: '🌹 Tulip & Rose Extravaganza',
            img: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80',
            desc: 'Opens exclusively in February! View rare Dutch tulips, manicured lawns, and musical fountains at Rashtrapati Bhavan.',
            map: 'https://maps.google.com/?q=Rashtrapati+Bhavan+Amrit+Udyan'
        },
        {
            id: 'central-park-cp',
            name: 'Central Park Connaught Place',
            tag: '🌆 City Center Greenery',
            img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
            desc: 'Sit under the massive Indian national flag, listen to street musicians perform, and enjoy CP winter energy.',
            map: 'https://maps.google.com/?q=Central+Park+Connaught+Place'
        },
        {
            id: 'roshanara-bagh',
            name: 'Roshanara Bagh (Old Delhi)',
            tag: '🌳 Historic 17th Century Garden',
            img: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80',
            desc: 'Lush historic park built by Shah Jahan’s daughter, known for ancient trees and seasonal flower beds.',
            map: 'https://maps.google.com/?q=Roshanara+Bagh'
        }
    ],

    food: [
        {
            id: 'moti-mahal-deluxe',
            name: 'Moti Mahal Deluxe (Daryaganj)',
            tag: '🍗 Original Butter Chicken Legend',
            img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
            desc: 'The birth place of Butter Chicken! Tangy, velvety tomato gravy with charcoal-smoked tandoori chicken.',
            map: 'https://maps.google.com/?q=Moti+Mahal+Daryaganj'
        },
        {
            id: 'have-more-pandara',
            name: 'Havemore (Pandara Road)',
            tag: '🧈 Rich & Creamy Butter Chicken',
            img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
            desc: 'Famous late-night food strip. Their butter chicken is legendary—rich, buttery, and paired with garlic naan.',
            map: 'https://maps.google.com/?q=Havemore+Pandara+Road'
        },
        {
            id: 'gulati-pandara',
            name: 'Gulati Restaurant (Pandara Road)',
            tag: '🔥 Mughlai Fine Dining Legend',
            img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
            desc: 'Famous for decadent North Indian feast, galouti kababs, and an iconic gravy butter chicken recipe.',
            map: 'https://maps.google.com/?q=Gulati+Pandara+Road'
        },
        {
            id: 'kake-da-hotel',
            name: 'Kake Da Hotel (Connaught Place)',
            tag: '🍲 Heritage Dhaba Style',
            img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
            desc: 'No-nonsense legendary dhaba since 1931 serving rich chicken curry, butter chicken, and tandoori ro tis.',
            map: 'https://maps.google.com/?q=Kake+Da+Hotel+CP'
        },
        {
            id: 'rajinder-da-dhaba',
            name: 'Rajinder Da Dhaba (Safdarjung Enclave)',
            tag: '🍢 Open Air Roadside Legend',
            img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
            desc: 'Vibrant winter roadside dining! Order chicken malai tikka, galouti kababs, and butter chicken right to your car bonnet or standing tables.',
            map: 'https://maps.google.com/?q=Rajinder+Da+Dhaba'
        },
        {
            id: 'aslam-chicken',
            name: 'Aslam Chicken (Jama Masjid)',
            tag: '🧈 Melted Butter Chicken Extravaganza',
            img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
            desc: 'Unique Old Delhi style: charcoal-grilled chicken doused in literal streams of melted Amul butter and spices.',
            map: 'https://maps.google.com/?q=Aslam+Chicken+Old+Delhi'
        },
        {
            id: 'changezi-chicken',
            name: 'Changezi Chicken (Daryaganj / Karol Bagh)',
            tag: '🌶️ Tangy & Spicy Chicken',
            img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
            desc: 'Slow-cooked thick tangy tomato gravy with tender chicken. A staple winter dinner for spicy food lovers.',
            map: 'https://maps.google.com/?q=Changezi+Chicken+Daryaganj'
        },
        {
            id: 'khakee-dilligate',
            name: 'Minar (Connaught Place L-Block)',
            tag: '🍗 Old-School Classic',
            img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
            desc: 'Cozy traditional dining with vintage wooden interiors and one of CP\'s smoothest butter chicken gravies.',
            map: 'https://maps.google.com/?q=Minar+Restaurant+Connaught+Place'
        },
        {
            id: 'diggin-anand-lok',
            name: 'Diggin Cafe (Anand Lok / Chanakyapuri)',
            tag: '🕯️ Romantic Fairy-Lit Aesthetic Cafe',
            img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
            desc: 'Covered in fairy lights and green vines. Serves great woodfired pizzas, pastas, and winter hot chocolate.',
            map: 'https://maps.google.com/?q=Diggin+Anand+Lok'
        },
        {
            id: 'leo-pizzeria',
            name: 'Leo’s Artisanal Pizza (Vasant Vihar)',
            tag: '🍕 Dog-Friendly & Woodfired Pizza',
            img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
            desc: 'Named after the owner’s dog Leo. Best Neapolitan sourdough pizzas in town and super dog-friendly atmosphere!',
            map: 'https://maps.google.com/?q=Leos+Artisanal+Pizza+Delhi'
        },
        {
            id: 'olive-bar-kitchen',
            name: 'Olive Bar & Kitchen (Mehrauli)',
            tag: '🥂 Fancy Courtyard Dining',
            img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
            desc: 'White pebbled courtyard under a massive banyan tree near Qutub Minar. Romantic fine-dining Mediterranean vibes.',
            map: 'https://maps.google.com/?q=Olive+Bar+and+Kitchen+Mehrauli'
        },
        {
            id: 'daulat-ki-chaat',
            name: 'Daulat Ki Chaat (Chandni Chowk Stalls)',
            tag: '☁️ Winter Exclusive Sweet Cloud',
            img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
            desc: 'Only available during winter! Whisked milk foam infused with saffron, pistachio, and khoya. Melts in mouth.',
            map: 'https://maps.google.com/?q=Chandni+Chowk+Delhi'
        },
        {
            id: 'fabcafe-sunder-nursery',
            name: 'Fabcafe by the Lake (Sunder Nursery)',
            tag: '☕ Scenic Lake Cafe',
            img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
            desc: 'Sip hot artisan coffee and healthy rolls overlooking a lotus lake in the heart of Sunder Nursery.',
            map: 'https://maps.google.com/?q=Fabcafe+Sunder+Nursery'
        },
        {
            id: 'nizamuddin-kebabs',
            name: 'Ghalib Kabab Corner (Nizamuddin)',
            tag: '🍢 Street Kebabs & Shahi Tukda',
            img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
            desc: 'Juicy mutton seekh kebabs served with mint chutney and piping hot rumali roti on chilly nights.',
            map: 'https://maps.google.com/?q=Ghalib+Kabab+Corner'
        },
        {
            id: 'amritsari-kulcha-corner',
            name: 'Kulcha King (Sarojini Nagar / Lajpat)',
            tag: '🥐 Crispy Winter Breakfast',
            img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
            desc: 'Stuffed butter-crushed kulchas with spicy chole, imli chutney onion, and a big glass of sweet lassi.',
            map: 'https://maps.google.com/?q=Kulcha+King+Delhi'
        }
    ]
};

// State Variables
let currentCategory = '';
let currentPlace = null;

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open Specific Category Page
function openCategory(categoryKey) {
    currentCategory = categoryKey;
    const places = placesData[categoryKey];
    
    // Set Header
    const categoryTitles = {
        adventure: '⚡ Fun, Play & Pet Spots',
        culture: '🏛️ Heritage, Ruins & Winter Strolls',
        nature: '🌿 Sunlit Parks & Nature Trails',
        food: '🍗 Butter Chicken & Winter Eats'
    };
    document.getElementById('category-title').innerText = categoryTitles[categoryKey];

    // Render Grid
    const grid = document.getElementById('places-grid');
    grid.innerHTML = places.map(place => `
        <div class="place-card" onclick="openPlace('${place.id}')">
            <img src="${place.img}" alt="${place.name}">
            <div class="place-card-body">
                <span>${place.tag}</span>
                <h4>${place.name}</h4>
            </div>
        </div>
    `).join('');

    showPage('places-list');
}

// Open Place Detail Page
function openPlace(placeId) {
    const places = placesData[currentCategory];
    currentPlace = places.find(p => p.id === placeId);

    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = `
        <img src="${currentPlace.img}" alt="${currentPlace.name}">
        <div class="detail-info">
            <h2>${currentPlace.name}</h2>
            <span class="detail-tag">${currentPlace.tag}</span>
            <p>${currentPlace.desc}</p>
            <a href="${currentPlace.map}" target="_blank" class="map-btn">📍 Open in Google Maps</a>
        </div>
    `;

    showPage('place-detail');
}