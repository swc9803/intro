module.exports = {
	extends: [
		// 'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@vue/eslint-config-prettier',
	],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
		'vue/multi-word-component-names': 0,
	},
};
