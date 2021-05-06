import {useEffect, useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const MySongs = () => {

    const[allMySongs, setAllMySongs] = useState(null)
    const id = localStorage.getItem('id')


    const getAllSongs = async() => {
            console.log(id)
            try {
            const res = await axios.get(`${env.API_URL}/songs/list`)
            setAllMySongs(res.data)
            console.log(res.data)

            } catch (error) {
                console.log(error)
            }
    }

    useEffect(() => {
        getAllSongs()
    },[])

    return (
        <>
        <h1>Your Song Collection</h1>
        {allMySongs && allMySongs.map((res, i) => {
            console.log(res)
        return (
            <li key={res.id}>
                <div className="userSongs">
                {res.title} | {res.genre}
                </div>
            </li>

            )})
        }
        </>
    )
}
export default MySongs
