import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTitleText = styled.h3<{
  textColor?: string;
  isCentered?: boolean;
}>`
  ${(props) =>
    props.textColor === 'dark'
      ? `color: var(--dark-color);`
      : `color: var(--light-color);`}
  ${(props) => (props.isCentered ? `text-align: center;` : '')}

  font-size: 60px;
  h1 {
    text-align: center;
    font-size: 60px;
  }
`;
export const StyledMainText = styled(motion.h2)`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 200px;
  @media (max-width: 540px) {
    font-size: 120px;
  }
`;

export const StyledSubtitleText = styled.p`
  font-size: 35px;
  @media (max-width: 320px) {
    font-size: 25px;
  }
`;

export const StyledTextSp = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
`;
export const StyledTextMenu = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
`;
