import {combineReducers} from 'redux';
import authReducer from './authReducer';
import notificationReducer from './notifactionReducer';
import mobReducer from './mobReducer'
import otpReducer from './otpReducer';
import addressReducer from './addressReducer'
import wishListReducer from './wishListReducer';
import checkout from './checkoutReducer'
import reviewReducer from './review'
import cartReducer from './cartReducer';
import showCartReducer from './showCartReducer';
import totalPriceReducer from './totalPriceReducer';
import orderReducer from './orderReducer';
export default combineReducers({
    user:authReducer,
    notification:notificationReducer,
    mobNo:mobReducer,
    showOtp:otpReducer,
    addresses:addressReducer,
    wishlist:wishListReducer,
    reviews:reviewReducer,
    cart:cartReducer,
    orders:orderReducer,
    checkout:checkout,
    showcart:showCartReducer,
    cartTotal:totalPriceReducer
})