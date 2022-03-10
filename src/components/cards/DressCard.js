import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Link } from 'react-router-dom';
const DressCard = ({name,price,originalPrice,widthFull,id,imageUrl,overflow}) => {
    return (
        <Link to={`/products/${id}`}>
        <div className={`dress-card ${widthFull&& 'width-full'} ${overflow&& 'custom-width'}`}>
            <div className="dress-img">
               {imageUrl&&<img src={imageUrl} alt="" />}
            <div className="on-sale">ON SALE</div>
            </div>
            <div className="dress-des">
                <div className="text">
                   <h3>{name}</h3>
                   <div className="price">
                        <p>Rs{price}</p>
                        <p>Rs{originalPrice}</p>
                   </div>
                </div>
                <div className="wishlist">
                    <BookmarkBorderIcon/>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default DressCard
