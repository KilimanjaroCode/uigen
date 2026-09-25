// Critique auto-selection threshold, shared by the score-critique-suggestions server action and its tests.
// Kept out of "use server" files: those may only export async functions (Next.js build rule).

/** Suggestions above this threshold are auto-selectable. */
export const AUTO_SELECT_THRESHOLD = 0.65;
