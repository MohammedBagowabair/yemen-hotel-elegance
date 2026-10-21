import type { Lang } from "@/lib/content";

// The site's listed phone (+967 1 234 567) is a fictional landline, so WhatsApp
// enquiries go to this number.
export const WHATSAPP_NUMBER = "601151198497";

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const waMessages = {
  general: {
    en: "Hello Dar Al Sama, I'd like to ask about availability.\nDates: \nGuests: \nRoom type: ",
    ar: "مرحبًا دار السماء، أودّ الاستفسار عن توفّر الغرف.\nالتواريخ: \nعدد الضيوف: \nنوع الغرفة: ",
  },
  room: (room: string, lang: Lang) =>
    lang === "ar"
      ? `مرحبًا دار السماء، أودّ الاستفسار عن توفّر «${room}».\nالتواريخ: \nعدد الضيوف: `
      : `Hello Dar Al Sama, I'd like to ask about availability for the ${room}.\nDates: \nGuests: `,
};
