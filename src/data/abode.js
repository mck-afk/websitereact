const THEABODE = [
  {
    colour: 'pink',
    id: 0,
    room: { name: 'Antechamber', subtitle: 'Foyer' },
    func: 'To Come',
    realm: 'Instinctual',
    resource: ['Time'],
    relation: 'Self',
    day: 'Sunday',
    zodiac: 'Ophiuchus',
    chakra: 'The Crown - Sahasrara',
    artistsWay: 'Recovering a sense of...',
    title: '0. The Antechamber',
    link: '/abode/0',
    dimensions: {
      backgroundColor: '#e55bed',
      backgroundImage: "url('/abode/Assets/0.jpeg')",
      backgroundSize: '225px',
      backgroundPosition: 'center'
    },
    description: 'Welcome Home. This is the first room in any house — the entryway, the foyer. We take off our shoes and jackets and weariness of the day, and come home to ourselves.',
    content: [
      { type: 'text', value: 'This room holds developer notes, community messages, and the spirit of arrival.' },
      { type: 'list', value: ['09/11/2025 - refactored code for better performance', '23/10/2025 - added floorplan/blueprint toggle to homepage', '14/10/2025 - added more games to the Auditorium'] },
      { type: 'text', value: 'A playful hub for announcements, polls, and living notes about the Abode project.' }
    ]
  },
  {
    colour: 'red',
    id: 1,
    room: { name: 'Atelier', subtitle: 'Study' },
    func: 'To Create',
    realm: 'Physical',
    resource: ['Recovery', 'Touch', 'Sensation'],
    relation: 'Craft',
    day: 'Monday',
    zodiac: 'Aries/Libra',
    chakra: 'The Root - Muladhara',
    artistsWay: 'Safety/Connection',
    title: '1. The Atelier',
    link: '/abode/1',
    dimensions: {
      backgroundColor: '#d44141',
      backgroundImage: "url('/abode/Assets/1.jpeg')",
      backgroundSize: '300px',
      backgroundPosition: 'center'
    },
    description: 'Welcome Home. This is the studio, the workshop, the artist’s nook and creative hobby corner.',
    content: [
      { type: 'image', src: '/abode/Assets/1.jpeg', alt: 'Artists workbench' },
      { type: 'text', value: 'Handcrafts, webcrafts, and wordcrafts gather in the Atelier. It is a space for tools, stories, and creative play.' },
      { type: 'link', href: 'https://loreline.app/en/', label: 'LoreLine: Tool to write interactive text based stories' },
      { type: 'link', href: 'https://graphicore.github.io/librebarcode/', label: 'Libre Barcode Project' }
    ]
  },
  {
    colour: 'orange',
    id: 2,
    room: { name: 'Alcove', subtitle: 'Bedroom' },
    func: 'To Commune',
    realm: 'Emotional',
    resource: ['Warmth', 'Clothing', 'Shelter'],
    relation: 'Muse',
    day: 'Tuesday',
    zodiac: 'Taurus/Scorpio',
    chakra: 'The Sacral - Svadhisthana',
    artistsWay: 'Identity/Strength',
    title: '2. The Alcove',
    link: '/abode/2',
    dimensions: {
      backgroundColor: '#ed7b12',
      backgroundImage: "url('/abode/Assets/2.jpeg')",
      backgroundSize: '250px',
      backgroundPosition: 'center'
    },
    description: 'Welcome Home. This is the bedside table; the cozy nook for intentional absorption of material. Deep rest reigns and dreaming dances in sunset glows.',
    content: [
      { type: 'image', src: '/abode/Assets/2.jpeg', alt: 'Cozy bedroom' },
      { type: 'text', value: 'A soft, reflective space for reading, rest, and imaginative comfort. Blankets, books, and gentle images live here.' },
      { type: 'list', value: ['Whole Earth magazine', 'Warm candle glow', 'Quiet reading recommendations'] }
    ]
  },
  {
    colour: 'yellow',
    id: 3,
    room: { name: 'Apothecary', subtitle: 'Kitchen' },
    func: 'To Cook',
    realm: 'Mental',
    resource: ['Education', 'Knowledge', 'Information'],
    relation: 'Rival',
    day: 'Wednesday',
    zodiac: 'Gemini/Sagittarius',
    chakra: 'The Solar Plexus - Manipura',
    artistsWay: 'Power/Compassion',
    title: '3. The Apothecary',
    link: '/abode/3',
    dimensions: {
      backgroundColor: '#ffcc00',
      backgroundImage: "url('/abode/Assets/3.jpeg')",
      backgroundSize: '250px',
      backgroundPosition: 'center'
    },
    description: 'Welcome Home. This is the kitchen, where alchemy is part of the everyday.',
    content: [
      { type: 'image', src: '/abode/Assets/3.jpeg', alt: 'Cozy kitchen' },
      { type: 'text', value: 'The Apothecary blends nourishment and practice. It is a room for recipes, star measurements, and everyday cooking rituals.' },
      { type: 'link', href: 'https://carlsfriends.net/', label: 'Sourdough Starter' }
    ]
  },
  {
    colour: 'green',
    id: 4,
    room: { name: 'Atrium', subtitle: 'Dining' },
    func: 'To Cavort',
    realm: 'Material',
    resource: ['Food, Water', 'Air, Sunlight', 'Sleep'],
    relation: 'Community',
    day: 'Thursday',
    zodiac: 'Cancer/Capricorn',
    chakra: 'The Heart - Anahata',
    artistsWay: 'Integrity/Self-Protection',
    title: '4. The Atrium',
    link: '/abode/4',
    dimensions: {
      backgroundColor: '#66bd6a',
      backgroundImage: "url('/abode/Assets/4.jpeg')",
      backgroundSize: '250px',
      backgroundPosition: 'center'
    },
    description: 'Welcome Home. This is the dining room where we share meals and spark conversations.',
    content: [
      { type: 'image', src: '/abode/Assets/4.jpeg', alt: 'Cozy dining room' },
      { type: 'text', value: 'The Atrium is about community, shared resources, and bright blinkies that celebrate handmade internet culture.' },
      { type: 'list', value: ['Handcrafted web badges', 'Blinkies and community links'] }
    ]
  },
  {
    colour: 'blue',
    id: 5,
    room: { name: 'Auditorium', subtitle: 'Lounge' },
    func: 'To Converse',
    realm: 'Social',
    resource: ['Connection', 'Belonging', 'Expression'],
    relation: 'Society',
    day: 'Friday',
    zodiac: 'Leo/Aquarius',
    chakra: 'The Throat - Vishuddhi',
    artistsWay: 'Possibility/Autonomy',
    title: '5. The Auditorium',
    link: '/abode/5',
    dimensions: {
      backgroundColor: '#3aa6ed',
      backgroundImage: "url('/abode/Assets/5.jpeg')",
      backgroundSize: '225px',
      backgroundPosition: 'center'
    },
    description: 'Welcome Home. This is the lounge room, where we visit our neighbours, play games, and share our skills.',
    content: [
      { type: 'image', src: '/abode/Assets/5.jpeg', alt: 'Auditorium lounge' },
      { type: 'text', value: 'The Auditorium is a playful room of web rings, games, recommendations, and a living counter of the Abode’s days alive.' },
      { type: 'link', href: 'https://letterstoayoungtechnologist.com/', label: 'Letters to Young Technologists' }
    ]
  },
  {
    colour: 'purple',
    id: 6,
    room: { name: 'Arboretum', subtitle: 'Bathroom' },
    func: 'To Cultivate',
    realm: 'Spiritual',
    resource: ['Sanitation', 'Hygiene', 'Medicine'],
    relation: 'Legacy',
    day: 'Saturday',
    zodiac: 'Virgo/Pisces',
    chakra: 'The Third Eye - Ajna',
    artistsWay: 'Abundance/Faith',
    title: '6. The Arboretum',
    link: '/abode/6',
    dimensions: {
      backgroundColor: '#ad6cf8',
      backgroundImage: "url('/abode/Assets/6.jpeg')",
      backgroundSize: '250px',
      backgroundPosition: 'center'
    },
    description: 'Welcome Home. This is the bathroom, where everyday practices become more than the sum of their parts.',
    content: [
      { type: 'image', src: '/abode/Assets/6.jpeg', alt: 'Bathroom image' },
      { type: 'text', value: 'The Arboretum is a reflective room for legacy, self-care, and the framework behind Anna’s Abode.' },
      { type: 'text', value: 'What is it? The Abode is a playful psychological framework for organising and exploring areas of life and creation.' }
    ]
  }
];

export default THEABODE;
