/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "download.blender.org",
      "mango.blender.org",
      "uhdtv.io"
    ]
  }
}

module.exports = nextConfig
