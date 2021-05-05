import axios from 'axios'
import env from 'react-dotenv'
import { Link } from 'react-router-dom'

const MySongs = (props) => {

    console.log(props)


    const viewSongs = async (e) => {
        e.preventDefault()
        // let user = localStorage.getItem('userId')
        let id = localStorage.getItem('userId')
        let idd = props.match.params.id


        console.log(id)
        console.log(idd)


        // console.log(get)

        let res = await axios.get(`${env.API_URL}/songs/user`, {

        })
        console.log(res)
        // localStorage.setItem('lyric', res.data.song.lyric)

        // setSong(res.data.song)
    }

return (
    <>
            <>
                <form onSubmit={viewSongs}>
                    {/* <input name="viewSongs" type="hidden" value={none} onChange={(e) => setUserId(e.target.value)}/> */}

                    <button type="submit" value="submit">View My MySongs</button>
                </form>
            </>
            <>
                <h1>Here Are Your Songs!!</h1>
                {/* {allSongs && allSongs.map((res, i) => { */}

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

                )

            </>

    </>
    )

}



export default MySongs
