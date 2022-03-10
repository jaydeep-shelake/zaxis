import React from 'react'
import Card2 from './CardDesign2'
import model from '../../assets/img/sample-model-1.png'
const Cards2 = () => {
    const data=[
        {
            img:model,
            title:"Sets",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:model,
            title:"Dresess",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:model,
            title:"Hijabs",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:model,
            title:"Sets",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:model,
            title:"Sets",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:model,
            title:"Sets",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
    ]
    return (
        <div className="cards-2 w-full p-10 flex flex-col justify-start">
            <div className="cards-2-area grid grid-flow-row-dense grid-cols-4 items-center justify-evenly pt-3 mt-4">
                { 
                data.map((product,i)=>(
                    <Card2
                    key={i}
                    img={product.img}
                    title={product.title}
                    />
                )) 
                }
            </div>
        </div>
    )
}

export default Cards2
