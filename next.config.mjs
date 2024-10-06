import BundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@radix-ui/react-icons"]
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'www.codefactor.io',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'img.shields.io',
                port: '',
                pathname: '**'
            }
        ]
    }
};

const withBundleAnalyzer = BundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig)