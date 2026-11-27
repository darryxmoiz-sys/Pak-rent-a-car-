export const BUSINESS = 'PAK Rent A Car & Tours';
export const OWNER = 'Sufyan Ramzan';
export const EMAIL = 'pakrentacar7@gmail.com';
export const ADDRESS = 'Sher Shah Road, near PSO Petrol Pump, Anmol Shadi Hall, Kot Khawaja Saeed, Lahore';
export const MAP = 'https://www.google.com/maps/search/?api=1&query=Anmol+Shadi+Hall+Kot+Khawaja+Saeed+Lahore';
export const ALL_DRIVER = 'All types of vehicles available with driver';

// All three numbers are on WhatsApp. The first one is the main WhatsApp number.
export const PHONES = [
  { display: '0306 6097119', intl: '923066097119', label: 'Main WhatsApp' },
  { display: '0322 4796128', intl: '923224796128' },
  { display: '0314 4021768', intl: '923144021768' },
];
export const CHAT = PHONES[0];
export const CALL = PHONES[2];
export const TEL = `tel:+${CALL.intl}`;
export const WA = `https://wa.me/${CHAT.intl}`;
export const PHONE_DISPLAY = CALL.display;
export const waLink = (text, n = CHAT) => `https://wa.me/${n.intl}?text=${encodeURIComponent(text)}`;

// ---- FLEET ----
// city = PKR per day in Lahore, out = PKR per day outside Lahore, cityMax = top of a price range.
// city null => "Call for price". fuel: 'excluded' (default) or 'included'.
// variants = rate by model year (shown on the car page).
export const types = ['All', 'SUV', 'Luxury', 'Sedan', 'Pickup', 'Sports', 'Vans & Coasters'];
const img = (slug, alt) => [[`/cars/${slug}.jpg`, alt]];

