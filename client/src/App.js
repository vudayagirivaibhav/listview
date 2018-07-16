import React, { Component } from 'react';
import AlphabetList from './components/AlphabetList';
import LabelView from './components/LabelView';
import Search from './components/Search';
import { searchLabels } from './actions/actions';

import './App.css';

class App extends Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.search('a');
  }

  search = searchString => {
    console.log('called');
    this.setState({
      loading: true,
    });
    searchLabels(searchString, 20).then(resp => {
      console.log('data', resp);
      if (resp && resp.length) {
        this.setState({
          data: resp,
          loading: false,
        })
      } else {
        this.setState({
          data: [],
          loading: false,
        })
      }
    })
  }

  selectAlphabet = alphabet => {
    this.search(alphabet);
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div className="app">
        <p className="app-intro">{this.state.response}</p>
        <div> Labels </div>
        <Search filterList={this.search} />
        <div className="view-container">
          {!loading && <LabelView data={data}> </LabelView>}
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
