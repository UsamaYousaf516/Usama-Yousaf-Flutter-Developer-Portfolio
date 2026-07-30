// Mirrors next.config.ts's basePath for the handful of plain <a>/window.open
// references to /public assets that next/link and next/image can't prefix
// automatically. Empty for normal builds; only set for the GitHub Pages export.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
