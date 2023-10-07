// import {restrauntData} from "./config"
import RestrauntCard from "./RestrauntCard"
import { useState,useEffect } from "react"
import NoRestrauntFound from "./NoRestrauntFound";
import ShimmerUI from "./ShimmerUI";
import {Link} from "react-router-dom"

function filterData(searchText,allRestraunts){
    return allRestraunts.filter((restraunt)=>{
        return restraunt.info.name.toLowerCase().includes(searchText.toLowerCase());
    })
}
const Body = () => {
    const[searchText,setSearchText]=useState("")
    // const[restrauntList,setRestrauntList]=useState(restrauntData)
    const [allRestraunts,setAllRestraunts]=useState([]);
    const [filteredRestraunts,setFilteredRestraunts]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    async function fetchData(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4322123&lng=78.3963095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log("restraunt data inside useEffect is: ",json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        setAllRestraunts(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestraunts(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }
    console.log("body component rendered")

    if(!allRestraunts)return null;
    return (allRestraunts.length===0)?<ShimmerUI/>:(
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
                    (filteredRestraunts.length===0)?<NoRestrauntFound/>:
                    filteredRestraunts.map((restraunt)=>{
                        return <Link to={"/restraunt/"+restraunt.info.id}><RestrauntCard {...restraunt.info} key={restraunt.info.id}/></Link>
                    })
                }
            </div>
        </>
    )
}

export default Body