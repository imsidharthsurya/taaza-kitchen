const ShimmerUI=()=>{
    return (
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
    )
}

export default ShimmerUI;