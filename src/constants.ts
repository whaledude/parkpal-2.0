

import { Resort, Park, Interest, LocationType, ParkData, Restroom, BreakSpot, SnackLocation, AttractionInfo, TriviaQuestion } from './types';

export const DAILY_PASS_PRICE = 4.99;
export const TRIP_PASS_PRICE = 19.99;
export const MAGIC_PASS_PRICE = 99.99;

export const RESORT_THEMES: { [key in Resort]: { 
    bg: string; 
    text: string; 
    accent: string; 
    gradient: string;
    light: {
        gradient: string;
        gradientColors: [string, string];
        accentBg: string;
        accentBorder: string;
        accentText: string;
        accentBgLight: string;
        hopperBg: string;
        hopperBorder: string;
        hopperText: string;
        hopperBadgeBg: string;
        hopperBadgeText: string;
    }
} } = {
  [Resort.WDW]: {
    bg: 'bg-blue-900',
    text: 'text-blue-100',
    accent: 'border-blue-400',
    gradient: 'from-blue-500 to-cyan-400',
    light: {
        gradient: 'from-blue-600 to-cyan-400',
        gradientColors: ['#2563EB', '#22D3EE'],
        accentBg: 'bg-blue-500',
        accentBorder: 'border-blue-500',
        accentText: 'text-white',
        accentBgLight: 'bg-blue-100',
        hopperBg: 'bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500',
        hopperBorder: 'border-amber-600',
        hopperText: 'text-white',
        hopperBadgeBg: 'bg-amber-800',
        hopperBadgeText: 'text-white',
    }
  },
  [Resort.DL]: {
    bg: 'bg-purple-900',
    text: 'text-purple-100',
    accent: 'border-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    light: {
        gradient: 'from-purple-600 to-pink-500',
        gradientColors: ['#9333EA', '#EC4899'],
        accentBg: 'bg-purple-500',
        accentBorder: 'border-purple-500',
        accentText: 'text-white',
        accentBgLight: 'bg-purple-100',
        hopperBg: 'bg-gradient-to-br from-slate-200 via-gray-300 to-slate-400',
        hopperBorder: 'border-gray-400',
        hopperText: 'text-slate-800',
        hopperBadgeBg: 'bg-slate-700',
        hopperBadgeText: 'text-white',
    }
  },
};

export const PARKS_DATA: { [key in Park]: ParkData } = {
  [Park.MK]: { name: 'Magic Kingdom', resort: Resort.WDW, type: LocationType.THEME_PARK, color: 'bg-[#4285F4]', gradientClasses: 'from-blue-500 to-sky-400' },
  [Park.EP]: { name: 'Epcot', resort: Resort.WDW, type: LocationType.THEME_PARK, color: 'bg-[#999fa0]', gradientClasses: 'from-slate-500 to-slate-300' },
  [Park.HS]: { name: 'Hollywood Studios', resort: Resort.WDW, type: LocationType.THEME_PARK, color: 'bg-[#cf2514]', gradientClasses: 'from-red-600 to-orange-400' },
  [Park.AK]: { name: 'Animal Kingdom', resort: Resort.WDW, type: LocationType.THEME_PARK, color: 'bg-[#008001]', gradientClasses: 'from-green-600 to-lime-400' },
  [Park.BB]: { name: 'Blizzard Beach', resort: Resort.WDW, type: LocationType.WATER_PARK, color: 'bg-[#40b8d8]', gradientClasses: 'from-cyan-500 to-sky-300' },
  [Park.TL]: { name: 'Typhoon Lagoon', resort: Resort.WDW, type: LocationType.WATER_PARK, color: 'bg-[#09a1ac]', gradientClasses: 'from-teal-500 to-cyan-400' },
  [Park.DS]: { name: 'Disney Springs', resort: Resort.WDW, type: LocationType.OTHER, color: 'bg-[#a4402b]', gradientClasses: 'from-amber-700 to-orange-500' },
  [Park.RD]: { name: 'Resort Day', resort: Resort.WDW, type: LocationType.OTHER, color: 'bg-[#0a2239]', gradientClasses: 'from-slate-800 to-slate-600' },
  [Park.DLP]: { name: 'Disneyland Park', resort: Resort.DL, type: LocationType.THEME_PARK, color: 'bg-[#ff66a9]', gradientClasses: 'from-pink-500 to-rose-400' },
  [Park.DCA]: { name: 'Disney California Adventure', resort: Resort.DL, type: LocationType.THEME_PARK, color: 'bg-[#fe8b04]', gradientClasses: 'from-orange-500 to-amber-300' },
};

export const INTERESTS_DATA: {name: Interest, description: string}[] = [
  { name: Interest.THRILL, description: "Roller coasters and big drops"},
  { name: Interest.SHOWS, description: "Parades, fireworks, and stage shows"},
  { name: Interest.CHARACTERS, description: "Meet & Greets with your favorites"},
  { name: Interest.FAMILY, description: "Fun for all ages"},
  { name: Interest.SHOPPING, description: "Find the perfect souvenir"},
  { name: Interest.RELAXING, description: "Take it easy and soak in the atmosphere"},
];


export const VIDEO_GENERATION_MESSAGES = [
    "Gathering pixie dust...",
    "Choreographing the magic...",
    "Consulting with the Imagineers...",
    "Syncing with the music of the parks...",
    "Adding a touch of sparkle...",
    "Your magical memory is almost ready!",
];

export const PARK_PAL_LIVE_LOADING_MESSAGES = [
    "Warming up the churros...",
    "Paging Mr. Morrow...",
    "Starting up the PeopleMover...",
    "Checking for purple walls...",
    "Polishing the crystal ball...",
    "Waking up the Country Bears...",
    "Aligning the monorails...",
    "Cross-checking rope drop times...",
    "Ensuring there's a great, big, beautiful tomorrow...",
];

interface ParkExperiences {
  hours: string;
  categories: { [category: string]: { [subCategory: string]: string[] } };
  utilities: {
    restrooms: Restroom[];
    breakSpots: BreakSpot[];
    snackLocations: SnackLocation[];
  }
}

export const EXPERIENCES_DATA: { [key in Park]?: ParkExperiences } = {
    [Park.MK]: {
        hours: '9:00 AM - 10:00 PM',
        categories: {
            'Attractions': {
                'Thrill': ['Space Mountain', 'Big Thunder Mountain Railroad', 'TRON Lightcycle / Run', "Tiana's Bayou Adventure"],
                'Family': ["Peter Pan's Flight", "it's a small world", "Jungle Cruise", "Haunted Mansion", "Pirates of the Caribbean", 'Astro Orbiter', "Buzz Lightyear's Space Ranger Spin", 'The Barnstormer', 'Dumbo the Flying Elephant', 'Mad Tea Party', 'Seven Dwarfs Mine Train', 'Prince Charming Regal Carrousel', 'The Many Adventures of Winnie the Pooh', 'Under the Sea ~ Journey of The Little Mermaid', 'The Magic Carpets of Aladdin'],
                'Walk-Thru': ['Swiss Family Treehouse', 'Tom Sawyer Island'],
                'Slow': ["Walt Disney's Carousel of Progress", "Walt Disney's Enchanted Tiki Room", "Mickey's PhilharMagic", "Monsters, Inc. Laugh Floor", "The Hall of Presidents", "Country Bear Jamboree", 'Tomorrowland Transit Authority PeopleMover', 'Tomorrowland Speedway', 'Walt Disney World Railroad', 'Main Street Vehicles', 'Liberty Square Riverboat'],
            },
            'Characters': {
                'Princesses': ['Meet Cinderella and a Visiting Princess at Princess Fairytale Hall'],
                'Mickey & Friends': ['Meet Mickey at Town Square Theater'],
            },
            'Shows & Parades': {
                'Stage Show': ["Mickey's Magical Friendship Faire"],
                'Parade': ['Festival of Fantasy Parade'],
                'Fireworks': ['Happily Ever After'],
            },
            'Table Service Dining': {
                'Character Dining': ["Cinderella's Royal Table", 'The Crystal Palace'],
                'Themed': ["Be Our Guest Restaurant", "Jungle Navigation Co. LTD Skipper Canteen", "Liberty Tree Tavern"],
            },
            'Quick Service Dining': {
                'American': ["Casey's Corner", "Pecos Bill Tall Tale Inn and Cafe"],
                'Unique': ["Sleepy Hollow", "Gaston's Tavern"],
            },
            'Tours & Extras': {
                'Tours': ["Disney's Keys to the Kingdom Tour"],
            }
        },
        utilities: {
            restrooms: [
                { name: 'Main Street, U.S.A. Restrooms', location: 'Main Street, U.S.A.' },
                { name: 'Adventureland Restrooms', location: 'Adventureland' },
                { name: 'Frontierland Restrooms', location: 'Frontierland' },
                { name: 'Liberty Square Restrooms', location: 'Liberty Square' },
                { name: 'Fantasyland Restrooms (Village)', location: 'Fantasyland' },
                { name: 'Fantasyland Restrooms (Cheshire Cafe)', location: 'Fantasyland' },
                { name: 'Tomorrowland Restrooms (Rockettower Plaza)', location: 'Tomorrowland' },
            ],
            breakSpots: [
                { name: "The Hall of Presidents", location: "Liberty Square", description: "A comfortable, air-conditioned theater showcasing American history." },
                { name: "Walt Disney's Carousel of Progress", location: "Tomorrowland", description: "A classic rotating theater with comfy seats and AC, perfect for a 20-minute rest." },
                { name: "Tomorrowland Transit Authority PeopleMover", location: "Tomorrowland", description: "A relaxing 10-minute ride offering great views and a constant breeze." },
                { name: "Country Bear Jamboree", location: "Frontierland", description: "A classic, air-conditioned show with plenty of seating." },
                { name: "Mickey's PhilharMagic", location: "Fantasyland", description: "A large, dark, and cool 3D theater to escape the heat." }
            ],
            snackLocations: [
                { name: "Aloha Isle", location: "Adventureland", description: "Home of the famous DOLE Whip soft-serve.", menuUrl: "https://disneyworld.disney.go.com/dining/magic-kingdom/aloha-isle/menus/" },
                { name: "Sunshine Tree Terrace", location: "Adventureland", description: "Serving the legendary Citrus Swirl and other refreshing treats.", menuUrl: "https://disneyworld.disney.go.com/dining/magic-kingdom/sunshine-tree-terrace/menus/" },
                { name: "Sleepy Hollow", location: "Liberty Square", description: "Famous for its fresh fruit waffle sandwiches and funnel cakes.", menuUrl: "https://disneyworld.disney.go.com/dining/magic-kingdom/sleepy-hollow/menus/" },
                { name: "Gaston's Tavern", location: "Fantasyland", description: "Try LeFou's Brew and a giant warm cinnamon roll.", menuUrl: "https://disneyworld.disney.go.com/dining/magic-kingdom/gastons-tavern/menus/" },
                { name: "Plaza Ice Cream Parlor", location: "Main Street, U.S.A.", description: "Classic hand-scooped ice cream, sundaes, and floats.", menuUrl: "https://disneyworld.disney.go.com/dining/magic-kingdom/plaza-ice-cream-parlor/menus/" }
            ]
        }
    },
    [Park.HS]: {
        hours: '8:30 AM - 9:00 PM',
        categories: {
            'Attractions': {
                'Thrill': ['Slinky Dog Dash', 'The Twilight Zone Tower of Terror', "Rock 'n' Roller Coaster Starring Aerosmith", 'Star Wars: Rise of the Resistance', 'Millennium Falcon: Smugglers Run', 'Star Tours – The Adventures Continue'],
                'Family': ["Mickey & Minnie's Runaway Railway", 'Toy Story Mania!', 'Alien Swirling Saucers'],
                'Walk-Thru': ['Walt Disney Presents'],
            },
            'Shows & Parades': {
                 'Show': ['For the First Time in Forever: A Frozen Sing-Along Celebration', 'Indiana Jones Epic Stunt Spectacular!', 'Muppet*Vision 3D', "Lightning McQueen's Racing Academy"],
            },
            'Table Service Dining': {
                'Themed': ['Sci-Fi Dine-In Theater Restaurant', "50's Prime Time Café"],
                'Character Dining': ['Hollywood & Vine'],
            },
            'Quick Service Dining': {
                'American': ["Woody's Lunch Box"],
                'Unique': ['Docking Bay 7 Food and Cargo'],
            },
        },
        utilities: { restrooms: [], breakSpots: [], snackLocations: [] }
    },
    [Park.EP]: {
        hours: '9:00 AM - 9:00 PM',
        categories: {
            'Attractions': {
                'Thrill': ['Guardians of the Galaxy: Cosmic Rewind', 'Test Track', 'Mission: SPACE'],
                'Family': ['Frozen Ever After', "Remy's Ratatouille Adventure", 'Spaceship Earth', "Soarin' Around the World", "Journey Into Imagination with Figment", 'The Seas with Nemo & Friends'],
                'Slow': ['Living with the Land', 'Gran Fiesta Tour Starring The Three Caballeros'],
            },
            'Shows & Parades': {
                'Show': ['Awesome Planet', 'Beauty and the Beast Sing-Along', 'Canada Far and Wide in Circle-Vision 360', 'Disney and Pixar Short Film Festival', 'Impressions de France', 'Reflections of China', 'The American Adventure'],
            },
            'Table Service Dining': {
                'Themed': ['Space 220 Restaurant', 'Le Cellier Steakhouse'],
                'Character Dining': ['Garden Grill Restaurant'],
            },
            'Quick Service Dining': {
                'International': ['Les Halles Boulangerie-Patisserie', 'Katsura Grill'],
            },
        },
        utilities: { restrooms: [], breakSpots: [], snackLocations: [] }
    },
    [Park.AK]: {
        hours: '8:00 AM - 7:00 PM',
        categories: {
            'Attractions': {
                'Thrill': ['Avatar Flight of Passage', 'Expedition Everest - Legend of the Forbidden Mountain', 'DINOSAUR', 'Kali River Rapids'],
                'Family': ['Kilimanjaro Safaris', "Na'vi River Journey", 'TriceraTop Spin'],
                'Walk-Thru': ['Gorilla Falls Exploration Trail', 'Maharajah Jungle Trek'],
                'Slow': ["It's Tough to be a Bug!"],
            },
             'Shows & Parades': {
                'Show': ['Festival of the Lion King', 'Finding Nemo: The Big Blue... and Beyond!'],
            },
            'Table Service Dining': {
                'Themed': ['Tiffins Restaurant', 'Yak & Yeti Restaurant'],
                'Character Dining': ['Tusker House Restaurant'],
            },
            'Quick Service Dining': {
                'American': ['Flame Tree Barbecue'],
                'Unique': ["Satu'li Canteen"],
            },
        },
        utilities: { restrooms: [], breakSpots: [], snackLocations: [] }
    },
    [Park.DLP]: {
        hours: '8:00 AM - 12:00 AM',
        categories: {
            'Attractions': {
                'Thrill': ['Space Mountain', 'Matterhorn Bobsleds', 'Indiana Jones Adventure', 'Star Wars: Rise of the Resistance', 'Big Thunder Mountain Railroad', 'Millennium Falcon: Smugglers Run', 'Star Tours – The Adventures Continue'],
                'Family': ['Haunted Mansion', 'Pirates of the Caribbean', "it's a small world", "Mickey & Minnie's Runaway Railway", "Peter Pan's Flight", 'Jungle Cruise', 'Dumbo the Flying Elephant', 'King Arthur Carrousel', 'Mad Tea Party', "Mr. Toad's Wild Ride", "Pinocchio's Daring Journey", "Snow White's Enchanted Wish", 'Alice in Wonderland', 'Buzz Lightyear Astro Blasters', "Roger Rabbit's Car Toon Spin"],
                'Slow': ['Finding Nemo Submarine Voyage', 'Autopia', 'Disneyland Railroad', "The Disneyland Story presenting Great Moments with Mr. Lincoln", "Walt Disney's Enchanted Tiki Room"],
            },
            'Shows & Parades': {
                'Show': ['Fantasmic!'],
                'Fireworks': ['Wondrous Journeys'],
            },
            'Table Service Dining': {
                'Themed': ['Blue Bayou Restaurant', 'Cafe Orleans'],
                'Character Dining': ['Plaza Inn'],
            },
            'Quick Service Dining': {
                'Unique': ['Ronto Roasters'],
            }
        },
        utilities: { restrooms: [], breakSpots: [], snackLocations: [] }
    },
    [Park.DCA]: {
        hours: '8:00 AM - 10:00 PM',
        categories: {
            'Attractions': {
                'Thrill': ['Radiator Springs Racers', 'Guardians of the Galaxy - Mission: BREAKOUT!', 'Incredicoaster', 'Grizzly River Run', "Goofy's Sky School"],
                'Family': ["WEB SLINGERS: A Spider-Man Adventure", "Soarin' Around the World", "The Little Mermaid ~ Ariel's Undersea Adventure", 'Monsters, Inc. Mike & Sulley to the Rescue!', 'Toy Story Midway Mania!', "Jessie's Critter Carousel", 'Pixar Pal-A-Round', 'Inside Out Emotional Whirlwind', "Jumpin' Jellyfish", 'Golden Zephyr', 'Silly Symphony Swings', "Luigi's Rollickin' Roadsters", "Mater's Junkyard Jamboree"],
            },
            'Shows & Parades': {
                'Show': ['World of Color - ONE', 'Animation Academy', 'Turtle Talk with Crush', 'Disney Junior Dance Party!'],
            },
            'Table Service Dining': {
                'Themed': ['Lamplight Lounge', 'Carthay Circle Restaurant'],
            },
            'Quick Service Dining': {
                'Unique': ['Pym Test Kitchen'],
            },
        },
        utilities: { restrooms: [], breakSpots: [], snackLocations: [] }
    }
}

const normalizeName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

