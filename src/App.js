import React from 'react'
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <nav>
          <Link to='/'>
            Homepage
          </Link>
          <Link to='/Portfolio'>
            Portfolio
          </Link>
          <Link to='/Contact'>
            Contact
          </Link>
        </nav>
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
        <Footer />
      </div>
    </Router>
  )
}

export default App
