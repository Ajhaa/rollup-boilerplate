import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const inProduction = process.env.NODE_ENV === 'production'

export default {
  input: [
    'src/index.js',
    'src/other.js'
  ],
  plugins: [
    babel({ babelHelpers: 'bundled' }),

    !inProduction && serve({ contentBase: 'public', port: 5000 }),
    !inProduction && livereload('public'),

    inProduction && terser()
  ],
  output: {
    dir: 'public/build/',
    format: 'cjs',
    sourcemap: true
  }
};
