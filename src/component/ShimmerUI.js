import { useState } from "react"
const ShimmerUI=()=>{
    const[searchText,setSearchText]=useState("")
    return (
        <>
         <div className="search-div">
                <input type="text" placeholder="search" value={searchText} onChange={(e)=>{
                    console.log(e.target.value)
                    setSearchText(e.target.value)
                }}/>
                <button className="search-btn" onClick={()=>{
                    const finalData=filterData(searchText,allRestraunts)
                    console.log("the final data after filter is: ",finalData)
                    setFilteredRestraunts(finalData)
                }}>Search</button>
            </div>
        <div className="restraunt-data">
            {
                new Array(30).fill(1).map((ele,i)=>{
                    return (<div className="restraunt-card">
                    <div className="shimmer-card"></div>
                    <div className="second-shimmer"></div>
                    <div className="third-shimmer"></div>
                </div>)
                })
            
            }
        </div>
        </>
    )
}

export default ShimmerUI;