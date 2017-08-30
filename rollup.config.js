import gas from 'rollup-plugin-gas'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: "dist/index.js",
    format: 'es',
  },
  plugins: [
    gas(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
}
