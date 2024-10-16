/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/admin",
				destination: "/admin/dashboard",
				permanent: true,
			},
			{
				source: "/user",
				destination: "/user/dashboard",
				permanent: false,
			},
			{
				source: "/auth",
				destination: "/auth/login",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
