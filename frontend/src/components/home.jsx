import React from "react";

function Home()
{
    return (
    <div>
        <div className="top_head" style={{display:"flex",flexDirection:"row",justifyContent:"space-between", marginBottom:"2rem"}} >
                <div style={{display:"flex",flexDirection:"row", justifyContent:"flex-start", gap:"22px"}}>
                <img src="images.jpeg" height={"100px"}></img>
                <h1 className="title">Blog_Shore</h1>
                </div>
                <div>
            <button><img src="users.png" height={"50px"}></img></button>
                </div>
                
        </div>
        <div >
                <div style={{width:"30%"}}></div>
        </div>

    </div>
        
    );
}
export default Home;