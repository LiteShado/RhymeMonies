import {useEffect, useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'
import SongChoice from '../pages/SongChoice'

const Songs = () => {

    const[allSongs, setAllSongs] = useState(null)


    const getAllSongs = async() => {
            try {
            const res = await axios.get(`${env.API_URL}/songs`)
            setAllSongs(res.data)
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
        <h1>Check Out These from the Community!</h1>
        <h3>Title | Genre</h3>
        {allSongs && allSongs.map((res, i) => {
            console.log(res)
        return (
            <li key={res.id}>
                <div to={`/songs/${res.id}`} className="communitySongs">
                <SongChoice
                key={res.id}
                song={res}
                />
                {res.title} | {res.genre}
                </div>
            </li>

            )})
        }
        </>
    )
}
export default Songs
