import styled from 'styled-components';

import Button from '@mui/material/Button';

const PostAuthButton = styled(Button)(({theme}) => ({
  '&:not(.Mui-disabled)': {
    borderColor: theme.backGroundColor,
    color: theme.backGroundColor,
  },
  '&.Mui-disabled': {
    color: theme.backGroundColor,
  },
}));
export default PostAuthButton;
