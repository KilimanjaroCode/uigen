// Agent role thresholds, shared by the assign-agent-roles server action and its tests.
// Kept out of "use server" files: those may only export async functions (Next.js build rule).

export const AUTO_PUBLISH_THRESHOLD = 0.8;
export const REVIEWER_THRESHOLD    = 0.4;
