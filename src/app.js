import React, { Component } from 'react';

import api from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers: null,
      page: 1,
      perPage: 100
    }
  }

  async componentDidMount() {
    await this.getNumbers;
  }

  async getNumbers() {
    const numbers = await api.get(`/numbers?page=${this.state.page}&perPage=${this.state.petPage}`);

    console.log(numbers);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Hello daddy!</h1>
        </div>
      </div>
    );
  }
}
