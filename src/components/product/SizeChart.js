import React from 'react'

const SizeChart = ({setShowSizeChart}) => {
    return (
        <div className="add-full" onClick={()=>setShowSizeChart(false)}>
            <div className="size-chart-modal flex flex-col p-6 bg-white">
                <div className="flex items-center justify-between">
                    <h1>Size Chart</h1>
                </div>
            </div>
        </div>
    )
}

export default SizeChart
