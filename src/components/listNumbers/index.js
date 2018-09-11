import React from 'react';
import { connect } from 'react-redux';

import { Container, Loading } from './styles';

const NumbersList = ({ numbersList }) => (
  <Container>
    {
      numbersList.loading ?
      <Loading>
        <span>Carregando...</span>
      </Loading>
      :
      <table>
        <tr>
          <th>Numbers</th>
          <th>Cost</th>
        </tr>
        {
          numbersList.data.map((item, i) => (
            <tr key={i}>
              <td>{ item.number }</td>
              <td>{ item.cost }$</td>
            </tr>
          ))
        }
      </table>
    }
    { !!numbersList.error && <span>{numbersList.error}</span> }
  </Container>
);

const mapStateToProps = state => ({
  numbersList: state.numbersList,
});

export default connect(mapStateToProps)(NumbersList);
