import {useEffect, useState } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const MySongs = () => {

    const[allMySongs, setAllMySongs] = useState(null)

    const viewSongs = async () => {
        let id = localStorage.getItem('userId')
        console.log(id)

        try {
        const res = await axios.get(`${env.API_URL}/songs/user`)
        setAllMySongs(res)

        } catch (error) {
            console.log(error)
        }
    }

        useEffect(() => {
            viewSongs()
        }, [])

return (
    <>
                <h1>Here Are Your Songs!!</h1>

            <>
                {allMySongs && allMySongs.map((res, i) => {
                console.log(allMySongs)

                return (
                    <li
                    className="userSongs" key={res.id}>{res.song}</li>

                )
                })}
            </>

    </>

)
}



export default MySongs
