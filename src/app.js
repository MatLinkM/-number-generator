import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import api from './services';
import Number from './components/number';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <input type="text" name="perPage"/>
          <button>Submit</button>
          <Number />
          <button>Prev</button>
          <button>Next</button>
        </div>
      </Provider>
    );
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     numbers: null,
  //     page: 1,
  //     perPage: 100,
  //     totalPages: null
  //   }
  // }

  // async componentDidMount() {
  //   await this.getNumbers();
  // }

  // getNumbers = async () => {
  //   const { perPage, page } = this.state;
  //   const numbers = await api.get(`/numbers?page=${page}&perPage=${perPage}`);

  //   this.setState({
  //     numbers: numbers.data.data,
  //     totalPages: numbers.data.meta.totalPages
  //   });
  // }

  // selectPerPage = (e) => {
  //   this.setState({ perPage: e.target.value });
  // }

  // setPerPage = () => {
  //   const { perPage } = this.state
  //   if (perPage >= 0 && perPage <= 1000) {
  //     this.getNumbers();
  //   }
  // }

  // prevPage = async () => {
  //   const { page } = this.state;

  //   if (page > 1) {
  //     this.setState({ page: page - 1 });
  //   }

  //   await this.getNumbers();
  // }

  // nextPage = async () => {
  //   const { totalPages, page } = this.state;

  //   if (page < totalPages) {
  //     this.setState({ page: page + 1 });
  //   }

  //   await this.getNumbers();
  // }

  // render() {
  //   const { perPage } = this.state;
  //   return (
  //     <Provider store={store}>
  //       <input type="text" name="perPage" value={perPage} onChange={this.selectPerPage} />
  //       <button onClick={this.setPerPage}>Submit</button>
  //       { this.state.numbers
  //         ?
  //         this.state.numbers.map((item, i) => {
  //           return (
  //             <ul key={i}>
  //               <li>{item.number}</li>
  //               <li>{item.cost}</li>
  //             </ul>
  //           )
  //         })
  //         : null
  //       }
  //       <button onClick={this.prevPage}>Prev</button>
  //       <button onClick={this.nextPage}>Next</button>
  //     </Provider>
  //   );
  // }
}
