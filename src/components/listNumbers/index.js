import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const NumbersList = ({ numbersList }) => (
  <Fragment>
    <li>{ numbersList.meta.page }</li>
    {
      numbersList.loading ? <span>Carregando...</span>
      :
      numbersList.data.map((item, i) => (
        <li key={i}>{ item.number } = { item.cost }$</li>
      ))
    }
    { !!numbersList.error && <span>{numbersList.error}</span> }
  </Fragment>
);

const mapStateToProps = state => ({
  numbersList: state.numbersList,
});

export default connect(mapStateToProps)(NumbersList);
