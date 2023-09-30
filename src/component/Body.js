import {restrauntData} from "./config"
import RestrauntCard from "./RestrauntCard"
const Body = () => {
    return (
        <div className="restraunt-data">
            {
                restrauntData.map((restraunt)=>{
                    return <RestrauntCard {...restraunt.info} key={restraunt.info.id}/>
                })
            }
        </div>
    )
}

export default Body