import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #232324;
  overflow: scroll;

  table {
    width: 100%;
  }

  tr {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    height: 40px;
    align-items: center;
  }

  tr:nth-child(2n+2) {
    background: #1B1B1C;
  }

  tr th {
    color: #ededed;
    font-weight: 500;
  }

  tr td {
    color: #666600;
    font-weight: 500;
  }

  @media(max-width: 700px) {
    height: 80vh;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
  display: flex;

`;
