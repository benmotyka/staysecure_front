import { useState } from "react";
import styled from "styled-components";
import colors from "constans/colors.js";
import { useTranslation } from "react-i18next";

import { Line } from "components/PreviewItems/PreviewItems.styles.js";

import {
  Container,
  HeaderWrapper,
  Button,
  ContentWrapper,
  ContentHeader,
  ContentBody,
  FlexCenterWrapper,
} from "../../ransomware/styles.js";

import { FaServer as ServerIcon } from "react-icons/fa";
import { BiCookie as CookieIcon } from "react-icons/bi";
import { MdHttp as HttpIcon } from "react-icons/md";
import { IoIosArrowForward as ArrowIcon } from "react-icons/io";
import { BsShieldFillCheck as CheckIcon } from "react-icons/bs";
import { FaLock as LockIcon } from "react-icons/fa";
import {
  FaRegFileCode as EncodeIcon,
  FaHtml5 as HtmlIcon,
} from "react-icons/fa";

const Cookie = styled(CookieIcon)`
  font-size: 120px;
  color: ${colors.gold};
  position: absolute;
`;

const Lock = styled(LockIcon)`
  color: ${colors.orange};
  font-size: 70px;
  position: absolute;
  top: -15px;
  left: 65px;
`;

const Http = styled(HttpIcon)`
  color: ${colors.white};
  position: absolute;
  font-size: 60px;
  left: 70px;
  top: 5px;
`;

const Arrow = styled(ArrowIcon)`
  color: ${colors.white};
  font-size: 60px;
  margin: 0 30px;
`;

const Check = styled(CheckIcon)`
  font-size: 60px;
  color: ${colors.lightGreen};
  position: absolute;
  right: -25px;
  top: -30px;
`;

const Server = styled(ServerIcon)`
  font-size: 120px;
  color: ${colors.white};
`;

const Html = styled(HtmlIcon)`
  font-size: 70px;
  color: ${colors.orange};
  position: absolute;
  left: 11px;
  top: -10px;
`;
const Encode = styled(EncodeIcon)`
  font-size: 120px;
  color: ${colors.white};
  position: absolute;
  top: -10px;
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const XssProtection = () => {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Container>
      <HeaderWrapper>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
        {t("courses.xss.xssProtection1")}
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
        {t("courses.xss.xssProtection2")}
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
        {t("courses.xss.xssProtection3")}
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
          {t("courses.xss.xssProtectionDescription1")}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <RelativeContainer>
                <Encode />
                <Html />
              </RelativeContainer>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
          {t("courses.xss.xssProtectionDescription2a")}
            <strong>HttpOnly</strong> 
          {t("courses.xss.xssProtectionDescription2b")}
            <Line />
          </ContentHeader>
          <ContentBody>
            <RelativeContainer>
              <Cookie />
              <Lock />
              <Http />
            </RelativeContainer>
          </ContentBody>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
          {t("courses.xss.xssProtectionDescription3")}
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <RelativeContainer>
                <Encode />
                <Check />
              </RelativeContainer>
              <Arrow />
              <Server />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default XssProtection;
