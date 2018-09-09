import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ActionsNumbersList } from '../../store/ducks/numbersList';

import NumbersList from '../../components/listNumbers';

class Main extends Component {
  async componentDidMount() {
    await this.getDataPage();
  }

  getDataPage = async (e) => {
    if ((
      this.props.numbersList.meta.perPage > 0
      && this.props.numbersList.meta.perPage <= 1000)
      && this.props.numbersList.meta.perPage
      ) {
      await this.props.requestNumbersList({
        page: this.props.numbersList.meta.page,
        perPage: this.props.numbersList.meta.perPage
      });
    }
  }

  setPerPage = async (e) => {
    await this.props.perPage(e.target.value)
  }

  newPerPage = async () => {
    console.log(this.props.numbersList.meta.page);
    const resetPage = this.props.numbersList.meta.page - 1;
    await this.props.prevPage(resetPage);
    await this.getDataPage();
  }

  nextPage = async () => {
    console.log(this.props.numbersList.meta.totalPages, this.props.numbersList.meta.page)
    if (this.props.numbersList.meta.page < this.props.numbersList.meta.totalPages) {
      await this.props.nextPage(1);
      await this.props.requestNumbersList({
        page: this.props.numbersList.meta.page,
        perPage: this.props.numbersList.meta.perPage
      });
    }
  }

  prevPage = async () => {
    if (this.props.numbersList.meta.page > 1) {
      await this.props.prevPage(1);
      await this.props.requestNumbersList({
        page: this.props.numbersList.meta.page,
        perPage: this.props.numbersList.meta.perPage
      });
    }
  }

  render() {
    return (
      <div>
        <input type="text" name="perPage" value={this.props.numbersList.meta.perPage} onChange={this.setPerPage} />
        <button onClick={() => this.newPerPage()}>Submit</button>
        <ul>
          <NumbersList />
        </ul>
        <button onClick={() => this.prevPage()}>Prev</button>
        <button onClick={() => this.nextPage()}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  numbersList: state.numbersList
});

const mapDispatchToProps = dispatch => bindActionCreators( ActionsNumbersList, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
