
import React, { useEffect, useState } from "react";
import axios from "axios";

function BlogShortCard(props)
{
    const [data,setdata]=useState(null);
    useEffect(()=>
    {
          async function fetchdata()
          {
            const response=await axios.get("https")
          }
    })


    return (
        <div className="blogdet" style={{backgroundColor:"blanchedalmond", width:"auto" }}>
            <h2>{props.title}</h2>
            <p><i>by {props.author}</i></p>
            <p>created on {props.date}</p>
        </div>

    );
}
export default BlogShortCard;
