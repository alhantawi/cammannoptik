export interface GoogleReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  highlight: string;
  serviceUsed: string;
  verified: boolean;
}

export const googleReviewsData = {
  averageRating: 5.0,
  totalReviews: 26,
  recommendationRate: "Ausgezeichnet",
  badgeText: "Ausgezeichnet auf Google",
  reviews: [
    {
      id: "rev-1",
      author: "Dr. Thomas M.",
      role: "Privatkunde",
      rating: 5,
      date: "vor 2 Wochen",
      highlight: "Perfekte Gleitsichtbrille ohne jegliche Eingewöhnungszeit!",
      text: "Ich trage seit vielen Jahren Gleitsichtbrillen und hatte bisher immer Probleme mit Schwindel in den ersten Tagen. Durch die biometrische DNEye-Vermessung bei Cammann Optik passte die neue Brille ab der ersten Sekunde perfekt. Die Beratung durch den Meister war überragend ruhig, kompetent und ehrlich. Absolute Empfehlung!",
      serviceUsed: "Meister-Profil & Rodenstock B.I.G.",
      verified: true
    },
    {
      id: "rev-2",
      author: "Sabine K.",
      role: "Privatkundin",
      rating: 5,
      date: "vor 1 Monat",
      highlight: "Endlich eine wunderschöne Lunor-Fassung gefunden.",
      text: "Ein wunderschönes, stilvolles Studio mitten in Hannover. Hier wird sich wirklich Zeit genommen. Bei einer Tasse Kaffee haben wir verschiedene Manufaktur-Fassungen anprobiert, bis wir das perfekte Modell gefunden haben. Man spürt die Liebe zum Handwerk in jedem Detail.",
      serviceUsed: "Stilberatung & Lunor Brille",
      verified: true
    },
    {
      id: "rev-3",
      author: "Michael B.",
      role: "Software-Entwickler",
      rating: 5,
      date: "vor 2 Monaten",
      highlight: "Keine Kopfschmerzen mehr bei 8h Bildschirmarbeit!",
      text: "Wegen ständiger Nackenschmerzen und brennender Augen am Bildschirm bin ich zu Cammann Optik gegangen. Die Binokular-Analyse hat eine leichte Winkelfehlsichtigkeit aufgedeckt. Mit der speziell angepassten Arbeitsplatzbrille arbeite ich wieder völlig entspannt. 5 von 5 Sternen!",
      serviceUsed: "Bildschirmarbeitsplatz-Analyse",
      verified: true
    },
    {
      id: "rev-4",
      author: "Elena V.",
      role: "Privatkundin",
      rating: 5,
      date: "vor 3 Monaten",
      highlight: "Herausragender Service und transparente Beratung.",
      text: "Kein Verkaufsdruck, keine Hektik. Hier steht wirklich das Wohl des Kunden im Mittelpunkt. Auch das Nachjustieren und der persönliche Service sind erstklassig. Vielen Dank!",
      serviceUsed: "Augenglasbestimmung & Fassung",
      verified: true
    }
  ] as GoogleReview[]
};