export const ATTRACTION_TRIVIA_DATA: { [key: string]: TriviaQuestion[] } = {
    // --- MAGIC KINGDOM ---
    [normalizeName("Haunted Mansion")]: [
      { question: "How many “happy haunts” call the Haunted Mansion home?", options: ["99", "999", "1000", "13"], answer: "999" },
      { question: "What is the name of the ghostly bride seen in the attic scene?", options: ["Constance Hatchaway", "Emily De Claire", "Lillian Gracey", "Priscilla Gore"], answer: "Constance Hatchaway" },
      { question: "Which famous voice actor provided the narration for the Haunted Mansion’s “Ghost Host”?", options: ["Thurl Ravenscroft", "Paul Frees", "Walt Disney", "Sterling Holloway"], answer: "Paul Frees" },
      { question: "What do the hitchhiking ghosts do to guests near the end of the ride?", options: ["Wave goodbye", "Follow you home", "Sing a song", "Tell a joke"], answer: "Follow you home" },
      { question: "The busts in the library appear to follow you. What effect is used to create this illusion?", options: ["Holograms", "Pepper's Ghost", "Hollow-face illusion", "Animatronics"], answer: "Hollow-face illusion" },
      { question: "In the ballroom scene, what are the ghosts doing around the long dining table?", options: ["Having a birthday party", "Playing cards", "Dancing", "Arguing"], answer: "Having a birthday party" },
      { question: "What does Madame Leota use to summon the spirits during the séance?", options: ["A crystal ball", "A spellbook", "A magic wand", "Tarot cards"], answer: "A crystal ball" },
      { question: "What is the epitaph on the tombstone of Madame Leota in the graveyard?", options: ["'Dear sweet Leota, beloved by all. In regions beyond now, having a ball.'", "'Here lies Leota, she had a vision.'", "'From regions beyond, a chilling premonition.'", "'Leota, the medium, now communicates from the great beyond.'"], answer: "'Dear sweet Leota, beloved by all. In regions beyond now, having a ball.'" },
      { question: "What instrument is the ghost playing in the conservatory scene?", options: ["Pipe organ", "Harp", "Piano", "Violin"], answer: "Pipe organ" },
      { question: "What is the name of the pet dog buried in the pet cemetery outside the mansion?", options: ["Sparky", "Pepper", "Winston", "Old Flybait"], answer: "Old Flybait" }
    ],
    [normalizeName("Jungle Cruise")]: [
      { question: "In the Cambodian temple scene, what creature is seen holding up a large rock?", options: ["A tiger", "A cobra", "A monkey", "An elephant"], answer: "A tiger" },
      { question: "What style of humor do the skippers famously use?", options: ["Serious facts", "Puns", "Sarcasm", "Riddles"], answer: "Puns" },
      { question: "What’s the famous waterfall you see both sides of?", options: ["Niagara Falls", "Angel Falls", "Schweitzer Falls", "Amazon Falls"], answer: "Schweitzer Falls" },
      { question: "The ride was originally envisioned as a serious, educational expedition with what kind of animals?", options: ["Animatronics", "Live animals", "Holograms", "Puppets"], answer: "Live animals" },
      { question: "What are the elephants doing in the sacred bathing pool?", options: ["Spraying water at guests", "Sleeping", "Fighting", "Hiding"], answer: "Spraying water at guests" },
      { question: "Guests ride in what type of boat?", options: ["Sailboat", "Tramp steamer", "Ferry", "Raft"], answer: "Tramp steamer" },
      { question: "What’s the name of the company that operates the Jungle Cruise tours in the ride's storyline?", options: ["River Tours Inc.", "Jungle Navigation Co. LTD", "Safari Voyages", "Amazon Adventures"], answer: "Jungle Navigation Co. LTD" },
      { question: "In the iconic “trapped safari” scene, what animal has chased the explorers up a pole?", options: ["A tiger", "A rhinoceros", "A hippopotamus", "A gorilla"], answer: "A rhinoceros" },
      { question: "At the end of the ride, Trader Sam offers a special deal. What is it?", options: ["Free hats", "Two of his heads for one of yours", "Gold coins", "Bananas"], answer: "Two of his heads for one of yours" },
      { question: "The water of the jungle rivers is dyed what color to hide vehicle tracks and create a murky look?", options: ["Green", "Brown", "Blue", "Black"], answer: "Brown" }
    ],
    [normalizeName("Pirates of the Caribbean")]: [
      { question: "What is the name of the fort that guests float through at the beginning of the ride?", options: ["Castillo Del Morro", "Fort Charles", "Pirate's Cove", "La Fuerte"], answer: "Castillo Del Morro" },
      { question: "What’s the ride’s iconic theme song?", options: ["“Hoist the Colors”", "“Yo Ho (A Pirate’s Life for Me)”", "“A Pirate's Life”", "“The Pirate King”"], answer: "“Yo Ho (A Pirate’s Life for Me)”" },
      { question: "What scene immediately follows the ride's small drop?", options: ["The treasure cave", "The battle between two ships", "The jail scene", "The auction scene"], answer: "The battle between two ships" },
      { question: "In the jail scene, what are the pirates trying to tempt the dog with?", options: ["A bone", "A piece of gold", "A key", "A piece of bread"], answer: "A bone" },
      { question: "The talking skull and crossbones that warns guests ahead originally had what name?", options: ["Blackheart", "Old Bill", "Jolly Roger", "Captain Bones"], answer: "Old Bill" },
      { question: "In the updated auction scene, what is Redd the pirate auctioning off?", options: ["Rum and chickens", "Treasure maps", "Brides", "Swords and pistols"], answer: "Rum and chickens" },
      { question: "What is the name of the restaurant that the Disneyland version of the ride floats through?", options: ["Blue Bayou", "Cafe Orleans", "The Golden Galleon", "Lafitte's Landing"], answer: "Blue Bayou" },
      { question: "One of the pirates in the treasure room scene is based on which Imagineer?", options: ["Marc Davis", "Claude Coats", "X Atencio", "Blaine Gibson"], answer: "Blaine Gibson" },
      { question: "What does the dog in the jail scene hold in its mouth?", options: ["A bone", "The keys", "A lantern", "A map"], answer: "The keys" },
      { question: "What scent is famously pumped into the burning city scene?", options: ["Gunpowder", "Salty sea air", "Musty wood", "Rum"], answer: "Musty wood" }
    ],
    [normalizeName("The Magic Carpets of Aladdin")]: [
      { question: "What magical object sits atop the attraction's central hub?", options: ["The Genie's Lamp", "A giant diamond", "The Sultan's crown", "A flying carpet"], answer: "The Genie's Lamp" },
      { question: "This ride is based on which Disney animated classic?", options: ["Tarzan", "Aladdin", "Hercules", "Mulan"], answer: "Aladdin" },
      { question: "How many riders can fit in a single carpet vehicle?", options: ["2", "3", "4", "6"], answer: "4" },
      { question: "What do riders in the front row of the carpet control?", options: ["The spinning of the carpet", "The vertical height", "The music volume", "The forward speed"], answer: "The vertical height" },
      { question: "What do riders in the back row of the carpet control?", options: ["The forward and backward tilt", "The speed", "The direction", "The spinning"], answer: "The forward and backward tilt" },
      { question: "What animal figure spits water at unsuspecting riders?", options: ["Snakes", "Camels", "Monkeys", "Parrots"], answer: "Camels" },
      { question: "This attraction's ride system is most similar to which other classic Fantasyland ride?", options: ["Peter Pan’s Flight", "Dumbo the Flying Elephant", "it's a small world", "Mad Tea Party"], answer: "Dumbo the Flying Elephant" },
      { question: "What color is the carpet that is typically featured in promotional material for the ride?", options: ["Red", "Purple", "Blue", "Green"], answer: "Purple" },
      { question: "The architecture and design of the attraction are inspired by what fictional city?", options: ["Agrabah", "Atlantica", "Neverland", "Wonderland"], answer: "Agrabah" },
      { question: "Which of Aladdin's sidekicks can be seen in sculpted form around the attraction?", options: ["Rajah", "Iago", "Abu", "Genie"], answer: "Abu" }
    ],
    [normalizeName("Walt Disney's Enchanted Tiki Room")]: [
      { question: "This was the first attraction to feature what groundbreaking technology?", options: ["Holograms", "Audio-Animatronics", "Projection Mapping", "CGI"], answer: "Audio-Animatronics" },
      { question: "How many macaws act as the main hosts of the show?", options: ["2", "3", "4", "5"], answer: "4" },
      { question: "What are the names of the four hosting macaws?", options: ["Huey, Dewey, Louie, & Donald", "José, Michael, Pierre, & Fritz", "Jack, Will, Gibbs, & Barbossa", "Tiki, Liki, Niki, & Riki"], answer: "José, Michael, Pierre, & Fritz" },
      { question: "What weather event happens inside the Tiki Room during the show?", options: ["A tropical thunderstorm", "A sunny day", "A gentle breeze", "A hurricane"], answer: "A tropical thunderstorm" },
      { question: "What type of show is the Enchanted Tiki Room?", options: ["A fireworks display", "A musical revue", "A parade", "A stage play"], answer: "A musical revue" },
      { question: "The show's catchy theme song was written by which famous Disney Legends?", options: ["The Sherman Brothers", "Alan Menken & Howard Ashman", "George Bruns & Xavier Atencio", "Buddy Baker"], answer: "The Sherman Brothers" },
      { question: "What do the carved tiki gods on the walls do during the show?", options: ["They sing and chant", "They tell jokes", "They remain silent", "They spray water"], answer: "They sing and chant" },
      { question: "In the 1990s, the WDW show was updated to include two characters from 'Aladdin' and 'The Lion King'. Who were they?", options: ["Timon & Pumbaa", "Iago & Zazu", "Mickey & Minnie", "Donald & Goofy"], answer: "Iago & Zazu" },
      { question: "What is the 'Magic Fountain' at the center of the room made of?", options: ["Real water", "Fiber optics", "Plastic", "Crystals"], answer: "Plastic" },
      { question: "What company originally sponsored the attraction when it opened in Disneyland?", options: ["Coca-Cola", "United Airlines", "Pepsi", "Kodak"], answer: "United Airlines" }
    ],
    [normalizeName("Seven Dwarfs Mine Train")]: [
        { question: "What unique feature do the mine-train cars have that simulates riding in a real mine cart?", options: ["They tilt side-to-side", "They spin 360 degrees", "They bounce up and down", "They rock vertically"], answer: "They tilt side-to-side" },
        { question: "The queue’s interactive gem-sorting game plays what when you match the gems correctly?", options: ["Musical notes", "Water splashes", "Bird calls", "A clip from the movie"], answer: "Musical notes" },
        { question: "What song do the dwarfs sing while working inside the mine scene?", options: ["“Heigh-Ho”", "“Whistle While You Work”", "“Dig-a-Dig Dig”", "“Bluddle-Uddle-Um-Dum”"], answer: "“Dig-a-Dig Dig”" },
        { question: "Which two original animatronics from the retired 'Snow White’s Scary Adventures' ride were reused in this attraction's finale?", options: ["Snow White & Dopey", "Grumpy & Doc", "The Witch & The Prince", "Bashful & Happy"], answer: "Grumpy & Doc" },
        { question: "What precious gems can be seen glowing inside the mine?", options: ["Diamonds, Rubies, Emeralds", "Sapphires, Topaz, Amethyst", "Quartz, Gold, Silver", "All of the above"], answer: "All of the above" },
        { question: "As you exit the mine and head up the second lift hill, what can you see through the window of the dwarfs' cottage?", options: ["Snow White dancing with the dwarfs", "The dwarfs eating dinner", "The dwarfs marching home", "The Evil Queen at the door"], answer: "Snow White dancing with the dwarfs" },
        { question: "What shadowy figures do guests see on the wall inside the mine scene?", options: ["The Seven Dwarfs marching", "The Evil Queen spying", "Forest animals", "Bats flying"], answer: "The Seven Dwarfs marching" },
        { question: "What are the barrels in the interactive queue used for?", options: ["Storing gems", "Creating music by spinning them", "Washing hands", "They are just for decoration"], answer: "Creating music by spinning them" },
        { question: "The ride features two small drops and one larger one. Where does the largest drop occur?", options: ["Immediately after leaving the station", "Inside the mine", "Right after exiting the mine", "Just before returning to the station"], answer: "Right after exiting the mine" },
        { question: "What animal figure serves as the very first 'Brakeman' on the back of the train?", options: ["A squirrel", "A vulture", "A rabbit", "A deer"], answer: "A vulture" }
    ],
    [normalizeName("Peter Pans Flight")]: [
        { question: "Guests board ride vehicles shaped like pirate galleons that hang from what?", options: ["An overhead rail", "Floor tracks", "Strong chains", "Invisible cables"], answer: "An overhead rail" },
        { question: "The interactive queue features what magical effect where Tinker Bell flies around the Darling children's nursery?", options: ["Projection mapping", "A hologram", "Pepper's Ghost", "Animatronics"], answer: "Projection mapping" },
        { question: "As you fly over London, what famous landmark's clock hands can you see?", options: ["Big Ben", "Tower of London", "Buckingham Palace", "The Gherkin"], answer: "Big Ben" },
        { question: "What effect is used to make the city of London look vast and sprawling below?", options: ["Forced perspective", "Mirrors", "Smoke and mirrors", "Miniature models only"], answer: "Forced perspective" },
        { question: "Which of Captain Hook's pirates is seen firing the cannon at your ship?", options: ["Mr. Smee", "Starkey", "Mullins", "Blackheart"], answer: "Mr. Smee" },
        { question: "What material is used to create the twinkling effect of the lights in London and the stars in the sky?", options: ["Fiber optics", "LED panels", "Reflective paint", "Tiny light bulbs"], answer: "Fiber optics" },
        { question: "In the final scene, Captain Hook is seen in a precarious position. What is he balancing on?", options: ["The crocodile’s snout", "The ship's mast", "A cannon", "A floating barrel"], answer: "The crocodile’s snout" },
        { question: "What tune from the film plays as your ship soars out of the nursery and into the skies of Never Land?", options: ["“You Can Fly!”", "“Following the Leader”", "“The Second Star to the Right”", "“A Pirate's Life”"], answer: "“You Can Fly!”" },
        { question: "To make guests feel like they are flying high, the track is painted what color to make it blend in with the ceiling?", options: ["Black", "Sky blue", "White", "Dark green"], answer: "Black" },
        { question: "What is the name of the island where the Lost Boys live?", options: ["Never Land", "Skull Rock", "Mermaid Lagoon", "Hangman's Tree"], answer: "Hangman's Tree" }
    ],
    [normalizeName("The Many Adventures of Winnie the Pooh")]: [
      { question: "What special effect do the 'hunny pot' vehicles simulate during the flood scene?", options: ["Floating and bobbing", "Spinning rapidly", "Shaking violently", "Going backwards"], answer: "Floating and bobbing" },
      { question: "What do guests ride in on this attraction?", options: ["Hunny pots", "Picnic baskets", "Beehives", "Hot air balloons"], answer: "Hunny pots" },
      { question: "In the first scene, what are the pages of a giant storybook doing?", options: ["Turning to reveal the scenes", "Falling from the sky", "Being read by Christopher Robin", "They are static decorations"], answer: "Turning to reveal the scenes" },
      { question: "During the 'Blustery Day' scene, which character floats past holding onto a red balloon?", options: ["Piglet", "Eeyore", "Owl", "Rabbit"], answer: "Piglet" },
      { question: "The 'Heffalumps and Woozles' dream sequence primarily uses what type of lighting effect?", options: ["Blacklight", "Lasers", "Strobe lights", "Projection mapping"], answer: "Blacklight" },
      { question: "What delightful smell is pumped into the air when Pooh finally gets his honey?", options: ["Sweet honey", "Vanilla", "Fresh bread", "Maple syrup"], answer: "Sweet honey" },
      { question: "Which character is seen bouncing erratically on his tail throughout the ride?", options: ["Tigger", "Rabbit", "Kanga", "Roo"], answer: "Tigger" },
      { question: "In Owl's house, there's a framed picture that pays tribute to the ride this attraction replaced. Who is in the picture?", options: ["Mr. Toad", "Snow White", "20,000 Leagues submarines", "The Skyway buckets"], answer: "Mr. Toad" },
      { question: "What is Pooh Bear trying to get from the big tree during the 'Blustery Day' scene?", options: ["Honey", "His balloon", "Piglet", "An apple"], answer: "Honey" },
      { question: "At the end of the ride, all the characters are celebrating. What kind of party are they having?", options: ["A birthday party for Pooh", "A hero party for Pooh", "A welcome party for Christopher Robin", "A honey festival"], answer: "A hero party for Pooh" }
    ],
    [normalizeName("itsasmallworld")]: [
        { question: "The iconic ticking clock face on the attraction's exterior opens every 15 minutes to reveal what?", options: ["A parade of wooden children", "A giant cuckoo bird", "A small fireworks display", "Dancing animals"], answer: "A parade of wooden children" },
        { question: "What material is primarily used to give the sets and figures their unique, glittery, and stylized appearance?", options: ["Glitter & foil paper", "Fiberglass", "Plastic", "Carved wood"], answer: "Glitter & foil paper" },
        { question: "What art style, known for its bold colors and simple, geometric shapes, defines the look of the ride?", options: ["Mid-century modern", "Art Deco", "Impressionism", "Cubism"], answer: "Mid-century modern" },
        { question: "In the Polynesian scene, what are the animatronic children doing?", options: ["Hula dancing and playing drums", "Surfing", "Building sandcastles", "Fishing"], answer: "Hula dancing and playing drums" },
        { question: "The final 'goodbye' room features the words for 'goodbye' in many languages. Which language is shown first on the largest sign?", options: ["English", "French", "Spanish", "Japanese"], answer: "English" },
        { question: "How many different continents/regions are represented in the ride?", options: ["7", "5", "6", "8"], answer: "7" },
        { question: "The attraction’s unforgettable theme song was written by which famous duo?", options: ["The Sherman Brothers", "Alan Menken and Howard Ashman", "George Bruns and Xavier Atencio", "Leigh Harline and Ned Washington"], answer: "The Sherman Brothers" },
        { question: "In the South American scene, what are some of the children doing?", options: ["Playing soccer", "Riding llamas", "Doing the tango", "All of the above"], answer: "All of the above" },
        { question: "In the African savanna scene, what animal is shown with a very long, colorful neck?", options: ["A giraffe", "An ostrich", "A flamingo", "A zebra"], answer: "A giraffe" },
        { question: "What is unique about the way the boats are propelled through the water channel?", options: ["Small jets of water push them", "They are on a hidden track", "They float freely on the current", "An underwater chain pulls them"], answer: "Small jets of water push them" }
    ],
    [normalizeName("Mad Tea Party")]: [
        { question: "Who pops out of the large teapot at the center of the ride?", options: ["The Dormouse", "The Cheshire Cat", "The White Rabbit", "The March Hare"], answer: "The Dormouse" },
        { question: "How do guests make their teacup spin faster?", options: ["By turning the center wheel", "By leaning to one side", "By pressing a button on the floor", "The speed is pre-set"], answer: "By turning the center wheel" },
        { question: "The ride platform itself spins on three separate, smaller turntables. How do they move in relation to the main platform?", options: ["They spin counter-clockwise", "They spin clockwise", "They alternate directions", "They don't spin"], answer: "They spin counter-clockwise" },
        { question: "What song from 'Alice in Wonderland' plays throughout the ride?", options: ["“The Unbirthday Song”", "“I’m Late”", "“Painting the Roses Red”", "“All in the Golden Afternoon”"], answer: "“The Unbirthday Song”" },
        { question: "When the ride first opened at Disneyland, what key feature was it missing that it has today?", options: ["A roof", "Music", "The center wheel", "The Dormouse's teapot"], answer: "A roof" },
        { question: "What hangs from the center of the ride's canopy, above the teapot?", options: ["Japanese lanterns", "A chandelier", "A disco ball", "A cuckoo clock"], answer: "Japanese lanterns" },
        { question: "The design and color palette of the ride are inspired by the artwork of which Disney Legend?", options: ["Mary Blair", "Marc Davis", "Eyvind Earle", "Claude Coats"], answer: "Mary Blair" },
        { question: "What is written on the sign near the ride, setting the theme for the experience?", options: ["'We're All Mad Here'", "'Don't Be Late!'", "'Happy Unbirthday!'", "'Curiouser and Curiouser!'"], answer: "'We're All Mad Here'" },
        { question: "Besides the main platform, the teacups are arranged on how many smaller, spinning turntables?", options: ["Three", "Two", "Four", "One"], answer: "Three" },
        { question: "The ride is based on a scene from the film where Alice attends a tea party with which two characters?", options: ["The Mad Hatter and the March Hare", "The Tweedles", "The Queen and King of Hearts", "The White Rabbit and the Dodo"], answer: "The Mad Hatter and the March Hare" }
    ],
    [normalizeName("Under the Sea Journey of The Little Mermaid")]: [
        { question: "What do guests ride in on this dark ride adventure?", options: ["Clamshells", "Coral boats", "Seahorses", "Bubble rafts"], answer: "Clamshells" },
        { question: "In the queue line at Magic Kingdom, the cascading waterfalls occasionally form a hidden what?", options: ["Mickey shape", "Heart", "Starfish", "Trident"], answer: "Mickey shape" },
        { question: "During the 'Under the Sea' musical number, which character is seen conducting the orchestra of sea creatures?", options: ["Sebastian", "Flounder", "King Triton", "Scuttle"], answer: "Sebastian" },
        { question: "What two slippery characters serve as Ursula's sidekicks in her lair?", options: ["Flotsam and Jetsam", "Pain and Panic", "Shenzi and Banzai", "Tip and Dash"], answer: "Flotsam and Jetsam" },
        { question: "What special effect do the ride vehicles perform as they transition from the human world 'down' into the sea?", options: ["They tilt backward as bubbles rise", "They spin around", "They gently shake", "They speed up"], answer: "They tilt backward as bubbles rise" },
        { question: "During the 'Part of Your World' scene, what human object (a 'dinglehopper') does Ariel hold while singing?", options: ["A fork", "A spoon", "A knife", "A corkscrew"], answer: "A fork" },
        { question: "How many dancing starfish are featured in the 'Under the Sea' scene?", options: ["Seven", "Five", "Ten", "Three"], answer: "Seven" },
        { question: "The finale wedding scene shows Ariel in which form?", options: ["Human", "Mermaid", "A mix of both", "A statue"], answer: "Human" },
        { question: "What is the name of the ship that guests see during the 'Kiss the Girl' scene?", options: ["The Royal Galleon", "The Nautilus", "The Black Pearl", "The Flying Dutchman"], answer: "The Royal Galleon" },
        { question: "The exterior of the attraction at Magic Kingdom is designed to look like what?", options: ["Prince Eric's Castle", "A shipwreck", "A seaside village", "Ursula's Grotto"], answer: "Prince Eric's Castle" }
    ],
    [normalizeName("Space Mountain")]: [
        { question: "The two separate coaster tracks inside Magic Kingdom's Space Mountain are named what?", options: ["Alpha and Omega", "Red and Blue", "Star and Comet", "Left and Right"], answer: "Alpha and Omega" },
        { question: "The ride vehicles are referred to by what official name?", options: ["Star-Jags", "Rockets", "Star-Speeders", "Comet-Cruisers"], answer: "Star-Jags" },
        { question: "The post-show features futuristic scenes of planets and space travel. What is this themed exit corridor called?", options: ["The TTA PeopleMover", "The Star Corridor", "The Ryca 1", "The Tomorrowland Concourse"], answer: "The Ryca 1" },
        { question: "To enhance the feeling of speed in the dark, what technique is used on the coaster's support columns?", options: ["They are painted black", "They have small fans attached", "They are illuminated with strobe lights", "They are barely visible"], answer: "They have small fans attached" },
        { question: "What is the name of the on-board audio soundtrack that was added to the ride?", options: ["Starry-O-Phonic Sound", "Cosmic Way", "Space-Sound", "Galaxy Tracks"], answer: "Starry-O-Phonic Sound" },
        { question: "Before the ride was built, the plot of land it now occupies was originally planned for what?", options: ["A new hotel", "An extension of Main Street", "A 'Western River Expedition' ride", "A parking lot"], answer: "A 'Western River Expedition' ride" },
        { question: "What is the seating arrangement in a single Space Mountain rocket?", options: ["Single file", "Side-by-side", "Back-to-back", "In a circle"], answer: "Single file" },
        { question: "In the post-show, guests can play a video game where they do what?", options: ["Race spaceships", "Protect a colony from asteroids", "Design their own planet", "Answer space trivia"], answer: "Protect a colony from asteroids" },
        { question: "The ride vehicles are not powered on the track itself. What propels them up the lift hills?", options: ["A chain lift", "Linear induction motors", "Catapult launch", "Elevator lift"], answer: "A chain lift" },
        { question: "What is the top speed of the Space Mountain coaster at Walt Disney World, in miles per hour?", options: ["27 mph", "45 mph", "60 mph", "35 mph"], answer: "27 mph" }
    ],
    [normalizeName("Big Thunder Mountain Railroad")]: [
        { question: "The backstory of the ride revolves around what fictional 19th-century mining town?", options: ["Tumbleweed", "Rainbow Ridge", "Gold Rush Gulch", "Coyote Canyon"], answer: "Tumbleweed" },
        { question: "According to the ride's legend, what happens when you ride a train through the sacred mountain?", options: ["The train goes faster", "You find gold", "The trains become possessed", "It starts to rain"], answer: "The trains become possessed" },
        { question: "What kind of animal can be seen chewing on dynamite in a wooden shack along the track?", options: ["A goat", "A donkey", "A coyote", "A raccoon"], answer: "A goat" },
        { question: "As you go up the final lift hill, what natural disaster appears to be happening in the town of Tumbleweed?", options: ["An earthquake and flash flood", "A volcano eruption", "A tornado", "A forest fire"], answer: "An earthquake and flash flood" },
        { question: "The names of the six trains (I.M. Brave, U.R. Courageous, etc.) are a tribute to which Imagineer?", options: ["Tony Baxter", "Marc Davis", "Ward Kimball", "X Atencio"], answer: "Tony Baxter" },
        { question: "What is the name of the saloon you pass by, which has a party going on inside?", options: ["The Gold Dust Saloon", "The Lucky Nugget", "The Gilded Garter", "The Red Dog Saloon"], answer: "The Gold Dust Saloon" },
        { question: "What is the name of the founder and president of the Big Thunder Mining Company from the ride's lore?", options: ["Barnabas T. Bullion", "Jedediah Shine", "Silas McGoat", "Prospector Pete"], answer: "Barnabas T. Bullion" },
        { question: "During the ride, you pass under the fossilized remains of what giant prehistoric creature?", options: ["A Tyrannosaurus Rex", "A Brontosaurus", "A Pterodactyl", "A Stegosaurus"], answer: "A Tyrannosaurus Rex" },
        { question: "What is the man in the bathtub yelling as you pass by during the flood scene?", options: ["'Help Me!'", "'I'm taking a bath!'", "'There's gold in them thar hills!'", "He doesn't speak, he just splashes"], answer: "He doesn't speak, he just splashes" },
        { question: "The ride's iconic rock spires were inspired by the hoodoos of what national park?", options: ["Bryce Canyon National Park", "Zion National Park", "Grand Canyon National Park", "Arches National Park"], answer: "Bryce Canyon National Park" }
    ],
    [normalizeName("TRON Lightcycle / Run")]: [
        { question: "Your race on The Grid is against which opposing team?", options: ["Team Orange", "Team Red", "Team Yellow", "Team Green"], answer: "Team Orange" },
        { question: "What are the ride vehicles, which you straddle like a motorcycle, called?", options: ["Lightcycles", "Recognizers", "Light Runners", "Grid Bikes"], answer: "Lightcycles" },
        { question: "Before boarding your Lightcycle, you must place your belongings in a special, double-sided locker. What is this system called?", options: ["Digitized Lockers", "The Grid Storage", "SyncChamber", "Program Lockers"], answer: "SyncChamber" },
        { question: "As you launch, your team must pass through how many Energy Gates to win the race?", options: ["Eight", "Ten", "Six", "Twelve"], answer: "Eight" },
        { question: "What is the name of the massive, color-shifting canopy that covers the outdoor portion of the ride?", options: ["The Upload Conduit", "The Grid Shell", "The Canopy of Light", "The Digital Dome"], answer: "The Upload Conduit" },
        { question: "What is the name of the powerful computer system that runs The Grid in the TRON universe?", options: ["Master Control Program (MCP)", "Skynet", "ENCOM OS-12", "The Mainframe"], answer: "Master Control Program (MCP)" },
        { question: "The queue features a stunning moment where a Lightcycle appears to digitize and launch onto the track. This effect is a modern version of what classic illusion?", options: ["Pepper's Ghost", "Hollow-face illusion", "Forced perspective", "Phantogram"], answer: "Pepper's Ghost" },
        { question: "What is the top speed of TRON Lightcycle / Run, making it one of the fastest coasters at any Disney park?", options: ["Just under 60 mph", "Exactly 55 mph", "Over 65 mph", "Exactly 50 mph"], answer: "Just under 60 mph" },
        { question: "The music for the attraction was composed by whom?", options: ["Daft Punk", "Joseph Trapanese", "Hans Zimmer", "John Williams"], answer: "Joseph Trapanese" },
        { question: "Before the race begins, you are scanned by a Recognizer. What is a Recognizer?", options: ["A giant, hovering U-shaped vehicle", "A security program", "An enemy racer", "The race announcer"], answer: "A giant, hovering U-shaped vehicle" }
    ],
    [normalizeName("Country Bear Jamboree")]: [
        { question: "What is the name of the show's master of ceremonies?", options: ["Henry", "Big Al", "Liver Lips McGrowl", "Goofy"], answer: "Henry" },
        { question: "Which bear is known for singing 'Blood on the Saddle' while crying?", options: ["Big Al", "Wendell", "Ernest", "Zeke"], answer: "Big Al" },
        { question: "What are the names of the three female bears who perform as 'The Sun Bonnet Trio'?", options: ["Bunny, Bubbles, and Beulah", "Laverne, Maxene, and Patty", "Trixie, Tessie, and Grace", "Dolly, Daisy, and Dixie"], answer: "Bunny, Bubbles, and Beulah" },
        { question: "What instrument does Gomer, the piano player, play?", options: ["A standard piano", "A pipe organ", "A player piano he can't control", "An Octopus organ"], answer: "A player piano he can't control" },
        { question: "Which bear descends from the ceiling on a swing for her solo?", options: ["Trixie", "Bubbles", "Teddi Barra", "Dolly"], answer: "Teddi Barra" },
        { question: "The mounted animal heads on the wall occasionally join in the show. What are their names?", options: ["Max, Buff, and Melvin", "Rocky, Bullwinkle, and Boris", "Sammy, Wilson, and Randy", "Heckle and Jeckle"], answer: "Max, Buff, and Melvin" },
        { question: "What song does Liver Lips McGrowl famously sing?", options: ["My Woman Ain't Pretty (But She Don't Sware None)", "The Ballad of Davy Crockett", "How Long Will My Baby Be Gone", "Tears Will Be the Chaser for Your Wine"], answer: "My Woman Ain't Pretty (But She Don't Sware None)" },
        { question: "The Five Bear Rugs is the name of the show's main band. Which member plays the 'thing'?", options: ["Zeke", "Zeb", "Ted", "Fred"], answer: "Zeke" },
        { question: "What does the finale song, 'Come Again,' invite guests to do?", options: ["Come back and see the show again", "Hoot, holler, and stomp their feet", "Sing along with the bears", "Go out and buy some honey"], answer: "Come back and see the show again" },
        { question: "The show was originally intended for what unbuilt Disney ski resort?", options: ["Mineral King", "Sugar Bowl", "Aspen", "Jackson Hole"], answer: "Mineral King" }
    ],
    [normalizeName("Prince Charming Regal Carrousel")]: [
        { question: "The carrousel was originally built in 1917 for what amusement park?", options: ["Olympic Park in New Jersey", "Coney Island in New York", "Cedar Point in Ohio", "Knoebels in Pennsylvania"], answer: "Olympic Park in New Jersey" },
        { question: "How many hand-carved wooden horses are on the carrousel?", options: ["90", "75", "100", "60"], answer: "90" },
        { question: "One of the horses is said to be Cinderella's horse. What distinguishing feature does it have?", options: ["A golden ribbon on its tail", "A glass slipper painted on its saddle", "A blue blanket", "It is the only white horse"], answer: "A golden ribbon on its tail" },
        { question: "What is depicted in the hand-painted vignettes that circle the top of the carrousel?", options: ["Scenes from Cinderella", "Various Disney princesses", "Mickey Mouse through the years", "Landmarks from around the world"], answer: "Scenes from Cinderella" },
        { question: "Is every horse on the carrousel a 'jumper' (a horse that moves up and down)?", options: ["No, there are stationary horses", "Yes, all of them move", "Only the ones on the outside move", "Only the ones on the inside move"], answer: "No, there are stationary horses" },
        { question: "The carrousel's music comes from what kind of instrument?", options: ["A traditional band organ", "A digital sound system", "A player piano", "A live orchestra"], answer: "A traditional band organ" },
        { question: "What is the name of the company that originally built the carrousel?", options: ["Philadelphia Toboggan Company", "Charles I. D. Looff", "Dentzel Carousel Company", "Gustav Dentzel"], answer: "Philadelphia Toboggan Company" },
        { question: "What object is found on every single horse, a signature of its original builders?", options: ["A hidden Mickey", "A small carved eagle", "The builder's initials", "A tiny American flag"], answer: "A small carved eagle" },
        { question: "When the carrousel was moved to Fantasyland, what was its original name?", options: ["Cinderella's Golden Carrousel", "King Arthur Carrousel", "Fantasyland Carrousel", "The Royal Carrousel"], answer: "Cinderella's Golden Carrousel" },
        { question: "Besides horses, what other type of animal can be found on some historic carrousels from the same maker?", options: ["Dragons", "Lions", "Giraffes", "All of the above"], answer: "All of the above" }
    ],
    [normalizeName("Tiana's Bayou Adventure")]: [
        { question: "What instrument is Louis the Alligator famously known for playing?", options: ["Trumpet", "Trombone", "Clarinet", "Saxophone"], answer: "Trumpet" },
        { question: "The ride's story takes place after the events of the movie. What event are Tiana and her friends preparing for?", options: ["Mardi Gras", "A royal ball", "A company picnic", "A battle of the bands"], answer: "Mardi Gras" },
        { question: "What key ingredient is Tiana searching for in the bayou to complete her party preparations?", options: ["A band", "Magic spices", "A special flower", "Gumbo file"], answer: "A band" },
        { question: "This attraction replaced which previous log flume ride?", options: ["Splash Mountain", "Kali River Rapids", "Grizzly River Run", "The Flume"], answer: "Splash Mountain" },
        { question: "Besides Louis, which other character from the film guides guests through the bayou?", options: ["Prince Naveen", "Ray the Firefly", "Mama Odie", "Dr. Facilier"], answer: "Prince Naveen" },
        { question: "What is the name of Tiana's food company that is a central part of the ride's story?", options: ["Tiana's Foods", "The Gumbo Pot", "Bayou Bites", "Tiana's Palace"], answer: "Tiana's Foods" },
        { question: "The queue for the attraction is designed to look like the headquarters of what?", options: ["A jazz club", "An employee-owned food co-op", "A voodoo emporium", "A royal palace"], answer: "An employee-owned food co-op" },
        { question: "The grand finale of the ride takes place during what time of day?", options: ["Sunrise", "Mid-day", "Sunset", "Night"], answer: "Night" },
        { question: "What type of music is heavily featured throughout the attraction?", options: ["Zydeco", "Blues", "Swing", "All of the above"], answer: "All of the above" },
        { question: "What is the name of the firefly voiced by Jim Cummings who helps light the way?", options: ["Ray", "Evangeline", "Pearly", "Sparky"], answer: "Ray" }
    ],
    // --- Rest of MK ---
    [normalizeName("Astro Orbiter")]: [
        { question: "What makes this attraction different from other spinner rides like Dumbo?", options: ["It goes much faster and higher", "It spins backwards", "You can control the tilt", "It has an onboard camera"], answer: "It goes much faster and higher" },
        { question: "To get to the ride vehicles, guests must first ride what?", options: ["An elevator", "An escalator", "A moving walkway", "A small rocket ship"], answer: "An elevator" },
        { question: "The design of the central column is inspired by what?", options: ["Classic sci-fi rocket ships", "Astronomical planetary models", "Leonardo da Vinci's drawings", "A telescope"], answer: "Astronomical planetary models" },
        { question: "Before it was the Astro Orbiter, this attraction had a different name. What was it?", options: ["Star Jets", "Rocket Jets", "Tomorrowland Flyers", "Galaxy Spin"], answer: "Star Jets" },
        { question: "The planets and celestial bodies that circle the ride are based on what?", options: ["Real constellations", "Astrological signs", "Fictional alien worlds", "Whimsical artistic designs"], answer: "Whimsical artistic designs" },
        { question: "How many rockets are there for guests to ride in?", options: ["12", "16", "10", "20"], answer: "12" },
        { question: "From the top of the ride, which other Tomorrowland attraction can you see the roof of?", options: ["Tomorrowland Speedway", "Space Mountain", "Monsters, Inc. Laugh Floor", "Buzz Lightyear's Space Ranger Spin"], answer: "Buzz Lightyear's Space Ranger Spin" },
        { question: "The ride control lever allows guests to change what aspect of their flight?", options: ["Their altitude", "Their speed", "The rocket's rotation", "The music volume"], answer: "Their altitude" },
        { question: "What color are the laser beams that shoot from the front of the rockets at night?", options: ["Red", "Green", "Blue", "They don't have lasers"], answer: "Red" },
        { question: "This attraction sits on top of which other Tomorrowland location?", options: ["The PeopleMover Station", "The Lunching Pad", "Mickey's Star Traders", "Auntie Gravity's Galactic Goodies"], answer: "The PeopleMover Station" }
    ],
    [normalizeName("Buzz Lightyear's Space Ranger Spin")]: [
        { question: "What is the name of the evil emperor you are trying to defeat?", options: ["Zurg", "Vader", "Thanos", "Darkseid"], answer: "Zurg" },
        { question: "What shape are the targets that are worth the most points?", options: ["Triangle", "Circle", "Square", "Diamond"], answer: "Triangle" },
        { question: "What do guests use to aim their laser cannons inside the ride vehicle?", options: ["A joystick", "A steering wheel", "Buttons on the dashboard", "The whole vehicle turns"], answer: "A joystick" },
        { question: "In the first room, what giant robot is a major target?", options: ["The Orange Box-O-Bot", "The Green Gigantobot", "The Red Rock 'Em Sock 'Em Robot", "The Blue Mega Bot"], answer: "The Orange Box-O-Bot" },
        { question: "What is the highest possible score you can achieve on the ride?", options: ["999,999", "1,000,000", "500,000", "750,000"], answer: "999,999" },
        { question: "What is the name of the little green aliens you are trying to save?", options: ["Little Green Men", "The Claw's chosen", "Zurg's minions", "The Pizza Planet aliens"], answer: "Little Green Men" },
        { question: "In the 'Zurg's Ship' scene, hitting a specific target makes what happen?", options: ["A volcano erupts", "Zurg's ship gets smaller", "A meteor shower starts", "The ride vehicle spins"], answer: "A volcano erupts" },
        { question: "What is the rank given to players who achieve the top score?", options: ["Galactic Hero", "Space Ace", "Cosmic Commando", "Star Cadet"], answer: "Galactic Hero" },
        { question: "What is the power source Buzz needs you to recover from Zurg?", options: ["Crystallic Fusion Cells", "Dilithium Crystals", "Kyber Crystals", "Unobtainium"], answer: "Crystallic Fusion Cells" },
        { question: "At the end of the ride, who do you see captured by the Little Green Men?", options: ["Zurg", "Woody", "Emperor Palpatine", "Lotso"], answer: "Zurg" }
    ],
    [normalizeName("The Barnstormer")]: [
        { question: "This junior roller coaster features which classic Disney character as the pilot?", options: ["Goofy", "Donald Duck", "Mickey Mouse", "Chip 'n' Dale"], answer: "Goofy" },
        { question: "What kind of 'barn' does the coaster train fly through?", options: ["A billboard", "A chicken coop", "A water tower", "A hot dog stand"], answer: "A billboard" },
        { question: "What is Goofy's stunt pilot persona called on this ride?", options: ["The Great Goofini", "Daredevil Goofy", "Goofy the Flying Ace", "Captain Goof"], answer: "The Great Goofini" },
        { question: "Before its current theme, this coaster was part of what land?", options: ["Mickey's Toontown Fair", "Mickey's Birthdayland", "Fantasyland", "Tomorrowland"], answer: "Mickey's Toontown Fair" },
        { question: "The ride vehicles are designed to look like what?", options: ["Stunt biplanes", "Hot air balloons", "Race cars", "Unicycles"], answer: "Stunt biplanes" },
        { question: "What is the top speed of The Barnstormer?", options: ["25 mph", "15 mph", "35 mph", "20 mph"], answer: "25 mph" },
        { question: "In the queue, you can see Goofy's flight plan drawn on a map. What is he trying to spell?", options: ["GOOFY", "FUN", "MAGIC", "HI"], answer: "GOOFY" },
        { question: "The ride is an example of what type of roller coaster model?", options: ["Vekoma Junior Coaster", "Schwarzkopf Wildcat", "Arrow Dynamics Corkscrew", "B&M Inverted Coaster"], answer: "Vekoma Junior Coaster" },
        { question: "What object does Goofy's plane appear to have crashed into at the end of the ride?", options: ["A chicken coop", "A water tower", "A haystack", "A flagpole"], answer: "A chicken coop" },
        { question: "What sound effect can be heard as the coaster train goes up the lift hill?", options: ["A sputtering plane engine", "Goofy's signature holler", "Circus music", "A train whistle"], answer: "Goofy's signature holler" }
    ],
    [normalizeName("Dumbo the Flying Elephant")]: [
        { question: "Who is the small mouse character seen at the top of the attraction?", options: ["Timothy Q. Mouse", "Mickey Mouse", "Gus", "Jaq"], answer: "Timothy Q. Mouse" },
        { question: "What does Timothy Q. Mouse hold in his hand?", options: ["A magic feather", "A whip", "A peanut", "A trumpet"], answer: "A magic feather" },
        { question: "In the WDW version, the queue is an interactive, air-conditioned circus tent. What is its main feature?", options: ["A playground for kids", "A movie theater", "An arcade", "A snack bar"], answer: "A playground for kids" },
        { question: "The WDW version of the ride has two separate carousels that spin in opposite directions. What is this called?", options: ["A Dueling Dumbo setup", "A Twin Spinner configuration", "A Gemini system", "A Double Carousel"], answer: "A Dueling Dumbo setup" },
        { question: "What do guests use to control the height of their elephant?", options: ["A joystick", "A button", "A steering wheel", "A lever"], answer: "A lever" },
        { question: "The water features at the base of the ride use what special lighting effect at night?", options: ["Color-changing LEDs", "Strobe lights", "Blacklights", "Fiber optics"], answer: "Color-changing LEDs" },
        { question: "The original Dumbo ride vehicles had a unique feature on their ears. What was it?", options: ["They were hinged and could flap", "They were made of real leather", "They had the guest's name painted on them", "They would light up"], answer: "They were hinged and could flap" },
        { question: "How many elephants are on each of the two carousels in Magic Kingdom?", options: ["16", "12", "20", "10"], answer: "16" },
        { question: "The storybook-themed area where Dumbo is located in Magic Kingdom is called what?", options: ["Storybook Circus", "Fantasyland Forest", "Toontown Fair", "Enchanted Storybook Castle"], answer: "Storybook Circus" },
        { question: "What instrument provides the classic circus music for the attraction?", options: ["A band organ", "A calliope", "A synthesizer", "A music box"], answer: "A band organ" }
    ],
    [normalizeName("Swiss Family Treehouse")]: [
        { question: "The treehouse is a walkthrough attraction based on what 1960 Disney film?", options: ["Swiss Family Robinson", "Treasure Island", "20,000 Leagues Under the Sea", "The Jungle Book"], answer: "Swiss Family Robinson" },
        { question: "What is the man-made tree species called by Imagineers?", options: ["Disneyodendron eximus", "Ficus fantastica", "Arboris imaginarium", "Planta artificialis"], answer: "Disneyodendron eximus" },
        { question: "How many steps does it take to climb to the top of the treehouse?", options: ["116", "50", "200", "95"], answer: "116" },
        { question: "What clever system does the family use to get water to the top of the tree?", options: ["A water wheel and bamboo aqueducts", "A hand-pump system", "Rainwater collection barrels", "A series of buckets on a rope"], answer: "A water wheel and bamboo aqueducts" },
        { question: "What is the name of the family who lives in the treehouse?", options: ["The Robinsons", "The Smiths", "The Joneses", "The Disneys"], answer: "The Robinsons" },
        { question: "What instrument can be found playing music in the main living area?", options: ["A pipe organ", "A gramophone", "A harp", "A player piano"], answer: "A pipe organ" },
        { question: "The lookout at the very top of the tree offers a view of which other Magic Kingdom land?", options: ["Tomorrowland", "Frontierland", "Fantasyland", "Liberty Square"], answer: "Tomorrowland" },
        { question: "What material makes up the leaves on the tree?", options: ["Vinyl", "Silk", "Plastic", "Painted metal"], answer: "Vinyl" },
        { question: "What sign can be found near the bottom of the tree, warning of a potential danger?", options: ["'Beware of Pirates'", "'Mind Your Head'", "'Slippery When Wet'", "'Watch for Snakes'"], answer: "'Beware of Pirates'" },
        { question: "In the story, the family was shipwrecked while trying to reach where?", options: ["New Guinea", "Australia", "Hawaii", "The Philippines"], answer: "New Guinea" }
    ],
    [normalizeName("Tom Sawyer Island")]: [
        { question: "How do guests get to and from Tom Sawyer Island?", options: ["By log raft", "By steamboat", "By suspension bridge", "Through an underwater tunnel"], answer: "By log raft" },
        { question: "What is the name of the fort located on the island?", options: ["Fort Langhorn", "Fort Wilderness", "Fort Sam Clemens", "Fort Adventure"], answer: "Fort Langhorn" },
        { question: "There are several 'escape tunnels' in the fort. What do they lead to?", options: ["The outside of the fort walls", "A secret treasure cave", "The blacksmith shop", "The riverbank"], answer: "The outside of the fort walls" },
        { question: "What can guests find hidden inside Injun Joe's Cave?", options: ["A spooky treasure scene", "A bottomless pit", "An echo chamber", "Animatronic bats"], answer: "A spooky treasure scene" },
        { question: "What kind of wobbly, floating bridge connects two parts of the island?", options: ["A barrel bridge", "A rope bridge", "A pontoon bridge", "A log bridge"], answer: "A barrel bridge" },
        { question: "According to a sign on the island, what is the name of the local grist mill?", options: ["Harper's Mill", "Finn's Mill", "Becky's Mill", "Potter's Mill"], answer: "Harper's Mill" },
        { question: "What can you find inside the blacksmith's shop in the fort?", options: ["An audio animatronic of a horse", "Real blacksmith tools", "A hidden water fountain", "A napping sheriff"], answer: "An audio animatronic of a horse" },
        { question: "What did Walt Disney famously hide on the island during its construction for painters to find?", options: ["Paintbrushes", "Lunch boxes", "Hidden Mickeys", "Autographed photos"], answer: "Paintbrushes" },
        { question: "The island is surrounded by which body of water?", options: ["The Rivers of America", "The Seven Seas Lagoon", "Bay Lake", "The World Showcase Lagoon"], answer: "The Rivers of America" },
        { question: "What is the name of the character who is Tom's best friend?", options: ["Huckleberry Finn", "Becky Thatcher", "Injun Joe", "Aunt Polly"], answer: "Huckleberry Finn" }
    ],
    [normalizeName("Walt Disney's Carousel of Progress")]: [
        { question: "What is the name of the show's theme song?", options: ["'There's a Great Big Beautiful Tomorrow'", "'The Best Time of Your Life'", "'Now is the Time'", "'A Brand New Day'"], answer: "'There's a Great Big Beautiful Tomorrow'" },
        { question: "The attraction originally debuted at what major event?", options: ["The 1964-65 New York World's Fair", "The 1939 New York World's Fair", "The Expo '67 in Montreal", "The opening of Disneyland"], answer: "The 1964-65 New York World's Fair" },
        { question: "What is the name of the family's dog?", options: ["Rover", "Fido", "Spot", "Buster"], answer: "Rover" },
        { question: "In the final 'future' scene, what is Grandma playing?", options: ["A virtual reality game", "A laser tag game", "A motion-controlled tennis game", "An old-fashioned card game"], answer: "A virtual reality game" },
        { question: "How many acts, or scenes, are in the show?", options: ["Four", "Five", "Six", "Three"], answer: "Four" },
        { question: "The entire audience seating area rotates around a stationary central core of stages. What is this system called?", options: ["A carousel theater", "A rotating auditorium", "A progress theater", "A cyclical stage"], answer: "A carousel theater" },
        { question: "In the 1940s scene, what is daughter Patricia 'Pat' getting ready for?", options: ["A Halloween party", "A school dance", "A Fourth of July celebration", "A Christmas pageant"], answer: "A Halloween party" },
        { question: "What company was the original sponsor of the attraction?", options: ["General Electric", "Westinghouse", "RCA", "Ford"], answer: "General Electric" },
        { question: "The theme song was written by which famous Disney songwriting duo?", options: ["The Sherman Brothers", "Alan Menken & Howard Ashman", "George Bruns & Xavier Atencio", "The Bruns Brothers"], answer: "The Sherman Brothers" },
        { question: "What new technology is the father excited about in the first scene, set at the 'turn of the century'?", options: ["Electricity and gas lamps", "The telephone", "The automobile", "The television"], answer: "Electricity and gas lamps" }
    ],
    [normalizeName("Mickey's PhilharMagic")]: [
        { question: "What magical object does Donald Duck 'borrow' that causes all the trouble?", options: ["Mickey's Sorcerer Hat", "The Genie's Lamp", "A magic wand", "The Enchanted Rose"], answer: "Mickey's Sorcerer Hat" },
        { question: "The show is presented in 3D, but what other 'dimension' is added for sensory effects?", options: ["Scents and water sprays", "Shaking seats", "Wind and smoke", "Heat and cold"], answer: "Scents and water sprays" },
        { question: "During the 'Be Our Guest' segment from 'Beauty and the Beast', what scent is pumped into the theater?", options: ["Champagne", "Freshly baked bread", "Apple pie", "Chocolate cake"], answer: "Apple pie" },
        { question: "What song from 'The Little Mermaid' is featured in the show?", options: ["'Part of Your World'", "'Under the Sea'", "'Kiss the Girl'", "'Poor Unfortunate Souls'"], answer: "'Part of Your World'" },
        { question: "At the end of the show, where does Donald Duck get launched from the screen into?", options: ["The back wall of the theater", "The ceiling", "The orchestra pit", "A tuba"], answer: "The back wall of the theater" },
        { question: "What is the name of the concert hall where the show takes place?", options: ["Fantasyland Concert Hall", "Mickey's Philharmonic", "The Royal Theatre", "The Enchanted Hall"], answer: "Fantasyland Concert Hall" },
        { question: "Which character's song sequence features a flight on a magic carpet?", options: ["Aladdin", "Peter Pan", "Simba", "Ariel"], answer: "Aladdin" },
        { question: "What is the name of the spirited conductor of the orchestra?", options: ["Mickey Mouse", "Goofy", "Donald Duck", "Ludwig Von Drake"], answer: "Mickey Mouse" },
        { question: "The show features the last time a specific voice actor performed one of his iconic roles. Who was it?", options: ["Wayne Allwine as Mickey Mouse", "Robby Benson as Beast", "Jerry Orbach as Lumiere", "Robin Williams as Genie"], answer: "Jerry Orbach as Lumiere" },
        { question: "The screen used for the show is notable for what feature?", options: ["It's one of the widest seamless screens ever built", "It's a perfect sphere", "It's made of a special reflective material", "It's transparent"], answer: "It's one of the widest seamless screens ever built" }
    ],
    [normalizeName("Monsters, Inc. Laugh Floor")]: [
        { question: "What is the name of the Master of Ceremonies (M.C.) for the show?", options: ["Mike Wazowski", "Sully", "Roz", "Randall"], answer: "Mike Wazowski" },
        { question: "The show's premise is that the monsters have discovered what is more powerful than screams?", options: ["Laughter", "Singing", "Hugs", "Tickles"], answer: "Laughter" },
        { question: "How do the monsters on screen interact with the audience?", options: ["Through live voice actors and puppetry", "They are pre-recorded animations", "They use AI to generate responses", "They are controlled by the audience"], answer: "Through live voice actors and puppetry" },
        { question: "Audience members can submit jokes before the show via what method?", options: ["Text message", "An online form", "Writing on a card", "Telling a Cast Member"], answer: "Text message" },
        { question: "What is the name of the two-headed monster that often performs a mind-reading act?", options: ["Sam & Ella", "Bill & Ted", "Mike & Ike", "Ben & Jerry"], answer: "Sam & Ella" },
        { question: "Who is the 'monster of ceremonies' that introduces the acts?", options: ["Roz", "Mike Wazowski", "Marty Wazowski", "Sully"], answer: "Marty Wazowski" },
        { question: "What is the name of the canister that collects the audience's laughter?", options: ["The Giggle Canister", "The Laugh Tank", "The Chuckle Collector", "The Scream Canister"], answer: "The Laugh Tank" },
        { question: "The technology that allows the animated characters to interact in real-time is called what?", options: ["Living Character Initiative", "Real-Time Animation", "Digital Puppetry", "Interactive Character System"], answer: "Living Character Initiative" },
        { question: "What character makes a grumpy appearance at the end of the show to review the performance?", options: ["Roz", "Mr. Waternoose", "Randall", "The Abominable Snowman"], answer: "Roz" },
        { question: "This attraction replaced which former Tomorrowland show?", options: ["The Timekeeper", "Alien Encounter", "Mission to Mars", "If You Had Wings"], answer: "The Timekeeper" }
    ],
    [normalizeName("The Hall of Presidents")]: [
        { question: "What is the name of the theater where the show is presented?", options: ["The Liberty Square Hall of Presidents", "The Independence Hall Theater", "The Freedom Hall", "The Presidential Auditorium"], answer: "The Liberty Square Hall of Presidents" },
        { question: "How many U.S. Presidents are represented on stage as Audio-Animatronics figures?", options: ["All of them", "Only the most recent 10", "Only the founding fathers", "A selection of the most famous"], answer: "All of them" },
        { question: "Which president was the first to have a speaking role in the attraction?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Theodore Roosevelt"], answer: "Abraham Lincoln" },
        { question: "The show begins with a film highlighting key moments in American history. What is it projected on?", options: ["A 180-degree screen", "A standard movie screen", "A dome screen", "Multiple small screens"], answer: "A 180-degree screen" },
        { question: "What famous document is recited during the show?", options: ["The Gettysburg Address", "The Declaration of Independence", "The Preamble to the Constitution", "The Bill of Rights"], answer: "The Gettysburg Address" },
        { question: "The lobby of the attraction contains a collection of what?", options: ["Presidential artifacts and portraits", "Historic American flags", "Replica documents", "First Lady inaugural gowns"], answer: "Presidential artifacts and portraits" },
        { question: "The concept for this show grew out of an earlier idea for an attraction called what?", options: ["One Nation Under God", "Liberty Street", "Hall of the Declaration", "The American Pageant"], answer: "One Nation Under God" },
        { question: "What is the seal on the carpet in the center of the stage?", options: ["The Great Seal of the President of the United States", "The Great Seal of the United States", "The Liberty Bell seal", "The Disney Presidential Seal"], answer: "The Great Seal of the President of the United States" },
        { question: "Which famous actor provided the original narration for the show in 1971?", options: ["Lawrence Dobkin", "Morgan Freeman", "James Earl Jones", "Walter Cronkite"], answer: "Lawrence Dobkin" },
        { question: "The first version of the Abraham Lincoln animatronic debuted at what event?", options: ["The 1964-65 New York World's Fair", "The opening of Disneyland", "The 1939 World's Fair", "The Brussels World's Fair"], answer: "The 1964-65 New York World's Fair" }
    ],
    [normalizeName("Tomorrowland Transit Authority PeopleMover")]: [
        { question: "What type of propulsion system does the PeopleMover use?", options: ["Linear induction motors", "A chain drive", "Magnets embedded in the track", "Small jet engines"], answer: "Linear induction motors" },
        { question: "The ride provides a narrated tour of Tomorrowland. What is your vehicle called in the narration?", options: ["The TTA Blue Line", "The Express Tram", "The Sky-Liner", "The Tomorrowland Rover"], answer: "The TTA Blue Line" },
        { question: "The PeopleMover travels directly through the interior of which two attractions?", options: ["Space Mountain and Buzz Lightyear's Space Ranger Spin", "Carousel of Progress and Space Mountain", "Monsters, Inc. Laugh Floor and Buzz Lightyear", "Space Mountain and Stitch's Great Escape"], answer: "Space Mountain and Buzz Lightyear's Space Ranger Spin" },
        { question: "What futuristic city model can be seen from the PeopleMover?", options: ["Progress City", "Tomorrow's City", "The Experimental Prototype Community of Tomorrow", "Walt Disney's vision of the future"], answer: "Progress City" },
        { question: "What is the famous phrase the narrator says when passing by Space Mountain?", options: ["'Paging Mr. Morrow, Mr. Tom Morrow.'", "'Now approaching Space Mountain.'", "'Please keep your hands and arms inside the vehicle.'", "'Welcome to Starport Seven-Five.'"], answer: "'Paging Mr. Morrow, Mr. Tom Morrow.'" },
        { question: "The ride vehicles never stop moving, even for loading and unloading. What is the platform called?", options: ["A speed-ramped moving platform", "A rotating station", "A synchronized conveyor belt", "A variable speed platform"], answer: "A speed-ramped moving platform" },
        { question: "What was the original sponsor of this attraction?", options: ["Edison Electric Institute", "General Electric", "Ford", "Goodyear"], answer: "Edison Electric Institute" },
        { question: "The ride system for the PeopleMover was first tested at what major event?", options: ["The 1964-65 New York World's Fair", "The opening of Disneyland", "The 1967 Montreal Expo", "The 1982 World's Fair"], answer: "The 1964-65 New York World's Fair" },
        { question: "In one of the scenes, you can see a robot getting its hair done. What is this scene called?", options: ["The Coiffure-O-Bot", "The Salon of the Future", "The Robotic Beauty Parlor", "The Style-a-Tron 3000"], answer: "The Coiffure-O-Bot" },
        { question: "The PeopleMover track is roughly how long?", options: ["1 mile", "Half a mile", "2 miles", "A quarter mile"], answer: "1 mile" }
    ],
    [normalizeName("Tomorrowland Speedway")]: [
        { question: "What prevents the cars from steering off the track?", options: ["A center guide rail", "An invisible electric fence", "Magnetic bumpers", "Remote control by cast members"], answer: "A center guide rail" },
        { question: "The cars are powered by what type of engine?", options: ["Gas-powered Briggs & Stratton engines", "Electric motors", "Solar panels", "Compressed air"], answer: "Gas-powered Briggs & Stratton engines" },
        { question: "Before it was the Tomorrowland Speedway, what was the ride's original name?", options: ["Grand Prix Raceway", "Autopia", "Tomorrowland Racers", "The Future Freeway"], answer: "Grand Prix Raceway" },
        { question: "What famous auto racing event is the theming of the ride based on?", options: ["The Indianapolis 500", "The Daytona 500", "The 24 Hours of Le Mans", "The Monaco Grand Prix"], answer: "The Indianapolis 500" },
        { question: "What is the approximate top speed of the cars?", options: ["7 mph", "15 mph", "3 mph", "10 mph"], answer: "7 mph" },
        { question: "What does the large race leaderboard in the center of the track display?", options: ["Fictional racers and times", "The speeds of the actual cars", "Advertisements for sponsors", "The current park wait times"], answer: "Fictional racers and times" },
        { question: "In the past, what company sponsored the attraction?", options: ["Goodyear", "Firestone", "Mobil", "Chrysler"], answer: "Goodyear" },
        { question: "What landmark can be seen in the distance while driving on the track?", options: ["Cinderella Castle", "Space Mountain", "The Contemporary Resort", "TRON Lightcycle / Run"], answer: "TRON Lightcycle / Run" },
        { question: "How many cars can typically be on the track at one time across all lanes?", options: ["Over 100", "50", "75", "150"], answer: "Over 100" },
        { question: "What is given to guests at the end of the ride, especially younger drivers?", options: ["A 'Driver's License'", "A small trophy", "A checkered flag", "A sticker"], answer: "A 'Driver's License'" }
    ],
    [normalizeName("Walt Disney World Railroad")]: [
        { question: "How many authentic, restored steam trains are in operation on the WDW Railroad?", options: ["Four", "Three", "Five", "Two"], answer: "Four" },
        { question: "The trains were originally built by what famous company?", options: ["The Baldwin Locomotive Works", "The American Locomotive Company", "The Lima Locomotive Works", "The Disney Imagineering Company"], answer: "The Baldwin Locomotive Works" },
        { question: "What is the name of the No. 1 engine, named after Walt Disney himself?", options: ["Walter E. Disney", "The Magic Express", "The Spirit of Walt", "The Kingdom Queen"], answer: "Walter E. Disney" },
        { question: "The trains were originally used for what purpose in Mexico?", options: ["Hauling sugarcane", "Transporting passengers", "Mining operations", "Logging"], answer: "Hauling sugarcane" },
        { question: "What is the total length of the track that circles the Magic Kingdom?", options: ["1.5 miles", "1 mile", "2 miles", "2.5 miles"], answer: "1.5 miles" },
        { question: "Besides Main Street, U.S.A., what are the other two stations?", options: ["Frontierland and Fantasyland", "Adventureland and Tomorrowland", "Liberty Square and Tomorrowland", "Frontierland and Tomorrowland"], answer: "Frontierland and Fantasyland" },
        { question: "What kind of animal can be seen in a diorama between the Tomorrowland and Main Street stations?", options: ["Bison and Native Americans", "Dinosaurs", "Jungle animals", "African savanna animals"], answer: "Bison and Native Americans" },
        { question: "What is the name of the No. 2 engine, named after Walt's brother?", options: ["Roy O. Disney", "Lilly Belle", "Roger E. Broggie", "Walter E. Disney"], answer: "Roy O. Disney" },
        { question: "What is the gauge (width) of the railroad track?", options: ["36-inch narrow gauge", "Standard gauge", "42-inch narrow gauge", "24-inch narrow gauge"], answer: "36-inch narrow gauge" },
        { question: "The voice of the conductor heard during the ride belongs to which Disney Legend?", options: ["Jack Wagner", "Paul Frees", "Thurl Ravenscroft", "Dallas McKennon"], answer: "Jack Wagner" }
    ],
    [normalizeName("Main Street Vehicles")]: [
        { question: "Which of these is NOT a type of vehicle you can ride on Main Street?", options: ["Motorcycle", "Horse-drawn streetcar", "Fire engine", "Omnibus"], answer: "Motorcycle" },
        { question: "The vehicles provide one-way transportation between what two points?", options: ["Town Square and Cinderella Castle", "Main Street and Fantasyland", "The park entrance and Town Square", "Town Square and Liberty Square"], answer: "Town Square and Cinderella Castle" },
        { question: "What powers the horseless carriages (jitneys)?", options: ["Two-cylinder gasoline engines", "Electric motors", "Steam power", "Pedal power"], answer: "Two-cylinder gasoline engines" },
        { question: "The Omnibus is what type of vehicle?", options: ["A double-decker bus", "An old-fashioned taxi", "A police paddy wagon", "A delivery truck"], answer: "A double-decker bus" },
        { question: "What is the name of the fire engine that operates on Main Street?", options: ["Engine No. 71", "The Main Street Fire Brigade", "The Kingdom Fire Truck", "Walt's Firehouse"], answer: "Engine No. 71" },
        { question: "The horse-drawn streetcars run on what?", options: ["A track embedded in the street", "The regular pavement", "A designated cobblestone path", "A magnetic guidance system"], answer: "A track embedded in the street" },
        { question: "What is the main purpose of the Main Street Vehicles?", options: ["Atmosphere and entertainment", "Efficient transportation", "Parade floats", "Moving characters around"], answer: "Atmosphere and entertainment" },
        { question: "What time of day do the Main Street Vehicles typically stop running?", options: ["In the early afternoon", "At park closing", "After the morning rush", "When the parade starts"], answer: "In the early afternoon" },
        { question: "The design of the vehicles is meant to evoke what time period?", options: ["The early 1900s", "The 1920s", "The 1890s", "The 1950s"], answer: "The early 1900s" },
        { question: "What kind of horn does the fire engine have?", options: ["A loud hand-cranked siren", "A classic 'ah-ooga' horn", "A real brass bell", "A steam whistle"], answer: "A real brass bell" }
    ],
    [normalizeName("Liberty Square Riverboat")]: [
        { question: "What is the name of the authentic steam-powered sternwheeler?", options: ["Liberty Belle", "Mark Twain", "Columbia", "The Southern Star"], answer: "Liberty Belle" },
        { question: "The Riverboat travels along what body of water?", options: ["The Rivers of America", "The Mississippi River", "The Seven Seas Lagoon", "The Liberty River"], answer: "The Rivers of America" },
        { question: "What guides the riverboat along its path?", options: ["An underwater guide rail", "A human pilot steering", "GPS navigation", "A series of underwater cables"], answer: "An underwater guide rail" },
        { question: "Which of these scenes is NOT something you see from the riverboat?", options: ["A pirate shipwreck", "An old settler's cabin on fire", "A Native American village", "Various animatronic animals"], answer: "A pirate shipwreck" },
        { question: "How many decks are there for guests to explore on the Liberty Belle?", options: ["Three", "Two", "Four", "One"], answer: "Three" },
        { question: "The narration for the journey is provided by a fictional character based on whom?", options: ["Mark Twain", "Davy Crockett", "Abraham Lincoln", "Walt Disney"], answer: "Mark Twain" },
        { question: "What powers the large red paddle wheel at the back of the boat?", options: ["A real steam engine using water from the river", "An electric motor", "A diesel engine hidden on board", "The current of the river"], answer: "A real steam engine using water from the river" },
        { question: "What is the name of the abandoned mining town you can see from the boat?", options: ["Big Thunder Mining Co.", "Fort Langhorn", "Wilson's Cave Inn", "Harper's Mill"], answer: "Wilson's Cave Inn" },
        { question: "The Liberty Belle was completely rebuilt and refurbished over a period of many months. What part of the original boat was kept?", options: ["The steam engine and boiler", "The hull", "The paddlewheel", "The pilot house"], answer: "The steam engine and boiler" },
        { question: "What is the duration of one full trip around the Rivers of America?", options: ["About 17 minutes", "10 minutes", "25 minutes", "30 minutes"], answer: "About 17 minutes" }
    ],
    // --- HOLLYWOOD STUDIOS ---
    [normalizeName("Slinky Dog Dash")]: [
        { question: "What does Slinky Dog's coaster train do right before the second launch?", options: ["It stops, reverses, and launches again", "It does a 360-degree spin", "It goes through a loop", "It launches straight up"], answer: "It stops, reverses, and launches again" },
        { question: "At the end of the ride, which character is singing 'You've Got a Friend in Me'?", options: ["Wheezy the Penguin", "Woody", "Buzz Lightyear", "Jessie"], answer: "Wheezy the Penguin" },
        { question: "The coaster was designed by Andy to be part of what playset?", options: ["The Dash & Dodge Mega Coaster Kit", "The Slinky Spin Playset", "Andy's Backyard Coaster", "The Ultimate Toy Story Playset"], answer: "The Dash & Dodge Mega Coaster Kit" },
        { question: "What toy character's box can you see used as part of the ride's loading station?", options: ["Jessie", "Woody", "Buzz Lightyear", "Mr. Potato Head"], answer: "Jessie" },
        { question: "How many coaster trains can run on the track at one time?", options: ["Up to 5", "3", "2", "4"], answer: "Up to 5" },
        { question: "What is Andy's dog's name, often mentioned in Toy Story Land?", options: ["Buster", "Sparky", "Buddy", "Slinky"], answer: "Buster" },
        { question: "What material does Andy use to draw the plans for the coaster in the queue?", options: ["Crayons on notebook paper", "Chalk on the sidewalk", "Markers on a whiteboard", "Paint on a wooden fence"], answer: "Crayons on notebook paper" },
        { question: "Which Toy Story character is seen balancing on a stack of Jenga blocks near the track?", options: ["Jessie", "Rex", "Woody", "Buzz"], answer: "Jessie" },
        { question: "What does the second launch sequence of the ride go through?", options: ["A series of flashing rings", "A dark tunnel", "A water splash effect", "A cloud of smoke"], answer: "A series of flashing rings" },
        { question: "What is the color of the Rex figure that is tangled in the Christmas lights alongside the track?", options: ["Green", "Red", "Blue", "Yellow"], answer: "Green" }
    ],
    [normalizeName("The Twilight Zone Tower of Terror")]: [
        { question: "What is the name of the fictional hotel where the attraction is set?", options: ["The Hollywood Tower Hotel", "The Grand Californian", "The Tip Top Club", "The Overlook Hotel"], answer: "The Hollywood Tower Hotel" },
        { question: "In the ride's story, on what date did the lightning strike the hotel?", options: ["October 31, 1939", "December 7, 1941", "July 4, 1939", "January 1, 1940"], answer: "October 31, 1939" },
        { question: "What is the name of the little girl ghost who appears in the hallway and elevator?", options: ["Sally Shine", "Alice", "Mary", "Eleanor"], answer: "Sally Shine" },
        { question: "The ride vehicles are not elevators, but are actually what?", options: ["Autonomous Guided Vehicles (AGVs)", "Trackless ride vehicles", "Self-propelled elevator cars", "Cable-pulled platforms"], answer: "Autonomous Guided Vehicles (AGVs)" },
        { question: "How does the ride vehicle move from the elevator shaft to the drop shaft?", options: ["It moves horizontally out of one shaft and into another", "It is lifted by a crane", "The entire shaft rotates", "It drops down a ramp"], answer: "It moves horizontally out of one shaft and into another" },
        { question: "To create the feeling of weightlessness, the elevator car is not dropped, but is instead what?", options: ["Pulled downwards faster than gravity", "Lifted slightly and then released", "Pushed by compressed air", "Allowed to freefall"], answer: "Pulled downwards faster than gravity" },
        { question: "The drop sequences are randomized by a computer system. How many different potential sequences are there?", options: ["Four", "Two", "Unlimited", "Ten"], answer: "Four" },
        { question: "What is the '5th Dimension' scene, unique to the WDW version, supposed to represent?", options: ["A journey through another dimension", "The hotel's basement", "The inside of a clock", "A flashback in time"], answer: "A journey through another dimension" },
        { question: "What is the name of the little girl's toy that she is holding?", options: ["A Mickey Mouse doll", "A teddy bear", "A vintage doll", "A book"], answer: "A Mickey Mouse doll" },
        { question: "The lobby of the hotel is filled with props. One of them is a Mahjong game in progress. What does this signify?", options: ["The guests left in a hurry", "It was a popular game in the 1930s", "It's a clue to the mystery", "It's a tribute to an Imagineer"], answer: "The guests left in a hurry" }
    ],
    [normalizeName("Rock 'n' Roller Coaster Starring Aerosmith")]: [
        { question: "What fictional record label do you visit in the pre-show?", options: ["G-Force Records", "Rock Solid Records", "Adrenaline Records", "Starr-Labs"], answer: "G-Force Records" },
        { question: "How fast does the coaster accelerate at launch?", options: ["0 to 57 mph in 2.8 seconds", "0 to 60 mph in 3 seconds", "0 to 50 mph in 2.5 seconds", "0 to 65 mph in 3.2 seconds"], answer: "0 to 57 mph in 2.8 seconds" },
        { question: "What kind of vehicle are you riding in to get to the concert?", options: ["A super-stretch limo", "A sports car", "A tour bus", "A motorcycle"], answer: "A super-stretch limo" },
        { question: "How many inversions (times you go upside down) are there on the ride?", options: ["Three", "Two", "Four", "One"], answer: "Three" },
        { question: "Each 'limo' has its own unique soundtrack. How many different song combinations are there?", options: ["Five", "Three", "Four", "Six"], answer: "Five" },
        { question: "What is the name of the Aerosmith song that might play with the lyrics 'Love in an elevator'?", options: ["'Love in an Elevator' is not a song on the ride", "The song is literally called 'Love in an Elevator'", "'Sweet Emotion'", "'Walk This Way'"], answer: "'Love in an Elevator' is not a song on the ride" },
        { question: "What is the force you feel at launch, measured in Gs?", options: ["Nearly 5 Gs", "3 Gs", "4 Gs", "6 Gs"], answer: "Nearly 5 Gs" },
        { question: "What does the license plate on your limo often say?", options: ["2GETHER", "BUHBYE", "1QKLIMO", "ROCKIT"], answer: "BUHBYE" },
        { question: "The coaster track and supports are painted what color to make them disappear in the dark?", options: ["Black", "Dark Blue", "Dark Purple", "Gray"], answer: "Black" },
        { question: "What famous Los Angeles landmark signs do you see during the ride?", options: ["The Hollywood Sign", "The Capitol Records Building", "The TCL Chinese Theatre", "All of the above"], answer: "All of the above" }
    ],
    [normalizeName("Star Wars: Rise of the Resistance")]: [
        { question: "What is the name of the Resistance transport ship you board first, which is 'captured' by the First Order?", options: ["Intersystem Transport Ship (I-TS)", "The Millennium Falcon", "A Resistance X-Wing", "A Blockade Runner"], answer: "Intersystem Transport Ship (I-TS)" },
        { question: "The ride vehicles in the Star Destroyer are piloted by what?", options: ["An R5 series astromech droid", "A reprogrammed Imperial droid", "BB-8", "R2-D2"], answer: "A reprogrammed Imperial droid" },
        { question: "The ride system for the main portion of the attraction uses what technology?", options: ["Trackless dark ride vehicles", "A motion-based simulator", "An overhead gantry system", "A traditional coaster track"], answer: "Trackless dark ride vehicles" },
        { question: "What is the name of the First Order officer who interrogates you?", options: ["General Hux", "Kylo Ren", "Captain Phasma", "An unnamed officer"], answer: "General Hux" },
        { question: "What massive First Order walkers do you encounter in the main hangar bay?", options: ["AT-ATs", "AT-STs", "AT-M6s", "AT-TEs"], answer: "AT-ATs" },
        { question: "During your escape, Kylo Ren uses the Force to do what to your vehicle?", options: ["Stop it and pull it towards him", "Lift it into the air", "Push it away", "Crush it"], answer: "Stop it and pull it towards him" },
        { question: "Which Resistance hero appears as a hologram in the pre-show briefing?", options: ["Rey", "Poe Dameron", "Finn", "Leia Organa"], answer: "Rey" },
        { question: "How do you ultimately escape the Star Destroyer?", options: ["In a Resistance escape pod", "By stealing a TIE Fighter", "The Millennium Falcon rescues you", "You are rescued by X-Wings"], answer: "In a Resistance escape pod" },
        { question: "What color is the blade of the lightsaber Kylo Ren uses to cut through the ceiling?", options: ["Red", "Blue", "Green", "Purple"], answer: "Red" },
        { question: "The actor who plays General Hux in the films also reprises his role for the attraction. What is his name?", options: ["Domhnall Gleeson", "Adam Driver", "Oscar Isaac", "John Boyega"], answer: "Domhnall Gleeson" }
    ],
    [normalizeName("Millennium Falcon: Smugglers Run")]: [
        { question: "What is the name of the Weequay pirate who gives you your mission briefing?", options: ["Hondo Ohnaka", "Han Solo", "Lando Calrissian", "Maz Kanata"], answer: "Hondo Ohnaka" },
        { question: "How many crew members are needed to operate the Millennium Falcon cockpit?", options: ["Six", "Four", "Eight", "Two"], answer: "Six" },
        { question: "Which two positions are in the front row of the cockpit?", options: ["Pilots", "Gunners", "Engineers", "Navigators"], answer: "Pilots" },
        { question: "What is the primary objective of your smuggling mission?", options: ["To steal Coaxium", "To rescue Chewbacca", "To deliver weapons to the Resistance", "To escape a Star Destroyer"], answer: "To steal Coaxium" },
        { question: "What happens to the hallway corridor as you exit if your crew performed poorly?", options: ["It sparks, smokes, and has flickering lights", "It is pristine and clean", "Warning sirens go off", "Droid sweepers are cleaning up"], answer: "It sparks, smokes, and has flickering lights" },
        { question: "What famous game table can you sit at in the queue area inside the Falcon?", options: ["The Dejarik (holochess) table", "A Sabacc table", "A Pazaak table", "A poker table"], answer: "The Dejarik (holochess) table" },
        { question: "What is the role of the Engineers in the back row?", options: ["Repairing the ship by pressing lit buttons", "Firing the cannons", "Navigating the ship", "Activating hyperdrive"], answer: "Repairing the ship by pressing lit buttons" },
        { question: "During the mission, you have to attach your ship to what?", options: ["A First Order train car", "A Star Destroyer", "An asteroid", "Another smuggling ship"], answer: "A First Order train car" },
        { question: "Hondo Ohnaka runs what kind of business from Batuu?", options: ["A legitimate shipping company (that is a front)", "A droid repair shop", "A cantina", "A podracing team"], answer: "A legitimate shipping company (that is a front)" },
        { question: "What happens when the pilots pull the lever to activate hyperdrive?", options: ["The ship jumps to lightspeed", "The ship stalls if not timed correctly", "The ship fires its cannons", "The shields are activated"], answer: "The ship jumps to lightspeed" }
    ],
    [normalizeName("Star Tours – The Adventures Continue")]: [
        { question: "What is the name of the clumsy droid pilot of your Starspeeder?", options: ["C-3PO", "R2-D2", "RX-24 (Rex)", "BB-8"], answer: "C-3PO" },
        { question: "The ride features multiple randomized locations. How many possible story combinations are there?", options: ["Over 50", "10", "20", "100"], answer: "Over 50" },
        { question: "During the pre-flight boarding video, what is the name of the spokesbot for Star Tours?", options: ["Aly San San", "G2-9T", "IC-360", "Star-Bot"], answer: "Aly San San" },
        { question: "What is the model number of the ride vehicle you are in?", options: ["Starspeeder 1000", "Starspeeder 3000", "Incom T-65", "Corellian YT-1300"], answer: "Starspeeder 1000" },
        { question: "In many ride variations, a 'Rebel spy' is identified among the guests. How is this done?", options: ["A photo of an audience member is shown", "A name is called out", "A spotlight shines on a seat", "C-3PO points them out"], answer: "A photo of an audience member is shown" },
        { question: "Which of these is a planet you might visit during your tour?", options: ["Hoth", "Naboo", "Kashyyyk", "All of the above"], answer: "All of the above" },
        { question: "What character often provides a holographic transmission at the start of your journey?", options: ["Princess Leia", "Yoda", "BB-8", "All of the above"], answer: "All of the above" },
        { question: "What part of the queue features two droids, G2-9T and G2-4T, working on droids and ships?", options: ["The Droidnostics Center", "The Hangar Bay", "The Maintenance Depot", "The Robot Repair Bay"], answer: "The Droidnostics Center" },
        { question: "The original pilot of Star Tours, Captain Rex, can now be found in what other location in Hollywood Studios?", options: ["As a DJ in Oga's Cantina", "Working as a mechanic in Rise of the Resistance", "In the queue for Smugglers Run", "As a character meet and greet"], answer: "As a DJ in Oga's Cantina" },
        { question: "What is the name of the protocol droid in the queue who is being roasted by a 'scanner'?", options: ["G2-4T", "G2-9T", "Aly San San", "C-3PO"], answer: "G2-9T" }
    ],
    [normalizeName("Mickey & Minnie's Runaway Railway")]: [
        { question: "What is the name of the song featured in the 'Perfect Picnic' cartoon short you see in the pre-show?", options: ["'Nothing Can Stop Us Now'", "'A Perfect Picnic Day'", "'All Aboard!'", "'Mickey's Theme'"], answer: "'Nothing Can Stop Us Now'" },
        { question: "What causes the movie screen to 'explode', allowing guests to step into the cartoon world?", options: ["Goofy's train crashes through it", "Mickey and Minnie drive through it", "Pluto causes an explosion", "A magical spell"], answer: "Goofy's train crashes through it" },
        { question: "The ride vehicles use what technology to move around?", options: ["Trackless LPS (Local Positioning System)", "A hidden guide wire", "Magnets under the floor", "An overhead grid system"], answer: "Trackless LPS (Local Positioning System)" },
        { question: "What is the name of the small bird that follows you throughout the ride?", options: ["Chuuby", "Tweety", "Sunny", "Pipp"], answer: "Chuuby" },
        { question: "In the carnival scene, which ride does your vehicle get stuck on?", options: ["A twister", "A Ferris wheel", "A roller coaster", "A fun house"], answer: "A twister" },
        { question: "When your vehicles go over the waterfall, what is the name of the musical number that plays?", options: ["'The Waterfall Waltz'", "'Down the River'", "'Go with the Flow'", "'A River Adventure'"], answer: "'The Waterfall Waltz'" },
        { question: "In the city scene, who is giving a dance lesson?", options: ["Daisy Duck", "Minnie Mouse", "Clarabelle Cow", "Goofy"], answer: "Daisy Duck" },
        { question: "The ride vehicles split apart and perform a 'dance' in which scene?", options: ["The dance studio with Daisy", "The carnival", "The underwater scene", "The factory scene"], answer: "The dance studio with Daisy" },
        { question: "This is the first ride-through attraction at any Disney park to star which character?", options: ["Mickey Mouse", "Goofy", "Donald Duck", "Minnie Mouse"], answer: "Mickey Mouse" },
        { question: "What happens to the 'Perfect Picnic' at the very end of the ride?", options: ["It gets blown up by fireworks", "It gets eaten by Pluto", "It's finally enjoyed by Mickey and Minnie", "It gets rained on"], answer: "It gets blown up by fireworks" }
    ],
    [normalizeName("Toy Story Mania!")]: [
        { question: "What are guests trying to hit with their virtual projectiles in the first game, 'Hamm & Eggs'?", options: ["Barnyard animals", "Ducks in a pond", "Balloons", "Plates"], answer: "Barnyard animals" },
        { question: "In 'Rex and Trixie's Dino Darts', what type of objects are you throwing darts at?", options: ["Balloons", "Rings", "Apples", "Targets"], answer: "Balloons" },
        { question: "What is the name of the game where you throw rings onto the Little Green Men?", options: ["'Ring Around the Aliens'", "'Alien Ring Toss'", "'Flying Saucers'", "'Galactic Ring Toss'"], answer: "Alien Ring Toss" },
        { question: "How do you activate the 'secret' or higher-point targets in many of the games?", options: ["By hitting a specific sequence of targets", "By hitting the same target multiple times", "By pulling the string faster", "By working together with your partner"], answer: "By hitting a specific sequence of targets" },
        { question: "What do guests wear to see the game screens?", options: ["3D glasses", "Special goggles", "A helmet", "Nothing"], answer: "3D glasses" },
        { question: "What does the pull-string on your cannon do?", options: ["Fires the projectile", "Rotates the vehicle", "Changes the game", "Activates a power-up"], answer: "Fires the projectile" },
        { question: "What is the final 'speed round' game called?", options: ["'Woody's Rootin' Tootin' Shootin' Gallery'", "'Buzz Lightyear's Flying Tossers'", "'Jessie's Critter Roundup'", "'The Final Challenge'"], answer: "'Woody's Rootin' Tootin' Shootin' Gallery'" },
        { question: "In the queue line at WDW, what giant animatronic character interacts with guests?", options: ["Mr. Potato Head", "Woody", "Buzz Lightyear", "Rex"], answer: "Mr. Potato Head" },
        { question: "What type of projectiles are you shooting in the 'Green Army Men Shoot Camp' game?", options: ["Baseball", "Plates", "Darts", "Rings"], answer: "Plates" },
        { question: "Between games, what happens to your ride vehicle?", options: ["It spins and moves to the next screen", "It stops completely", "It moves backwards", "It shakes"], answer: "It spins and moves to the next screen" }
    ],
    [normalizeName("Alien Swirling Saucers")]: [
        { question: "This ride is themed to a playset that Andy won at what location?", options: ["Pizza Planet", "Al's Toy Barn", "Sunnyside Daycare", "A carnival"], answer: "Pizza Planet" },
        { question: "What is the name of the giant, four-armed alien robot in the center of the ride?", options: ["The Claw", "Zurg", "The Galactic Guardian", "Emperor Zurg's Robot"], answer: "The Claw" },
        { question: "The ride vehicles are a combination of what two things?", options: ["A toy rocket ship and an alien", "A car and a spaceship", "A teacup and a UFO", "A bumper car and a rocket"], answer: "A toy rocket ship and an alien" },
        { question: "How does the ride vehicle move?", options: ["It is whipped around by the alien's saucer", "It spins on its own axis", "It moves along a fixed track", "It uses magnets to float"], answer: "It is whipped around by the alien's saucer" },
        { question: "What is the famous phrase associated with the aliens and the claw?", options: ["'The Claw is our master!'", "'To infinity, and beyond!'", "'You've got a friend in me'", "'Oooooohhh, the claw!'"], answer: "'Oooooohhh, the claw!'" },
        { question: "The music played during the ride is described as what?", options: ["Space-themed techno remixes of Toy Story songs", "Classic rock", "Orchestral scores from the movies", "Country music"], answer: "Space-themed techno remixes of Toy Story songs" },
        { question: "How many guests can fit in one rocket ship vehicle?", options: ["Up to 3", "2", "4", "1"], answer: "Up to 3" },
        { question: "What other Toy Story character can be seen guarding the entrance to the attraction?", options: ["Buzz Lightyear", "Woody", "Jessie", "Rex"], answer: "Buzz Lightyear" },
        { question: "The ride system is similar to what classic carnival ride?", options: ["Scrambler", "Tilt-A-Whirl", "Whip", "Teacups"], answer: "Whip" },
        { question: "What is the color of the giant 'play' button that starts the ride sequence in the queue?", options: ["Green", "Red", "Blue", "Yellow"], answer: "Green" }
    ],
    [normalizeName("Walt Disney Presents")]: [
        { question: "This walk-through exhibit celebrates the life and legacy of whom?", options: ["Walt Disney", "Roy E. Disney", "Mickey Mouse", "The Imagineers"], answer: "Walt Disney" },
        { question: "What is the name of the short biographical film shown at the end of the exhibit?", options: ["'One Man's Dream'", "'The Walt Disney Story'", "'A Day in the Life of Walt'", "'The Man Behind the Mouse'"], answer: "'One Man's Dream'" },
        { question: "The exhibit features a recreation of what important location from Walt's life?", options: ["His working office from the Burbank studio", "His childhood home in Marceline", "The garage where he started his first company", "His apartment above the firehouse"], answer: "His working office from the Burbank studio" },
        { question: "What massive model is on display, showing a concept for a major theme park project?", options: ["The original 'Florida Project' Epcot model", "A model of Tokyo Disneyland", "The first model of Disneyland", "A model of Beast's Castle"], answer: "The original 'Florida Project' Epcot model" },
        { question: "The exhibit includes original audio recordings of Walt Disney himself. What is one of the main topics he discusses?", options: ["His philosophy on entertainment and theme parks", "His favorite movies", "His family life", "His predictions for the future"], answer: "His philosophy on entertainment and theme parks" },
        { question: "What does the attraction often feature in a special gallery at the end?", options: ["Sneak peeks and models of upcoming movies and attractions", "A character meet and greet", "An art class", "A gift shop"], answer: "Sneak peeks and models of upcoming movies and attractions" },
        { question: "What was the original name of this attraction when it opened?", options: ["Walt Disney: One Man's Dream", "The Walt Disney Story", "Walt Disney Presents", "The Legacy of Walt Disney"], answer: "Walt Disney: One Man's Dream" },
        { question: "The exhibit contains one of the original Audio-Animatronic figures of which character?", options: ["Abraham Lincoln", "The singing pirates", "The Tiki Room birds", "The Country Bears"], answer: "Abraham Lincoln" },
        { question: "What is the 'second star to the right' a reference to in Walt's office display?", options: ["Peter Pan and the address of Neverland", "A map of the studio lot", "His two daughters", "The location of Disneyland"], answer: "Peter Pan and the address of Neverland" },
        { question: "What mode of transportation does the exhibit highlight as one of Walt's personal passions?", options: ["Trains", "Cars", "Planes", "Boats"], answer: "Trains" }
    ],
    // --- EPCOT ---
    [normalizeName("Guardians of the Galaxy: Cosmic Rewind")]: [
        { question: "What is the name of the celestial being that serves as the ride's antagonist?", options: ["Eson the Searcher", "Thanos", "Ronan the Accuser", "Ego"], answer: "Eson the Searcher" },
        { question: "The ride vehicles are called 'Starjumpers'. What unique ability do they have?", options: ["They can rotate 360 degrees", "They can go underwater", "They can fly freely", "They can shrink"], answer: "They can rotate 360 degrees" },
        { question: "This is the first Disney coaster to feature what type of launch?", options: ["A reverse launch", "A vertical launch", "A water-propelled launch", "A magnetic launch"], answer: "A reverse launch" },
        { question: "The queue is themed as the 'Wonders of Xandar' pavilion. What is the main exhibit?", options: ["A showcase of Xandarian culture and technology", "A history of the Guardians of the Galaxy", "A collection of alien artifacts", "A tour of a Nova Corps ship"], answer: "A showcase of Xandarian culture and technology" },
        { question: "How many different songs are on the ride's 'Awesome Mix' playlist?", options: ["Six", "Eight", "Five", "Ten"], answer: "Six" },
        { question: "What is the name of the Nova Corps officer who leads the pavilion tour?", options: ["Nova Prime Irani Rael", "Centurion Tal Marik", "Garthan Saal", "Rhomann Dey"], answer: "Centurion Tal Marik" },
        { question: "What object does the celestial Eson steal from the pavilion?", options: ["A Cosmic Generator", "An Infinity Stone", "The Orb", "A Xandarian power source"], answer: "A Cosmic Generator" },
        { question: "The ride building is so large that what could fit inside it?", options: ["Spaceship Earth", "Four Spaceship Earths", "Two Tower of Terrors", "The entire World Showcase"], answer: "Four Spaceship Earths" },
        { question: "Where do the Guardians 'jump' you to in order to chase Eson?", options: ["Back to the Big Bang", "The planet Xandar", "The planet Knowhere", "A black hole"], answer: "Back to the Big Bang" },
        { question: "Which famous TV actor appears in the pre-show as Centurion Tal Marik?", options: ["Terry Crews", "Neil Patrick Harris", "Ty Burrell", "Chris Pratt"], answer: "Terry Crews" }
    ],
    [normalizeName("Test Track")]: [
        { question: "What is the top speed reached during the outdoor portion of the ride?", options: ["65 mph", "60 mph", "70 mph", "55 mph"], answer: "65 mph" },
        { question: "In the queue, guests design their own 'Sim-Car'. What four attributes are tested?", options: ["Capability, Efficiency, Responsiveness, Power", "Speed, Handling, Safety, Design", "Aerodynamics, Fuel Economy, Acceleration, Handling", "Power, Durability, Style, Comfort"], answer: "Capability, Efficiency, Responsiveness, Power" },
        { question: "What car company is the current sponsor of the attraction?", options: ["Chevrolet", "Ford", "General Motors", "BMW"], answer: "Chevrolet" },
        { question: "During the 'Responsiveness' test, what obstacles do you have to maneuver around?", options: ["Virtual cones and tight turns", "Other cars", "Falling rocks", "Water hazards"], answer: "Virtual cones and tight turns" },
        { question: "What happens during the 'Power' test?", options: ["A rapid acceleration up a hill", "A brake test", "A speed run on a straightaway", "A test of the car's torque"], answer: "A rapid acceleration up a hill" },
        { question: "Before the final speed run, your car appears to be headed for a collision with what?", options: ["A semi-truck", "A brick wall", "Another test car", "A crash test dummy"], answer: "A semi-truck" },
        { question: "What is the name of the original version of this attraction, sponsored by General Motors?", options: ["World of Motion", "The Transportation Corridor", "The Future of Driving", "GM Test Track"], answer: "World of Motion" },
        { question: "How many guests can sit in a single Test Track ride vehicle?", options: ["Six", "Four", "Five", "Three"], answer: "Six" },
        { question: "After the ride, where can you see how your car design scored against others?", options: ["On large touch screens in the post-show area", "On your phone via the app", "The scores are emailed to you", "On the screen inside the ride vehicle"], answer: "On large touch screens in the post-show area" },
        { question: "What kind of weather conditions are simulated during the 'Capability' test?", options: ["Icy roads and rough terrain", "Heavy rain and wind", "Extreme heat and desert sand", "A lightning storm"], answer: "Icy roads and rough terrain" }
    ],
    [normalizeName("Mission: SPACE")]: [
        { question: "The ride simulates astronaut training for a mission to what planet?", options: ["Mars", "The Moon", "Jupiter", "Venus"], answer: "Mars" },
        { question: "What technology is used to create the sensation of G-forces during liftoff?", options: ["A centrifuge", "A motion simulator base", "Vibrating seats", "Compressed air jets"], answer: "A centrifuge" },
        { question: "There are two 'intensity levels' for the ride. What colors are they?", options: ["Orange and Green", "Red and Blue", "Advanced and Beginner", "High and Low"], answer: "Orange and Green" },
        { question: "What is the name of the training center where the attraction is set?", options: ["ISTC (International Space Training Center)", "NASA", "Star Command", "The Mars Mission Center"], answer: "ISTC (International Space Training Center)" },
        { question: "How many 'trainees' are in each ride capsule?", options: ["Four", "Six", "Two", "Eight"], answer: "Four" },
        { question: "What is the role of the 'Commander' during the mission?", options: ["Initiating the launch sequence", "Firing the thrusters", "Navigating the ship", "Deploying the shields"], answer: "Initiating the launch sequence" },
        { question: "What near-disaster do you have to manually correct for during the mission?", options: ["A meteor shower", "An alien attack", "A system malfunction", "A solar flare"], answer: "A meteor shower" },
        { question: "What is the name of the space capsule you are riding in?", options: ["X-2 Deep Space Shuttle", "The Mars Explorer", "The Star Jumper", "The Comet Chaser"], answer: "X-2 Deep Space Shuttle" },
        { question: "What famous actor gives you your pre-flight briefing as the CAPCOM?", options: ["Gary Sinise", "Tom Hanks", "Kevin Bacon", "Bill Paxton"], answer: "Gary Sinise" },
        { question: "This attraction replaced which beloved former Epcot ride?", options: ["Horizons", "World of Motion", "Journey into Imagination", "The Living Seas"], answer: "Horizons" }
    ],
    [normalizeName("Frozen Ever After")]: [
        { question: "The ride's story is celebrating what event in Arendelle?", options: ["A Summer Snow Day", "Elsa's coronation anniversary", "Anna's birthday", "The winter solstice"], answer: "A Summer Snow Day" },
        { question: "What is the name of the small, snowy creatures created by Elsa's sneezes?", options: ["Snowgies", "Ice Sprites", "Frostlings", "Snowflakes"], answer: "Snowgies" },
        { question: "What unique feature do the ride vehicles (boats) have in the final scene?", options: ["They travel backwards down a small drop", "They spin around", "They rock side to side", "They splash the audience"], answer: "They travel backwards down a small drop" },
        { question: "This attraction replaced which former Norway pavilion ride?", options: ["Maelstrom", "The Viking Voyage", "Norway Adventure", "Fjord Explorer"], answer: "Maelstrom" },
        { question: "What song does Elsa sing in her ice palace?", options: ["'Let It Go'", "'Into the Unknown'", "'Show Yourself'", "'For the First Time in Forever'"], answer: "'Let It Go'" },
        { question: "Which character's sauna is featured in the queue line?", options: ["Oaken's", "Kristoff's", "The Trolls'", "Anna's"], answer: "Oaken's" },
        { question: "The Audio-Animatronics in this ride are notable for being the first to have what feature?", options: ["All-electric, for more fluid movements", "Projected faces", "Holographic bodies", "Real human hair"], answer: "All-electric, for more fluid movements" },
        { question: "What is Marshmallow, the giant snow monster, doing when you see him?", options: ["Singing along with the Snowgies", "Guarding the ice palace", "Chasing Kristoff", "Making snow cones"], answer: "Singing along with the Snowgies" },
        { question: "What are the names of the two trolls who tell the story of Anna and Elsa?", options: ["Grand Pabbie and Bulda", "The Rock Giants", "The Troll King and Queen", "Gothi and Olgda"], answer: "Grand Pabbie and Bulda" },
        { question: "At the end of the ride, what are Anna, Elsa, and Olaf doing?", options: ["Waving goodbye as fireworks go off", "Singing a final song", "Building a snowman", "Ice skating"], answer: "Waving goodbye as fireworks go off" }
    ],
    [normalizeName("Remy's Ratatouille Adventure")]: [
        { question: "What shape are the ride vehicles designed to look like?", options: ["Rats", "Cheese wedges", "Chef hats", "Spoons"], answer: "Rats" },
        { question: "The ride uses a combination of 3D screens and large physical sets. What is this ride style called?", options: ["A trackless dark ride", "A motion simulator", "A 4D experience", "An interactive ride"], answer: "A trackless dark ride" },
        { question: "What is the name of the restaurant you 'shrink' down to the size of a rat to visit?", options: ["Gusteau's", "La Ratatouille", "Remy's Place", "Skinner's"], answer: "Gusteau's" },
        { question: "During the ride, you are chased by which character from the movie?", options: ["Chef Skinner", "Anton Ego", "Linguini", "Colette"], answer: "Chef Skinner" },
        { question: "What sensory effect is used when a champagne bottle is popped near your vehicle?", options: ["A spray of water", "A puff of air", "A sweet smell", "A vibrating floor"], answer: "A spray of water" },
        { question: "At the end of the ride, you enter a bistro full of other rats. What is this restaurant called?", options: ["La Ratatouille", "Remy's Kitchen", "Le Festin des Rats", "Bistrot Chez Remy"], answer: "Bistrot Chez Remy" },
        { question: "The ride vehicles are divided into how many smaller groups that move independently?", options: ["Three groups of three cars", "Two groups of four cars", "Four groups of two cars", "They all move together"], answer: "Three groups of three cars" },
        { question: "Where did this attraction first debut?", options: ["Walt Disney Studios Park in Paris", "Epcot", "Tokyo DisneySea", "Hong Kong Disneyland"], answer: "Walt Disney Studios Park in Paris" },
        { question: "What happens in the kitchen scene when you hide under a hot stove?", options: ["You feel a blast of heat", "A chef tries to stomp on you", "You get sprayed with water", "The floor shakes"], answer: "You feel a blast of heat" },
        { question: "What is the name of Remy's less-adventurous brother?", options: ["Emile", "Django", "Auguste", "Linguini"], answer: "Emile" }
    ],
    [normalizeName("Spaceship Earth")]: [
        { question: "The giant geodesic sphere that houses the ride is often informally called what?", options: ["The Epcot Ball", "The Golf Ball", "The Big Ball", "All of the above"], answer: "All of the above" },
        { question: "The ride's theme is the history of what?", options: ["Communication", "Transportation", "Innovation", "Exploration"], answer: "Communication" },
        { question: "What famous author was a consultant on the original script for the attraction?", options: ["Ray Bradbury", "Isaac Asimov", "Arthur C. Clarke", "Kurt Vonnegut"], answer: "Ray Bradbury" },
        { question: "The ride vehicles are called what?", options: ["Time Machines", "Omnimovers", "Progress Pods", "History Rovers"], answer: "Time Machines" },
        { question: "In the scene depicting ancient Egypt, what smell is pumped into the air?", options: ["Burning papyrus", "Musty tomb", "Desert sand", "Nile water"], answer: "Burning papyrus" },
        { question: "On the touch screen in your vehicle, you create a vision of the future. What happens to it at the end?", options: ["It's projected onto a giant globe with other guests' faces", "It's emailed to you", "It's displayed on a leaderboard", "It's saved to your PhotoPass"], answer: "It's projected onto a giant globe with other guests' faces" },
        { question: "Which famous actress has served as the narrator for the ride?", options: ["Judi Dench", "Sigourney Weaver", "Meryl Streep", "Helen Mirren"], answer: "Judi Dench" },
        { question: "The geodesic sphere is made of how many triangular panels?", options: ["11,324", "5,000", "15,560", "8,740"], answer: "11,324" },
        { question: "What invention is being celebrated in the Renaissance scene?", options: ["The printing press", "The telescope", "The paintbrush", "The clock"], answer: "The printing press" },
        { question: "What special feature does the exterior of Spaceship Earth have to handle rain?", options: ["A gutter system that funnels water to the World Showcase Lagoon", "The panels absorb the water", "The water evaporates instantly", "It's coated in a waterproof sealant"], answer: "A gutter system that funnels water to the World Showcase Lagoon" }
    ],
    [normalizeName("Soarin' Around the World")]: [
        { question: "What kind of ride system lifts guests up in front of the giant screen?", options: ["A cantilevered mechanical lift system", "A hydraulic platform", "An electromagnetic levitation system", "A series of robotic arms"], answer: "A cantilevered mechanical lift system" },
        { question: "The ride experience is designed to simulate what activity?", options: ["Hang gliding", "Flying in a plane", "Paragliding", "Skydiving"], answer: "Hang gliding" },
        { question: "What scent is used when you fly over the Taj Mahal in India?", options: ["Jasmine", "Roses", "Spices", "Grass"], answer: "Roses" },
        { question: "What famous landmark do you fly over in the final scene before returning to Epcot?", options: ["Eiffel Tower", "Spaceship Earth", "Sydney Opera House", "The Great Wall of China"], answer: "Spaceship Earth" },
        { question: "What is the name of your chief flight attendant in the pre-show video?", options: ["Patrick", "John", "David", "Michael"], answer: "Patrick" },
        { question: "The original version of this ride was called 'Soarin' Over California' and debuted where?", options: ["Disney California Adventure", "Disneyland", "Epcot", "Tokyo DisneySea"], answer: "Disney California Adventure" },
        { question: "What animal makes a surprise appearance during the African savanna scene?", options: ["An elephant", "A lion", "A giraffe", "A zebra"], answer: "An elephant" },
        { question: "The giant, curved projection screen is what type of screen?", options: ["An IMAX OMNIMAX screen", "A standard IMAX screen", "A 4K LED screen", "A Cinerama screen"], answer: "An IMAX OMNIMAX screen" },
        { question: "What is the name of the fictional airline for the attraction?", options: ["Soarin' International", "Air Disney", "Global Wings", "There isn't one"], answer: "There isn't one" },
        { question: "In the Fiji scene, what scent is used?", options: ["Sea breeze", "Tropical flowers", "Coconut", "Rainforest"], answer: "Sea breeze" }
    ],
    [normalizeName("Journey Into Imagination with Figment")]: [
        { question: "What is the name of the institute where the ride takes place?", options: ["The Imagination Institute", "The Dreamfinder's Lab", "The Epcot Science Center", "The Institute of Innovation"], answer: "The Imagination Institute" },
        { question: "Who is the chairman of the Imagination Institute?", options: ["Dr. Nigel Channing", "Dr. Seeker", "Dr. Marsh", "Dr. Brainard"], answer: "Dr. Nigel Channing" },
        { question: "Figment is a small dragon of what color?", options: ["Purple", "Green", "Red", "Blue"], answer: "Purple" },
        { question: "The ride is supposed to be a tour of what?", options: ["The five human senses", "The history of imagination", "The scientific method", "The future of technology"], answer: "The five human senses" },
        { question: "In the Sound Lab, Figment interrupts the experiment with what sound?", options: ["A telephone ringing", "A train whistle", "A loud rock song", "A baby crying"], answer: "A telephone ringing" },
        { question: "In the Smell Lab, what does Figment turn the rose scent into?", options: ["A skunk smell", "A burnt toast smell", "A dirty socks smell", "A coffee smell"], answer: "A skunk smell" },
        { question: "What is the name of the ride's theme song?", options: ["'One Little Spark'", "'Making Memories'", "'Imagination'", "'The Dreamfinder's Song'"], answer: "'One Little Spark'" },
        { question: "Who was Figment's original partner in the first version of the attraction?", options: ["Dreamfinder", "Dr. Channing", "Mickey Mouse", "Merlin"], answer: "Dreamfinder" },
        { question: "What does Figment say is 'the real treasure' of the Imagination Institute?", options: ["New ideas", "Following the rules", "Scientific data", "Winning awards"], answer: "New ideas" },
        { question: "The exterior of the attraction features two large glass what?", options: ["Pyramids", "Spheres", "Cubes", "Tubes"], answer: "Pyramids" }
    ],
    [normalizeName("The Seas with Nemo & Friends")]: [
        { question: "What type of ride vehicle do guests board for this attraction?", options: ["A Clamobile", "A Submarine", "A Turtle Shell", "A Coral Reef Cruiser"], answer: "A Clamobile" },
        { question: "What is the name of the big, beautiful, blue world where the fish live?", options: ["The Big Blue World", "The Great Barrier Reef", "The Coral Kingdom", "The Ocean of Dreams"], answer: "The Big Blue World" },
        { question: "The ride uses a special effect to make the animated characters appear to swim with the real fish. What is it?", options: ["Projections onto glass panels", "Holograms", "Waterproof screens", "Pepper's Ghost"], answer: "Projections onto glass panels" },
        { question: "What dangerous area do you travel through with Marlin and Dory?", options: ["A jellyfish forest", "A shark-infested shipwreck", "An anglerfish cave", "A field of sea mines"], answer: "A jellyfish forest" },
        { question: "Who helps Marlin and Dory ride the East Australian Current (EAC)?", options: ["Crush and Squirt", "Bruce the shark", "A pod of whales", "A school of moonfish"], answer: "Crush and Squirt" },
        { question: "At the end of the ride, where do you finally find Nemo?", options: ["Swimming with the real fish in the main tank", "In a dentist's office", "Back at his anemone home", "In a treasure chest"], answer: "Swimming with the real fish in the main tank" },
        { question: "Before its current theme, this pavilion was called what?", options: ["The Living Seas", "The Undersea World", "Ocean Base Alpha", "The Wonders of Water"], answer: "The Living Seas" },
        { question: "The main aquarium tank is one of the largest saltwater aquariums in the world. How many gallons does it hold?", options: ["5.7 million gallons", "1 million gallons", "10 million gallons", "3.5 million gallons"], answer: "5.7 million gallons" },
        { question: "What is the name of the post-show area where you can see more marine life?", options: ["SeaBase", "The Ocean Explorer Hall", "The Coral Reef Room", "Nemo's Neighborhood"], answer: "SeaBase" },
        { question: "What other attraction featuring a sea turtle is located inside The Seas pavilion?", options: ["Turtle Talk with Crush", "Crush's Coaster", "The EAC Adventure", "Squirt's Splash Pad"], answer: "Turtle Talk with Crush" }
    ],
    [normalizeName("Living with the Land")]: [
        { question: "What is the first part of the ride, before you enter the greenhouses, focused on?", options: ["The history of farming and diverse ecosystems", "The future of space colonization", "The importance of recycling", "The life cycle of plants"], answer: "The history of farming and diverse ecosystems" },
        { question: "What is the name of the innovative growing technique that uses nutrient-rich water instead of soil?", options: ["Hydroponics", "Aeroponics", "Aquaponics", "Geoponics"], answer: "Hydroponics" },
        { question: "Some of the produce grown in the greenhouses is served where?", options: ["Restaurants in The Land pavilion, like Garden Grill", "All Epcot restaurants", "It is only for research", "It is given to cast members"], answer: "Restaurants in The Land pavilion, like Garden Grill" },
        { question: "What unusual shapes have been grown on some fruits and vegetables using molds?", options: ["Mickey Mouse shape", "The Epcot logo", "Goofy's face", "Spaceship Earth"], answer: "Mickey Mouse shape" },
        { question: "What is the name for the system where fish and plants are grown together symbiotically?", options: ["Aquaponics", "Hydro-farming", "Fish-culture", "Integrated aquaculture"], answer: "Aquaponics" },
        { question: "What is the name of the section that showcases growing plants vertically to save space?", options: ["The Vertical Growing Area", "The Food Ladder", "The Green Wall", "The Tower Garden"], answer: "The Vertical Growing Area" },
        { question: "What is the original name of this attraction?", options: ["Listen to the Land", "The Good Earth", "Harvest the Future", "The Circle of Life"], answer: "Listen to the Land" },
        { question: "What large fruit is famously grown hanging from overhead trellises?", options: ["Nine-pound lemons", "Giant watermelons", "Square pumpkins", "Enormous grapes"], answer: "Nine-pound lemons" },
        { question: "What type of crop is being farmed in the aquacell with the alligators?", options: ["Catfish", "Tilapia", "Shrimp", "Trout"], answer: "Catfish" },
        { question: "The narration for the ride is performed live by whom?", options: ["The boat's captain/Cast Member", "A pre-recorded celebrity voice", "Figment the dragon", "Dr. Nigel Channing"], answer: "The boat's captain/Cast Member" }
    ],
    [normalizeName("Gran Fiesta Tour Starring The Three Caballeros")]: [
        { question: "Who are the Three Caballeros?", options: ["Donald Duck, José Carioca, and Panchito Pistoles", "Mickey, Donald, and Goofy", "Huey, Dewey, and Louie", "The Three Amigos"], answer: "Donald Duck, José Carioca, and Panchito Pistoles" },
        { question: "What is the main plot of the ride's story?", options: ["José and Panchito are searching for the missing Donald Duck", "The Three Caballeros are putting on a concert", "They are giving a tour of Mexico", "They are chasing a villain"], answer: "José and Panchito are searching for the missing Donald Duck" },
        { question: "What instrument does José Carioca, the parrot from Brazil, always carry?", options: ["An umbrella", "A guitar", "Maracas", "A trumpet"], answer: "An umbrella" },
        { question: "The ride is a boat journey through scenes inspired by what country?", options: ["Mexico", "Brazil", "Spain", "The United States"], answer: "Mexico" },
        { question: "The finale scene features animatronics of the Three Caballeros performing on stage. What city is this set in?", options: ["Mexico City", "Acapulco", "Cancun", "Tijuana"], answer: "Mexico City" },
        { question: "This attraction replaced a previous boat ride in the Mexico pavilion. What was its name?", options: ["El Rio del Tiempo (The River of Time)", "The Magic of Mexico", "Ancient Americas", "A Voyage to Mexico"], answer: "El Rio del Tiempo (The River of Time)" },
        { question: "What is Panchito Pistoles, the rooster from Mexico, often seen doing?", options: ["Firing his pistols in the air", "Playing the guitar", "Dancing", "Singing loudly"], answer: "Firing his pistols in the air" },
        { question: "The ride footage combines classic animation of the characters with what?", options: ["Live-action footage of Mexico", "Puppetry", "Stop-motion animation", "Computer-generated scenery"], answer: "Live-action footage of Mexico" },
        { question: "At the end of the ride, what are the characters celebrating with?", options: ["Fireworks", "A piñata", "A feast", "A parade"], answer: "Fireworks" },
        { question: "The ride floats around a large model of a pyramid. What is it based on?", options: ["A Mesoamerican pyramid at twilight", "The Pyramids of Giza", "A fictional Aztec temple", "A Mayan observatory"], answer: "A Mesoamerican pyramid at twilight" }
    ],
    // --- ANIMAL KINGDOM ---
    [normalizeName("Avatar Flight of Passage")]: [
        { question: "What is the name of the creature you are linked with to fly on?", options: ["A Banshee (or Ikran)", "A Leonopteryx", "A Direhorse", "A Thanator"], answer: "A Banshee (or Ikran)" },
        { question: "The ride simulates a Na'vi rite of passage. What is it?", options: ["The first flight on a banshee", "A hunting trial", "A journey to the Tree of Souls", "A battle against the RDA"], answer: "The first flight on a banshee" },
        { question: "What is the name of the organization that runs the Avatar Program?", options: ["The Pandora Conservation Initiative (PCI)", "The Resources Development Administration (RDA)", "Alpha Centauri Expeditions (ACE)", "The Na'vi Cultural Exchange"], answer: "The Pandora Conservation Initiative (PCI)" },
        { question: "The ride vehicles are designed to simulate what?", options: ["Riding on the back of a living creature", "Flying a futuristic jetpack", "Piloting a helicopter", "Riding a motorcycle"], answer: "Riding on the back of a living creature" },
        { question: "What sensory effect simulates the Banshee breathing beneath you?", options: ["Air bladders in the seat inflating and deflating", "Vibrations in the handlebars", "A gentle rocking motion", "A sound effect"], answer: "Air bladders in the seat inflating and deflating" },
        { question: "In the pre-show, you are 'matched' with an Avatar. What is this process called?", options: ["Genetic matching and decontamination", "DNA sequencing", "Neural scanning", "Mind-melding"], answer: "Genetic matching and decontamination" },
        { question: "What is the name of the floating mountains you fly through?", options: ["The Hallelujah Mountains", "The Floating Peaks of Pandora", "The Sky Mountains", "The Aiyana Mountains"], answer: "The Hallelujah Mountains" },
        { question: "Which of these scents is NOT used during the ride?", options: ["Gunpowder", "Earthy soil after rain", "Salty ocean spray", "Fresh floral notes"], answer: "Gunpowder" },
        { question: "What is the name of the lead scientist who guides you through the linking process?", options: ["Dr. Jackie Ogden", "Dr. Grace Augustine", "Dr. Norm Spellman", "Dr. Stevens"], answer: "Dr. Jackie Ogden" },
        { question: "What is the Na'vi word for the bond between a rider and their banshee?", options: ["Tsaheylu", "Iknimaya", "Omatikaya", "Toruk Macto"], answer: "Tsaheylu" }
    ],
    [normalizeName("Expedition Everest - Legend of the Forbidden Mountain")]: [
        { question: "What mythical creature is said to guard the Forbidden Mountain?", options: ["The Yeti", "A dragon", "A griffin", "Bigfoot"], answer: "The Yeti" },
        { question: "What happens to the track in front of the train just before the backward sequence begins?", options: ["It appears to be broken and twisted", "It catches on fire", "A landslide covers it", "Another train appears on it"], answer: "It appears to be broken and twisted" },
        { question: "During the backward, high-speed portion of the ride, what does the Yeti do?", options: ["It tears up more track, shown as a shadow", "It appears and roars at the train", "It throws a boulder", "It is not seen in this section"], answer: "It tears up more track, shown as a shadow" },
        { question: "The ride is notable for being the first Disney coaster to do what?", options: ["Travel both forwards and backwards on the same track", "Have a vertical loop", "Go upside down in the dark", "Launch from a standstill"], answer: "Travel both forwards and backwards on the same track" },
        { question: "The queue is themed as a museum and booking office for what?", options: ["Tours to the base of Mount Everest", "A research expedition to find the Yeti", "A Himalayan cultural center", "A train station"], answer: "A research expedition to find the Yeti" },
        { question: "How tall is the Yeti animatronic figure inside the mountain?", options: ["25 feet", "15 feet", "35 feet", "20 feet"], answer: "25 feet" },
        { question: "What is the 'Disco Yeti' a fan nickname for?", options: ["The Yeti in strobe-light effect after its original motion failed", "A special event overlay", "The Yeti in the pre-show film", "A piece of merchandise"], answer: "The Yeti in strobe-light effect after its original motion failed" },
        { question: "What is the name of the village at the base of the attraction?", options: ["Serka Zong", "Anandapur", "Harambe", "Himalaya"], answer: "Serka Zong" },
        { question: "The mountain itself is not a model of Everest, but is based on what?", options: ["A fictional 'Forbidden Mountain' in the Himalayas", "The Matterhorn", "K2", "Mount Fuji"], answer: "A fictional 'Forbidden Mountain' in the Himalayas" },
        { question: "What has the Yeti supposedly done to the temple ruins you pass?", options: ["He has destroyed them in anger", "He is worshipped there", "He uses them as a shelter", "He has decorated them with prayer flags"], answer: "He is worshipped there" }
    ],
    [normalizeName("DINOSAUR")]: [
        { question: "What is the name of the research facility you are visiting?", options: ["The Dino Institute", "The Paleo-Exploration Center", "The Cretaceous Institute", "The Time Rover Facility"], answer: "The Dino Institute" },
        { question: "What is the name of the friendly dinosaur you are being sent back in time to rescue?", options: ["An Iguanodon", "A Velociraptor", "A Triceratops", "A Stegosaurus"], answer: "An Iguanodon" },
        { question: "The ride vehicle you board is called what?", options: ["A Time Rover", "A Dino-Jeep", "A Paleo-Explorer", "A CTX Rover"], answer: "A Time Rover" },
        { question: "What major catastrophic event are you trying to beat?", options: ["A giant asteroid impact", "A volcanic eruption", "A massive earthquake", "A flash flood"], answer: "A giant asteroid impact" },
        { question: "Who is the 'rogue' paleontologist who sends you on the unauthorized mission?", options: ["Dr. Seeker", "Dr. Marsh", "Dr. Grant", "Dr. Sattler"], answer: "Dr. Seeker" },
        { question: "What fearsome carnivorous dinosaur chases you throughout the ride?", options: ["A Carnotaurus", "A Tyrannosaurus Rex", "An Allosaurus", "A Spinosaurus"], answer: "A Carnotaurus" },
        { question: "What is the ride's original name?", options: ["Countdown to Extinction", "Dinosaur Adventure", "The Time Rover", "Jurassic Jungle Adventure"], answer: "Countdown to Extinction" },
        { question: "What do the three large pipes in the queue area, labeled with chemical formulas, represent?", options: ["The elements needed for time travel", "The colors of the ride vehicles", "Ketchup, Mustard, and Mayonnaise", "A tribute to the ride's sponsors"], answer: "Ketchup, Mustard, and Mayonnaise" },
        { question: "How does your mission end?", options: ["You bring back the Iguanodon just in time", "You fail to find the Iguanodon", "You bring back the Carnotaurus by mistake", "The Time Rover breaks down"], answer: "You bring back the Iguanodon just in time" },
        { question: "The ride system is an 'Enhanced Motion Vehicle'. Which other Disney attraction uses the same system?", options: ["Indiana Jones Adventure", "Test Track", "Radiator Springs Racers", "Tower of Terror"], answer: "Indiana Jones Adventure" }
    ],
    [normalizeName("Kali River Rapids")]: [
        { question: "The ride is located in which fictional land within Animal Kingdom?", options: ["Anandapur", "Harambe", "Serka Zong", "Pandora"], answer: "Anandapur" },
        { question: "What is the environmental message of the ride's story?", options: ["The dangers of illegal logging and deforestation", "The importance of water conservation", "The threat of animal poaching", "The problem of air pollution"], answer: "The dangers of illegal logging and deforestation" },
        { question: "What is the name of the 'legitimate' company you are supposed to be touring with?", options: ["Kali Rapids Expeditions", "Anandapur River Tours", "The Tiger Lily logging company", "Chakranadi River Runners"], answer: "Kali Rapids Expeditions" },
        { question: "How many guests can fit in a single circular ride raft?", options: ["12", "8", "10", "6"], answer: "12" },
        { question: "What happens in the scene with the logging truck?", options: ["It appears to slide down the hill towards you", "It sprays water at the raft", "It blocks your path", "It backfires loudly"], answer: "It appears to slide down the hill towards you" },
        { question: "What is the height of the ride's main drop?", options: ["20 feet", "30 feet", "15 feet", "40 feet"], answer: "20 feet" },
        { question: "What feature on the bridge overlooking the ride allows other guests to get you wet?", options: ["Elephant-themed water sprayers", "Water cannons", "Push-button geysers", "A waterfall they can activate"], answer: "Elephant-themed water sprayers" },
        { question: "What does the name of the river, 'Chakranadi,' mean?", options: ["'River that flows in a circle'", "'River of the gods'", "'Raging river'", "'Sacred water'"], answer: "'River that flows in a circle'" },
        { question: "What scent is used to simulate a burning forest?", options: ["Smoke and cinnamon", "Burning wood", "Pine and smoke", "Just a smoke effect"], answer: "Smoke and cinnamon" },
        { question: "What is located in the center of the raft for guests to store their belongings?", options: ["A covered storage compartment", "A waterproof bag", "An overhead net", "Nowhere, you have to hold them"], answer: "A covered storage compartment" }
    ],
    [normalizeName("Kilimanjaro Safaris")]: [
        { question: "The safari takes place in what fictional African reserve?", options: ["The Harambe Wildlife Reserve", "The Serengeti National Park", "The Maasai Mara Reserve", "The Kilimanjaro National Park"], answer: "The Harambe Wildlife Reserve" },
        { question: "How large is the Harambe Wildlife Reserve?", options: ["110 acres", "50 acres", "200 acres", "80 acres"], answer: "110 acres" },
        { question: "What clever, hidden feature keeps the animals in their designated areas?", options: ["Hidden moats, barriers, and changes in elevation", "Invisible electric fences", "Loud noises they are trained to avoid", "Underground walls"], answer: "Hidden moats, barriers, and changes in elevation" },
        { question: "What is the name of the warden who radios you about poachers during the original ride story?", options: ["Warden Wilson Matua", "Dr. Seeker", "Captain Bob", "Ranger Smith"], answer: "Warden Wilson Matua" },
        { question: "What kind of bird is often seen standing on the backs of rhinos?", options: ["Cattle egrets", "Oxpeckers", "Ostriches", "Vultures"], answer: "Cattle egrets" },
        { question: "What special feature do the safari trucks have to handle the rough terrain?", options: ["They have custom-built chassis and suspension", "They are amphibious", "They have four-wheel steering", "They are guided by a rail"], answer: "They have custom-built chassis and suspension" },
        { question: "What is the name of the baby elephant that was part of the original poacher storyline?", options: ["Little Red", "Dumbo Jr.", "Tembo", "Jumbo"], answer: "Little Red" },
        { question: "To encourage the lions to be visible, what is installed on their rockwork?", options: ["Air conditioning and heating systems", "Hidden speakers playing sounds", "Automatic food dispensers", "Comfortable bedding"], answer: "Air conditioning and heating systems" },
        { question: "Which of these is NOT an animal you can typically see on the safari?", options: ["A tiger", "A hippopotamus", "A cheetah", "A giraffe"], answer: "A tiger" },
        { question: "The large, upside-down looking trees are called what?", options: ["Baobab trees", "Acacia trees", "Eucalyptus trees", "Banyan trees"], answer: "Baobab trees" }
    ],
    [normalizeName("Na'vi River Journey")]: [
        { question: "What type of vehicle do guests ride in on this attraction?", options: ["A reed boat", "A log flume", "A banshee", "An AMP suit"], answer: "A reed boat" },
        { question: "The journey takes you through what kind of environment on Pandora?", options: ["A bioluminescent rainforest", "The floating mountains", "A Na'vi village", "An underwater cave"], answer: "A bioluminescent rainforest" },
        { question: "What is the name of the large, fan-like lizard that runs across the leaves above you?", options: ["A fan lizard", "A viperwolf", "A direhorse", "A tetrapteron"], answer: "A fan lizard" },
        { question: "The grand finale of the ride features an incredibly fluid Audio-Animatronic of what character?", options: ["The Na'vi Shaman of Songs", "Neytiri", "Jake Sully", "Mo'at"], answer: "The Na'vi Shaman of Songs" },
        { question: "What unique technology is used for the floating 'woodsprites'?", options: ["A 'scrim' screen with video projections", "Holograms", "Fiber optics on wires", "Drones"], answer: "A 'scrim' screen with video projections" },
        { question: "The ride is meant to be a calm, spiritual journey to seek what?", options: ["The wisdom and music of the Shaman of Songs", "The Tree of Souls", "A blessing from Eywa", "A hidden Na'vi clan"], answer: "The wisdom and music of the Shaman of Songs" },
        { question: "What is the Na'vi word for the sacred seeds of the Tree of Souls seen floating in the ride?", options: ["Atokirina'", "Ikran", "Toruk", "Eywa"], answer: "Atokirina'" },
        { question: "The lighting in the ride uses what to make the environment glow?", options: ["Blacklight and fluorescent paint", "LEDs and fiber optics", "Projection mapping", "All of the above"], answer: "All of the above" },
        { question: "What is the name of the six-legged, horse-like creatures you see on the screen?", options: ["Direhorses", "Sturmbeests", "Hammerhead Titanotheres", "Viperwolves"], answer: "Direhorses" },
        { question: "Who composed the music for the attraction?", options: ["James Horner and Simon Franglen", "John Williams", "Hans Zimmer", "Alan Menken"], answer: "James Horner and Simon Franglen" }
    ],
    [normalizeName("TriceraTop Spin")]: [
        { question: "This ride is similar in style to which other classic Disney attraction?", options: ["Dumbo the Flying Elephant", "Mad Tea Party", "The Magic Carpets of Aladdin", "Astro Orbiter"], answer: "Dumbo the Flying Elephant" },
        { question: "What kind of creatures are the ride vehicles shaped like?", options: ["Triceratops", "Pterodactyls", "Velociraptors", "Brontosauruses"], answer: "Triceratops" },
        { question: "What do guests in the back row of the vehicle control?", options: ["The forward and backward tilt", "The height", "The spinning speed", "The music"], answer: "The forward and backward tilt" },
        { question: "What do guests in the front row of the vehicle control?", options: ["The height", "The forward and backward tilt", "The spinning speed", "The sounds"], answer: "The height" },
        { question: "What sits on top of the central hub of the attraction?", options: ["A spinning planet with a cartoon dinosaur", "A giant dinosaur egg", "A model of a volcano", "A large spinning top"], answer: "A spinning planet with a cartoon dinosaur" },
        { question: "The ride is located in which themed section of DinoLand U.S.A.?", options: ["Chester & Hester's Dino-Rama", "The Dino Institute", "Fossil Fun Games", "The Boneyard"], answer: "Chester & Hester's Dino-Rama" },
        { question: "What causes the other dinosaurs around the ride to move or spit water?", options: ["The tilting of your vehicle", "Sensors on the ride vehicles", "It happens randomly", "There are no other dinosaurs"], answer: "The tilting of your vehicle" },
        { question: "How many guests can fit into a single Triceratops vehicle?", options: ["Four", "Two", "Three", "Five"], answer: "Four" },
        { question: "The theming of Dino-Rama is meant to resemble what?", options: ["A roadside carnival", "A serious archeological dig site", "A futuristic dinosaur zoo", "A prehistoric jungle"], answer: "A roadside carnival" },
        { question: "What is the name of the owners of the Dino-Rama area?", options: ["Chester and Hester", "Al and Wally", "Dino-Sue and Dino-Dan", "The Fossil-Finders"], answer: "Chester and Hester" }
    ],
    [normalizeName("Gorilla Falls Exploration Trail")]: [
        { question: "This walk-through attraction was originally known by what name?", options: ["Pangani Forest Exploration Trail", "Harambe Safari Village", "The Gorilla Trail", "African Animal Trek"], answer: "Pangani Forest Exploration Trail" },
        { question: "What is the main family group of gorillas you can see on the trail?", options: ["A bachelor troop of male gorillas", "A family with a silverback, females, and young", "Two competing families", "A group of young gorillas"], answer: "A family with a silverback, females, and young" },
        { question: "Besides gorillas, which other large primate was once featured on this trail?", options: ["Colobus monkeys", "Chimpanzees", "Orangutans", "Baboons"], answer: "Colobus monkeys" },
        { question: "What is the purpose of the 'research outpost' building you walk through?", options: ["To study and protect the local gorilla population", "To serve as a first aid station", "To sell souvenirs", "To provide a rest area"], answer: "To study and protect the local gorilla population" },
        { question: "What unique underwater viewing area can you find on the trail?", options: ["An underwater hippopotamus viewing area", "An underwater crocodile viewing area", "An underwater fish viewing area", "An underwater otter viewing area"], answer: "An underwater hippopotamus viewing area" },
        { question: "What type of colorful birds are featured in a large, walk-through aviary?", options: ["Various African bird species", "Macaws and parrots", "Toucans and hornbills", "Birds of prey"], answer: "Various African bird species" },
        { question: "What small, rodent-like mammal can be seen scurrying through rockwork exhibits?", options: ["Naked mole-rats", "Meerkats", "Prairie dogs", "Lemmings"], answer: "Naked mole-rats" },
        { question: "What is the name of the village that serves as the entrance to the trail?", options: ["Harambe", "Anandapur", "Serka Zong", "Discovery Island"], answer: "Harambe" },
        { question: "What is the scientific name for the Western lowland gorilla, the species seen on the trail?", options: ["Gorilla gorilla gorilla", "Pan troglodytes", "Pongo pygmaeus", "Gorilla beringei beringei"], answer: "Gorilla gorilla gorilla" },
        { question: "What type of fish, known for its ability to breathe air, can sometimes be seen in the aquarium tanks?", options: ["Lungfish", "Piranha", "Electric Eel", "Catfish"], answer: "Lungfish" }
    ],
    [normalizeName("Maharajah Jungle Trek")]: [
        { question: "This walk-through trail is located in which fictional land within Animal Kingdom?", options: ["Anandapur", "Harambe", "Serka Zong", "Discovery Island"], answer: "Anandapur" },
        { question: "The trail is themed to the ruins of a hunting lodge belonging to what royal figure?", options: ["A Maharajah", "A Sultan", "A King", "An Emperor"], answer: "A Maharajah" },
        { question: "What is the main, large cat species featured on this trail?", options: ["The Asian tiger", "The African lion", "The leopard", "The cheetah"], answer: "The Asian tiger" },
        { question: "What is the name of the village that serves as the entrance to the trail?", options: ["Anandapur", "Harambe", "Serka Zong", "Himalaya"], answer: "Anandapur" },
        { question: "What giant mammal, the largest species of wild cattle, can be seen on the trail?", options: ["The Gaur", "The Water Buffalo", "The Wildebeest", "The Bison"], answer: "The Gaur" },
        { question: "What is the name of the giant fruit bat that has its own enclosure on the trail?", options: ["The Rodrigues fruit bat", "The Vampire bat", "The Flying Fox", "The Brown Bat"], answer: "The Rodrigues fruit bat" },
        { question: "The aviary section of the trail is themed to look like what?", options: ["A ruined palace courtyard", "A dense jungle canopy", "A riverside habitat", "A mountain cliff"], answer: "A ruined palace courtyard" },
        { question: "What are the monkey-like animals that can be seen roaming the ruins?", options: ["Gibbons", "Macaques", "Howler Monkeys", "Spider Monkeys"], answer: "Gibbons" },
        { question: "What is the name of the mythical creature that is said to guard the area, according to the storyline?", options: ["The Yeti", "The Naga, a serpent creature", "A dragon", "A griffin"], answer: "The Naga, a serpent creature" },
        { question: "What animal, known for its long snout, used to be a resident on the trail?", options: ["The Malayan tapir", "The Anteater", "The Aardvark", "The Capybara"], answer: "The Malayan tapir" }
    ],
    [normalizeName("It's Tough to be a Bug!")]: [
        { question: "The show is hosted by which character from 'A Bug's Life'?", options: ["Flik", "Hopper", "Heimlich", "Francis"], answer: "Flik" },
        { question: "The theater is located inside what giant park icon?", options: ["The Tree of Life", "Spaceship Earth", "Cinderella Castle", "The Hollywood Tower Hotel"], answer: "The Tree of Life" },
        { question: "What is the name of the villainous grasshopper who interrupts the show?", options: ["Hopper", "Manny", "Slim", "Francis"], answer: "Hopper" },
        { question: "What '4D' effect happens when the stink bug lets off a defensive odor?", options: ["A foul smell is released", "A puff of air hits you", "The seats vibrate", "A fine mist is sprayed"], answer: "A puff of air hits you" },
        { question: "What happens at the end of the show that makes many guests jump?", options: ["Bugs appear to crawl under your seat", "A spider drops from the ceiling", "The theater goes completely dark", "A loud bang goes off"], answer: "Bugs appear to crawl under your seat" }
    ],
    [normalizeName("Finding Nemo: The Big Blue... and Beyond!")]: [
        { question: "The show uses a combination of puppetry and what other technology to bring the characters to life?", options: ["A giant LED screen backdrop", "Holograms", "Animatronics", "Live actors in costume"], answer: "A giant LED screen backdrop" },
        { question: "The story is being told by the group of fish from what location in the movie?", options: ["The fish tank in the dentist's office", "The school of moonfish", "The coral reef school", "The EAC current"], answer: "The fish tank in the dentist's office" },
        { question: "What is the name of the theater where the show is performed?", options: ["The Theater in the Wild", "The Harambe Theatre", "The Finding Nemo Theater", "The Marine Life Institute"], answer: "The Theater in the Wild" },
        { question: "Which song from the movie is featured as the big finale?", options: ["'In the Big Blue World'", "'Beyond the Sea'", "'Just Keep Swimming'", "'We Swim Together'"], answer: "'In the Big Blue World'" },
        { question: "How are the larger characters, like Crush the sea turtle, brought to life on stage?", options: ["Large-scale puppets controlled by multiple performers", "Animatronics on a track", "Projections on a screen", "Costumed actors"], answer: "Large-scale puppets controlled by multiple performers" },
        { question: "What special effects are used to simulate the jellyfish scene?", options: ["Bubbles and lighting effects", "Real water falling on stage", "Smoke machines and lasers", "Puppets on long poles"], answer: "Bubbles and lighting effects" },
        { question: "Before it was a 'Nemo' show, this musical was based on what other Disney movie?", options: ["Tarzan (Tarzan Rocks!)", "The Lion King", "Pocahontas", "The Jungle Book"], answer: "Tarzan (Tarzan Rocks!)" },
        { question: "What is the name of the friendly shark who is part of the 'Fish are friends, not food' group?", options: ["Bruce", "Chum", "Anchor", "All of the above"], answer: "All of the above" },
        { question: "What does Dory suffer from?", options: ["Short-term memory loss", "A fear of the dark", "Stage fright", "An inability to swim straight"], answer: "Short-term memory loss" },
        { question: "The puppeteers are visible to the audience. What is this style of puppetry called?", options: ["Bunraku", "Shadow puppetry", "Hand puppetry", "Marionette"], answer: "Bunraku" }
    ],
    // --- DISNEYLAND ---
    [normalizeName("Matterhorn Bobsleds")]: [
        { question: "This was the very first of what kind of roller coaster?", options: ["Tubular steel roller coaster", "Wooden roller coaster", "Inverted roller coaster", "Hypercoaster"], answer: "Tubular steel roller coaster" },
        { question: "The mountain has two separate tracks that intertwine. What are their names?", options: ["Fantasyland and Tomorrowland sides", "Left and Right", "Alpha and Omega", "They don't have names"], answer: "Fantasyland and Tomorrowland sides" },
        { question: "What mythical creature lives inside the mountain and appears during the ride?", options: ["The Abominable Snowman (Yeti)", "A dragon", "A griffin", "A giant"], answer: "The Abominable Snowman (Yeti)" },
        { question: "What is the name of the snowman that attacks the bobsleds?", options: ["Harold", "Walter", "George", "He has no official name"], answer: "Harold" },
        { question: "What real-life mountain was the inspiration for the Matterhorn's design?", options: ["The Matterhorn in Switzerland", "Mount Everest", "K2", "Mount Fuji"], answer: "The Matterhorn in Switzerland" },
        { question: "The bobsleds splash down into what at the end of the ride?", options: ["An alpine lake", "A river", "A small pond", "A waterfall"], answer: "An alpine lake" },
        { question: "What is hidden inside the mountain that is visible from the Skyway attraction (now closed)?", options: ["A basketball court", "A break room for cast members", "Storage for ride vehicles", "Walt Disney's secret office"], answer: "A basketball court" },
        { question: "How are the ride vehicles sent up the lift hill?", options: ["A traditional chain lift", "A launch system", "An elevator lift", "They are pushed by another vehicle"], answer: "A traditional chain lift" },
        { question: "What sound effect is a signature part of the ride experience?", options: ["The roar of the Abominable Snowman", "Yodeling music", "An avalanche sound", "A train whistle"], answer: "The roar of the Abominable Snowman" },
        { question: "The ride vehicles are designed to be dispatched individually, not as a long train. What is this called?", options: ["Single-vehicle dispatch", "Tandem mode", "Free-range operation", "Bobsled style"], answer: "Single-vehicle dispatch" }
    ],
    [normalizeName("Indiana Jones Adventure")]: [
        { question: "The ride is supposed to be a tour of what ancient temple?", options: ["The Temple of the Forbidden Eye", "The Temple of Doom", "The Temple of the Crystal Skull", "The Lost Temple of Mara"], answer: "The Temple of the Forbidden Eye" },
        { question: "What is the name of the deity who protects the temple and curses those who look into its eyes?", options: ["Mara", "Shiva", "Kali", "Vishnu"], answer: "Mara" },
        { question: "What are the ride vehicles, designed to look like military transport trucks, called?", options: ["Troop Transports", "Jungle Cruisers", "Adventure Rovers", "Temple Explorers"], answer: "Troop Transports" },
        { question: "What is the name of Indy's friend who warns you not to look into the eyes of the idol?", options: ["Sallah", "Short Round", "Marion Ravenwood", "Marcus Brody"], answer: "Sallah" },
        { question: "The ride vehicles use a special system that allows for a wide range of movements. What is it called?", options: ["Enhanced Motion Vehicle (EMV)", "Advanced Motion Simulator", "Trackless Ride System", "Hydraulic Motion Base"], answer: "Enhanced Motion Vehicle (EMV)" },
        { question: "What famous scene from the Indiana Jones films is recreated at the end of the ride?", options: ["The giant rolling boulder", "The snake pit", "The rope bridge scene", "The mine cart chase"], answer: "The giant rolling boulder" },
        { question: "In the queue, there is a rope with a sign that says 'Do Not Pull Rope!'. What happens if you pull it?", options: ["A loud crashing sound is heard from a 'well' below", "The lights flicker", "A hidden door opens", "Nothing happens"], answer: "A loud crashing sound is heard from a 'well' below" },
        { question: "Mara offers one of three gifts to those who enter. Which of these is NOT one of the gifts?", options: ["Eternal Youth", "Earthly Riches", "Visions of the Future", "Immortality"], answer: "Immortality" },
        { question: "The ride features over 1,300 of what slithering creature?", options: ["Snakes", "Spiders", "Rats", "Bats"], answer: "Snakes" },
        { question: "The ride's audio is unique because it is not timed to the vehicle, but is instead triggered by what?", options: ["The vehicle's location on the track", "A pre-set timer", "The actions of the guests", "The ride operator"], answer: "The vehicle's location on the track" }
    ],
    [normalizeName("King Arthur Carrousel")]: [
        { question: "All of the horses on this carrousel are what type?", options: ["Jumpers (they move up and down)", "Stationary", "A mix of both", "They are not horses, but other animals"], answer: "Jumpers (they move up and down)" },
        { question: "The carrousel was moved from another park in Toronto, Canada. What was its name?", options: ["Sunnyside Beach Park", "Crystal Beach", "Centreville Amusement Park", "Canada's Wonderland"], answer: "Sunnyside Beach Park" },
        { question: "One of the horses is named 'Jingles'. What makes it special?", options: ["It was Walt Disney's favorite and is dedicated to Julie Andrews", "It is the only horse with a golden saddle", "It plays its own music", "It is the lead horse and is larger than the others"], answer: "It was Walt Disney's favorite and is dedicated to Julie Andrews" },
        { question: "What is depicted in the hand-painted vignettes that circle the top of the carrousel?", options: ["Scenes from 'The Sword in the Stone'", "Scenes from 'Sleeping Beauty'", "Scenes from 'Cinderella'", "Scenes from 'Snow White'"], answer: "Scenes from 'Sleeping Beauty'" },
        { question: "How many horses are on the King Arthur Carrousel?", options: ["68", "90", "72", "50"], answer: "68" },
        { question: "The story of the carrousel is tied to what iconic object located in front of it?", options: ["The Sword in the Stone", "Cinderella's wishing well", "Sleeping Beauty's castle", "Snow White's grotto"], answer: "The Sword in the Stone" },
        { question: "What color are all the horses on the carrousel?", options: ["White", "A variety of colors", "Brown", "Black and white"], answer: "White" },
        { question: "What company originally built the carrousel in the 1920s?", options: ["The Dentzel Company", "The Philadelphia Toboggan Company", "William F. Mangels Company", "The Looff Company"], answer: "The Dentzel Company" },
        { question: "The music for the carrousel comes from what?", options: ["A traditional band organ", "A digital sound system", "A live brass band", "A music box"], answer: "A traditional band organ" },
        { question: "What was controversial about the carrousel when it was first installed in Disneyland?", options: ["The horses were stationary and Walt wanted them to jump", "It was painted all black", "It played modern music", "It was too small"], answer: "The horses were stationary and Walt wanted them to jump" }
    ],
    // ... many more entries
};

