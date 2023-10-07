import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { IMG_URL } from "./config";
import ShimmerUI from "./ShimmerUI";

const RestrauntDetails=()=>{
    const [restrauntDetails,setRestrauntDetails]=useState(null)
    const params=useParams();
    console.log(params)

    useEffect(()=>{
        getRestrauntDetails();
    },[])
    
    async function getRestrauntDetails(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId="+params.id);
        const json=await data.json();
        console.log("api response is: ",json);
        setRestrauntDetails(json)
        
    }
    return (!restrauntDetails)?<ShimmerUI/>: (
        <div className="restraunt-details-div">
            <img src={IMG_URL+restrauntDetails.data.cards[0].card.card.info.cloudinaryImageId} className="restraunt-img" alt="restraunt-image"/>
            <div>
                <h1>{restrauntDetails.data.cards[0].card.card.info.name}</h1>
                <p>{restrauntDetails.data.cards[0].card.card.info.city}</p>
                <p>{restrauntDetails.data.cards[0].card.card.info.cuisines.join(", ")}</p>
                <p>{restrauntDetails.data.cards[0].card.card.info.avgRatingString}⭐/{restrauntDetails.data.cards[0].card.card.info.totalRatingsString}</p>
            </div>
        </div>
    )
}

export default RestrauntDetails;