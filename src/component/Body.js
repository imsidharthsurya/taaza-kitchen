import {restrauntData} from "./config"
import RestrauntCard from "./RestrauntCard"
import { useState } from "react"

function filterData(searchText,restrauntList){
    return restrauntData.filter((restraunt)=>{
        return restraunt.info.name.includes(searchText);
    })
}
const Body = () => {
    console.log("body component loaded")
    const[searchText,setSearchText]=useState("")
    const[restrauntList,setRestrauntList]=useState(restrauntData)
    return (
        <>
            <div className="search-div">
                <input type="text" placeholder="search" value={searchText} onChange={(e)=>{
                    console.log(e.target.value)
                    setSearchText(e.target.value)
                }}/>
                <button className="search-btn" onClick={()=>{
                    const finalData=filterData(searchText,restrauntList)
                    console.log("the final data after filter is: ",finalData)
                    setRestrauntList(finalData)
                }}>Search</button>
            </div>
            <div className="restraunt-data">
                {
                    restrauntList.map((restraunt)=>{
                        return <RestrauntCard {...restraunt.info} key={restraunt.info.id}/>
                    })
                }
            </div>
        </>
    )
}

export default Body