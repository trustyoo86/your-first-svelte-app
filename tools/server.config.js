/**
 * server rollup
 */
'use strict';

import typescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import * as tsCompile from 'typescript';
import { join, resolve } from 'path';

// env
const production = !process.env.ROLLUP_WATCH;

// paths
const root = resolve(__dirname);
const dist = resolve(root, 'dist');
const server = resolve(root, 'server');

export default {
  input: join(server, 'index.ts'),
  output: {
    sourcemap: true,
    format: 'umd',
    name: 'server',
    file: join(dist, 'server.js'),
  },
  plugins: [
    commonjs(),
    typescript({ typescript: tsCompile, clean: true }),
    nodeResolve({
      extensions: ['.ts'],
    }),
  ],
  watch: {
    clearScreen: false,
  },
};