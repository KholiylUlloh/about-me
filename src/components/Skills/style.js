import styled from "styled-components";
import { ReactComponent as html } from "../../assets/icons/html.svg";
import { ReactComponent as css } from "../../assets/icons/css.svg";
import { ReactComponent as js } from "../../assets/icons/js.svg";
import { ReactComponent as react } from "../../assets/icons/react.svg";
import { ReactComponent as tailwind } from "../../assets/icons/tailwind.svg";
import { ReactComponent as sass } from "../../assets/icons/sass.svg";

export const Container = styled.div`
  background: white;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0f1624;
  p {
    position: relative;
    width: 100%;
  }
  @media screen and (max-width: 728px) {
    position: static;
    font-size: 17px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .container-2 {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 40%;
    height: 100%;
    position: relative;
    left: 80px;
    margin-bottom: 70px;
    @media screen and (max-width: 728px) {
      position: static;
      font-size: 17px;
      width: 90%;
      justify-content: center;
      align-items: center;
    }
  }
  .box1 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e9e9e9;
    width: 100%;
    height: 100%;
    font-size: 40px;
  }
  .indicator {
    position: relative;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 728px) {
      align-items: center;
    }
  }
  .level {
    position: absolute;
    left: 3rem;
    top: -1rem;
    color: #212121;
  }
`;

export const Html = styled(html)``;
export const Css = styled(css)``;
export const Js = styled(js)``;
export const ReactIcon = styled(react)``;
export const Tailwind = styled(tailwind)``;
export const Sass = styled(sass)``;
