/* ============================================================
   EDIT THIS FILE TO CUSTOMISE YOUR INVITE
   Everything on the page (names, dates, events, photos, links)
   comes from here. Keep the quotes and commas as they are.
   ============================================================ */

window.WEDDING = {
  // ---- The couple ----
  groom: "Lalith Sagar",
  bride: "Himabindu",

  // Used for the countdown. Format: YYYY-MM-DDTHH:MM:SS+timezone (India = +05:30)
  weddingDate: "2027-03-12T09:00:00+05:30",
  weddingDateText: "Friday, 12 March 2027",

  // ---- The invitation text ----
  hostLine: "Smt. Kamakshi & Shri Srinivasan Iyer",
  inviteLine: "request the pleasure of your company at the wedding celebrations of",
  groomParents: "Son of Smt. Kamakshi & Shri Srinivasan Iyer",
  brideParents: "Daughter of Smt. Parvathi & Shri K. Ramaswamy",

  // ---- Groom section: picture on the left, name on the right ----
  groomImage: "images/groom.jpg",
  groomImageAlt: "Rama lifting Shiva's bow at Sita's swayamvara",
  // Bride section: picture blended in on the left, name on the right. Leave "" to hide it.
  brideImage: "images/bride.jpg",
  brideImageAlt: "Young Sita with Shiva's bow in a flowering garden",

  // ---- Events (add, remove or reorder as you like) ----
  events: [
    { name: "Mehendi", date: "Wednesday, 10 March 2027", time: "4 pm onwards", venue: "Kalki Gardens, Chennai", image: "images/mehendi.svg" },
    { name: "Haldi", date: "Thursday, 11 March 2027", time: "9 am onwards", venue: "Kalki Gardens, Chennai", image: "images/haldi.svg" },
    { name: "Sangeet", date: "Thursday, 11 March 2027", time: "7 pm onwards", venue: "Kalki Gardens, Chennai", image: "images/sangeet.svg" },
    { name: "Engagement", date: "Thursday, 11 March 2027", time: "11 am", venue: "Sri Mahal, Chennai", image: "images/engagement.svg" },
    { name: "Muhurtham", date: "Friday, 12 March 2027", time: "9 am – 10.30 am", venue: "Sri Mahal, Chennai", image: "images/muhurtham.svg" },
    { name: "Reception", date: "Friday, 12 March 2027", time: "7 pm onwards", venue: "The Leela Palace, Chennai", image: "images/reception.svg" }
    // Optional per event: mapLink: "https://maps.app.goo.gl/..."
  ],

  // ---- Main venue (map section) ----
  venue: {
    name: "Sri Mahal",
    address: "Anna Salai, Chennai, Tamil Nadu",
    // Paste your Google Maps share link here; if empty, the address above is used
    mapLink: ""
  },

  // ---- Photo slideshow ----
  gallery: [
    "images/gallery-1.svg",
    "images/gallery-2.svg",
    "images/gallery-3.svg",
    "images/gallery-4.svg"
  ],

  // ---- RSVP on WhatsApp ----
  rsvp: {
    // Country code + number, digits only (e.g. 91 for India)
    whatsapp: "919876543210",
    message: "Hi! We'd love to attend the wedding of Vignesh & Nithya. Count us in!"
  },

  // ---- Things to know ----
  thingsToKnow: [
    { title: "Dress code", text: "Traditional wear. Bright colours for the Mehendi and Haldi, silks for the Muhurtham." },
    { title: "Weather", text: "Chennai in March is warm, around 32°C. Light fabrics and sunglasses help." },
    { title: "Parking", text: "Valet parking is available at all venues." },
    { title: "Stay", text: "Rooms are held for guests at The Leela Palace. Message us and we'll book one for you." }
  ],

  // ---- Instagram ----
  instagram: {
    hashtag: "#VigNithyaForever",
    url: "https://instagram.com/"
  },

  // ---- Extras ----
  music: "",        // e.g. "music.mp3" (put the file next to index.html). Leave "" for no music.
  petals: true      // falling petals on the first screen
};
