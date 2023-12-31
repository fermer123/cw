import styled from 'styled-components';

import {TextField} from '@mui/material';
import colors from '@src/app/styles/default_variables';

const InputFormContent = styled(TextField)({
  '& .MuiInputLabel-outlined': {
    color: colors.default,
    borderColor: colors.default,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline ': {
    borderColor: colors.default,
    borderWidth: '0.5px ',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    color: colors.default,
    borderColor: colors.default,
  },
  '& .MuiInputBase-input': {
    color: colors.default,
  },
});
export default InputFormContent;
