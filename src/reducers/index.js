import products from "./products";
import cart from "./cart";
import message from "./message";
const { combineReducers } = require("redux");

const appReducer = combineReducers({
    products,
    cart,
    message
})

export default appReducer;
