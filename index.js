import React from "react"
import ReactDOM from "react-dom/client"

const Header=()=>{
    return (
        <div className="title">
            <div>
                <img src="https://lh3.googleusercontent.com/p/AF1QipMMujwhEF_JRzw2n-zfzzMVpejVTLuy9FR2obrP=w1080-h608-p-no-v0" alt="logo" className="title-img"/>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restrauntData={
    name:"Sid Biryani",
    cuisines:["Hyderabadi","kolkata Biryani"],
    avg_rating:4.6,
    img:"https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4="
}
const RestrauntCard=()=>{
    return (
        <div className="restraunt-card">
            <img className="rest-pic" src={restrauntData.img} alt="restaunt pic"/>
            <h3>{restrauntData.name}</h3>
            <h4>{restrauntData.cuisines.join(", ")}</h4>
            <h5>{restrauntData.avg_rating} star</h5>
        </div>
    )
}
const Body=()=>{
    return (
        <div className="restraunt-data">
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
        </div>
    )
}

const Footer=()=>{
    return (
        <center><p>All Copyrights reserved to @imsidharthsurya</p></center>
    )
}

const AppLayout=()=>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)