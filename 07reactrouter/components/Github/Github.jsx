// eslint-disable-next-line no-unused-vars
import React, { useEffect,useState } from 'react'
import { useLoaderData} from 'react-router-dom'

function Github() {
    const data =  useLoaderData();
    // const [data,setData]  = useState([null])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/suryawanshishreyas')
    //     .then(response=>response.json)
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div  className='text-center m-4 bg-gray-600 text-white  text-3xl'>
    Github followers:{data.followers}
    <img className='mx-auto' src={data.avatar_url} alt="Git Picture" width={300}/> 
    </div>
  )
}

export default Github

export const githubInfoLoader  = async ()=>{
    const response = await fetch('https://api.github.com/users/suryawanshishreyas')
    return response.json();
}