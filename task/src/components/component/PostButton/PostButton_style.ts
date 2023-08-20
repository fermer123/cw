import styled from 'styled-components';

import Button from '@mui/material/Button';
import colors from '@styles/default_variables';

const PostAuthButton = styled(Button)({
  '&:not(Mui-disabled)': {
    borderColor: colors.default,
    color: colors.default,
  },
});

export default PostAuthButton;
