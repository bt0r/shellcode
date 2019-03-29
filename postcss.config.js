const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

class TailwindExtractor {
	static extract (content) {
		return content.match(/[A-Za-z0-9-_:/]+/g) || []
	}
}

module.exports = {
	plugins: [
		tailwindcss('./tailwind.config.js'),
		process.env.NODE_ENV === 'production' && cssnano({
			preset: 'default',
		}),
		process.env.NODE_ENV === 'production' && purgecss({
			content: ['./src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
			css: ['./src/**/*.css'],
			whitelist: ['bg-cover-image', 'body'],
			whitelistPatterns: [/ais-.*/],
			extractors: [
				{
					extractor: TailwindExtractor,
					extensions: ['html', 'js', 'ts', 'tsx'],
				},
			],
		}),
		autoprefixer(),
	],
}
