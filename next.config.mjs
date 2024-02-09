/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public", // Output directory for PWA files
  register: true, // Register the service worker
  skipWaiting: true, // Skip waiting for service worker activation
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
});

// Your Next config is automatically typed!
export default withPWA({
  reactStrictMode: true,
});
