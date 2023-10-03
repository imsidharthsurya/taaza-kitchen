import {IMG_URL} from "./config"
const RestrauntCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
    // const {name,cuisines,avgRating,cloudinaryImageId}=restaurant.info
    return (
        <div className="restraunt-card">
            <img className="rest-pic" src={IMG_URL+cloudinaryImageId} alt="restaunt pic" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} ☆</h5>
        </div>
    )
}

export default RestrauntCard