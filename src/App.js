import { Fragment, useEffect } from 'react'
import { useStorageState } from 'react-storage-hooks'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import { Container } from 'react-bootstrap'
import Home from './pages/home/Home'
import data from './data/data.json'
import { Switch, Route, useLocation } from 'react-router-dom'
import SinglePage from './pages/single-page/SinglePage'
import { auth } from './firebase'
import LoginPage from './pages/login-page/LoginPage'
import AdminPage from './pages/admin-page/AdminPage'

const App = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [user, setUser] = useStorageState(localStorage, 'firebase-user', null)
  const [list, setList] = useStorageState(localStorage, 'firebase-list', data)

  useEffect(() => {
    auth.onAuthStateChanged(foundUser => {
      if (foundUser) setUser(foundUser)
      else setUser(null)
    })
  }, [setUser])

  // useEffect(() => {
  //   getItems().then(result => setList(result))
  // }, [setList])

  return (
    <Fragment>
      <Header user={user} />
      {isHome && <Banner />}
      <Container style={{ marginTop: isHome ? '200px' : '100px' }}>
        <Switch>
          <Route exact path='/'>
            <Home list={list} />
          </Route>
          <Route path='/item/:id'>
            <SinglePage list={list} />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/admin'>
            <AdminPage list={list} user={user} setList={setList} />
          </Route>
        </Switch>
      </Container>
    </Fragment>
  )
}

export default App
