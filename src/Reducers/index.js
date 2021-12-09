import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer.jsx'

const Reducers = combineReducers({
    auth:AuthReducer
});
export default Reducers;