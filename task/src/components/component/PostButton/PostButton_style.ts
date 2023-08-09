import styled from 'styled-components';

import Button from '@mui/material/Button';
import colors from '@src/default_variables';

const PostAuthButton = styled(Button)({
  '&:not(Mui-disabled)': {
    borderColor: colors.default,
    color: colors.default,
  },
});

export default PostAuthButton;
