import React, { Component } from 'react';
import AlphabetList from './components/AlphabetList';
import LabelView from './components/LabelView';
import Search from './components/Search';
import { searchLabels } from './actions/actions';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      text: 'a',
      page: 1,
    };
  }

  componentDidMount() {
    this.search(this.state.text, 1);
  }

  search = (searchText, page) => {
    console.log('called');
    this.setState({
      loading: true,
      text: searchText,
    });
    searchLabels(searchText, page, 20).then(response => {
      console.log('data', response);
      if (response && response.length) {
        this.setState({
          data: response,
          loading: false,
        });
      } else {
        this.setState({
          data: [],
          loading: false,
        })
      }
    })
  }

  incrementPage() {
    const { page, text } = this.state;
    this.setState({
      page: page + 1,
    }, () => {
      this.search(text, page);
    });
  }

  selectAlphabet = alphabet => {
    this.setState({
      page: 1,
    }, () => {
      this.search(alphabet, this.state.page);
    });
  }

  render() {
    const { data, loading, page } = this.state;
    return (
      <div className="app">
        <div> <h2> Label View </h2></div>
        <Search filterText={this.state.text} filterList={this.search} />
        <div className="view-container">
          {!loading &&
            (<div>
              <LabelView data={data}> </LabelView>
              {data.length === 20 &&
                (<div>
                  <p> page num: {page} </p>
                  <p className="load-more" onClick={() => this.incrementPage()}> Load more.. </p>
                </div>
                )}
              {data.length === 0 && <p className="load-more"> No Data </p>}
            </div>
            )}
          {loading && <div className="loader loader-circle"> Loading... </div>}
        </div>
        <div className="alphabets-view">
          <AlphabetList selectAlphabet={this.selectAlphabet} />
        </div>
      </div>
    );
  }
}

export default App;
