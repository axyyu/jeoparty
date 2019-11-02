import reduceReducers from 'reduce-reducers';

import Search from './SearchReducer';
import Favorites from './FavoritesReducer';

export default reduceReducers(Search, Favorites);
