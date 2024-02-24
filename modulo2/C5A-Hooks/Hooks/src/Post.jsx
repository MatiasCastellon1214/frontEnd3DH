import React, { useState } from 'react'

const Post = (props) => {

    const [likes, setlikes] = useState(0);

  return (
    <div>
        <h1>{likes}</h1>
        <button onClick={()=> setlikes(likes + 1)}>Likes</button>
    </div>
  )
}

export default Post