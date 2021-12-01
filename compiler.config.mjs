/** @format */

export default {
	// the folder that contains all icons to parse

	inputDir: './icons/',

	// the file that is used to insert the parsed icons into and the symbol used to split the file

	inputFile: './src/pangolicons.source.js',
	processorSymbol: '/** @icons */',

	/**
	 * The output directories for the compiled elements. Directories can be specified as string or array.
	 *
	 * icons will describe a destination to put all icons that have been stripped of their unnecessary markup & tags
	 * script will place the compiled file
	 * compressed will place a zip file containing all icons
	 *
	 */

	outputDir: {
		icons: ['./docs/icons/'],
		script: './src/pangolicons.js',
	},

	// logs the progress of the compilation to the console

	log: true,
};
