import styled from 'styled-components';

import colors from '@app/styles/default_variables';
import Button from '@mui/material/Button';

const PostAuthButton = styled(Button)({
  '&:not(Mui-disabled)': {
    borderColor: colors.default,
    color: colors.default,
  },
  '&.Mui-disabled': {
    color: colors.default,
  },
});

export default PostAuthButton;
