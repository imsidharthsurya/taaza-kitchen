import {IMG_URL} from "./config"
const RestrauntCard = ({name,cuisines,avgRating,cloudinaryImageId,areaName}) => {
    // const {name,cuisines,avgRating,cloudinaryImageId}=restaurant.info
    return (
        <div className="restraunt-card">
            <img className="rest-pic" src={IMG_URL+cloudinaryImageId} alt="restaunt pic" />
            <h3>{name}</h3>
            <h4>⭐{avgRating}</h4>
            <p>{cuisines.join(", ")}</p>
            
            <p>{areaName}</p>
        </div>
    )
}

export default RestrauntCard