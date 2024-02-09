/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public', // Output directory for PWA files
    register: true, // Register the service worker
    skipWaiting: true, // Skip waiting for service worker activation
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  });
  
  module.exports = withPWA({
    reactStrictMode: true, // Enable React strict mode
  });
  