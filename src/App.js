import './App.css';
import { useEffect, useContext} from 'react'
import {UserContext} from './context/UserContext'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import New from './pages/New'
import Songs from './pages/Songs'
import MySongs from './pages/MySongs'
import Profile from './pages/Profile'
import SongChoice from './pages/SongChoice'
import Home from './pages/Home'
import Lyric from './pages/Lyric'
import {Route, Redirect} from 'react-router-dom'

function App() {

  const {userState} = useContext(UserContext)
  const [user,setUser] = userState

  const userInfo = async () => {
  const id = localStorage.getItem('id')

  console.log(id)

    if(id) {
      setUser(id)
      console.log(id)
    }

    console.log(user)

  }

  useEffect(() => {
    userInfo()
  },[])

  console.log(user)

  return (

    <div>
      <Navbar />

      <Route
        path=""
        exact>
        { user.id ?
        <Redirect to="/songs" />
      :
      <Home />
        }
      </Route>

      <Route
        path="/users/new"
        exact>
        { user.id ?
        <Redirect to="/songs" />
        :
        <Signup />
        }
        </Route>

      <Route
        path="/users"
        exact>
        { user.id ?
        <Redirect to="/songs" />
      :
        <Login />
        }
      </Route>

      <Route
        path="/users/edit"
        exact>
        { user.id ?
        <Redirect to="/songs" />
      :
        <Login />
        }
      </Route>

      <Route
        path="/songs/new/submit"
        exact
        component={New}
      />

      <Route
        path="/songs/user/list"
        exact
        component={MySongs}
      />

      <Route
        path="/users/profile"
        exact
        component={Profile}
      />
      <Route
        path="/songs"
        exact>
          { user.id ?
        <Songs />
        :
        <Redirect to="/users" />
        }
      </Route>
      <Route
        path="/lyrics/:id"
        exact
        component={Lyric}
      />
      <Route
        path="/songs/:id"
        exact
        component={SongChoice}
        />

    </div>
  )
}




export default App;
