import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #0f1624;
  flex-direction: column;
  color: #e4e4e6;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    margin: 70px;
    @media screen and (max-width: 728px) {
      flex-direction: column;
      width: 65%;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
    padding: 50px;
    font-size: 20px;
    @media screen and (max-width: 728px) {
      margin: 0;
      padding: 0;
      font-size: 17px;
    }
  }
  .contact-details {
    text-align: center;
    margin-bottom: 30px;
  }
  a {
    color: #e4e4e6;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #e4e4e6;
    cursor: pointer;
    width: 80%;
  }
  .resume {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
