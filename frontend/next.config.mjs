/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['img001.prntscr.com', 'rise2.studio']
	},
	webpack: (config, { isServer }) => {
		return config
	}
}

export default nextConfig
