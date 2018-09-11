import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ActionsNumbersList } from '../../store/ducks/numbersList';

import NumbersList from '../../components/listNumbers';

import {
  Container,
  Header,
  Title,
  PerParge,
  Content,
  Row
} from './styles';

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
    await this.props.perPage(e.target.value);
  }

  newPerPage = async () => {
    const resetPage = this.props.numbersList.meta.page - 1;
    await this.props.prevPage(resetPage);
    await this.getDataPage();
  }

  nextPage = async () => {
    await this.props.nextPage(1);
    await this.props.requestNumbersList({
      page: this.props.numbersList.meta.page,
      perPage: this.props.numbersList.meta.perPage
    });
  }

  prevPage = async () => {
    await this.props.prevPage(1);
    await this.props.requestNumbersList({
      page: this.props.numbersList.meta.page,
      perPage: this.props.numbersList.meta.perPage
    });
  }

  render() {
    const { page, totalPages } = this.props.numbersList.meta;
    return (
      <Container>
        <Content>
          <Header>
            <Title>Available phone numbers</Title>
            <PerParge>
              <input type="number" name="perPage"
                value={this.props.numbersList.meta.perPage}
                onChange={this.setPerPage}
              />
              <button onClick={() => this.newPerPage()}>Submit</button>
            </PerParge>
          </Header>
          <NumbersList />
        </Content>
        <Row>
          <button
            class="buttonNavigate"
            disabled={page == 1 ? true : false}
            onClick={() => this.prevPage()}>
            Prev
          </button>
          <button
            class="buttonNavigate"
            disabled={page < totalPages ? false : true}
            onClick={() => this.nextPage()}>
            Next
          </button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  numbersList: state.numbersList
});

const mapDispatchToProps = dispatch => bindActionCreators( ActionsNumbersList, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
