import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newPost } from './postSlice'

function AddPostForm() {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () =>{
    if(title && content){
        dispatch(
            newPost(title,content)
        )
        setTitle('')
        setContent('')
    }
  }
    
  return (
    <div>
        <section>
            <h2> Add a new post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title</span>
                    <input type= 'text'
                    onChange={(e)=>setTitle(e.target.value)}
                    value = {title}
                    />
                </label>
                <label>
                    <span>Content</span>
                    <input
                    type= 'text'
                    onChange={(e)=>setContent(e.target.value)}
                    value={content} 
                    />
                </label>
                <button type='button' onClick={handleSubmit}>Submit Post</button>
            </form>
        </section>
        
    </div>
  )
}

export default AddPostForm