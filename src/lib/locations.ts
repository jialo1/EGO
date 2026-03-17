export interface Location {
  country: string;
  flag: string;
  city: string;
  status: string;
  description: string;
  isHQ: boolean;
  active: boolean;
  phones: string[];
  emails: { svap: string; infos: string } | null;
}

export const locations: Location[] = [
  {
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    city: "Abidjan",
    status: "Siège social",
    description: "Siège principal et centre d'opérations.",
    isHQ: true,
    active: true,
    phones: ["+225 27 21 30 58 64", "+225 27 21 30 55 33", "+225 01 40 61 55 74"],
    emails: { svap: "svapci@egoafrique.com", infos: "infosci@egoafrique.com" },
  },
  {
    country: "Sénégal",
    flag: "🇸🇳",
    city: "Dakar",
    status: "Opérationnel",
    description: "Présence active à Dakar.",
    isHQ: false,
    active: true,
    phones: ["+221 33 82 18 686"],
    emails: { svap: "svapsn@egoafrique.com", infos: "infossn@egoafrique.com" },
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    city: "Accra",
    status: "Opérationnel",
    description: "Présence active à Accra.",
    isHQ: false,
    active: true,
    phones: ["+233 02 005 202 65"],
    emails: { svap: "svapghana@egoafrique.com", infos: "infosghana@egoafrique.com" },
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    city: "Lagos",
    status: "Opérationnel",
    description: "Présence active à Lagos.",
    isHQ: false,
    active: true,
    phones: ["+234 070 765 703 91"],
    emails: { svap: "svapng@egoafrique.com", infos: "infosng@egoafrique.com" },
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    city: "Nairobi",
    status: "Opérationnel",
    description: "Présence active à Nairobi.",
    isHQ: false,
    active: true,
    phones: ["+254 071 077 3333"],
    emails: { svap: "svapkenya@egoafrique.com", infos: "infoskenya@egoafrique.com" },
  },
  {
    country: "Togo",
    flag: "🇹🇬",
    city: "Lomé",
    status: "En expansion",
    description: "En expansion.",
    isHQ: false,
    active: false,
    phones: [],
    emails: null,
  },
  {
    country: "Cameroun",
    flag: "🇨🇲",
    city: "Douala",
    status: "En expansion",
    description: "En expansion.",
    isHQ: false,
    active: true,
    phones: ["+237 6 97 70 21 05"],
    emails: null,
  },
];

/** Email de contact principal (siège Côte d'Ivoire) */
export const contactEmail = "infosci@egoafrique.com";
export const hqAddress = "Abidjan, Côte d'Ivoire";
