import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')

    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // })

    return (
        <div className='bg-gray-600 text-white text-center m-5 p-4 text-3xl'>
            Github: {data.followers}
            <img src={data.avatar_url} alt="Profile pic" width={300} />
        </div>
    )
}

export const userLoaderData = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}