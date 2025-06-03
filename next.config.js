import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // Add more Next.js config options here if needed
};

const withMDX = createMDX({
  // Optionally, add remark/rehype plugins here
  // remarkPlugins: [],
  // rehypePlugins: [],
});

export default withMDX(nextConfig);
