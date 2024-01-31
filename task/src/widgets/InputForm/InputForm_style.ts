import styled from 'styled-components';

import {TextField} from '@mui/material';
import colors from '@src/app/styles/default_variables';

const InputFormContent = styled(TextField)({
  '& .MuiInputLabel-outlined': {
    color: colors.default,
    borderColor: colors.default,
  },

  '& .MuiOutlinedInput-notchedOutline': {
    color: colors.default,
    borderColor: colors.default,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: colors.default, // или другой цвет по вашему выбору
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline ': {
    borderColor: colors.default,
    borderWidth: '1px ',
  },
  '& .MuiInputBase-input': {
    color: colors.default,
  },

  '& input:-webkit-autofill': {
    '-webkit-text-fill-color': colors.default, // текст при авто заполнении
    '-webkit-box-shadow': `0 0 0 100px ${colors.grey} inset`, // задний фон при автозаполнении
  },
});
export default InputFormContent;
