import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

/* components */
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Message from './components/layout/Message'
import Container from './components/layout/Container'

/* pages */
import Home from './components/pages/Home'
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Profile from './components/pages/User/Profile'
import AddVehicle from './components/pages/Vehicle/AddVehicle'
import EditVehicle from './components/pages/Vehicle/EditVehicle'

/* contexts */
import { UserProvider } from './context/UserContext'
function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/user/profile">
              <Profile />
            </Route>
            <Route path="/vehicle/add">
              <AddVehicle />
            </Route>
            <Route path="/vehicle/edit/:id">
              <EditVehicle />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
