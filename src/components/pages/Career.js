import React from 'react'
import '../../styles/career.css'
import CareeerAccordian from '../CarrerAccordian'
import Header from '../Header'
const Career = () => {
    return (
        <>
        <Header/>
        <div className="careers">
            <div className="career-area">
            <h1 className="text-3xl font-bold">Secure your career and <br/>future with us.</h1>
            </div>
            <div className="carrer-acc">
            <CareeerAccordian
            title="Creative Designer"
            location="Dubai, UAE"
            accItems="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam est vero ad, veniam facere doloribus voluptatibus, debitis natus iste adipisci sunt, totam perferendis culpa. Alias accusantium nobis, minima delectus explicabo sed repellat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam est vero ad, veniam facere doloribus voluptatibus, debitis natus iste adipisci sunt, totam perferendis culpa. Alias accusantium nobis, minima delectus explicabo sed repellat."
            />
            
            </div>
        </div>
        </>
    )
}

export default Career
