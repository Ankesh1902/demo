import { createStore, combineReducers } from 'redux';
import cartReducer from '../reducers/CartReducer';
const rootReducer = combineReducers(
{ cartReducer: cartReducer }
);
const configureStore = () => {
return createStore(cartReducer);
}
export default configureStore;
