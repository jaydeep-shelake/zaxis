import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = () => {
    return (
        <Link to="/blog/1">
        <div className="blog-card">
            <div className="blog-img">

            </div>
            <div className="blog-des">
                <div className="bg-black p-2 text-white">FASHION</div>
                <h1 className="py-2">Digital Fashion Player DressX Raises $2 Million</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        </Link>
    )
}

export default BlogCard
