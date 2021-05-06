import {useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import axios from 'axios'
import '../css/Login.css'
import env from 'react-dotenv'

const New = (props) => {
    const {userState} = useContext(UserContext)
    const [song,setSong] = userState

    const [title,setTitle] = useState('')
    const [genre,setGenre] = useState('')
    const [id, setId] = useState('')

    const newSong = async () => {
        // e.preventDefault()
        // let user = localStorage.getItem('userId')
        let id = localStorage.getItem('id')
        console.log(id)

        let res = await axios.post(`${env.API_URL}/songs/new`, {
            title: title,
            genre: genre,
            id: id
        })
        console.log(res)
        localStorage.setItem('title', res.data.song.title)
        localStorage.setItem('genre', res.data.song.genre)

        setSong(res.data.song)
        // localStorage.setItem('userId', res.data.user.id)
        console.log(song)
    }

    return (
            <div className="newSongContainer">
                <h1>Add Your Song to the Community!</h1>
                <form onSubmit={newSong}>
                    <input name="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                    {/* <input name="title" type="text" placeholder="Title" value={genre} onChange={(e) => setGenre(e.target.value)} /> */}

                    <label for="genre">Choose your Genre:</label>

                    <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option>Select Genre</option>
                        <option name="HipHop" value="HipHop">Hip Hop</option>
                        <option value="Rap" name="Rap">Rap</option>
                        <option value="Pop" name="Pop">Pop</option>
                        <option value="RnB" name="RnB">RnB</option>
                        <option value="Acoustic" name="Acoustic">Acoustic</option>
                        <option value="EDM" name="EDM">EDM</option>
                        <option value="Country" name="Country">Country</option>
                        <option value="Rock" name="Rock">Rock</option>
                    </select>
                    <input name="userId" type="hidden" value={id} onChange={(e) => setId(e.target.value)} />

                    <input type="submit" value="submit" />
                </form>
            </div>
    )
}

export default New
