// Single source of truth for the firm's contact endpoints.
// Consumed by the Navbar CTA, the Contact section and the Footer — edit here
// once and it propagates everywhere (same pattern as specialties.ts).

const WHATSAPP_NUMBER = '551933243864';

// Every WhatsApp redirect carries this note so the client gets direct
// attribution that the lead arrived through the website.
const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site do escritório Tomé & Paiva e gostaria de ter mais informações.';

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(WHATSAPP_MESSAGE);

// Builds a WhatsApp link pre-filled with interest in a specific practice area,
// so the lead arrives attributed to the site and to the area they clicked.
// Used by the "Falar com a equipe" CTA on /especialidades (see SpecialtyDetail).
export function whatsappUrlFor(area: string): string {
  const message =
    `Olá! Vim pelo site do escritório Tomé & Paiva e tenho interesse na área de ${area}. Gostaria de falar com a equipe.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(message);
}

// Institutional address (as displayed) + a Google Maps *directions* link that
// opens with the route pre-set from the visitor's location to the office.
export const ADDRESS =
  'Rua Dona Ana Eufrosina, nº 54, Sala 1. Jardim Brasil, Campinas/SP. CEP 13073-023';

export const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent('Rua Dona Ana Eufrosina, 54 - Jardim Brasil, Campinas - SP, 13073-023');

// Geocoded from ADDRESS (Nominatim/OpenStreetMap) — used to center the Escritório
// map and place its marker. Keep co-located with ADDRESS so they update together.
export const OFFICE_COORDS = { lat: -22.8869379, lng: -47.0631343 };
