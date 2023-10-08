/** @type {import('next').NextConfig} */
const nextConfig = {}
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/menther-app`
  basePath = `/${repo}/menther-app`
}

module.exports = {
  ...nextConfig,
  images: {
    loader: 'imgix',
    path: 'christie.imgix.net',
  },
}
