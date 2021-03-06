import styled from "styled-components";
import colors from "constans/colors.js";
import { useTranslation } from "react-i18next";

import { FaUser as UserIcon, FaServer as ServerIcon } from "react-icons/fa";

import { CgArrowLongRight as ArrowIcon } from "react-icons/cg";

const User = styled(UserIcon)`
  font-size: 100px;
  color: ${colors.white};
`;

const Server = styled(ServerIcon)`
  font-size: 100px;
  color: ${colors.white};
`;

const Wrapper = styled.div`
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled(ArrowIcon)`
  font-size: 50px;
  color: ${colors.white};
  width: 100%;
  transform: ${(props) => (props.back ? "rotate(180deg)" : "")};
`;

const ArrowText = styled.p`
  font-size: 14px;
  color: ${colors.white};
  opacity: 0.8;
  margin: 0;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
`;

const Description = styled.h5`
  margin: 10px 0 0 0;
  font-size: 16px;
  color: ${colors.white};
  font-weight: normal;
  text-align: center;
`;

const HowWebServersWork = () => {
  const {t} = useTranslation()

  return (
    <Container>
      <Wrapper>
        <User />
        <Description>
        {t('courses.dos.clientBrowser')}
        </Description>
      </Wrapper>
      <Wrapper>
        <ArrowText>
        {t('courses.dos.clientSends')}
        </ArrowText>
        <Arrow />
        <Arrow back />
        <ArrowText>

        {t('courses.dos.serverReturns')}

        </ArrowText>
      </Wrapper>
      <Wrapper>
        <Server />
        <Description>
        {t('courses.dos.machineDescription')}
</Description>
      </Wrapper>
    </Container>
  );
};

export default HowWebServersWork;
