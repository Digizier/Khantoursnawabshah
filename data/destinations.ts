export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  bestTime: string;
  altitude: string;
  attractions: string[];
  travelTips: string[];
  featured?: boolean;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "hunza",
    slug: "hunza-valley",
    name: "Hunza Valley",
    region: "Gilgit-Baltistan",
    tagline: "The Roof of the World & Karakoram Marvel",
    description:
      "Famous for dramatic mountain panoramas, ancient forts, turquoise lakes, and welcoming hospitality along the Karakoram Highway. Experience Passu Cones, Attabad Lake, and the Khunjerab Pass at the Pakistan-China border.",
    image: "/images/destinations/hunza-passu-cones.webp",
    bestTime: "April to October",
    altitude: "2,438 meters (8,000 ft)",
    attractions: [
      "Passu Cones (Cathedral Ridge)",
      "Attabad Lake Boating & Jetski",
      "Baltit & Altit Ancient Forts",
      "Khunjerab Pass (Highest Border at 4,693m)",
      "Hussaini Suspension Bridge",
      "Karimabad Bazaar & Local Apricot Delicacies"
    ],
    travelTips: [
      "Carry warm layers even during summer months for high pass visits.",
      "Cash is essential as ATMs on the Karakoram Highway can be unpredictable.",
      "Stay well hydrated for altitude acclimatization."
    ],
    featured: true,
  },
  {
    id: "skardu",
    slug: "skardu-baltistan",
    name: "Skardu & Baltistan",
    region: "Gilgit-Baltistan",
    tagline: "Gateway to the Giants of the Karakoram",
    description:
      "A land of extreme natural beauty featuring the highest cold deserts, tranquil alpine lakes, and ancient Buddhist heritage. Home to Shangrila, Upper Kachura, Katpana Desert, and the gateway to K2.",
    image: "/images/destinations/skardu-shangrila.webp",
    bestTime: "May to October",
    altitude: "2,228 meters (7,310 ft)",
    attractions: [
      "Shangrila Resort & Lower Kachura Lake",
      "Upper Kachura Lake Clear Waters",
      "Katpana Cold Desert Sand Dunes",
      "Deosai National Park (Land of Giants)",
      "Shigar Fort & Organic Valley",
      "Khaplu Palace & Chaqchan Mosque"
    ],
    travelTips: [
      "Deosai Plains are accessible primarily between July and September.",
      "Bring sunblock and sunglasses for high-altitude desert sunlight.",
      "Respect local Balti traditions and heritage sites."
    ],
    featured: true,
  },
  {
    id: "kashmir",
    slug: "azad-kashmir",
    name: "Azad Kashmir & Neelum Valley",
    region: "Azad Jammu & Kashmir",
    tagline: "Lush Valleys, Rushing Streams & Glacial Lakes",
    description:
      "A paradise of dense pine forests, rushing rivers, and breathtaking glacial lakes. Journey deep into Neelum Valley through Keran, Sharda, Arang Kel, the remote village of Taobutt, and high-altitude Ratti Gali Lake.",
    image: "/images/destinations/ratti-gali-lake.webp",
    bestTime: "May to November",
    altitude: "1,600 to 3,700 meters",
    attractions: [
      "Ratti Gali Glacial Lake (3,700m)",
      "Taobutt (Last Enchanting Village of Neelum Valley)",
      "Arang Kel (Pearl of Neelum Valley)",
      "Sharda Peeth Ancient Temple & Ruins",
      "Kutton & Dhani Waterfalls",
      "Keran along the Neelum River"
    ],
    travelTips: [
      "Carry original CNIC cards as security checkpoints verify all visitors.",
      "4x4 jeeps are mandatory for the off-road track to Ratti Gali Lake base.",
      "Weather can turn cool and rainy rapidly; pack waterproof jackets."
    ],
    featured: true,
  },
  {
    id: "naran",
    slug: "naran-kaghan",
    name: "Naran & Kaghan Valley",
    region: "Khyber Pakhtunkhwa",
    tagline: "Alpine Lakes, Babusar Pass & Roaring Kunhar River",
    description:
      "Pakistan's most cherished mountain corridor connecting Khyber Pakhtunkhwa to Gilgit-Baltistan via the legendary Babusar Pass (4,173m). Highlights include Lake Saif-ul-Malook, Lulusar Lake, and scenic pine valleys.",
    image: "/images/destinations/saif-ul-malook-lulusar-lake.webp",
    bestTime: "June to October",
    altitude: "2,409 to 4,173 meters",
    attractions: [
      "Lake Saif-ul-Malook with Malika Parbat Peak",
      "Babusar Pass Top (4,173 meters)",
      "Lulusar Lake Turquoise Waters",
      "Kunhar River Trout Fishing & Rafting",
      "Jalkhand & Besal Meadows",
      "Shogran & Siri Paye Meadows"
    ],
    travelTips: [
      "Babusar Pass is typically open between late June and late October.",
      "Hire authorized local 4x4 drivers for the Saif-ul-Malook jeep track.",
      "Early morning starts avoid highway congestion in peak season."
    ],
    featured: true,
  },
  {
    id: "swat",
    slug: "swat-valley",
    name: "Swat Valley & Kalam",
    region: "Khyber Pakhtunkhwa",
    tagline: "The Switzerland of the East",
    description:
      "Renowned for emerald pine slopes, roaring waterfalls, serene alpine lakes, and winter skiing at Malam Jabba. Explore Bahrain, Kalam Valley, Ushu Forest, and the breathtaking Mahodand Lake.",
    image: "/images/destinations/mountain-waterfall-bridge.webp",
    bestTime: "All Year Round (Skiing in Winter, Sightseeing in Summer)",
    altitude: "991 to 2,865 meters",
    attractions: [
      "Malam Jabba Ski Resort & Chairlift",
      "Kalam Valley & Swat River Confluence",
      "Mahodand Lake & Saifullah Lake",
      "Ushu Pine Forest",
      "White Palace Marghuzar",
      "Bahrain Riverside Handicraft Bazaars"
    ],
    travelTips: [
      "Motorway network provides fast and smooth road access from Punjab & Sindh.",
      "4x4 jeeps are required from Kalam to reach Mahodand Lake.",
      "Winter trips require thermal wear and snow boots for Malam Jabba."
    ],
    featured: true,
  },
  {
    id: "astore",
    slug: "astore-valley",
    name: "Astore Valley",
    region: "Gilgit-Baltistan",
    tagline: "Untouched Wilderness beneath Nanga Parbat",
    description:
      "A pristine highland valley flanked by the mighty Nanga Parbat (8,126m). Astore leads to magical destinations like Rama Lake, Rama Meadows, and the wild high-altitude track toward Deosai Plains.",
    image: "/images/destinations/kaghan-river-stream.webp",
    bestTime: "June to September",
    altitude: "2,600 meters",
    attractions: [
      "Rama Meadows & Rama Alpine Lake",
      "Views of Nanga Parbat (Killer Mountain)",
      "Tarishing Village Basecamp Trail",
      "Chillum Chokki Gateway to Deosai",
      "Crystal Clear Trout Streams"
    ],
    travelTips: [
      "Rugged terrain requires experienced mountain drivers and high-clearance 4x4 vehicles.",
      "Pack portable power banks as remote valley villages may have limited electricity.",
      "Essential stop for nature enthusiasts seeking tranquility away from crowd routes."
    ],
    featured: false,
  },
  {
    id: "minimarg",
    slug: "minimarg-domail",
    name: "Minimarg & Domail",
    region: "Gilgit-Baltistan",
    tagline: "The Hidden Fairytale of Rainbow Lake",
    description:
      "One of Pakistan's best-kept secrets near the Burzil Pass. A tranquil border valley surrounded by wildflower meadows, dense pine forests, and the magical wooden chalets of Rainbow Lake.",
    image: "/images/destinations/taobutt-neelum-valley.webp",
    bestTime: "July to September",
    altitude: "2,845 meters",
    attractions: [
      "Rainbow Lake (Artificial Trout & Lily Lake)",
      "Domail Wooden Architecture & Meadows",
      "Burzil Pass (Historic Mountain Pass)",
      "Untouched Pine Forests & Glacial Brooks",
      "Peaceful High-Altitude Nature Walks"
    ],
    travelTips: [
      "Entry requires prior administrative permission and verified Pakistani CNIC.",
      "Open only for a short summer window due to heavy winter snow.",
      "Khan Tours arranges all required permits and convoy clearances."
    ],
    featured: false,
  },
  {
    id: "domail",
    slug: "domail-valley",
    name: "Domail",
    region: "Gilgit-Baltistan",
    tagline: "Wild Frontiers & Untamed Meadows",
    description:
      "Located just beyond Minimarg, Domail is an untouched frontier settlement with log cabins, cascading streams, and untouched alpine tranquility right next to the high peaks of the Great Himalayas.",
    image: "/images/destinations/babusar-pass-snow.webp",
    bestTime: "July to September",
    altitude: "3,000 meters",
    attractions: [
      "Domail Meadows & Wildflower Fields",
      "Traditional Wooden Architecture",
      "Pristine Alpine Streams & Forest Trails",
      "Stargazing under Crystal Clear Skies"
    ],
    travelTips: [
      "Temperatures drop sharply after sunset; carry high-grade woolens.",
      "Always travel with an experienced tour convoy.",
      "Strict preservation rules apply; visitors must leave zero waste."
    ],
    featured: false,
  },
];
