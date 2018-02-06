import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        fruit: [],
        filters: [],
        currentFilter: null
    }
  }
    componentDidMount(){
      this.fetchFilters()
      this.fetchFruit()
    }

    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

    fetchFruit = () => {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(items => this.setState({fruit: items }));
    }

      handleFilterChange = event => {
        //console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
      }

  render(){
    return(<FruitBasket currentFilter={this.state.currentFilter} handleFilterChange={this.handleFilterChange} filters={this.state.filters} fruit={this.state.fruit} />)
  }

}


export default App;
