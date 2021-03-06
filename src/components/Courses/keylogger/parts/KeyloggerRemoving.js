import styled from "styled-components";
import colors from "constans/colors.js";
import { useTranslation } from "react-i18next";
import { Line } from "components/PreviewItems/PreviewItems.styles";
import { BsLaptop as LaptopIcon } from "react-icons/bs";
import { MdSettingsBackupRestore as FormatIcon } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
`;

export const ItemsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  color: ${colors.white};
  opacity: 0.8;
  font-size: 16px;
  margin: 0;
  text-align: center;
`;

export const Laptop = styled(LaptopIcon)`
font-size: 200px;
color: ${colors.white};
position: absolute;
top: 175px;
`

export const Format = styled(FormatIcon)`
font-size: 70px;
color: ${colors.orange};
position: absolute;
top: 215px;
`

export const LaptopText = styled.p`
font-size: 12px;
margin: 0;
color: ${colors.white};
top: 285px;
position: absolute;
`

const KeyloggerRemoving = () => {
  const {t} = useTranslation()

  return (
    <Container>
      <Description>
      {t('courses.keylogger.removingDescription')}
      </Description>
      <Line />
      <ItemsWrapper>
          <Laptop/>
          <Format/>
          <LaptopText>Restoring system...</LaptopText>
      </ItemsWrapper>
    </Container>
  );
};

export default KeyloggerRemoving;
