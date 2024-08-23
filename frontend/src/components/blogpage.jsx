import React from "react";

function BlogPage(props)
{
    return (
        <div className="blogdet" style={{backgroundColor:"blanchedalmond", width:"auto" }}>
            <h2>{props.title}</h2>
            <p><i>by {props.author}</i></p>
            <p>created on {props.date}</p>
            <p>
                {props.body}
            </p>
        </div>

    );
}
export default BlogPage;
