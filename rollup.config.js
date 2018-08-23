import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [{
  input: 'src/dcmjs.js',
  output: {
    file: 'build/dcmjs.js',
    format: 'umd',
    name: 'DCMJS',
	  sourceMap: true
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}];