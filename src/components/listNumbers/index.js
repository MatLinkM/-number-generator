import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

const NumbersList = ({ numbersList }) => (
  <Container>
    <table>
      <tr>
        <th>Numbers</th>
        <th>Cost</th>
      </tr>
      {
        numbersList.loading ? <span>Carregando...</span>
        :
        numbersList.data.map((item, i) => (
          <tr key={i}>
            <td>{ item.number }</td>
            <td>{ item.cost }$</td>
          </tr>
        ))
      }
      { !!numbersList.error && <span>{numbersList.error}</span> }
    </table>
  </Container>
);

const mapStateToProps = state => ({
  numbersList: state.numbersList,
});

export default connect(mapStateToProps)(NumbersList);
