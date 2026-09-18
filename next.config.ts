import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/melt_matter" : undefined,
  trailingSlash: isGithubPages ? true : undefined,
  images: {
    unoptimized: isGithubPages,
  },
};

export default nextConfig;
