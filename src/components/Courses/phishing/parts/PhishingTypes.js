import styled, { css } from "styled-components";
import colors from "constans/colors.js";
import {
  AiOutlineMail as MailIcon,
  AiOutlinePhone as PhoneIcon,
} from "react-icons/ai";

import { GiHook as HookIcon, GiSpearHook as SpearIcon } from "react-icons/gi";
import { BiWorld as WebpageIcon } from "react-icons/bi";

import { HiOutlineArrowNarrowDown as ArrowIcon } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const RelativeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Icon = css`
  font-size: 50px;
  color: ${colors.orange};
`;

const Mail = styled(MailIcon)`
  ${Icon};
`;

const Phone = styled(PhoneIcon)`
  ${Icon};
`;

const Spear = styled(SpearIcon)`
  ${Icon};
`;

const Hook = styled(HookIcon)`
  ${Icon};
`;

const Webpage = styled(WebpageIcon)`
  ${Icon};
`;

const ItemDescription = styled.h3`
  font-size: 18px;
  color: ${colors.white};
  margin: 10px 0 0 0;
`;

const Header = styled.h1`
  font-size: 3vw;
  color: ${colors.orange};
`;

const Arrow = styled(ArrowIcon)`
  font-size: 50px;
  color: ${colors.white};
  position: absolute;
`;

const PhishingTypes = () => {
  const { t } = useTranslation();

  return (
    <RelativeContainer>
      <AbsoluteContainer style={{ left: "35%", top: "30%" }}>
        <Header>{t("courses.phishing.phishing")}</Header>
      </AbsoluteContainer>
      <AbsoluteContainer style={{ left: "10%", top: "40%" }}>
        <Mail />
        <ItemDescription>{t("courses.phishing.mailPhishiing")}</ItemDescription>
      </AbsoluteContainer>
      <AbsoluteContainer style={{ left: "25%", top: "60%" }}>
        <Phone />
        <ItemDescription>{t("courses.phishing.phonePhishing")}</ItemDescription>
      </AbsoluteContainer>
      <AbsoluteContainer style={{ left: "40%", top: "80%" }}>
        <Webpage />
        <ItemDescription>{t("courses.phishing.falseWebsite")}</ItemDescription>
      </AbsoluteContainer>
      <AbsoluteContainer style={{ left: "55%", top: "60%" }}>
        <Spear />
        <ItemDescription>{t('courses.phishing.spearPhishing')}</ItemDescription>
      </AbsoluteContainer>
      <AbsoluteContainer style={{ left: "70%", top: "40%" }}>
        <Hook />
        <ItemDescription>{t('courses.phishing.pharming')}</ItemDescription>
      </AbsoluteContainer>
      <Arrow style={{ top: "40%", left: "29%", transform: "rotate(86deg)" }} />
      <Arrow style={{ top: "47%", left: "35%", transform: "rotate(30deg)" }} />
      <Arrow style={{ top: "53%", left: "42%", transform: "rotate(-3deg)" }} />
      <Arrow style={{ top: "48%", left: "49%", transform: "rotate(-35deg)" }} />
      <Arrow style={{ top: "40%", left: "57%", transform: "rotate(-86deg)" }} />
    </RelativeContainer>
  );
};

export default PhishingTypes;
