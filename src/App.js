import './styles/global.css'
import React,{useEffect} from 'react'
import {Router ,Route,Switch} from 'react-router-dom'
import MainPage from './components/pages/MainPage'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Dressses from './components/pages/Dressses'
import {history} from './history'
import Profile from './components/pages/Profile'
import {auth,db} from './firebase'
import {connect} from 'react-redux'
import {getCartItems,getCartTotal} from './actions/cart'
import {getAddresses} from './actions/address'
import {getOrders} from './actions/orders'
import {userStateChanged} from './actions'
import Loading from './components/Loading'
import Adress from './components/profile/Adress'
import Orders from './components/pages/Orders'
import WhisList from './components/pages/WhisList'
import ProductDescription from './components/pages/ProductDescription'
import Checkout from './components/pages/Checkout'
import Cart from './components/pages/Cart'
import dummy from './dummy'
import Confirm from './components/pages/Confirm'
import PrivacyPolicy from './components/policies/PrivacyPolicy'
import Terms from './components/policies/Terms'
import Return from './components/policies/Return'
import Connect from './components/pages/Connect'
import Collab from './components/pages/Collab'
import Collections from './components/pages/Collections'
import Blog from './components/pages/Blog'
import SingleBlog from './components/pages/SingleBlog'
import Career from './components/pages/Career'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import ProfileNavigation from './components/profile/ProfileNavigation'
import Notification from './components/pages/Notification'
import Error from './components/pages/Error'
const App = (props) => {
   
    useEffect(()=>{
    props.getCartTotal()
    },[props.cart])

    useEffect(()=>{
        if(props.user?.userId){
         props.getCartItems()
         props.getAddresses()
         props.getOrders()   
        }
        
      },[props.user?.userId])

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            console.log(user)
            if(user){
                const data= db.users.doc(user.phoneNumber).get().then(doc=>{
                    props.userStateChanged(db.formatedDoc(doc))
                 })
            }
        })
        return unsubscribe
        },[])
        console.log(props.user)
    return (
        <Router history={history}>
            <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route path="/loader" component={Loading}/>
          <Route path="/dresses" component={Dressses}/>
          <Route path="/profile/address" exact component={Adress}/>
          <Route path="/profile/orders" exact component={Orders}/>
          <Route path="/profile/whislist" exact component={WhisList}/>
          <Route path="/profile/orders" exact component={Orders}/>
          <Route path="/checkout" exact component={Checkout}/>
          <Route path="/order-confirmed" exact component={Confirm}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/privacy-policy" exact component={PrivacyPolicy}/>
          <Route path="/terms" exact component={Terms}/>
          <Route path="/return-policy" exact component={Return}/>
          <Route path="/connect" exact component={Connect}/>
          <Route path="/collab" exact component={Collab}/>
          <Route path="/collections" exact component={Collections}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/careers" exact component={Career}/>
          <Route path="/about" exact component={About}/>
          <Route path="/profile-and-details" component={ProfileNavigation}/>
          <Route path="/notification" component={Notification}/>
          <Route path="/products/:id" exact component={ProductDescription}/>
          <Route path="/error" exact component={Error}/>
          <Route path="/blog/:id" exact component={SingleBlog}/>
          <Route component={NotFound}/>
          </Switch>
        </Router>
    )
}


const mapStateToProps=(state)=>{
    return{user:state.user?.user,cart:state.cart}
}
export default connect(mapStateToProps,{userStateChanged,getCartItems,getCartTotal,getAddresses,getOrders})(App)
