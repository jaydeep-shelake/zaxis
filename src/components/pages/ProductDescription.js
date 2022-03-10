import React,{useState,useEffect} from 'react'
import '../../styles/productDes.css'
import Header from '../Header'
import {connect} from 'react-redux'
import {db,firestore} from '../../firebase'
import {addToWhislist} from '../../actions/wishlist'
import {addToCart,getCartItems} from '../../actions/cart'
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Size from '../product/Size'
import Color from '../product/Color'
import Msg from '../notification/Msg'
import Description from '../product/Description'
import Reviews from '../product/Reviews'
import SizeChart from '../product/SizeChart'
import RelatedProducts from '../product/RelatedProducts'
import SideCart from '../sideCart/SideCart'
import Fabric from '../product/Fabric'
import { Link } from 'react-router-dom'
const ProductDescription = (props) => {
const [quanity,setCount]=useState(1)
const [coustomText,setCustomText]=useState('')
const [showSizeChart,setShowSizeChart]=useState(false)
const [product,setProduct]=useState({})
const [selectedSize,setSelectedSize]=useState('')
const [selectedColor,setSelectedColor]=useState('')
const [selectedHex,setHex]=useState('')
const [selectedFabric,setSelectedFabric]=useState('')
const [colorActiveIndex,setColorActiveIndex]=useState()
const [sizeActiveIndex,setSizeActiveIndex]=useState()
const [fabricActiveIndex,setFabricActiveIndex]=useState()

console.log(product)
const [currentImg,setCurrentImg]=useState('')
console.log(currentImg)
const getSize=(size,activeIndex)=>{
  setSelectedSize(size)
  setSizeActiveIndex(activeIndex)
  console.log(size)
}

const getColor=(color,hex,activeIndex)=>{
  
setSelectedColor(color)
setHex(hex)
setColorActiveIndex(activeIndex)
}

const  getFabric=(fabric,activeIndex)=>{
setSelectedFabric(fabric)
console.log(fabric)
setFabricActiveIndex(activeIndex)

}




useEffect(()=>{
 firestore.collection('spring-oasis-product').doc(props.id).get()
 .then((doc)=>{
   setProduct(db.formatedDoc(doc))
   
setCurrentImg(doc.data().imageUrl)

 })
},[])

console.log(product?.imageUrl)
// setCurrentImg(product?.imageUrl)

    if(quanity<=0){
      setCount(1)
    }


const handleAddToCart=()=>{
props.addToCart({
  title:product?.title,
  price:product?.price,
  imageUrl:product?.imageUrl,
  productId:product?.productId,
  quanity,
  coustomText,
  color:selectedColor,
  hex:selectedHex,
  size:selectedSize,
  fabric:selectedFabric,
})
}

const handleWishList=()=>{
  props.addToWhislist(
    props.id,
    product?.title,
    product?.originalPrice,
    product?.price,
    product?.imageUrl
    )
}

    return (
        <>
        <Msg/>
        {showSizeChart&&<SizeChart setShowSizeChart={setShowSizeChart}/>}
        <Header/>
        <div className="product-des-container">
            <div className="product-info-area">
                <div className="product-images">
                   <div className="main-img">
                      <img src={currentImg} alt="" />
                   </div>
                   <div className="all-imgs">
                     {
                       product?.images?.map((img,i)=>(
                        <div className="single-img" onClick={()=>setCurrentImg(img)}>
                        <img src={img} alt="" key={i}/>
                      </div>
                       ))
                     }
                     
                     
                   </div>
                </div>
                <div className="product-selection">
                   <div className="title-price">
                       <h1>{product?.title}</h1>
                       <div>
                       <h1> <span>Rs{product?.originalPrice}</span>Rs{product?.price}</h1>
                       <p className="inline-block text-sm text-gray-400">Discount Applied : 20% off</p>
                       </div>
                   </div>
                   <div className="sizes">
                         <div className="size-chart">
                             <p>Select Size</p>
                             <p onClick={()=>setShowSizeChart(true)}>SIZE CHART</p>
                         </div>
                         <div className="size-select">
                           {
                             product?.sizes?.map((size,i)=>(
                              <Size size={size.size}
                              key={i}
                              getSize={getSize}
                              i={i}
                              style={sizeActiveIndex===i?{background:'#000',color:'#fff'}:{background:'#fff',color:'#000'}}
                              />
                             ))
                           }
                             
                             
                        </div>  
                    </div>

                    <div className="custom-size">

                    </div>
                  <div className="colors">
                    <div className="color-text">
                     <p>SELECT COLOR</p>
                     <p>CUSTOM TEXT</p>
                    </div>
                    <div className="color-select">
                      <div className="color">
                         {product?.colors?.map((col,i)=>(
                           <Color
                           key={i}
                           color={col.color}
                           i={i}
                           hex={col.hex}
                           getColor={getColor}
                           style={colorActiveIndex===i?{border:'2px solid #000'}:{border:'none'}}
                           />
                         ))} 
                      </div>
                      <div className="custom-text">
                      <TextField value={coustomText} onChange={(e)=>setCustomText(e.target.value)} id="standard-basic" label="TEXT HERE" />
                      </div>
                    </div>
                    <p className="select-fabric">SELECT FABRIC</p>
                    <div className="color fabric">
                    
                         {product?.fabrics?.map((col,i)=>(
                           <Fabric
                           key={i}
                           fabric={col.fabric}
                           i={i}
                           hex={col.hex}
                           getFabric={getFabric}
                           style={fabricActiveIndex===i?{border:'2px solid #000'}:{border:'none'}}
                           />
                         ))} 
                      </div>
                  </div>

                 
           <div className="handle-cart">
             <div className="quanity">
               <div className="decrease" onClick={()=>setCount(quanity-1)}>
                 <RemoveIcon/>
               </div>
               <div className="count">
                   {quanity}
               </div>
               <div className="increase" onClick={()=>setCount(quanity+1)}>
                <AddIcon/>
               </div>
             </div>

             {props.userId===undefined?<Link to="/login"><button  className="add-to-cart-btn">
             ADD TO CART
             </button></Link>:<button onClick={handleAddToCart} className="add-to-cart-btn">
             ADD TO CART
             </button>}
             <button onClick={handleWishList} className="add-to-wishlist">
             ADD TO WISHLIST
             </button>

           </div>

                </div>


            </div>

            <Description text={product?.description}/>
            <Reviews productId={product?.productId}/>
            <RelatedProducts/>
            <SideCart/>
        </div>
        </>
    )
}

const mapStateToProsp=(state,ownProps)=>{
return{
  id:ownProps.match.params.id,
  userId:state.user?.user?.userId,
}
}
export default connect(mapStateToProsp,{addToWhislist,addToCart,getCartItems})(ProductDescription)
