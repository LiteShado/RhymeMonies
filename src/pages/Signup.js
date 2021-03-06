import {useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import axios from 'axios'
import '../css/Login.css'
import env from 'react-dotenv'

const Signup = () => {
    const {userState} = useContext(UserContext)
    const [user,setUser] = userState

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signupSubmit = async (e) => {
        e.preventDefault()

        let res = await axios.post(`${env.API_URL}/users/new`, {
            name: name,
            email: email,
            password: password
        })
        console.log(res)
        console.log(res.headers)
        console.log(res.headers.authorization)
        localStorage.setItem('name', res.data.user.name)
        localStorage.setItem('userId', res.data.user.id)
        localStorage.setItem('id', res.data.user.id)
        localStorage.setItem('email', res.data.user.email)
        localStorage.setItem('password', res.data.user.password)

        setUser(res.data.user)
    }

    return (
        <div>
            <div className="loginContainer">
                <h1>Sign Up for RhymeMonies!</h1>
                <form onSubmit={signupSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    )
}

export default Signup
