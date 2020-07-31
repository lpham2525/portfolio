import React from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import reactPage from './pages/reactPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>

          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/Portfolio'>
            <Portfolio />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
          <Route path='/reactPage'>
            <reactPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
