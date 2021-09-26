/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

module.exports = withMDX({
  images: {
    domains: ['cdn.sanity.io']
  },
  reactStrictMode: false
})
