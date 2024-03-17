import React, { useEffect } from 'react';
import {
  MasterContainer,
  StyledSplitContainer,
  StyledTextContainer,
} from '../../components/Container/index.styled.ts';
import {
  SkillsShowcaseContainer,
  SkillsShowcaseItem,
  StyledSkillItemContainer,
} from './index.styled.ts';
import {
  SiPostman,
  SiSelenium,
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiApollographql,
  SiTypescript,
  SiStyledcomponents,
  SiMui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiStrapi,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { StyledMainText } from '../../components/Text/index.styled.ts';
import UFT from '../../assets/svg/UFT.tsx';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContainerVariantL = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
      delay: 1,

      ease: 'easeInOut',
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};
const ContainerVariantR = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
      delay: 1,

      ease: 'easeInOut',
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

const CardVariant = {
  hidden: { y: '20%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
const TextVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.5,
      duration: 5,
      ease: 'easeOut',
    },
  },
};

const hoverObj = {
  scale: 1.1,
  originY: 1,
  originX: 1,
};

const SkillsQA = ({ animation }) => {
  return (
    <StyledSplitContainer isFullScreen={true}>
      <StyledSkillItemContainer>
        <StyledTextContainer isCentered={true}>
          <StyledMainText
            variants={TextVariant}
            initial='hidden'
            animate={animation}
          >
            QA
          </StyledMainText>
        </StyledTextContainer>
      </StyledSkillItemContainer>
      <StyledSkillItemContainer
        variants={ContainerVariantR}
        initial='hidden'
        animate={animation}
      >
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiSelenium />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiPostman />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <UFT width={80} height={80} />
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
      </StyledSkillItemContainer>
    </StyledSplitContainer>
  );
};
const SkillsDev = ({ animation }) => {
  return (
    <StyledSplitContainer isFullScreen={true} id='skills' isReversed={true}>
      <StyledSkillItemContainer
        variants={ContainerVariantL}
        initial='hidden'
        animate={animation}
      >
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiReact />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiNextdotjs />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiGatsby />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiApollographql />
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiStyledcomponents />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <FaSass />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiMui />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiBootstrap />
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiNodedotjs />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiTypescript />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiExpress />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiNestjs />
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
        <SkillsShowcaseContainer>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiMongodb />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiPostgresql />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiGraphql />
          </SkillsShowcaseItem>
          <SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
            <SiStrapi />
          </SkillsShowcaseItem>
        </SkillsShowcaseContainer>
      </StyledSkillItemContainer>
      <StyledSkillItemContainer>
        <StyledTextContainer isCentered={true}>
          <StyledMainText
            variants={TextVariant}
            initial='hidden'
            animate={animation}
          >
            DEV
          </StyledMainText>
        </StyledTextContainer>
      </StyledSkillItemContainer>
    </StyledSplitContainer>
  );
};

const Skills = () => {
  const { ref: refDev, inView: inViewDev } = useInView();
  const { ref: refQA, inView: inViewQA } = useInView();
  const animationOne = useAnimation();
  const animationTwo = useAnimation();

  useEffect(() => {
    if (inViewDev) {
      animationOne.start('visible');
    }
    if (inViewQA) {
      animationTwo.start('visible');
    }
    if (!inViewDev) {
      animationOne.start('hidden');
    }
    if (!inViewQA) {
      animationTwo.start('hidden');
    }
  }, [animationOne, animationTwo, inViewDev, inViewQA]);

  return (
    <MasterContainer bgColor={'#333'}>
      <div ref={refDev}>
        <SkillsDev animation={animationOne} />
      </div>
      <div ref={refQA}>
        <SkillsQA animation={animationTwo} />
      </div>
    </MasterContainer>
  );
};

export default Skills;
