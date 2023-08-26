import styled from 'styled-components';

import {Link} from '@mui/material';
import colors from '@src/app/styles/default_variables';

const LabelNavigate = styled(Link)`
  margin: 0 auto;
  color: ${colors.default};
  font-size: 0.7rem;
`;

export default LabelNavigate;
