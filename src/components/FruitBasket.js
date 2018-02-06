import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
        <div className="fruit-basket">
          <Filter handleChange={props.handleFilterChange} filters={props.filters} />
          <FilteredFruitList
            filter={props.currentFilter} fruit={props.fruit} />
        </div>
      );
}
// class FruitBasket extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   handleFilterChange = event => {
//     //console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }
//
//   render() {
//     console.log(this.props.filters)
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} filters={this.props.filters} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
