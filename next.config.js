/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    fiber: false,
  },
}

module.exports = nextConfig

module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
  },
};