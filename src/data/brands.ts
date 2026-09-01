export interface EyewearBrand {
  name: string;
  category: string;
  tagline: string;
  description: string;
  origin: string;
}

export const eyewearBrands: EyewearBrand[] = [
  {
    name: "Lunor",
    category: "Klassische Handwerkskunst",
    tagline: "Zeitlose Eleganz aus dem Schwarzwald",
    description: "In bis zu 200 Einzelschritten handgefertigt. Feinste Metalle, echte Nietenscharniere und puristisches deutsches Design.",
    origin: "Deutschland"
  },
  {
    name: "Rodenstock",
    category: "Biometrische Präzisionsgläser",
    tagline: "B.I.G. EXACT™ Biometrische Intelligenz",
    description: "Pionier der Augenoptik. Jedes Brillenglas wird mit dem DNEye® Scanner auf tausende Messpunkte des individuellen Auges berechnet.",
    origin: "München, Deutschland"
  },
  {
    name: "Maui Jim",
    category: "Polarisierte Premium-Sonnengläser",
    tagline: "PolarizedPlus2® Farbtechnologie",
    description: "Unvergleichlicher Blendschutz und lebendige Farbbrillanz, die schädliches UV- und hochenergetisches HEV-Licht zu 100% blockiert.",
    origin: "Hawaii, USA"
  },
  {
    name: "ESCADA",
    category: "Haute Couture Eyewear",
    tagline: "Feminine Raffinesse & Luxus",
    description: "Ausdrucksstarke Fassungen mit edlen Details, modernen Farbkombinationen und luxuriöser Haptik für stilbewusste Trägerinnen.",
    origin: "München / Italien"
  },
  {
    name: "MOREL Paris",
    category: "Französische Brillenmanufaktur",
    tagline: "Seit 1880 unabhängiges Design",
    description: "Über 140 Jahre Tradition im französischen Jura. Meisterhafte Scharniertechnik ohne sichtbare Schrauben und leichteste Titanfassungen.",
    origin: "Frankreich"
  }
];
