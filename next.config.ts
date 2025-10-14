import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  // basePath: "/blog-ssg-nextjs",
  // assetPrefix: "/blog-ssg-nextjs",
  // images: {
  //   unoptimized: true,
  // },
  experimental: {
    useCache: true,
    cacheLife: {
      seconds: {
        stale: 0,
        revalidate: 300,
        expire: 300,
      },
    },
  },
};

export default nextConfig;
