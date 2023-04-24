module.exports = {
	printWidth: 100,
	semi: false,
	bracketSpacing: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	bracketSameLine: true,
	useTabs: true,
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: true
			}
		}
	],
	endOfLine: 'auto'
}
