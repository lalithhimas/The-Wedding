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
  weddingDate: "2027-02-21T09:00:00+05:30",
  weddingDateText: "Friday, 21 March 2027",

  // ---- The invitation text ----
  hostLine: "Smt. Rupa Sree Devagudi & Shri Vidya Sagar Devagudi",
  inviteLine: "request the pleasure of your company at the wedding celebrations of",
  groomParents: "Son of Rupa Sree Devagudi & Shri Vidya Sagar Devagudi",
  brideParents: "Daughter of Smt. Vasantha Kadiri & Shri Sreenivasulu Kadiri",

  // ---- Painting stories ----
  // Each painting fills the screen; scrolling zooms into the figure and blurs the rest,
  // then the name appears. focus x/y = where the figure is (0 to 1 across/down the picture),
  // size = how tall the figure is as a share of the picture's height.
  // Sita's story comes first, then Rama's.
  brideImage: "images/bride.jpg",            // leave "" to hide the bride's story
  brideImageAlt: "Pichwai painting: young Sita with Shiva's golden bow among lotuses, cows and peacocks",
 brideFocus: { x: 0.5, y: 0.40, size: 0.85 },
  

  groomImage: "images/groom.jpg",
  groomImageAlt: "Pichwai painting: Rama breaks Shiva's bow as Sita and King Janaka look on",
  groomFocus: { x: 0.52, y: 0.42, size: 0.58 },
  

  // ---- Events (add, remove or reorder as you like) ----
  events: [
  { name: "Mehendi", date: "", time: "", venue: "", image: "images/mehendi.svg", comingSoon: true },
  { name: "Haldi", date: "", time: "", venue: "", image: "images/haldi.svg", comingSoon: true },
  { name: "Sangeet", date: "", time: "", venue: "", image: "images/sangeet.svg", comingSoon: true },
  { name: "Engagement", date: "Monday, 16 November 2026", time: "Coming soon", venue: "Nimmanapalli", image: "images/engagement.svg" },
  { name: "Muhurtham", date: "Sunday, 21 February 2027", time: "3 am – 4 am", venue: "PPR Convention, Madanapalli", image: "images/muhurtham.svg" },
  { name: "Reception", date: "Saturday, 20 February 2027", time: "5 pm – 9 pm", venue: "PPR Convention, Madanapalli", image: "images/reception.svg" }
],

  // ---- Main venue (map section) ----
  venue: {
  name: "PPR Convention",
  address: "Madanpalli, Andhra Pradesh",
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
