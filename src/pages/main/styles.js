import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 700px) {
    justify-content: flex-start;
  }
`;

export const Content = styled.div`
  height: auto;
  border-radius: 10px;
  overflow: hidden;

  @media(max-width: 700px) {
    border-radius: 0;
  }
`;

export const Header = styled.header`
  height: 70px;
  width: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1B1B1C;

  img {
    height: 50px;
    width: 50px;
  }
`;

export const Title = styled.h1`
  color: #EDEDED;
  font-weight: 300;
  font-size: 14px;
`;

export const PerParge = styled.div`
  width: 150;
  display: flex;

  input {
    width: 100px;
    height: 25px;
    margin: 0 15px;
    font-size: 14px;
    text-align: center;
    border-radius: 5px;
    border: none;
  }

  button {
    width: 55px;
    color: #EDEDED;
    font-size: 12px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #EDEDED;
    color: #000;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .buttonNavigate {
    width: 60px;
    height: 25px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    margin: 0 10px;
    background-color: #fff;
  }
`;
