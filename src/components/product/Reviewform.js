import React ,{useState,useRef}from 'react'
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux'
import{addReview} from '../../actions/reviews'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddIcon from '@material-ui/icons/Add';
const Reviewform = (props) => {

    const filePickerRef=useRef(null);

    const [reviewText,setReviewText]=useState('')
    const [stars,setStars]=useState(0)
    const [files,setFiles]=useState(null)
    const productId=props.productId
  const handleSubmitReview=(e)=>{
      e.preventDefault()
   props.addReview(reviewText,stars,productId,files)
   setReviewText('')
   setFiles(null)
  }

const addImageToReview=(e)=>{
    const reader = new FileReader();
    console.log(e.target.files[0])
    if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
    }
    reader.onload=(readerEvent)=>{
        setFiles(readerEvent.target.result);
        console.log(readerEvent.target.result)
  }
  console.log(files)
}

    return (
        <div className="review-form">
            <form onSubmit={handleSubmitReview}>
                <div className="wirte-review">
                    <p>Write a review</p>
                    <div className="form-input">
                    <TextField value={reviewText} onChange={(e)=>setReviewText(e.target.value)} id="standard-basic" label="TEXT HERE" />
                    <button type="submit">POST</button>
                    </div>
                    <p>Rate this product</p>
                    <div class="rate">
                        <input onClick={()=>setStars(5)} type="radio" id="star5" name="rate" value="5" />
                        <label htmlFor="star5" title="text">5 stars</label>
                        <input onClick={()=>setStars(4)} type="radio" id="star4" name="rate" value="4" />
                        <label htmlFor="star4" title="text">4 stars</label>
                        <input onClick={()=>setStars(3)} type="radio" id="star3" name="rate" value="3" />
                        <label htmlFor="star3" title="text">3 stars</label>
                        <input onClick={()=>setStars(2)} type="radio" id="star2" name="rate" value="2" />
                        <label htmlFor="star2" title="text">2 stars</label>
                        <input onClick={()=>setStars(1)} type="radio" id="star1" name="rate" value="1" />
                        <label htmlFor="star1" title="text">1 star</label>
                   </div>
                    <p className="add-img-text">Add Images</p>
                    <div className="add-img">
                        {files&&<div className="review-img"><img  src={files} alt="" /></div>}
                            <label htmlFor="img-add"><AddIcon/></label>
                            <input ref={filePickerRef} onChange={addImageToReview} type="file" name="file" id="img-add" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connect(null,{addReview})(Reviewform)
