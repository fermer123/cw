import {blue, blueGrey, grey} from '@mui/material/colors';

interface ColorPalette {
  blue: string;
  grey: string;
  default: string;
}

const colors: ColorPalette = {
  blue: blue[500],
  grey: grey[900],
  default: blueGrey[100],
};

export default colors;
