import styled, {css} from "styled-components";
import colors from "constans/colors.js";
import { useTranslation } from "react-i18next";

import { MdSettingsApplications as AppIcon, MdAttachEmail as MailIcon } from "react-icons/md";
import { BsLaptop as LaptopIcon } from "react-icons/bs";
import {VscRemoteExplorer as RemoteIcon, VscBracketError as SoftwareErrorIcon} from "react-icons/vsc"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const RelativeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Item = styled.div`
  width: 150px;
  min-height: 150px;
  position: absolute;
  border-radius: 15px;
  border: 1px solid ${colors.hoverOrange};
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkPurple};
  padding: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${colors.white};
  text-align: center;
  opacity: 0.8;
  margin: 0 0 10px 0;
`;

const Icon = css`
  font-size: 90px;
  color: ${colors.white};
  margin: auto;
`

export const App = styled(AppIcon)`
${Icon};
`;

export const Laptop = styled(LaptopIcon)`
${Icon};
`;

export const Mail = styled(MailIcon)`
${Icon};
`

export const Remote = styled(RemoteIcon)`
${Icon};
`

export const SoftwareError = styled(SoftwareErrorIcon)`
${Icon};
`



const KeyloggerInfectionMethods = () => {
  const {t} = useTranslation()

  return (
    <Container>
      <RelativeWrapper>
        <Item style={{ left: "23%", top: "0%" }}>
          <App />
          <Description>{t('courses.keylogger.maliciousSoftware')}</Description>
        </Item>
        <Item style={{ left: "18%", bottom: "15%" }}>
        <Mail />
          <Description>{t('courses.keylogger.phishingMails')}</Description>
        </Item>
        <Item style={{ left: "45%", top: "35%" }}>
        <SoftwareError />
          <Description>{t('courses.keylogger.softwareBugs')}</Description>
        </Item>
        <Item style={{ right: "15%", top: "10%" }}>
        <Laptop />
          <Description>{t('courses.keylogger.physicalAccess')}</Description>
        </Item>
        <Item style={{ right: "10%", top: "55%" }}>
        <Remote />
          <Description>{t('courses.keylogger.remoteAccess')}</Description>
        </Item>
      </RelativeWrapper>
    </Container>
  );
};

export default KeyloggerInfectionMethods;
