import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SelectPage from '../../store/actions/selectPage';
import * as Numbers from '../../store/actions/numbers';

import Number from '../../components/number';

class Main extends Component {

  async componentDidMount() {
    await this.props.requestNumbers({ page: this.props.page, perPage: this.props.perPage });
    console.log(this.props.number);
  }

  nextPage = async (value) => {
    console.log(this.props.number);
    this.props.nextPage(value);

    await this.props.requestNumbers({ page: this.props.page, perPage: this.props.perPage });
  }

  render() {
    return (
      <div>
        <input type="text" name="perPage"/>
        <button>Submit</button>
        <ul>
          <Number />
        </ul>
        <li>{ this.props.page }, { this.props.perPage } </li>
        <button onClick={() => this.props.prevPage(1)}>Prev</button>
        <button onClick={() => this.nextPage(1)}>Next</button>
        <button onClick={() => this.props.requestNumbers({ page: this.props.page, perPage: this.props.perPage })}>Sub</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  perPage: state.perPage,
  number: state.number
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...Numbers, ...SelectPage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
