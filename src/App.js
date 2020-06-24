import React from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Bio from './components/Bio'

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
        </Switch>
      </div>
    </Router>
  )
}

export default App
