import React,{useState} from 'react'
import '../../styles/dresess.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import Header from '../Header';
import DressCard from '../cards/DressCard'
import Footer from '../Footer';
const Dressses = () => {
   
    const [sort,setSort]=useState(false)
     const [filter,setFilter]=useState(false);
     const [fullScreen,setFullScreen]=useState(true)
     const [halfScreen,setHalfScreen]=useState(false)
     const handleFullScreen=()=>{
           setFullScreen(true)
           setHalfScreen(false)
     }
    const handleHalfScreen=()=>{
        setHalfScreen(true)
        setFullScreen(false)
    }
  const handleSort=()=>{
   setSort(!sort)
   setFilter(false)
  }

  const handleFilter=()=>{
    setSort(false)
    setFilter(!filter)
  }


    const dresess=[
        {
            name:'ESSENTIAL CHIFFON HIJAB - BLACK',
            price:'$5.99',
            originalPrice:'$5.99',
            bestSeling:true,
            date:'12-7-2021'
        },
        {
            name:'ESSENTIAL CHIFFON HIJAB - BLACK',
            price:'$5.99',
            originalPrice:'$5.99',
            bestSeling:true,
            date:'12-7-2021'
        },
        {
            name:'ESSENTIAL CHIFFON HIJAB - BLACK',
            price:'$5.99',
            originalPrice:'$5.99',
            bestSeling:true,
            date:'12-7-2021'
        },
        {
            name:'ESSENTIAL CHIFFON HIJAB - BLACK',
            price:'$5.99',
            originalPrice:'$5.99',
            bestSeling:true,
            date:'12-7-2021'
        },
        {
            name:'ESSENTIAL CHIFFON HIJAB - BLACK',
            price:'$5.99',
            originalPrice:'$5.99',
            bestSeling:true,
            date:'12-7-2021'
        },
        {
            name:'ESSENTIAL CHIFFON HIJAB - BLACK',
            price:'$5.99',
            originalPrice:'$5.99',
            bestSeling:true,
            date:'12-7-2021'
        },
        {
            name:'ESSENTIAL CHIFFON HIJAB - BLACK',
            price:'$5.99',
            originalPrice:'$5.99',
            bestSeling:true,
            date:'12-7-2021'
        },
        {
            name:'ESSENTIAL CHIFFON HIJAB - BLACK',
            price:'$5.99',
            originalPrice:'$5.99',
            bestSeling:true,
            date:'12-7-2021'
        },
    ]

    const sorts=[
        {name:'Featured'},
        {name:'Best Selling'},
        {name:'Alphabetically, A-Z'},
        {name:'Alphabetically, Z-A'},
        {name:'Price , Low to High'},
        {name:'Price, High to Low'},
        {name:'Date, Old to New'}
    ]

    const filters=[
        {name:'Product'},
        {name:'Product'},
        {name:'Product'},
        {name:'Product'},
        {name:'Product'},
        {name:'Product'},
    ]

    return (
        <>
        <Header/>
        <div className="dresses-sec">
            <div className="dress-banner">
                <h1>DRESSES</h1>
            </div>
            <div className="dress-cards-sec">
              <div className="dress-view">
                    <div className="dress-icons">
                        <div onClick={handleFullScreen}><ViewComfyIcon  className={`view-icon ${fullScreen&& 'active'}`}/></div>
                        <div onClick={handleHalfScreen}><ViewModuleIcon className={`view-icon large ${halfScreen&& 'active'}`}/></div>
                    </div>
                    <div className="dress-filters">
                        <p  onClick={handleFilter}>Filter<ArrowDropDownIcon className={`filter-btn ${filter&& 'rotate'}`}/> </p>
                        <p  onClick={handleSort}>Sort <ArrowDropDownIcon className={`sort-btn ${sort&& 'rotate'}`}/></p>
                    </div>
            </div>
            <div className="dress-cards">
               {dresess.map((dress,i)=>(
                   <DressCard k={i} name={dress.name} price={dress.price} 
                    originalPrice={dress.originalPrice}
                    widthFull={halfScreen?true:false}
                   />
               ))}

               {filter&&(<div className="fliter">
               {filters.map((item,i)=>(
                    <p key={i}>{item.name}</p>
                   ))}
               </div>)}


               {sort&&(<div className="sort">
                   {sorts.map((item,i)=>(
                    <p key={i}>{item.name}</p>
                   ))}
               </div>)}
            </div>
        </div>
        <Footer/>
    </div>
    
        </>
    )
}

export default Dressses
