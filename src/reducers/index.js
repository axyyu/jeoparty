import reduceReducers from 'reduce-reducers';

import Search from './SearchReducer';
import Favorites from './FavoritesReducer';
import Simulation from './SimulationReducer';

export default reduceReducers(Search, Favorites, Simulation);
