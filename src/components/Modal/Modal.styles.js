import styled from "styled-components";
import colors  from "constans/colors";
import zIndex from "constans/zIndex";

export const Container = styled.div`
position: fixed;
inset: 0;
background-color: rgba(33, 36, 57,0.8);
z-index: ${zIndex[1000]};
display: flex;
align-items: center;
justify-content: center;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
padding: 25px;
width: max-content;
background-color: ${colors.mediumDarkPurple};
opacity: 1;
border-radius: 5px;
max-width: 400px;
@media screen and (max-width: 600px) {
padding: 15px;
margin: 10px;
}
`

export const Header = styled.h2`
margin: 0 0 10px 0;
color: ${colors.white};
font-size: 20px;
@media screen and (max-width: 600px) {
font-size: 20px;
}
`
export const Text = styled.p`
margin-top: 0;
color: ${colors.white};
opacity: 0.8;
font-size: 20px;
@media screen and (max-width: 600px) {
font-size: 14px;
}
`
export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`