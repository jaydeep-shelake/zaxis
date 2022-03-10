import React from 'react'
import '../../styles/blog.css'
import BlogCard from '../cards/BlogCard'
import Header from '../Header'
const Blog = () => {
    return (
        <>
        <Header/>
        <div className="blog-area">
            <div className="blog">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
        </>
    )
}

export default Blog
