import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

const FruitBasket = ({fruit, filters, currentFilter, onUpdateFilterCallback})=>{
  return (
    <div className="fruit-basket">
      <Filter filters={filters} handleChange={onUpdateFilter} />
      <FilteredFruitList
        filter={currentFilter} fruit={fruit} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit:[],
  filters:[],
  currentFilter: null,
  onUpdateFilterCallback: function() {}
}

export default FruitBasket;
