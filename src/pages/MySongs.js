import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'
// import SongChoice from '../pages/SongChoice'
import { Link } from 'react-router-dom'
import {UserContext} from '../context/UserContext'

const MySongs = (props) => {

    console.log(props)

    const {userState} = useContext(UserContext)
    const[allSongs, setAllSongs] = useState(null)


    const viewSongs = async (e) => {
        e.preventDefault()
        // let user = localStorage.getItem('userId')
        let id = localStorage.getItem('userId')
        let idd = props.match.params.id


        console.log(id)
        console.log(idd)


        console.log(get)

        let res = await axios.post(`${env.API_URL}/lyrics/${props.match.params.id}`, {
            lyric: testLyric,
            userId: id,
            songId: idd
        })
        console.log(res)
        // localStorage.setItem('lyric', res.data.song.lyric)

        setSong(res.data.song)
    }

    return (
        <>
        <form onSubmit={viewSongs}>
                    <input name="lyric" type="text" value={testLyric} onChange={(e) => setTestLyric(e.target.value)} />

                    <input name="userId" type="hidden" placeholder="UserId" value={userId} onChange={(e) => setUserId(e.target.value)} />

                    <input name="songId" type="hidden" placeholder="SongId" value={songId} onChange={(e) => setUserId(e.target.value)} />

                    <input type="submit" value="submit" />
                </form>
    </>
    <>
        <div className="mySongs">
        <h1>Here Are Your Songs!!</h1>
        {/* {allSongs && allSongs.map((res, i) => { */}
            console.log(res)
        return (
            <li >
                <Link
                className="userSongs">
                {/* <SongChoice
                key={res.id}
                song={res.title}
                // userId={allUserSongs.userId}
                // preview="true"
                // placeholder={allUserSongs.title}
                />
                {allSongs.title} | {allSongs.genre}</Link> */}
            </Link>
            </li>
            </div>
        )

        }
        {/* )} */}

        </div>
    )

}



export default MySongs
