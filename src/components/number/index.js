import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Number = ({page, number, nextPage}) => (
  <Fragment>
    { number.map((item, i) => (
        <li key={i}>{ item.number } = { item.cost }$</li>
      ))
    }
    <li>{ page }</li>
    <li>{ nextPage }</li>
  </Fragment>
);

const mapStateToProps = state => ({
  number: state.number,
  page: state.page
});

export default connect(mapStateToProps)(Number);
