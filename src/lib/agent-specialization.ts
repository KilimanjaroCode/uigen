// Pure skill-category helpers shared by server actions and tests.
// Kept out of "use server" files: those may only export async functions (Next.js build rule).

export type SkillCategory = "accessibility" | "performance" | "ux" | "architecture";

export const SKILL_CATEGORIES: SkillCategory[] = [
  "accessibility",
  "performance",
  "ux",
  "architecture",
];

// ── Category classifier ───────────────────────────────────────────────────────

const CATEGORY_KEYWORDS: Record<SkillCategory, string[]> = {
  accessibility: ["aria", "a11y", "accessible", "screen reader", "alt", "role", "label", "wcag", "focus", "keyboard"],
  performance:   ["lazy", "memo", "cache", "bundle", "optimize", "debounce", "throttle", "virtuali", "suspense"],
  ux:            ["animation", "transition", "hover", "interactive", "user experience", "feedback", "tooltip", "responsive"],
  architecture:  ["component", "reusable", "abstraction", "module", "pattern", "interface", "separation", "composable"],
};

export function classifySuggestion(text: string): SkillCategory {
  const lower = text.toLowerCase();
  let bestCategory: SkillCategory = "architecture";
  let bestScore = 0;

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS) as [SkillCategory, string[]][]) {
    const matches = keywords.filter((kw) => lower.includes(kw)).length;
    if (matches > bestScore) {
      bestScore = matches;
      bestCategory = category;
    }
  }

  return bestCategory;
}
