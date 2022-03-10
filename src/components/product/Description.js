import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import {connect} from 'react-redux'
import StarBorderIcon from '@material-ui/icons/StarBorder';
const Description = (props) => {
    const getRating=()=>{
        const counts = {0:0,1:0,2:0,3:0,4:0,5:0};
        props.reviews?.forEach((x)=>{ counts[x.stars] = (counts[x.stars] || 0) + 1; }); 
         return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    }

 const getStars=()=>{
    if(getRating()==='5'){
        return( <>
            <StarIcon className="star-icon"/>
             <StarIcon className="star-icon"/>
             <StarIcon className="star-icon"/>
             <StarIcon className="star-icon"/>
             <StarIcon className="star-icon"/>
         </>)

     }
if(getRating()==='4'){
   return(
       <>
            <StarIcon className="star-icon"/>
             <StarIcon className="star-icon"/>
             <StarIcon className="star-icon"/>
             <StarIcon className="star-icon"/>
            <StarBorderIcon className="star-icon"/>
       </>
   )
}
if(getRating()==='3'){
 return(<>
 <StarIcon className="star-icon"/>
  <StarIcon className="star-icon"/>
  <StarIcon className="star-icon"/>
 <StarBorderIcon className="star-icon"/>
 <StarBorderIcon className="star-icon"/>
</>)
}
if(getRating()==='2'){
 return(<>
 <StarIcon className="star-icon"/>
  <StarIcon className="star-icon"/>
 <StarBorderIcon className="star-icon"/>
 <StarBorderIcon className="star-icon"/>
 <StarBorderIcon className="star-icon"/>
</>)
}
if(getRating()==='1'){
return( <>
 <StarIcon className="star-icon"/>
 <StarBorderIcon className="star-icon"/>
 <StarBorderIcon className="star-icon"/>
 <StarBorderIcon className="star-icon"/>
 <StarBorderIcon className="star-icon"/>
</>)
}
 }

    const reviewPercentage=()=>{
        const counts = {0:0,1:0,2:0,3:0,4:0,5:0};

props.reviews?.forEach((x)=>{ counts[x.stars] = (counts[x.stars] || 0) + 1; });

const totalStars= counts[0]+counts[1]+counts[2]+counts[3]+counts[4]+counts[5]

return Object.values(counts)
.map((count,i)=>{
    // console.log(i,"=",count)
    return (
        <>
        {
          i===0?null:(  
        <div key={i} className="per-area">
            <p>{i}.0</p>
         <div className="perLoader">
           <span className="four" style={{width:`${counts[i]*100/totalStars}%`}}></span>
        </div>
       </div>)
        }
       </>
    )
})


}


    return (
        <div className="product-review-area">
           
            <div className="review-perecent-area">
                 <h1>{getRating()}.0</h1>
                 <div className="stars">
                 {getStars()}
                 </div>
                 <p>Based on {props.reviews?.length} Reviews</p>
                 <div className="percentage">
                 {reviewPercentage()}
                 </div>
            </div>
            <div className="product-des-text">
                <p>{props.text}</p>

                <h3>Measurements: 180 cm x 70 cm</h3>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
return{reviews:state.reviews}
} 
export default connect(mapStateToProps)(Description)
