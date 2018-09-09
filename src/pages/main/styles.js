import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0px;
  max-width: 700px;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: auto;
  border-radius: 10px;
  overflow: hidden;
`;

export const Header = styled.div`
  height: 60px;
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

export const Submit = styled.div`
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
    background-color: rgba(0,0,0,0);
    border: none;
    border-radius: 5px;
  }
`;