export const ATTRACTION_INFO_DATA: { [key: string]: AttractionInfo } = {
    // Magic Kingdom
    [normalizeName("Seven Dwarfs Mine Train")]: { leadImagineers: ["Kathy Mangum", "Dave Minichiello"], yearOpened: 2014, precededBy: "20,000 Leagues Under the Sea", themingInspiration: "Disney's 1937 film Snow White" },
    [normalizeName("Big Thunder Mountain Railroad")]: { leadImagineers: ["Tony Baxter"], yearOpened: 1980, precededBy: "Expansion build", themingInspiration: "American Old West mining theme" },
    [normalizeName("Space Mountain")]: { leadImagineers: ["John Hench", "George McGinnis"], yearOpened: 1975, precededBy: "Opening day attraction", themingInspiration: "Futuristic space travel" },
    [normalizeName("Pirates of the Caribbean")]: { leadImagineers: ["Marc Davis", "Claude Coats"], yearOpened: 1973, precededBy: "Expansion build", themingInspiration: "Inspired by the 1967 Disneyland ride" },
    [normalizeName("Haunted Mansion")]: { leadImagineers: ["Marc Davis", "Claude Coats", "X Atencio"], yearOpened: 1971, precededBy: "Opening day attraction", themingInspiration: "Gothic haunted house" },
    [normalizeName("Tiana's Bayou Adventure")]: { leadImagineers: ["Charita Carter"], yearOpened: 2024, precededBy: "Splash Mountain", themingInspiration: "Disney's 2009 film The Princess and the Frog" },
    [normalizeName("Jungle Cruise")]: { leadImagineers: ["Harper Goff", "Bill Evans"], yearOpened: 1971, precededBy: "Opening day attraction", themingInspiration: "Exotic river adventure" },
    [normalizeName("Peter Pan's Flight")]: { leadImagineers: ["Bill Justice", "Mary Blair"], yearOpened: 1971, precededBy: "Opening day attraction", themingInspiration: "Disney's 1953 film Peter Pan" },
    [normalizeName("it's a small world")]: { leadImagineers: ["Mary Blair"], yearOpened: 1971, precededBy: "Opening day attraction", themingInspiration: "Inspired by the 1964 New York World's Fair" },
    [normalizeName("The Many Adventures of Winnie the Pooh")]: { leadImagineers: ["Bruce Gordon", "Ron Miziker"], yearOpened: 1999, precededBy: "Mr. Toad's Wild Ride", themingInspiration: "Disney's Winnie the Pooh franchise" },
    [normalizeName("Mad Tea Party")]: { leadImagineers: ["Rolly Crump", "Yale Gracey"], yearOpened: 1971, precededBy: "Opening day attraction", themingInspiration: "Disney's 1951 film Alice in Wonderland" },
    [normalizeName("Dumbo the Flying Elephant")]: { leadImagineers: ["Bill Justice", "Claude Coats"], yearOpened: 1971, precededBy: "Opening day attraction", themingInspiration: "Disney's 1941 film Dumbo" },
    [normalizeName("The Barnstormer")]: { leadImagineers: ["Kathy Mangum", "Eric Miller"], yearOpened: 1996, precededBy: "Grandma Duck's Petting Farm", themingInspiration: "Circus stunt pilot, inspired by Goofy" },
    [normalizeName("Astro Orbiter")]: { leadImagineers: ["George McGinnis", "John Hench"], yearOpened: 1974, precededBy: "Star Jets", themingInspiration: "Retro-futuristic space travel" },
    [normalizeName("Tomorrowland Transit Authority PeopleMover")]: { leadImagineers: ["Bob Gurr"], yearOpened: 1975, precededBy: "Opening day attraction", themingInspiration: "Futuristic urban transport" },
    [normalizeName("Buzz Lightyear's Space Ranger Spin")]: { leadImagineers: ["Roger Dressler", "David J. Mumford"], yearOpened: 1998, precededBy: "If You Had Wings", themingInspiration: "Disney-Pixar's Toy Story franchise" },
    [normalizeName("Tomorrowland Speedway")]: { leadImagineers: ["Bob Gurr", "Bill Watkins"], yearOpened: 1971, precededBy: "Grand Prix Raceway", themingInspiration: "Auto racing" },
    [normalizeName("Under the Sea ~ Journey of The Little Mermaid")]: { leadImagineers: ["Eric Miller", "Kathy Mangum"], yearOpened: 2012, precededBy: "Expansion build", themingInspiration: "Disney's 1989 film The Little Mermaid" },
    [normalizeName("Prince Charming Regal Carrousel")]: { leadImagineers: ["Bill Justice", "John Hench"], yearOpened: 1971, precededBy: "Cinderella's Golden Carrousel", themingInspiration: "Inspired by Disney's Cinderella" },
    [normalizeName("The Magic Carpets of Aladdin")]: { leadImagineers: ["Kathy Mangum", "Eric Miller"], yearOpened: 2001, precededBy: "Expansion build", themingInspiration: "Disney's 1992 film Aladdin" },
    [normalizeName("TRON Lightcycle / Run")]: { leadImagineers: ["David Minichiello", "Bob Weis"], yearOpened: 2023, precededBy: "Expansion build", themingInspiration: "Disney's TRON franchise" },
    [normalizeName("Country Bear Jamboree")]: { leadImagineers: ["Marc Davis"], yearOpened: 1971, precededBy: "Opening day attraction", themingInspiration: "American country music and folklore" },
    [normalizeName("Mickey's PhilharMagic")]: { leadImagineers: ["George Scribner", "Steve Davison"], yearOpened: 2003, precededBy: "The Legend of the Lion King", themingInspiration: "Disney animated films" },
    [normalizeName("Walt Disney's Enchanted Tiki Room")]: { leadImagineers: ["Wally Boag", "Fulton Burley"], yearOpened: 1971, precededBy: "Tropical Serenade", themingInspiration: "Polynesian culture" },
    [normalizeName("Monsters, Inc. Laugh Floor")]: { leadImagineers: ["Roger Dressler", "David J. Mumford"], yearOpened: 2007, precededBy: "The Timekeeper", themingInspiration: "Disney-Pixar's Monsters, Inc." },
    [normalizeName("The Hall of Presidents")]: { leadImagineers: ["Blaine Gibson"], yearOpened: 1971, precededBy: "Opening day attraction", themingInspiration: "American history and presidents" },
    // Epcot
    [normalizeName("Spaceship Earth")]: { leadImagineers: ["Ray Bradbury", "John Hench"], yearOpened: 1982, precededBy: "Opening day attraction", themingInspiration: "History of human communication" },
    [normalizeName("Journey Into Imagination with Figment")]: { leadImagineers: ["Tony Baxter", "Steve Kirk"], yearOpened: 1983, precededBy: "Original Journey into Imagination", themingInspiration: "Imagination and creativity" },
    [normalizeName("Guardians of the Galaxy: Cosmic Rewind")]: { leadImagineers: ["Zach Riddley", "Tom Fitzgerald"], yearOpened: 2022, precededBy: "Ellen's Energy Adventure", themingInspiration: "Marvel's Guardians of the Galaxy" },
    [normalizeName("Mission: SPACE")]: { leadImagineers: ["Rick Rothschild", "Tom Fitzgerald"], yearOpened: 2003, precededBy: "Horizons", themingInspiration: "Space exploration and travel" },
    [normalizeName("Test Track")]: { leadImagineers: ["Tom Fitzgerald", "Bob Rogers"], yearOpened: 1999, precededBy: "World of Motion", themingInspiration: "Automotive testing and design" },
    [normalizeName("The Seas with Nemo & Friends")]: { leadImagineers: ["Kim Irvine", "Joe Rohde"], yearOpened: 2007, precededBy: "The Living Seas", themingInspiration: "Disney-Pixar's Finding Nemo" },
    [normalizeName("Living with the Land")]: { leadImagineers: ["Marty Sklar", "Claude Coats"], yearOpened: 1982, precededBy: "Listen to the Land", themingInspiration: "Agriculture and human interaction" },
    [normalizeName("Soarin' Around the World")]: { leadImagineers: ["Mark Sumner", "Rick Barongi"], yearOpened: 2005, precededBy: "Food Rocks", themingInspiration: "Global aerial adventure" },
    [normalizeName("Frozen Ever After")]: { leadImagineers: ["Kathy Mangum", "Lisa Girolami"], yearOpened: 2016, precededBy: "Maelstrom", themingInspiration: "Disney's Frozen franchise" },
    [normalizeName("Remy's Ratatouille Adventure")]: { leadImagineers: ["Tom Fitzgerald", "Steve Spiegel"], yearOpened: 2021, precededBy: "Expansion build", themingInspiration: "Disney-Pixar's Ratatouille" },
    [normalizeName("Gran Fiesta Tour Starring The Three Caballeros")]: { leadImagineers: ["Ron Logan", "Blaine Gibson"], yearOpened: 2007, precededBy: "El Rio del Tiempo", themingInspiration: "Mexican culture and The Three Caballeros" },
};