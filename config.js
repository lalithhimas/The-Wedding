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
  hostLine: "Smt. Rupa Sree Devagudi & Shri Vidya Sagar Devagudi",
  inviteLine: "request the pleasure of your company at the wedding celebrations of",
  groomParents: "Son of Rupa Sree Devagudi & Shri Vidya Sagar Devagudi",
  brideParents: "Daughter of Smt. Vasantha Kadiri & Shri Sreenivasulu Kadiri",

  // ---- Painting stories ----
  // Each painting fills the screen; scrolling zooms into the figure and blurs the rest,
  // then the name appears. focus x/y = where the figure is (0 to 1 across/down the picture),
  // size = how tall the figure is as a share of the picture's height.
  groomImage: "images/groom.jpg",
  groomImageAlt: "Rama lifting Shiva's bow at Sita's swayamvara",
  groomFocus: { x: 0.38, y: 0.385, size: 0.32 },
  groomCaption: "At Sita's swayamvara in Mithila, prince after prince failed to lift Shiva's mighty bow. Rama raised it with ease, and as he strung it, the bow broke with a sound like thunder.",

  brideImage: "images/bride.jpg",            // leave "" to hide the bride's story
  brideImageAlt: "Young Sita with Shiva's bow in a flowering garden",
  brideFocus: { x: 0.52, y: 0.40, size: 0.62 },
  brideCaption: "As a young girl, Sita moved Shiva's bow while playing, a bow no one else could even shift. Her father vowed she would marry only the one who could string it.",

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
    message: "Hi! We'd love to attend the wedding of Lalith & Himabindu. Count us in!"
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
    hashtag: "#Himalithed",
    url: "https://instagram.com/"
  },

  // ---- Extras ----
  music: "",        // e.g. "music.mp3" (put the file next to index.html). Leave "" for no music.
  petals: true      // falling petals on the first screen
};
