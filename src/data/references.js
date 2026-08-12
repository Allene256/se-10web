// SE-10 Reference Archive — design and content sources
/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   description: string;
 *   url: string | null;
 *   type: "external" | "ai" | "design";
 *   cover: string | null;
 * }} Reference
 */

/** @type {Reference[]} */
export const REFERENCES = [
  {
    id: "ref-canva",
    label: "Official Canva Design File",
    description:
      "All officer portraits and the 'Meet the Officers' cover artwork were sourced from the official SE-10 Canva design file.",
    url: "https://canva.link/t7iixpavh1v5t09",
    type: "external",
    cover: "https://base44.app/api/apps/6a6d6283d21d0a7faa38be17/files/mp/public/6a6d6283d21d0a7faa38be17/9aef3bdb4_MeettheOfficers.png",
  },
  {
    id: "ref-sscb",
    label: "seniorscb.com",
    description:
      "The structural and layout inspiration for the SE-10 portal — the seniors' class portal that informed the multi-page design approach.",
    url: "https://seniorscb.com",
    type: "external",
    cover: null,
  },
  {
    id: "ref-hero",
    label: "AI-Generated Visual",
    description:
      "The circuit-board hero graphic on the home screen was generated using an AI image generation tool and is not an official school asset.",
    url: null,
    type: "ai",
    cover: "https://media.base44.com/images/public/6a6d6283d21d0a7faa38be17/515c72c2c_generated_image.png",
  },
];