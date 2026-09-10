export interface CompanyConfig {
  name: string;
  subtitle: string;
  logo: string;
  tagline: string;
  shortDescription: string;
  whatsappNumber: string; // e.g. 919847012345
  displayWhatsapp: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: {
    street: string;
    town: string;
    district: string;
    state: string;
    pincode: string;
  };
  serviceAreas: string[];
  stats: {
    yearsExperience: string;
    eventsCompleted: string;
    satisfactionRate: string;
    stageDesigns: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: "Event Perambra",
  subtitle: "Wedding & Stage Decoration",
  logo: "/logo.png",
  tagline: "Turning Your Special Moments Into Beautiful Memories",
  shortDescription: "Elegant stage decorations and unforgettable event setups, thoughtfully designed for your special day in Perambra, Kozhikode, and across Malabar.",
  whatsappNumber: "9048680098",
  displayWhatsapp: "9048680098",
  phone: "+9048680098",
  displayPhone: "9048680098",
  email: "connect@eventperambra.com",
  address: {
    street: "Main Road, Near Town Hall",
    town: "Perambra",
    district: "Kozhikode",
    state: "Kerala",
    pincode: "673525",
  },
  serviceAreas: [
    "Perambra",
    "Kozhikode (Calicut)",
    "Vadakara",
    "Koyilandy",
    "Balussery",
    "Wayanad",
    "Kannur",
    "Malappuram",
  ],
  stats: {
    yearsExperience: "12+",
    eventsCompleted: "1,800+",
    satisfactionRate: "99.4%",
    stageDesigns: "120+",
  },
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

/**
 * Generates a direct WhatsApp link with a customer-friendly prefilled message.
 */
export function getWhatsAppUrl(params?: {
  decorationName?: string;
  category?: string;
  customMessage?: string;
  eventDate?: string;
  venue?: string;
  pageUrl?: string;
  itemUrl?: string;
  url?: string;
}): string {
  const number = COMPANY_CONFIG.whatsappNumber;

  let message = "";
  if (params?.customMessage) {
    message = params.customMessage;
  } else if (params?.decorationName) {
    const detailUrl = params.pageUrl || params.itemUrl || params.url;
    message = `Hello ${COMPANY_CONFIG.name},
I was browsing your website and fell in love with the “${params.decorationName}”${params.category ? ` (${params.category})` : ""}.

Could you please share more details, setup availability, and customizable options for this design?`;
    if (detailUrl) {
      message += `\n\nProduct Details URL:\n${detailUrl}`;
    }
    if (params.eventDate) {
      message += `\n\nEvent Date: ${params.eventDate}`;
    }
    if (params.venue) {
      message += `\nVenue/Town: ${params.venue}`;
    }
  } else {
    message = `Hello ${COMPANY_CONFIG.name},
I'm planning an upcoming event and would love to consult with your stage decoration team. Could you please guide me on your available decoration packages and custom concepts?`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message.trim())}`;
}

export function getShortlistWhatsAppUrl(savedDecorations: Array<{ name: string; category: string; id?: string }>): string {
  const number = COMPANY_CONFIG.whatsappNumber;
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const listText = savedDecorations
    .map((d, i) => {
      const link = d.id && baseUrl ? `\n   Link: ${baseUrl}/decorations/${d.id}` : "";
      return `${i + 1}. ${d.name} (${d.category})${link}`;
    })
    .join("\n");

  const message = `Hello ${COMPANY_CONFIG.name},
I have shortlisted the following stage decoration designs on your website for my upcoming celebration:

${listText}

Could you please check availability and discuss how we can customize these for our venue?`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message.trim())}`;
}
