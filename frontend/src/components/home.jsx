import React from "react";
import BlogPage from "./blogpage";
import BlogShortCard from "./blogmincard";

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
        <div style={{display:"flex", flexDirection:"row" ,gap:"10px"}}>
                <div style={{width:"20%" ,display:"flex",flexDirection:"column"} }>
                    <button> <h1 className="list"> + Create a Blog</h1></button> 
                    <button><h2 className="list">Feed</h2></button>
                    <button><h2 className="list">My Posts</h2></button>
                    <button><h2 className="list">Account</h2></button>
                    
                </div>
                <div style={{width:"100%", marginTop:"-1rem"} } >
           <BlogShortCard title="My Fist BLog Page" author="Kolli Kesav" date="25 aug 2024"  />
                </div>
        </div>
    </div>
        
    );
}
export default Home;