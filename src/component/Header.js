import { useState } from "react";
//header
const Header = () => {
    const [isLogin,setIsLogin]=useState(false);
    return (   
        <div className="title">
            <div>
                <a href="/">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipMMujwhEF_JRzw2n-zfzzMVpejVTLuy9FR2obrP=w1080-h608-p-no-v0" alt="logo" className="title-img" />
                </a>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><a href="#" onClick={()=>{
                        setIsLogin(oldVal=>!oldVal)
                    }}>{(isLogin)?"Login":"Logout"}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header