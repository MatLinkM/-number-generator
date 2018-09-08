import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Number = ({page, number, nextPage}) => (
  <Fragment>
      <li>{ number }</li>
      <li>{ page }</li>
      <li>{ nextPage }</li>
  </Fragment>
);

const mapStateToProps = state => ({
  number: state.number,
  page: state.page
});

const mapDispatchToProps = dispatch => bindActionCreators(Number, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Number);
