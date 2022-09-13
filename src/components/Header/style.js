import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
  object-fit: contain;
  background-size: cover;
  background-position: center;
  background-color: #0f1624;
  margin: 0;
  @media screen and (max-width: 728px) {
    background-attachment: fixed;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    @media screen and (max-width: 728px) {
      flex-direction: column;
    }
  }
  .text {
    display: flex;
    width: 50%;
    height: 50%;
    flex-direction: column;
    text-align: center;
    opacity: 0.9;
    @media screen and (max-width: 728px) {
      width: 100%;
      margin: auto;
    }
  }
  h1 {
    color: #edeeef;
    font-size: 6rem;
    font-family: Optima, sans-serif;
    margin: auto;

    @media screen and (max-width: 728px) {
      font-size: 3rem;
    }
  }
  .pic {
    width: 35%;
    height: 70%;
    margin: 0 10px 0 150px;
    @media screen and (max-width: 728px) {
      margin: 60px 20px 20px;
      width: 90%;
      height: 40%;
    }
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 50%;
    margin: auto;
    margin-top: 60px;
    padding: 10px;

    @media screen and (max-width: 728px) {
      margin-left: 30px;
      width: 80%;
    }
  }
  .icon2 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    width: 100%;
  }
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    @media screen and (max-width: 728px) {
      width: 100%;
    }
  }
`;
