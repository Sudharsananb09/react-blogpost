import React from 'react'
import {useSelector} from "react-redux"
import { selectAllPosts } from './postSlice'

const PostList = () => {
  const posts = useSelector(selectAllPosts)

  const createdPosts = posts.map( post=> (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
   ) )

  return (
    <div>
        <section>
            <h2>Posts</h2>
            {createdPosts}
        </section>
    </div>
  )
}

export default PostList