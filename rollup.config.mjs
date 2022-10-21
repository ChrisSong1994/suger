/* eslint-disable no-undef */
import path from 'path';
import { fileURLToPath } from 'url';
import { terser } from 'rollup-plugin-terser';
import pluginTypescript from '@rollup/plugin-typescript';
import pluginCommonjs from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import strip from '@rollup/plugin-strip';
import pkg from './package.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const camelize = (str) => {
  return str.replace(/[\s-_]([a-z])/g, (_all, letter) => letter.toUpperCase());
};

const moduleName = pkg.name.replace(/^@.*\//, '');
const inputFileName = 'src/index.ts';
const author = pkg.author;

const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;



export default  {
  input: inputFileName,
  output: {
    name: camelize(moduleName),
    file: pkg.unpkg,
    format: 'umd',
    banner,
  },
  plugins: [
    pluginTypescript(),
    pluginCommonjs({
      extensions: ['.js', '.ts'],
    }),
    babel({
      babelHelpers: 'bundled',
      configFile: path.resolve(__dirname, '.babelrc.js'),
    }),
    pluginNodeResolve({
      browser: true,
    }),
    strip(),
    terser(),
  ],
}
