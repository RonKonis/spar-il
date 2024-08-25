/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	async redirects() {
		return [
			{
				source: "/((?!$).*)",
				destination: "/",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
