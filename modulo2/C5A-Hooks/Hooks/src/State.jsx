import Reactprops, { useState } from 'react'


const State = (props) => {

    const [state, setState] = useState({
        likes: 0,
        vistas: 0
    });

  return (
    <div>
        <h1>{state.likes}</h1>
        <h1>{state.vistas}</h1>
        <button onClick={()=> setState(prev => ({...prev, likes: state.likes+1}))}>Likes</button>
    </div>
  )
}


export default State