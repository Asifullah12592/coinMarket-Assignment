import type { NextConfig } from "next";


// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Build ke waqt ESLint errors ignore karega
  },
}
export default module.exports;