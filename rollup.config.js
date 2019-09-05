import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

const sourcemap = false;

export default {
	input: "lib.js",
	plugins: [
		babel({
			exclude: "node_modules/**"
		}),
		resolve(),
		peerDepsExternal()
	],
	output: [
		{
			file: pkg.module,
			format: "es",
			sourcemap
		},
		{
			file: pkg.main,
			format: "cjs",
			sourcemap
		}
	]
};
