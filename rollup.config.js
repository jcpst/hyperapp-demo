import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'

const prod = process.env.NODE_ENV === 'production'

export default {
  dest: 'public/bundle.js',
  entry: 'src/main.js',
  format: 'iife',
  plugins: [
    babel({
      babelrc: false,
      plugins: [
        ['transform-react-jsx', { pragma: 'h' }]
      ],
      presets: ['es2015-rollup']
    }),
    resolve({ jsnext: true }),
    prod && uglify(),
    !prod && serve('public')
  ]
}
