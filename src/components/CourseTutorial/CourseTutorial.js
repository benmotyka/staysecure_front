import Button from "components/Button/Button";
import FadeIn from "components/FadeIn/FadeIn";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  SidebarBox,
  SidebarWrapper,
  Text,
  ButtonWrapper,
  SlideBox,
  SlideWrapper,
  NavigationWrapper,
  NavigationBox,
  Highlight,
  CourseLevelBox,
  CourseLevelWrapper
} from "./CourseTutorial.styles";

const CourseTutorial = (props) => {
  const [step, setStep] = useState(0);
  const {t} = useTranslation()

  return (
    <Container>
        <FadeIn in={step === 0}>
          <SidebarBox />
          <SidebarWrapper>
            <Text>
              <Highlight>{t('courseTutorial.sidebar')}</Highlight>{t('courseTutorial.sidebarDescription')}
            </Text>
            <ButtonWrapper>
              <Button text={t('courseTutorial.next')} noArrow small onClick={() => setStep(1)} />
            </ButtonWrapper>
          </SidebarWrapper>
          </FadeIn>
        <FadeIn in={step === 1}>
          <SlideBox />
          <SlideWrapper>
            <Text>
            <Highlight>{t('courseTutorial.slide')}</Highlight> 
             {t('courseTutorial.slideDescription')}
            </Text>
            <ButtonWrapper>
              <Button text={t('courseTutorial.next')} noArrow small onClick={() => setStep(2)} />
            </ButtonWrapper>
          </SlideWrapper>
        </FadeIn>
        <FadeIn in={step === 2}>
          <NavigationBox />
          <NavigationWrapper>
            <Text>
            <Highlight>{t('courseTutorial.navigation')}</Highlight> {t('courseTutorial.navigationDescription')}
            </Text>
            <ButtonWrapper>
              <Button text={t('courseTutorial.next')} noArrow small onClick={() => setStep(3)} />
            </ButtonWrapper>
          </NavigationWrapper>
        </FadeIn>
        <FadeIn in={step === 3}>
          <CourseLevelBox />
          <CourseLevelWrapper>
            <Text>
            <Highlight>{t('courseTutorial.slideLevel')}</Highlight> {t('courseTutorial.slideLevelDescription')}
            </Text>
            <ButtonWrapper>
              <Button text={t('courseTutorial.finish')} noArrow small onClick={() => {
                setStep(0); 
                props.finish()
                }} />
            </ButtonWrapper>
          </CourseLevelWrapper>
        </FadeIn>
    </Container>
  );
};

export default CourseTutorial;
