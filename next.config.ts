import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
 reactCompiler: true,
 // Lets CI/audit builds use an isolated output dir (e.g. NEXT_DIST_DIR=.next-audit)
 // so they don't corrupt the running dev server's .next.
 distDir: process.env.NEXT_DIST_DIR || '.next'
}
 
export default nextConfig