export type Product = {
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  benefits: string[];
  category: string;
  whatsappMessage: string;
};

export const products: Product[] = [
  {
    name: "Forever Aloe Vera Gel",
    slug: "forever-aloe-vera-gel",
    price: 28,
    description:
      "Boisson à l'aloe vera que je recommande pour accompagner une routine bien-être simple et régulière.",
    image: "/products/kl-p-aloe-vera-gel.jpeg",
    benefits: [
      "Hydratation quotidienne",
      "Soutien digestif",
      "Source naturelle d'aloe vera",
    ],
    category: "Routine quotidienne",
    whatsappMessage:
      "Bonjour, j'aimerais en savoir plus sur Forever Aloe Vera Gel et comprendre pourquoi vous le recommandez.",
  },
  {
    name: "Forever Plant Protein",
    slug: "forever-plant-protein",
    price: 60,
    description:
      "Protéine végétale complète pour soutenir les personnes qui veulent mieux structurer leur alimentation.",
    image: "/products/kl-p-forever.jpeg",
    benefits: [
      "Apport protéique végétal",
      "Routine nutritionnelle",
      "Sans lactose",
    ],
    category: "Nutrition",
    whatsappMessage:
      "Bonjour, j'aimerais en savoir plus sur Forever Plant Protein et savoir si ce produit peut convenir à ma routine.",
  },
  {
    name: "Forever Multivitamin",
    slug: "forever-multivitamin",
    price: 28,
    description:
      "Complexe de vitamines et minéraux pour accompagner les besoins essentiels du quotidien.",
    image: "/products/kl-p-forever-active-pro-b.jpeg",
    benefits: [
      "Soutien de l'énergie",
      "Vitamines essentielles",
      "Habitude simple",
    ],
    category: "Vitamines",
    whatsappMessage:
      "Bonjour, j'aimerais en savoir plus sur Forever Multivitamin et son utilisation au quotidien.",
  },
  {
    name: "Forever Omega-3",
    slug: "forever-omega-3",
    price: 34,
    description:
      "Acides gras essentiels pour accompagner une routine orientée coeur, concentration et équilibre.",
    image: "/products/kl-p-cardio-health.jpeg",
    benefits: [
      "Soutien du coeur",
      "Concentration",
      "Acides gras essentiels",
    ],
    category: "Équilibre",
    whatsappMessage:
      "Bonjour, j'aimerais en savoir plus sur Forever Omega-3 et la meilleure manière de l'intégrer dans ma routine.",
  },
  {
    name: "Forever Immublend",
    slug: "forever-immublend",
    price: 32,
    description:
      "Un produit que je recommande pour les personnes qui veulent soutenir leurs défenses avec constance.",
    image: "/products/kl-p-forever-immublend.jpeg",
    benefits: [
      "Défenses naturelles",
      "Routine préventive",
      "Formule complète",
    ],
    category: "Immunité",
    whatsappMessage:
      "Bonjour, j'aimerais en savoir plus sur Forever Immublend et son rôle dans une routine bien-être.",
  },
  {
    name: "Forever Marine Collagen",
    slug: "forever-marine-collagen",
    price: 48,
    description:
      "Une recommandation premium pour accompagner le soin de soi dans une approche globale de vitalité.",
    image: "/products/kl-p-forever-marine-collagen.jpeg",
    benefits: [
      "Soin de la peau",
      "Routine premium",
      "Vitalité globale",
    ],
    category: "Soin de soi",
    whatsappMessage:
      "Bonjour, j'aimerais en savoir plus sur Forever Marine Collagen et pourquoi vous le recommandez.",
  },
  {
    name: "Forever Freedom",
    slug: "forever-freedom",
    price: 36,
    description:
      "Une option intéressante pour accompagner les personnes actives dans leur confort quotidien.",
    image: "/products/kl-p-forever-freedom.jpeg",
    benefits: [
      "Confort articulaire",
      "Mode de vie actif",
      "Aloe vera et soutien ciblé",
    ],
    category: "Mobilité",
    whatsappMessage:
      "Bonjour, j'aimerais en savoir plus sur Forever Freedom et savoir à qui ce produit s'adresse.",
  },
  {
    name: "Forever Bee Pollen",
    slug: "forever-bee-pollen",
    price: 24,
    description:
      "Un classique pour celles et ceux qui aiment intégrer des sources naturelles dans leur routine.",
    image: "/products/kl-p-forverev-bee-pollen.jpeg",
    benefits: [
      "Source naturelle",
      "Routine énergie",
      "Usage quotidien",
    ],
    category: "Naturel",
    whatsappMessage:
      "Bonjour, j'aimerais en savoir plus sur Forever Bee Pollen et son utilisation au quotidien.",
  },
];
