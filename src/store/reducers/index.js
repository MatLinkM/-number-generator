import { combineReducers } from 'redux';

import number from './number';
import page from './page';
import perPage from './perPage';

export default combineReducers({
    number,
    page,
    perPage
});
