export const FREE_TOOLS = [
  {
    slug: "growth-score",
    title: "Growth Score",
    category: "Growth",
    description: "Get a quick score and actionable recommendations to grow your store.",
    status: "live",
  },
  {
    slug: "ad-copy-generator",
    title: "Ad copy generator",
    category: "Marketing",
    description: "Generate ad copy variations for Meta/TikTok in a consistent brand voice.",
    status: "coming_soon",
  },
  {
    slug: "discount-copy-generator",
    title: "Discount copy generator",
    category: "Marketing",
    description: "Generate discount messaging that feels premium and avoids sounding spammy.",
    status: "coming_soon",
  },
  {
    slug: "faq-generator",
    title: "FAQ generator",
    category: "Support",
    description: "Generate a helpful FAQ structure based on your product and audience.",
    status: "coming_soon",
  },
  {
    slug: "store-policy-generator",
    title: "Store policy generator",
    category: "Support",
    description: "Generate starter templates for shipping, returns, and refund policies.",
    status: "coming_soon",
  },
];

export function getToolBySlug(toolSlug) {
  return FREE_TOOLS.find((t) => t.slug === toolSlug) ?? null;
}

export function getToolsByCategory() {
  return FREE_TOOLS.reduce((acc, tool) => {
    acc[tool.category] = acc[tool.category] || [];
    acc[tool.category].push(tool);
    return acc;
  }, {});
}
