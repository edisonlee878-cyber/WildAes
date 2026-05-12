import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";
const basePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}` : undefined;

const nextConfig: NextConfig = {
  assetPrefix: basePath,
  basePath,
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
