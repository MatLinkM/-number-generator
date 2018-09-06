import React, { Component } from 'react';

import api from './services';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers: null,
      page: 1,
      perPage: 100,
      totalPages: null
    }
  }

  async componentDidMount() {
    await this.getNumbers();
  }

  getNumbers = async () => {
    const { perPage, page } = this.state;
    const numbers = await api.get(`/numbers?page=${page}&perPage=${perPage}`);

    this.setState({
      numbers: numbers.data.data,
      totalPages: numbers.data.meta.totalPages
    });
  }

  prevPage = async () => {
    const { page } = this.state;

    if (page > 1) {
      this.setState({ page: page - 1 });
    }

    await this.getNumbers();
  }

  nextPage = async () => {
    const { totalPages, page } = this.state;

    if (page < totalPages) {
      this.setState({ page: page + 1 });
    }

    await this.getNumbers();
  }

  render() {
    return (
      <div>
        { this.state.numbers
          ?
          this.state.numbers.map((item, i) => {
            return (
              <ul key={i}>
                <li>{item.number}</li>
                <li>{item.cost}</li>
              </ul>
            )
          })
          : null
        }
        <button onClick={this.prevPage}>Prev</button>
        <button onClick={this.nextPage}>Next</button>
      </div>
    );
  }
}
