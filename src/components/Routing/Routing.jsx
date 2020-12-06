import React, { useEffect, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { setAutentication } from '../../redux/actions/auth'
import { ScrollingProvider } from 'react-scroll-section'
import Loading from './../Loading/Loading'
const Header = React.lazy(() => import('./../Header/Header'))
const Landing = React.lazy(() => import('./../Landing/Landing'))
const Login = React.lazy(() => import('./../Login/Login'))
const Terms = React.lazy(() => import('./../Terms/Terms'))
const List = React.lazy(() => import('./../List/List'))

function Routing () {
  const dispatch = useDispatch()

  const token = localStorage.getItem('token')
  const login = token !== null

  useEffect(() => {
    dispatch(setAutentication())
  }, [dispatch])

  return (
    <BrowserRouter>
      <ScrollingProvider>
        <Suspense fallback={<Loading />}>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              path="/login"
              render={() => (!login ? <Login /> : <Redirect to="/" />)}
            />
            <Route
              path="/policies"
              render={() => <Terms />}
            />
            <Route
              path="/list"
              render={() => (login ? <List /> : <Redirect to="/" />)}
            />
          </Switch>
        </Suspense>
      </ScrollingProvider>
    </BrowserRouter>
  )
}

export default Routing
