import reducer1 from './weather';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    weatherList: reducer1,
});

export default allReducers;