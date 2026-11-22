/** Builds public asset URLs that work both at the domain root and on GitHub project Pages. */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
