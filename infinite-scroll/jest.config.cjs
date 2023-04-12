module.exports = {
	transform: {},
	transformIgnorePatterns: [
		'/node_modules/(?!your-es6-dependency|another-es6-dependency)/',
	],
	globals: {
		'ts-jest': {
			babelConfig: true,
			tsconfig: 'tsconfig.json',
			isolatedModules: true,
		},
	},
	testEnvironment: 'node',
	setupFilesAfterEnv: ['esm'],
};
