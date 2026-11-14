export type TourCategory = "family" | "group" | "honeymoon" | "customized";

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  category: TourCategory;
  categoryLabel: string;
  duration: string;
  departureFrom: string;
  image: string;
  summary: string;
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  excluded: string[];
  suitableFor: string;
  featured?: boolean;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "hunza-grand-expedition",
    slug: "hunza-valley-grand-tour",
    title: "Hunza Valley & Khunjerab Pass Grand Expedition",
    destination: "Hunza Valley & Gilgit",
    destinationSlug: "hunza-valley",
    category: "family",
    categoryLabel: "Family Tour",
    duration: "8 Days / 7 Nights",
    departureFrom: "Nawabshah / Sindh",
    image: "/images/destinations/hunza-passu-cones.webp",
    summary:
      "A complete journey across the Karakoram Highway to Hunza Valley, Attabad Lake, Passu Cones, and the Pakistan-China Khunjerab Border.",
    overview:
      "Specially curated for families and travel enthusiasts departing from Sindh. Experience comfortable, safe road transit, handpicked family-friendly hotels in Karimabad and Gulmit, and leisurely exploration of ancient forts, serene lakes, and soaring Himalayan peaks.",
    highlights: [
      "Attabad Lake boat cruise and water sports",
      "World-famous Passu Cones (Cathedral Ridge) viewpoint",
      "Khunjerab Pass at 4,693m (Pakistan-China border)",
      "Historic Baltit Fort & Altit Fort guided walk",
      "Traditional Hunza apricot orchards & organic food experience",
      "Comfortable dedicated family transport throughout"
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Nawabshah to Islamabad / Abbottabad",
        description:
          "Board our comfortable AC Coaster or Grand Cabin from Nawabshah. Smooth transit via motorway with scheduled meal stops and rest breaks. Overnight stay in Abbottabad / Balakot."
      },
      {
        day: 2,
        title: "Travel via Babusar Pass / KKH to Chilas & Jaglot",
        description:
          "Journey through scenic mountain passes with photo stops at Lulusar Lake and Babusar Top (seasonal). Arrive in Gilgit / Jaglot where three mighty mountain ranges meet. Overnight stay."
      },
      {
        day: 3,
        title: "Arrival in Central Hunza & Altit Fort",
        description:
          "Spectacular drive along the Karakoram Highway facing Rakaposhi viewpoint. Explore historic Altit Fort and scenic Karimabad bazaar. Overnight stay in Karimabad."
      },
      {
        day: 4,
        title: "Upper Hunza: Attabad Lake & Hussaini Bridge",
        description:
          "Visit the turquoise waters of Attabad Lake with boat ride. Cross the adventurous Hussaini Suspension Bridge and view the jagged Passu Cones. Overnight stay in Passu / Gulmit."
      },
      {
        day: 5,
        title: "Excursion to Khunjerab Pass (Pak-China Border)",
        description:
          "Drive through Khunjerab National Park to the world's highest paved international border at 4,693 meters. Witness snow peaks, marmots, and yaks. Return to Karimabad for overnight stay."
      },
      {
        day: 6,
        title: "Baltit Fort & Leisure Day in Karimabad",
        description:
          "Visit 700-year-old Baltit Fort. Enjoy panoramic views of Ultar Sar and Ladyfinger Peak. Free time for local souvenir and dry fruit shopping. Overnight in Hunza."
      },
      {
        day: 7,
        title: "Return Drive to Besham / Naran",
        description:
          "Scenic return journey along the river corridor with memorable photo stops. Evening rest and hot dinner. Overnight stay."
      },
      {
        day: 8,
        title: "Arrival back in Sindh / Nawabshah",
        description:
          "Complete the journey safely via motorway and arrive back in Nawabshah with unforgettable mountain memories."
      }
    ],
    included: [
      "Dedicated AC transportation with experienced mountain driver",
      "Hotel accommodations with family privacy and clean amenities",
      "Breakfast and standard dinners on tour days",
      "Toll taxes, fuel, driver allowances, and vehicle permits",
      "Professional tour guidance and on-road assistance by Khan Tours",
      "First-aid kit and emergency oxygen support for high passes"
    ],
    excluded: [
      "Attabad Lake boating/jetski tickets",
      "Fort entry tickets and museum passes",
      "Personal laundry, phone calls, and shopping",
      "Extra meals or beverages outside standard plan",
      "Expenses arising from road blockages or weather delays"
    ],
    suitableFor: "Families, Couples, Senior Citizens, Small Groups",
    featured: true,
  },
  {
    id: "neelum-valley-taobutt-kashmir",
    slug: "neelum-valley-taobutt-paradise-tour",
    title: "Neelum Valley, Taobutt & Ratti Gali Kashmir Tour",
    destination: "Azad Kashmir",
    destinationSlug: "azad-kashmir",
    category: "family",
    categoryLabel: "Family Tour",
    duration: "6 Days / 5 Nights",
    departureFrom: "Nawabshah / Sindh",
    image: "/images/destinations/taobutt-neelum-valley.webp",
    summary:
      "Journey into the heart of Kashmir exploring rushing rivers, dense cedar forests, Arang Kel, the remote village of Taobutt, and Ratti Gali Lake.",
    overview:
      "Azad Kashmir is celebrated for its lush greenery and serene mountain hamlets. Khan Tours takes you safely past Muzaffarabad into Keran, Sharda, Arang Kel cable car, the pristine village of Taobutt, and an adventurous 4x4 jeep safari up to Ratti Gali glacial lake.",
    highlights: [
      "Stay in riverside family hotels facing the Neelum River",
      "Excursion to Taobutt – the last fairytale village of Neelum Valley",
      "4x4 Mountain Jeep safari to Ratti Gali Lake basecamp",
      "Chairlift ride and scenic trek to the meadows of Arang Kel",
      "Historical tour of Sharda Peeth Buddhist monastery ruins",
      "Dhani & Kutton waterfall refreshment stops"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nawabshah to Islamabad / Murree Expressway",
        description:
          "Early morning departure from Nawabshah. Travel through motorways with planned stops. Reach Murree Expressway or Muzaffarabad for overnight stay."
      },
      {
        day: 2,
        title: "Muzaffarabad to Keran & Upper Neelum",
        description:
          "Follow the emerald Neelum River. Stop at Dhani Waterfall and Kutton Waterfall. Arrive at Keran on the Line of Control. Overnight stay in riverside hotel."
      },
      {
        day: 3,
        title: "Keran to Sharda & Arang Kel",
        description:
          "Drive to Sharda. Take the cable car across the river and hike up to the green paradise of Arang Kel. Visit ancient Sharda Peeth ruins. Overnight stay in Sharda."
      },
      {
        day: 4,
        title: "Full Day Excursion to Taobutt",
        description:
          "Board 4x4 mountain jeeps to the secluded paradise of Taobutt. Marvel at traditional wooden log houses, cascading streams, and untouched forests. Return to Sharda for overnight stay."
      },
      {
        day: 5,
        title: "Ratti Gali Lake Base & Return to Keran / Muzaffarabad",
        description:
          "Jeep track to Ratti Gali Lake base. Trek to the awe-inspiring turquoise alpine lake surrounded by glaciated cliffs. Return down for overnight stay."
      },
      {
        day: 6,
        title: "Return Journey to Nawabshah",
        description:
          "Travel back via motorway, arriving safely in Nawabshah by night."
      }
    ],
    included: [
      "Saloon Coaster / Grand Cabin transport from Nawabshah",
      "4x4 off-road mountain jeeps for Taobutt and Ratti Gali",
      "Standard family hotel rooms with private bathrooms",
      "Daily breakfast and warm dinners",
      "Driver expenses, fuel, and road tolls",
      "Full tour coordination by experienced Khan Tours guide"
    ],
    excluded: [
      "Arang Kel cable car tickets and horse riding fees",
      "Lunch and mid-day snacks",
      "Personal items, medicine, and warm clothing",
      "Unforeseen costs due to road landslips or natural events"
    ],
    suitableFor: "Families, Nature Lovers, Couples, Groups",
    featured: true,
  },
  {
    id: "skardu-deosai-safari",
    slug: "skardu-deosai-plains-safari",
    title: "Skardu, Katpana Desert & Deosai Plains Safari",
    destination: "Skardu & Baltistan",
    destinationSlug: "skardu-baltistan",
    category: "group",
    categoryLabel: "Group Tour",
    duration: "9 Days / 8 Nights",
    departureFrom: "Nawabshah / Sindh",
    image: "/images/destinations/skardu-shangrila.webp",
    summary:
      "Explore the majestic landscapes of Baltistan: high cold desert sand dunes, Shangrila Resort, historic forts, and the vast Deosai plateau.",
    overview:
      "A thrilling group adventure for students, friends, and corporate teams departing from Nawabshah. Discover the dramatic meeting of sand dunes and snow peaks at Katpana, cruise on Upper Kachura Lake, explore Shigar Fort, and cross the legendary Land of Giants (Deosai National Park).",
    highlights: [
      "Heart-shaped Lower Kachura Lake at Shangrila Resort",
      "Boating in the emerald depths of Upper Kachura Lake",
      "Sunset and stargazing across Katpana Cold Desert dunes",
      "Safari across Deosai Plains (Sheosar Lake & Bara Pani)",
      "400-year-old Shigar Fort & royal stone palace",
      "Authentic Balti cuisine and hospitality"
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Nawabshah to Abbottabad",
        description:
          "Gather at Nawabshah departure hub. Travel smoothly along modern motorways to Abbottabad. Check-in and overnight rest."
      },
      {
        day: 2,
        title: "Abbottabad through Babusar Pass to Chilas",
        description:
          "Ascend through Kaghan Valley, cross the breathtaking Babusar Pass, and descend to Chilas on the Indus River. Overnight stay."
      },
      {
        day: 3,
        title: "Scenic Indus Gorge Road to Skardu",
        description:
          "Spectacular drive along the newly carpeted Skardu Highway carved through towering mountain gorges. Arrive in Skardu town. Overnight stay."
      },
      {
        day: 4,
        title: "Shangrila Lake & Upper Kachura Lake",
        description:
          "Visit the iconic Shangrila Resort pagoda. Short scenic hike to Upper Kachura Lake for freshwater boating and trout lunch. Overnight stay in Skardu."
      },
      {
        day: 5,
        title: "Deosai National Park & Sheosar Lake",
        description:
          "Full day 4x4 safari across the Deosai plateau at an average altitude of 4,000 meters. Visit crystal clear Sheosar Lake and Kala Pani. Overnight stay in Skardu."
      },
      {
        day: 6,
        title: "Shigar Valley, Fort & Katpana Cold Desert",
        description:
          "Explore the historic Shigar Fort and fruit orchards. In late afternoon, visit Katpana Desert to photograph sand dunes surrounded by snow peaks. Overnight stay."
      },
      {
        day: 7,
        title: "Manthoka Waterfall & Khaplu Palace",
        description:
          "Scenic excursion to the roaring Manthoka Waterfall and ancient Khaplu Palace. Return to Skardu for night stay."
      },
      {
        day: 8,
        title: "Return Drive to Chilas / Besham",
        description:
          "Begin return journey through the Indus gorge to Chilas or Besham. Evening dinner and overnight stay."
      },
      {
        day: 9,
        title: "Arrival in Nawabshah",
        description:
          "Complete return journey via motorway, arriving safely back home in Nawabshah."
      }
    ],
    included: [
      "Luxury AC transport (Coaster or Hiace Grand Cabin)",
      "Dedicated 4x4 jeeps for Deosai National Park safari",
      "Hotel accommodations (triple / quad sharing for groups, twin on request)",
      "Daily breakfast and hearty dinners",
      "Driver allowances, highway tolls, and parking taxes",
      "Experienced group tour leader from Khan Tours"
    ],
    excluded: [
      "Boating fees at Upper Kachura Lake",
      "Lunches and beverages outside standard meals",
      "Personal gear and shopping",
      "Emergency medical expenses or unscheduled deviations"
    ],
    suitableFor: "Friends, Student Groups, Corporates, Adventure Seekers",
    featured: true,
  },
  {
    id: "naran-swat-valley-combo",
    slug: "naran-kaghan-swat-valley-combo-tour",
    title: "Naran Kaghan & Swat Valley Scenic Corridor",
    destination: "Naran & Swat Valley",
    destinationSlug: "naran-kaghan",
    category: "family",
    categoryLabel: "Family Tour",
    duration: "7 Days / 6 Nights",
    departureFrom: "Nawabshah / Sindh",
    image: "/images/destinations/saif-ul-malook-lulusar-lake.webp",
    summary:
      "The ultimate two-in-one Northern Pakistan family vacation covering Lake Saif-ul-Malook, Babusar Top, Malam Jabba, Kalam, and Mahodand Lake.",
    overview:
      "A stress-free, family-oriented itinerary combining the roaring waterfalls of Kaghan Valley with the lush alpine forests of Swat Valley. Ideal for families seeking scenic drives, pleasant weather, and comfortable roadside amenities.",
    highlights: [
      "Jeep excursion to legendary Lake Saif-ul-Malook",
      "Panoramic views from Babusar Pass Top (4,173m)",
      "Malam Jabba chairlift ride and alpine zipline",
      "Kalam Valley, Ushu Pine Forest, and Mahodand Lake",
      "Trout fish dining along the Kunhar and Swat rivers",
      "Comfortable family-friendly hotels throughout"
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Nawabshah to Balakot / Shogran",
        description:
          "Depart Nawabshah in comfortable AC vehicle. Transit via motorway to the gateway of Kaghan Valley. Check-in and overnight stay."
      },
      {
        day: 2,
        title: "Shogran, Siri Paye Meadows & Naran",
        description:
          "4x4 jeep ride to Siri Paye meadows. Continue drive along Kunhar river into Naran bazaar. Evening stroll and overnight stay."
      },
      {
        day: 3,
        title: "Lake Saif-ul-Malook & Babusar Pass",
        description:
          "Morning 4x4 jeep safari to Lake Saif-ul-Malook. Afternoon excursion past Lulusar Lake up to Babusar Top. Overnight stay in Naran."
      },
      {
        day: 4,
        title: "Cross over to Swat Valley via Motorway",
        description:
          "Travel smoothly via Swat Motorway into the lush Swat Valley. Visit White Palace Marghuzar. Overnight stay in Mingora / Faza Gat."
      },
      {
        day: 5,
        title: "Malam Jabba Ski Resort & Drive to Kalam",
        description:
          "Experience the chairlift and mountain activities at Malam Jabba. Drive through Madyan and Bahrain into Kalam Valley. Overnight in Kalam."
      },
      {
        day: 6,
        title: "Mahodand Lake & Ushu Forest",
        description:
          "4x4 mountain jeep safari through Ushu Forest and Matiltan to the stunning Mahodand Lake. Return to Mingora for overnight stay."
      },
      {
        day: 7,
        title: "Return Journey to Nawabshah",
        description:
          "Head home via motorway, reaching Nawabshah safely by night."
      }
    ],
    included: [
      "AC Coaster / Grand Cabin transportation from Nawabshah",
      "4x4 Jeeps for Saif-ul-Malook, Siri Paye, and Mahodand Lake",
      "Clean family hotel rooms with private bathrooms",
      "Daily breakfast and evening dinner",
      "All road tolls, fuel, and experienced driver charges",
      "Dedicated tour coordinator by Khan Tours"
    ],
    excluded: [
      "Chairlift and zipline tickets at Malam Jabba",
      "Boating tickets at lakes",
      "Lunches and roadside snacks",
      "Personal purchases and laundry"
    ],
    suitableFor: "Families with Children, Couples, Groups",
    featured: true,
  },
  {
    id: "honeymoon-kashmir-luxury",
    slug: "honeymoon-kashmir-luxury-retreat",
    title: "Azad Kashmir Private Honeymoon Retreat",
    destination: "Azad Kashmir",
    destinationSlug: "azad-kashmir",
    category: "honeymoon",
    categoryLabel: "Honeymoon Tour",
    duration: "5 Days / 4 Nights",
    departureFrom: "Nawabshah / Sindh (or Islamabad pickup)",
    image: "/images/destinations/taobutt-neelum-valley.webp",
    summary:
      "A romantic, private getaway with luxury riverside resort stays in Keran and Sharda, private car transport, and gentle walks in Arang Kel.",
    overview:
      "Crafted exclusively for newlyweds seeking privacy, romance, and tranquility amidst the breathtaking mountains of Neelum Valley. Enjoy private vehicle transit, premium river-facing executive rooms, candlelight dinners on request, and custom pacing.",
    highlights: [
      "Private dedicated Toyota Corolla / Prado with professional chauffeur",
      "Premium riverfront executive rooms with panoramic balconies",
      "Romantic chairlift ride to the fairytale plateau of Arang Kel",
      "Customized daily pace with no rushed schedules",
      "Photo stops at Dhani waterfall and secluded riverbanks",
      "Personalized 24/7 travel concierge by Khan Tours"
    ],
    itinerary: [
      {
        day: 1,
        title: "Private Pickup & Drive to Keran",
        description:
          "Chauffeur-driven private car pickup. Travel past Muzaffarabad into Keran along the emerald river. Welcome drinks and romantic overnight stay."
      },
      {
        day: 2,
        title: "Keran to Sharda & Riverside Stroll",
        description:
          "Relaxed morning breakfast. Scenic drive deeper into Neelum Valley to Sharda. Peaceful evening stroll along river banks. Overnight stay in Sharda."
      },
      {
        day: 3,
        title: "Arang Kel Cable Car & Meadows Walk",
        description:
          "Take the cable car up to the lush meadows of Arang Kel. Walk amidst pine forests with panoramic mountain backdrops. Return to Sharda for overnight stay."
      },
      {
        day: 4,
        title: "Scenic Excursion towards Taobutt or Kutton",
        description:
          "Visit remote forested valleys and sparkling springs. Relax at Kutton resort with quiet evening dinner. Overnight stay."
      },
      {
        day: 5,
        title: "Return Journey to Islamabad / Nawabshah",
        description:
          "Comfortable return drive home with cherished memories of Kashmir."
      }
    ],
    included: [
      "Private dedicated executive car (GLI / Civic / Prado) throughout",
      "Top-tier executive hotel rooms with scenic views",
      "Daily breakfast and customized dinner",
      "Fuel, toll taxes, and dedicated professional chauffeur",
      "Special room decor and honeymoon cake on arrival day",
      "Full privacy and flexible daily itinerary"
    ],
    excluded: [
      "Personal shopping and horse rides",
      "Lunches outside the planned hotels",
      "Air tickets or train tickets if traveling via Islamabad"
    ],
    suitableFor: "Couples, Honeymooners",
    featured: true,
  },
  {
    id: "astore-minimarg-rainbow-lake",
    slug: "astore-minimarg-rainbow-lake-wilderness",
    title: "Astore Valley, Minimarg & Rainbow Lake Expedition",
    destination: "Astore & Minimarg",
    destinationSlug: "astore-valley",
    category: "customized",
    categoryLabel: "Customized Tour",
    duration: "7 Days / 6 Nights",
    departureFrom: "Nawabshah / Sindh",
    image: "/images/destinations/rainbow-lake-astore.webp",
    summary:
      "An exclusive off-the-beaten-path journey to Rama Lake beneath Nanga Parbat, Burzil Pass, and the fairytale chalets of Rainbow Lake in Minimarg.",
    overview:
      "Designed for true nature lovers who want to explore beyond commercial tourist trails. Experience the serene Rama Meadows, ancient pine groves, and cross into the restricted border valley of Minimarg to see Rainbow Lake and Domail.",
    highlights: [
      "Rama Meadows and crystal clear Rama Lake under Nanga Parbat",
      "Rainbow Lake in Minimarg – surrounded by wooden log cabins",
      "Untouched mountain villages of Domail and Chillum",
      "Exclusive convoy clearances and entry permit management",
      "Stargazing in zero-light-pollution high altitude valleys",
      "Specialized 4x4 mountain jeeps with experienced drivers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Nawabshah to Abbottabad",
        description:
          "Smooth motorway drive from Nawabshah to Abbottabad. Check-in and overnight rest."
      },
      {
        day: 2,
        title: "Abbottabad through Babusar to Astore Valley",
        description:
          "Drive over Babusar Pass down to Chilas and enter the narrow Astore Gorge. Reach Astore town for overnight stay."
      },
      {
        day: 3,
        title: "Rama Meadows & Rama Alpine Lake",
        description:
          "4x4 jeep ride up to Rama Meadows surrounded by pine forests. Hike to Rama Lake with views of Nanga Parbat. Overnight stay in Rama."
      },
      {
        day: 4,
        title: "Astore to Minimarg & Rainbow Lake",
        description:
          "Cross Burzil Pass with verified military checkpoint clearances. Enter the enchanting Minimarg valley and visit Rainbow Lake. Overnight stay in wooden rest house / camps."
      },
      {
        day: 5,
        title: "Domail Exploration & Wild Meadows",
        description:
          "Explore the frontier settlement of Domail, wooden footbridges, and wildflower meadows. Return towards Astore for overnight stay."
      },
      {
        day: 6,
        title: "Return Drive to Besham / Naran",
        description:
          "Scenic return journey through mountain valleys to Besham or Naran for night rest."
      },
      {
        day: 7,
        title: "Arrival in Nawabshah",
        description:
          "Travel safely back to Nawabshah via motorway network."
      }
    ],
    included: [
      "AC Coaster / Hiace from Nawabshah + 4x4 Jeeps for Minimarg & Rama",
      "All required administrative entry permits and security clearances",
      "Standard accommodations in Astore, Rama, and Minimarg",
      "Breakfast and dinners prepared by local cooks / hotels",
      "Fuel, road tolls, and specialized mountain drivers",
      "On-ground tour management by Khan Tours"
    ],
    excluded: [
      "Personal trekking gear and warm sleeping bags (if camping)",
      "Mid-day snacks and lunches",
      "Personal medical expenses"
    ],
    suitableFor: "Adventure Enthusiasts, Nature Photographers, Explorer Groups",
    featured: true,
  },
  {
    id: "swat-kalam-weekend-family",
    slug: "swat-kalam-family-getaway",
    title: "Swat, Malam Jabba & Kalam Valley Refresh",
    destination: "Swat Valley",
    destinationSlug: "swat-valley",
    category: "family",
    categoryLabel: "Family Tour",
    duration: "5 Days / 4 Nights",
    departureFrom: "Nawabshah / Sindh",
    image: "/images/destinations/swat-kalam-valley.webp",
    summary:
      "A quick and deeply refreshing family escape to the Switzerland of the East with smooth motorway access, Malam Jabba ski chairlift, and Kalam riversides.",
    overview:
      "Perfect for families with busy work or school schedules. The Swat Motorway allows swift and comfortable transit from Sindh directly into the cool pine breezes of Swat, Kalam, and Ushu forest.",
    highlights: [
      "Malam Jabba chairlift ride and mountain activities",
      "Scenic drives through Kalam Valley and Swat River banks",
      "Ushu Pine Forest and glacier stream photo points",
      "White Palace Marghuzar royal gardens",
      "Family shopping in Mingora handicrafts and embroidery bazaars"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nawabshah to Islamabad / Swat Motorway",
        description:
          "Early start from Nawabshah. Fast motorway transit straight to the entrance of Swat Valley. Overnight stay in Mingora / Saidu Sharif."
      },
      {
        day: 2,
        title: "Malam Jabba Alpine Day",
        description:
          "Ascend to Malam Jabba at 2,800m. Enjoy chairlift rides, zipline, and panoramic views of the Hindu Kush peaks. Return to Mingora for overnight stay."
      },
      {
        day: 3,
        title: "Mingora to Kalam Valley",
        description:
          "Drive along the rushing Swat River through Madyan and Bahrain. Arrive in Kalam Valley. Walk through Ushu Forest. Overnight stay in Kalam."
      },
      {
        day: 4,
        title: "Mahodand Lake Excursion & Return to Mingora",
        description:
          "Morning 4x4 jeep trip to Mahodand Lake. Afternoon drive back to Mingora. Evening shopping for authentic Swati shawls and honey. Overnight stay."
      },
      {
        day: 5,
        title: "Return to Nawabshah",
        description:
          "Smooth motorway drive back to Nawabshah, arriving comfortably by late evening."
      }
    ],
    included: [
      "Dedicated AC family transport with professional driver",
      "Family hotel rooms with clean modern amenities",
      "4x4 jeep for Mahodand Lake",
      "Daily breakfast and dinner",
      "All toll taxes, parking fees, and fuel"
    ],
    excluded: [
      "Activity tickets at Malam Jabba",
      "Lunches and snacks",
      "Personal shopping and souvenirs"
    ],
    suitableFor: "Families, Couples, Senior Citizens",
    featured: false,
  },
  {
    id: "basho-valley-skardu-expedition",
    slug: "basho-valley-skardu-meadows-tour",
    title: "Basho Valley, Shangrila & Skardu Wilderness Tour",
    destination: "Basho Valley & Skardu",
    destinationSlug: "basho-valley",
    category: "group",
    categoryLabel: "Adventure & Family",
    duration: "8 Days / 7 Nights",
    departureFrom: "Nawabshah / Sindh & Islamabad",
    image: "/images/destinations/basho-valley-skardu.webp",
    summary:
      "Explore the untouched alpine pine forests of Basho Valley, the iconic Shangrila Resort, Katpana Cold Desert, and pristine glacial streams of Baltistan.",
    overview:
      "A thrilling yet family-comfortable expedition to the hidden jewel of Baltistan: Basho Valley. Walk across historic wooden suspension bridges, camp beneath towering pine ridges, relax by the serene Shangrila Resort and Lower Kachura Lake, and experience the golden sand dunes of Katpana Cold Desert.",
    highlights: [
      "4x4 mountain jeep safari up the scenic ascent to Basho Valley",
      "Basho wooden suspension bridge and crystal-clear glacier stream walks",
      "Authentic visit to Shangrila Resort & Lower Kachura Lake",
      "Upper Kachura Lake boat ride and trout fish dining",
      "Katpana Cold Desert dunes and sunset photo stop",
      "Shigar Fort and ancient Balti historical heritage tour",
      "Direct guidance by Mohammed Murad Khan and experienced Baltistan mountain team"
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Nawabshah to Islamabad / Naran",
        description: "Board comfortable AC mountain fleet from Nawabshah. Motorway transit to northern gateway with comfortable rest pauses."
      },
      {
        day: 2,
        title: "Karakoram Highway / Babusar Pass to Chilas / Jaglot",
        description: "Scenic drive through high mountain corridors, passing the junction point of three great mountain ranges (Himalayas, Karakoram, Hindu Kush)."
      },
      {
        day: 3,
        title: "Drive into Skardu Valley & Shangrila Resort",
        description: "Arrive in Skardu along the Indus River gorge. Visit the legendary Shangrila Resort (Lower Kachura Lake) and relax by the lakeside pagoda chalets."
      },
      {
        day: 4,
        title: "Full Day Basho Valley Jeep Safari & Pine Forest Walk",
        description: "Board 4x4 jeeps for the rugged scenic climb into Basho Valley. Explore the iconic suspension bridge, pine forests, pristine cold streams, and tranquil alpine meadows. Evening return to hotel."
      },
      {
        day: 5,
        title: "Katpana Cold Desert, Shigar Valley & Fort",
        description: "Explore the surreal high-altitude sand dunes of Katpana Desert. Visit historic Shigar Fort and local Balti handicraft bazaars."
      },
      {
        day: 6,
        title: "Upper Kachura Lake & Manthal Buddha Rock",
        description: "Leisurely day at Upper Kachura Lake with optional boating and fresh trout lunch. Visit ancient Buddhist rock carvings."
      },
      {
        day: 7,
        title: "Return Drive towards Chilas / Besham",
        description: "Commence return journey along the Karakoram Highway with scenic photo stops."
      },
      {
        day: 8,
        title: "Smooth Transit back to Nawabshah / Sindh",
        description: "Comfortable motorway ride back home to Nawabshah with unforgettable memories of Basho Valley and Skardu."
      }
    ],
    included: [
      "Dedicated AC transport from Nawabshah/Islamabad and back",
      "Specialized 4x4 jeeps for Basho Valley mountain track",
      "Standard family & group hotel accommodations with hot water",
      "Daily breakfast and traditional hot dinners",
      "Fuel, toll taxes, checkpoint clearances, and expert driver allowances",
      "On-ground tour guidance by Khan Tours management"
    ],
    excluded: [
      "Boating or personal activity tickets",
      "Lunches and extra beverages",
      "Personal gear and shopping"
    ],
    suitableFor: "Families, Nature Lovers, Photographers, Groups",
    featured: true,
  },
  {
    id: "custom-corporate-tour-planner",
    slug: "customized-corporate-group-tour",
    title: "Custom Group & Corporate Retreat Planner",
    destination: "Custom Northern Destination",
    destinationSlug: "customized-tours",
    category: "customized",
    categoryLabel: "Customized Tour",
    duration: "Flexible (3 to 14 Days)",
    departureFrom: "Nawabshah / Any City in Sindh",
    image: "/images/tours/4x4-mountain-jeep-safari.webp",
    summary:
      "Tailor-made itineraries for university batches, corporate teams, medical associations, or large family reunions with custom buses, meals, and activities.",
    overview:
      "Khan Tours Nawabshah specializes in crafting customized tours tailored to your group's budget, dates, and pace. Whether you want a luxury team-building retreat in Hunza or an adventure trek to Ratti Gali, we handle logistics, transport, hotels, and permits from A to Z.",
    highlights: [
      "Customized pickup from Nawabshah, Sukkur, Hyderabad, or Karachi",
      "Flexible duration from quick 4-day getaways to 2-week expeditions",
      "Dedicated AC Saloon Coasters, Grand Cabins, or luxury 4x4 convoys",
      "Custom meal menus including authentic Sindhi & Pakistani cuisine",
      "Bonfire nights, barbecue dinners, and live music arrangements on request",
      "Official company invoices and corporate tax receipts provided"
    ],
    itinerary: [
      {
        day: 1,
        title: "Custom Route Design & Departure",
        description:
          "Khan Tours coordinates departure according to your schedule, with dedicated convoy management and planned meal stops."
      },
      {
        day: 2,
        title: "Destination Arrival & Team Check-in",
        description:
          "Smooth group check-in at reserved hotel. Briefing by Mohammed Murad Khan and local guides."
      },
      {
        day: 3,
        title: "Tailored Sightseeing & Team Activities",
        description:
          "Custom daytime sightseeing, photo sessions, and evening bonfire with barbecue dinner."
      },
      {
        day: 4,
        title: "Return Transit & Safe Arrival",
        description:
          "Punctual, safe return journey back to your origin city in Sindh."
      }
    ],
    included: [
      "Dedicated group fleet with professional drivers and backup crew",
      "Handpicked group hotels with verified capacity and safety",
      "Custom meal arrangements (Breakfast, Lunch, Dinner options)",
      "24/7 dedicated Khan Tours tour manager",
      "Complete logistics, tolls, permits, and fuel included"
    ],
    excluded: [
      "Individual personal expenses",
      "Optional adventure sports outside planned package"
    ],
    suitableFor: "Corporate Companies, Universities, Large Families, Associations",
    featured: false,
  }
];