export const cars = [
  { slug: 'toyota-land-cruiser-lc300', name: 'Toyota Land Cruiser V8 (LC 300)', type: 'SUV', featured: true, tour: true, city: 30000, out: 40000,
    specs: [['Seats', '7'], ['Best for', 'VIP & long trips']], blurb: 'The latest Land Cruiser flagship.',
    description: 'The newest Land Cruiser is the first choice for VIP guests, delegations and long-distance travel. Plenty of space, a smooth ride and unmatched road presence.',
    images: img('land-cruiser-lc300', 'Black Toyota Land Cruiser LC 300 for rent in Lahore') },
  { slug: 'mercedes-g-wagon', name: 'Mercedes G Wagon', type: 'Luxury', featured: true, city: 150000,
    specs: [['Seats', '5'], ['Best for', 'Weddings & VIP events']], blurb: 'Iconic, head-turning luxury SUV.',
    description: 'The G Wagon makes an entrance anywhere. Choose it for weddings, shoots and VIP occasions when you want the most striking car on the road.',
    images: img('g-wagon', 'White Mercedes G Wagon for rent in Lahore') },
  { slug: 'range-rover', name: 'Range Rover', type: 'Luxury', featured: true, city: 110000, out: 130000, fuel: 'included',
    specs: [['Seats', '5'], ['Best for', 'Weddings & executives']], blurb: 'Refined British luxury, fuel included.',
    description: 'A Range Rover brings quiet, comfortable luxury to weddings, business travel and special days. The rate shown includes fuel.',
    images: img('range-rover', 'White Range Rover for rent in Lahore') },
  { slug: 'mercedes-s-class', name: 'Mercedes S Class', type: 'Luxury', featured: true, city: 120000,
    specs: [['Seats', '5'], ['Best for', 'Weddings & VIP guests']], blurb: 'Chauffeur-style luxury sedan.',
    description: 'The S Class is the classic choice for the bride and groom, VIP guests and executive travel. A spacious rear cabin and an effortless ride.',
    images: img('s-class', 'Black and white Mercedes S Class for rent in Lahore') },
  { slug: 'toyota-land-cruiser-prado', name: 'Toyota Land Cruiser Prado', type: 'SUV', featured: true, tour: true, city: 18000, out: 20000,
    specs: [['Seats', '7'], ['Best for', 'Family trips & weddings']], blurb: 'Comfortable 4x4 SUV for family and events.',
    description: 'The Prado is comfortable, capable and spacious: a favourite for family trips, weddings and business use, in the city or on the motorway.',
    images: img('prado', 'Black Toyota Land Cruiser Prado for rent in Lahore') },
  { slug: 'toyota-fortuner-legender', name: 'Toyota Fortuner Legender', type: 'SUV', featured: true, tour: true, city: 14000, out: 16000,
    specs: [['Seats', '7'], ['Best for', 'Family & group travel']], blurb: 'Sporty 7-seater at a smart price.',
    description: 'The Fortuner Legender pairs a sporty look with a spacious cabin and an easy drive. A great-value SUV for family holidays, group travel and events.',
    images: img('fortuner', 'Black Toyota Fortuner Legender for rent in Lahore') },
  { slug: 'toyota-land-cruiser-lc200', name: 'Toyota Land Cruiser V8 (LC 200)', type: 'SUV', city: 30000,
    specs: [['Seats', '7 / 8'], ['Best for', 'VIP & long trips']], blurb: 'The proven V8 Land Cruiser.',
    description: 'The classic V8 Land Cruiser is powerful, roomy and built for long journeys on any road.',
    images: img('land-cruiser-lc200', 'Black Toyota Land Cruiser V8 LC 200 for rent in Lahore') },
  { slug: 'honda-brv', name: 'Honda BR-V', type: 'SUV', city: 8500,
    specs: [['Seats', '7'], ['Best for', 'Family trips']], blurb: 'Affordable 7-seater for the family.',
    description: 'A practical, comfortable 7-seater with room for the whole family and their luggage. A budget-friendly way to travel as a group.',
    images: img('honda-brv', 'Grey Honda BR-V for rent in Lahore') },
  { slug: 'limousine-white', name: 'Limousine (White)', type: 'Luxury', city: 90000, fuel: 'included',
    specs: [['Style', 'Stretch limousine'], ['Best for', 'Weddings & VIP events']], blurb: 'Statement stretch limo, fuel included.',
    description: 'A white stretch limousine with a decorated roof canopy and ambient lighting. Arrive in style at weddings and VIP occasions. The rate includes fuel.',
    images: img('limousine-white', 'White stretch limousine for rent in Lahore') },
  { slug: 'limousine-black', name: 'Limousine (Black)', type: 'Luxury', city: 80000, fuel: 'included',
    specs: [['Style', 'Stretch limousine'], ['Best for', 'Weddings & VIP events']], blurb: 'Black stretch limo, fuel included.',
    description: 'A classic black stretch limousine for weddings and VIP occasions. The rate includes fuel.',
    images: img('limousine-black', 'Black stretch limousine for rent in Lahore') },
  { slug: 'mercedes-c-class', name: 'Mercedes C Class', type: 'Luxury', city: 30000, out: 40000,
    specs: [['Seats', '5'], ['Best for', 'Business & weddings']], blurb: 'Elegant executive sedan.',
    description: 'A polished, comfortable sedan for business meetings, weddings and special occasions.',
    images: img('c-class', 'White Mercedes C Class for rent in Lahore') },
  { slug: 'audi-a6', name: 'Audi A6', type: 'Luxury', city: 25000, out: 35000,
    specs: [['Seats', '5'], ['Best for', 'Business & events']], blurb: 'Sophisticated executive sedan.',
    description: 'The Audi A6 is a refined, comfortable sedan for business travel, weddings and events.',
    images: img('audi-a6', 'White Audi A6 for rent in Lahore') },
  { slug: 'daihatsu-copen-2-seater', name: 'Daihatsu Copen (2-seater convertible)', type: 'Sports', city: 10000,
    specs: [['Seats', '2'], ['Body', 'Convertible']], blurb: 'Fun 2-seater convertible.',
    description: 'A compact open-top two-seater that turns heads. Perfect for shoots, photo sessions and a fun day out.',
    images: img('copen', 'White Daihatsu Copen convertible for rent in Lahore') },
  { slug: 'bmw-i8', name: 'BMW i8', type: 'Sports', city: 150000,
    specs: [['Seats', '2+2'], ['Best for', 'Shoots & special days']], blurb: 'Hybrid supercar styling.',
    description: 'A show-stopping hybrid sports car with scissor doors, for shoots, weddings and special days.',
    images: img('bmw-i8', 'BMW i8 hybrid sports car for rent in Lahore') },
  { slug: 'honda-civic', name: 'Honda Civic', type: 'Sedan', city: 8000,
    variants: [[2023, 15000], [2022, 14000], [2021, 13000], [2020, 12000], [2019, 11000], [2018, 10000], [2017, 9000], [2016, 8000]],
    specs: [['Seats', '5'], ['Best for', 'City & business']], blurb: 'Stylish, comfortable sedan.',
    description: 'A modern, comfortable sedan for city travel, business meetings and weekend trips. Choose the model year that suits your budget: newer models cost a little more.',
    images: img('honda-civic', 'White Honda Civic for rent in Lahore') },
  { slug: 'toyota-corolla-altis-grande', name: 'Toyota Corolla Altis Grande', type: 'Sedan', city: 8000, cityMax: 9000,
    specs: [['Seats', '5'], ['Best for', 'Everyday travel']], blurb: 'Reliable, spacious sedan.',
    description: 'A dependable sedan with a roomy cabin and low running costs. A good all-rounder for families, office use and everyday travel.',
    images: img('corolla-altis-grande', 'White Toyota Corolla Altis Grande for rent in Lahore') },
  { slug: 'toyota-yaris', name: 'Toyota Yaris', type: 'Sedan', city: 5000, cityMax: 7000,
    specs: [['Seats', '5'], ['Best for', 'City use & budget trips']], blurb: 'The budget-friendly choice.',
    description: 'Compact, easy to drive and easy on the budget. A smart pick for city errands, airport runs and short trips.',
    images: img('toyota-yaris', 'White Toyota Yaris for rent in Lahore') },
  { slug: 'toyota-hilux-revo', name: 'Toyota Hilux Revo', type: 'Pickup', tour: true, city: 14000, out: 16000,
    specs: [['Seats', '5'], ['Best for', 'Rough roads & northern trips']], blurb: 'Tough double-cab pickup.',
    description: 'The Hilux is built for rough roads and long days. A strong choice for northern areas and any trip where you need a rugged, dependable vehicle.',
    images: img('hilux-revo', 'Black Toyota Hilux Revo for rent in Lahore') },
  { slug: 'toyota-hiace-grand-cabin', name: 'Toyota Hiace Grand Cabin', type: 'Vans & Coasters', tour: true, city: 13000,
    specs: [['Type', 'Passenger van'], ['Best for', 'Tours & northern areas']], blurb: 'Roomy high-roof van for group tours.',
    description: 'The Grand Cabin is the favourite for group tours and trips to the northern areas. A high roof, a roof rack for luggage and room for the whole group.',
    images: [['/cars/hiace-grand-cabin.jpg', 'Silver Toyota Hiace Grand Cabin for rent in Lahore'], ['/cars/hiace-grand-cabin-2.jpg', 'Toyota Hiace Grand Cabin with roof rack for northern tours']] },
  { slug: 'toyota-coaster-saloon-5c', name: 'Toyota Coaster Saloon (5C)', type: 'Vans & Coasters', tour: true, city: 18000,
    specs: [['Type', 'Coaster bus'], ['Best for', 'Large groups & tours']], blurb: 'Comfortable coach for big groups.',
    description: 'The Coaster carries a big group in comfort, with a roof rack for luggage. Ideal for wedding parties, family tours and trips to the northern areas.',
    images: img('coaster', 'Toyota Coaster Saloon for rent in Lahore') },
];

export const reviews = [
  // Add real customer reviews here, e.g. { name: 'Ali K.', text: 'Great service, car was spotless.', car: 'Prado' }
];

export const pkr = (n) => 'PKR ' + n.toLocaleString('en-PK');
export const priceText = (c) => (c.variants ? `From ${pkr(c.city)}` : c.cityMax ? `${pkr(c.city)} – ${c.cityMax.toLocaleString('en-PK')}` : pkr(c.city));
