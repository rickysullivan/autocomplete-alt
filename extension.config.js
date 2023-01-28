import InlineSvg from 'rollup-plugin-inline-svg';
import commonjs from '@rollup/plugin-commonjs';
export default {
    plugins: [InlineSvg(), commonjs()],
};