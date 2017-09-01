import babel from 'rollup-plugin-babel'
import gas from 'rollup-plugin-gas'
// import nodeResolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: "dist/index.js",
     format: 'es',
  },
  plugins: [
    // nodeResolve({ jsnext: true }),
    // commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    gas(),
  ],
}
