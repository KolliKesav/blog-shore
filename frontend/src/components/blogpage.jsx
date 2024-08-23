import React from "react";

function BlogPage(props)
{
    return (
        <div>
            <h2>{props.title}</h2>
            <h4><i>by {props.author}</i></h4>
            <h5>created on {props.date}</h5>
            <p>
                {props.body}
            </p>
        </div>

    );
}
export default BlogPage;
