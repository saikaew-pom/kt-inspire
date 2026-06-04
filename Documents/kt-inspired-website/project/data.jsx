/* Content + assets for KT Inspire. Exposed on window.KT */
const IMG = "https://ktinspire.com/wp-content/uploads/";
/* Resource resolver: uses bundled blob URLs when present (standalone export), else the live URL. */
const R = (id, url) => (window.__resources && window.__resources[id]) || url;

const KT = {
  brand: { name: "KT INSPIRE", logoWord: "KT", logoTail: "inspire" },

  images: {
    logo: R("logo", IMG + "2026/05/KTTALKS-Logo-01-scaled-160x89.png"),
    hero: R("hero", IMG + "2026/05/KTprofile01.webp"),
    portrait: R("portrait", IMG + "2026/06/CoachKTprofile02.jpg"),
  },

  nav: [
    { id: "home", label: "Start" },
    { id: "story", label: "Story" },
    { id: "success", label: "Success" },
    { id: "services", label: "Services" },
  ],

  // Self → Serve → Support
  pillars: [
    {
      key: "Self",
      tag: "01",
      title: "Self",
      lede: "Communication for confidence & career growth",
      desc: "Find your voice and the conviction to use it. We build the inner clarity and outward presence that turn capable professionals into people others want to follow.",
      points: ["Self-confidence & presence", "Speaking & storytelling skills", "A success-oriented mindset"],
    },
    {
      key: "Serve",
      tag: "02",
      title: "Serve",
      lede: "Communication for customer experience",
      desc: "Service is a conversation. We help front-line teams and hospitality professionals create the warm, intentional moments that turn guests into loyal advocates.",
      points: ["Service excellence", "Stronger human connection", "Satisfied, returning customers"],
    },
    {
      key: "Support",
      tag: "03",
      title: "Support",
      lede: "Communication for leadership & team success",
      desc: "Great leaders communicate on purpose. We equip managers and teams to align, coach, and lead through clear, courageous conversation.",
      points: ["Strategic leadership", "High-trust teams", "Shared, sustained success"],
    },
  ],

  stats: [
    { value: "20", suffix: "+", label: "Years of experience", sub: "Across communication, leadership & service excellence." },
    { value: "229", suffix: "+", label: "Projects delivered", sub: "Learning experiences shaped across industries." },
    { value: "20,859", suffix: "+", label: "Lives impacted", sub: "Individuals and teams moved from Self to Success." },
  ],

  testimonials: [
    {
      quote: "KT has a rare gift — within one session our team stopped talking past each other and started actually listening. The shift in how we lead has been permanent.",
      name: "Director of People",
      org: "Andara Resort & Villas",
    },
    {
      quote: "Our service scores climbed within a quarter. KT made communication feel human again, not scripted. Guests notice the difference, and so do we.",
      name: "Guest Experience Lead",
      org: "Andamanda Phuket",
    },
    {
      quote: "I came in a competent manager and left a confident leader. KT helped me find language for the things I always struggled to say.",
      name: "Regional Manager",
      org: "Knight Frank",
    },
  ],

  clients: [
    { name: "Proalpha Solutions", sector: "Enterprise Software", img: IMG + "2026/06/site01.jpg",
      result: "A leadership-communication program that turned regional managers into confident, aligned decision-makers." },
    { name: "Andara Resort & Villas", sector: "Luxury Hospitality", img: IMG + "2026/06/site05.jpg",
      result: "Service-excellence coaching that lifted guest experience and team cohesion across departments." },
    { name: "Finnway School", sector: "Education", img: IMG + "2026/06/site03.jpg",
      result: "Confidence and public-speaking workshops empowering educators and students alike." },
    { name: "Boat Pattana", sector: "Real Estate Development", img: IMG + "2026/06/site04.jpg",
      result: "Team-communication training that aligned a fast-growing organisation around a shared voice." },
    { name: "Knight Frank", sector: "Property Consultancy", img: IMG + "2026/06/site02.jpg",
      result: "Leadership coaching for client-facing professionals navigating high-stakes conversations." },
    { name: "Andamanda Phuket", sector: "Hospitality & Leisure", img: IMG + "2026/06/site07-1.jpg",
      result: "Front-line service training that turned everyday interactions into memorable guest moments." },
  ],

  logos: ["Proalpha", "Andara", "Finnway School", "Boat Pattana", "Knight Frank", "Andamanda"],

  certifications: [
    {
      title: "Certified Practitioner of NLP Coaching",
      board: "The American Board of NLP (ABNLP)",
      img: "assets/certs/nlp-coaching.jpg",
      points: ["Coach with structure", "Listen deeply", "Draw out people's potential with precision"],
    },
    {
      title: "Certified Practitioner of Neuro Linguistic Programming (NLP)",
      board: "The American Board of NLP (ABNLP)",
      img: null,
      points: ["Organise thinking and reframe limiting beliefs", "Communicate powerfully and create real results"],
    },
    {
      title: "Modern Hypnosis Certification Program",
      board: "The American Board of Hypnotherapy (ABH)",
      img: "assets/certs/modern-hypnosis.jpg",
      points: ["Understand the subconscious at a deep level", "Because every behaviour has its root"],
    },
    {
      title: "Certified Practitioner of Timeline Therapy™",
      board: "Time Line Therapy® Association",
      img: "assets/certs/timeline-therapy.jpg",
      points: ["Release the emotions of the past", "To build a future that's clear, strong and light"],
    },
  ],
};

window.KT = KT;
