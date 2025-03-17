/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "**",
      },
    ],
    domains: [
      "search.pstatic.net",
      "upload3.inven.co.kr",
      "appdata.hungryapp.co.kr",
      "icons.veryicon.com",
    ],
  },
};

export default nextConfig;
