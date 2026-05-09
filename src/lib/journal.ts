export type JournalArticle = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
};

export const journalArticles: JournalArticle[] = [
  {
    id: "the-tokyo-sessions",
    title: "The Tokyo Sessions",
    excerpt: "Exploring the neon-lit streets of Shinjuku through the lens of the new AERO-X1.",
    content: "Tokyo represents the intersection of tradition and ultra-modernity. We took the AERO-X1 series to the streets of Shinjuku to test the visual clarity of our gradient titanium lenses under extreme neon light conditions. The results were nothing short of cinematic.\n\nOur design philosophy has always been rooted in providing uncompromised vision, but it is in environments like this where the engineering truly shines. The polarized filters effortlessly cut through the chaotic glare, providing the wearer with a sanctuary of focus amidst the noise.",
    date: "2026-05-15",
    image: "/ren-3.png"
  },
  {
    id: "engineering-clarity",
    title: "Engineering Clarity: Inside the Lab",
    excerpt: "How we developed the proprietary scratch-resistant compound for our signature series.",
    content: "At LUXEN, we believe luxury is defined by longevity. The development of our new signature lenses took over 400 hours of stress testing in our Zurich laboratory.\n\nWe experimented with over 50 different resin composites before landing on our proprietary blend. This new material is not only 30% lighter than standard industry glass, but exhibits an impact resistance that exceeds military specifications. It is this unseen layer of performance that defines the LUXEN experience.",
    date: "2026-04-22",
    image: "/ren-4.png"
  },
  {
    id: "future-visions",
    title: "Future Visions: 2026 Lookbook",
    excerpt: "A preview of the upcoming styles and structural paradigms we are exploring this season.",
    content: "The aesthetic of 2026 is uncompromising. We are moving away from delicate wireframes into bold, structural acetate that commands the face. \n\nThis season's lookbook is an exploration of geometry and shadow. We are introducing thicker profiles, sharper angles, and a muted color palette that speaks to a sophisticated, cyber-minimalist future. Eyewear is no longer an accessory; it is the defining architectural element of modern identity.",
    date: "2026-04-05",
    image: "/ren-hero.png"
  }
];

export function getArticleById(id: string) {
  return journalArticles.find(a => a.id === id);
}
