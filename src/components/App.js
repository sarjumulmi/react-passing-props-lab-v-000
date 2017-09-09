import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

  componentWillMount(){
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFruits() {
    fetch('/api/fruit')
      .then(resp => resp.json())
      .then(json => this.setState({
        fruits: json,
      }))
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(resp => resp.json())
      .then(json => this.setState({
        filters: json
      }))
  }

  updateFilter = (e)=> {
    this.setState({currentFilter: e.target.value})
  }

  render(){
    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} updateFilterCallback={this.updateFilter}/>
    )
  }

}

export default App;
