import {useEffect, useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import axios from 'axios'
import env from 'react-dotenv'


const Lyric = (props) => {

    const {userState} = useContext(UserContext)
    const [song,setSong] = userState
    const [testLyric,setTestLyric] = useState('')



    const [lyric,setLyric] = useState(null)
    // const [userArtist,setUserArtist] = useState(null)
    const [id,setId] = useState('')
    const [songId,setSongId] = useState('')
    // console.log(props.match.params.id)
    console.log(props)

    const [lyrics, setLyrics] = useState('')

    const get = async() => {
        try {

        const lyric = await axios.get(`${env.API_URL}/lyrics/${props.match.params.id}`)

        console.log(lyric)

        let i

        const array = lyric.data.lyrics
        setLyric(array)
        console.log(array)


        for (i = 0; i<array.length; i++) {
            console.log(array[i].lyric)
            // setLyric(array[i].lyric)
            console.log(lyric)
        }

        console.log(array)



        } catch (error) {
            console.log(error)
        }
    }

    const findUser = async() => {
        console.log(lyric)

    }

    useEffect(() => {
        get()
        findUser()
    },)


    const signupSubmit = async (e) => {
        e.preventDefault()
        // let user = localStorage.getItem('userId')
        let id = localStorage.getItem('id')
        let songId = props.match.params.id


        console.log(id)
        console.log(songId)


        console.log(get)

        let res = await axios.post(`${env.API_URL}/lyrics/${props.match.params.id}`, {
            lyric: testLyric,
            userId: id,
            songId: songId
        })
        console.log(res)
        // localStorage.setItem('lyric', res.data.song.lyric)

        setSong(res.data.song)
    }

    return (
        <>
                <h1>Check Out These Lyrics!!</h1>
            <>

                {lyric && lyric.map((res, i) => {
                    console.log(lyrics)

                return (
                    <li className="lyricList" key={res.id}>
                        {res.lyric}

                    </li>
                )
                })}
            </>


                <h1>Add Your Lyrics To The Song!</h1>
                <form onSubmit={signupSubmit} className="form">
                    <input name="lyric" type="text" value={testLyric} onChange={(e) => setTestLyric(e.target.value)} />

                    <input name="userId" type="hidden" placeholder="UserId" value={id} onChange={(e) => setId(e.target.value)} />

                    <input name="songId" type="hidden" placeholder="SongId" value={songId} onChange={(e) => setSongId(e.target.value)} />

                    <input type="submit" value="submit" />
                </form>

        </>
    )

}
export default Lyric
