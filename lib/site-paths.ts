const rawBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

export const siteBasePath = rawBasePath
  ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

export function withSiteBasePath(path: string) {
  if (!siteBasePath || /^(?:[a-z][a-z0-9+.-]*:|#)/i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBasePath}${normalizedPath}`;
}
