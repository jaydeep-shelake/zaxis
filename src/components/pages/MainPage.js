import React ,{useEffect,useState}from 'react'
import Header from '../Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import ProductCard from '../cards/CardDesign1'
import Footer from '../Footer'
import '../../styles/home.css'
import { db } from '../../firebase';
import Features from '../Features';
// import PCard from '../cards/PCard';
// import womenBanner from '../../assets/img/womenbanner.jpg'
// import menBanner from '../../assets/img/menbanner.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getWishlist } from '../../actions/wishlist';
const MainPage = () => {

    const [mens,setMen]=useState([])
    const [women,setWomen]=useState([])
    const dispatch =useDispatch()
    const userId = useSelector(state=>state?.user?.user?.userId)
    useEffect(()=>{
      dispatch(getWishlist())
    },[dispatch,userId])
    useEffect(()=>{
      db.product.where('collection','==','Men')
      .get()
      .then((snapshot)=>{
          setMen(snapshot.docs.map(db.formatedDoc))
      })
    },[])
    useEffect(()=>{
      db.product.where('collection','==','women')
      .get()
      .then((snapshot)=>{
          setWomen(snapshot.docs.map(db.formatedDoc))
      })
    },[])
    return (
        <>
        <Header/>
        <div className="relative mt-40 img-banner">
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
                <div>
                    <img  loading="lazy" src="https://product.koovs.com/home-UB3-WEB-sdsHEo.webp" alt='ping-pong' />
                </div>
                <div>
                    <img loading="lazy" src="https://product.koovs.com/home-UB1-WEB-uK30Qp.webp" alt="carosule-2" />
                </div>
               
            </Carousel>
        </div>
        <Features/>
        <div className="product-area">
            <div className="p-card-area">
                 <div className="section-1">

                 </div>
                 <div className="section-2">
                     
                 </div>
            </div>
           <div className="inner-product">
              <h1 className="text-3xl font-bold py-12">Men's Trending</h1>
              <div className="products">
                    {mens.map((men,i)=>(
                        <ProductCard
                        img={men.imageUrl}
                        id={men?.id}
                        key={men?.id}
                        title={men?.title}
                        price={men?.price}
                        originalPrice={men?.originalPrice}
                        des={men?.description}
                        
                        />
                    ))}
              
           
            
           </div>
           </div>
           <div className="inner-product">
              <h1 className="text-3xl font-bold py-12">Women's Trending</h1>
              <div className="products">

              
              {women.map((men,i)=>(
                        <ProductCard
                        img={men.imageUrl}
                        id={men?.id}
                        key={men?.id}
                        title={men?.title}
                        price={men?.price}
                        originalPrice={men?.originalPrice}
                        des={men?.description}
                        
                        />
                    ))}
           </div>
           </div>
           
        </div>
        <Footer/>

       </> 
    )
}

export default MainPage
