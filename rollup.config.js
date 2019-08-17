import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';


export default [
	//UMD fro browser - Plugins are executed 
	//as callbacks after each complidation
	{
		input: 'src/main.js',
		output: {
			name: 'jsonapi',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), 
			commonjs() 
		]
	},
	//ESM exports
	{
		input: 'src/main.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
]