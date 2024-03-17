import React from 'react';
import {
  StyledSubtitleText,
  StyledTitleText,
} from '../../components/Text/index.styled.ts';
import Lottie from 'lottie-react';
import animationData from '../../assets/mail.json';
import { StyledOutlineButton } from '../../components/Buttons/index.styled.ts';
import {
  StyledItemContainer,
  MasterContainer,
  StyledSplitContainer,
  StyledTextContainer,
} from '../../components/Container/index.styled.ts';
import { MdMailOutline } from 'react-icons/md';
import { RiArrowDropRightLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <MasterContainer bgColor={'#333'} withPadding={true}>
      <StyledSplitContainer isFullScreen={false} isGapped={true} id='contact'>
        <StyledItemContainer>
          <StyledTextContainer>
            <StyledTitleText>Let's Connect</StyledTitleText>
            <StyledSubtitleText>
              Leave a message via email here:
            </StyledSubtitleText>
            <a
              href='mailto:vc.lorenzo16@gmail.com'
              style={{ display: 'inline-block', maxWidth: '150px' }}
            >
              <StyledOutlineButton>
                <MdMailOutline />
                <RiArrowDropRightLine />
              </StyledOutlineButton>
            </a>
          </StyledTextContainer>
        </StyledItemContainer>

        <StyledItemContainer>
          <Lottie animationData={animationData} />
        </StyledItemContainer>
      </StyledSplitContainer>
    </MasterContainer>
  );
};

export default Contact;
