import React from 'react';

import { connect } from 'react-redux';

const Number = (props) => (
  <ul>
    { props.number.map((item) => <li key={item.id}>{ item.number }</li>) }
  </ul>
);

const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps)(Number);
