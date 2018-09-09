import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const NumbersList = ({ numbersList }) => (
  <Fragment>
    {
      numbersList.data ?
      numbersList.data.map((item, i) => (
          <li key={i}>{ item.number } = { item.cost }$</li>
        ))
      : null
    }
    <li>{ numbersList.meta.page }</li>
  </Fragment>
);

const mapStateToProps = state => ({
  numbersList: state.numbersList,
});

export default connect(mapStateToProps)(NumbersList);
