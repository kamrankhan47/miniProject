import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgStroke3 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 9 15"
    {...props}>
    <Path
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.3 13.299 1.25 7.275 7.3 1.25"
    />
  </Svg>
);
export default SvgStroke3;
