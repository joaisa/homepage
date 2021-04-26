import { Route, Switch, Redirect } from 'react-router-dom'

// Components
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'

import Projects from './pages/Projects'

import PodkastMedievaner from './pages/projects/PodkastMedievaner'

import Games from './pages/Games'
import Play from './pages/Play'

// Error Pages
import Error404 from './pages/error/Error404';

// CSS
import './css/index.css';

function App() {
  return <>
    <Header />
    <Menu />

    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />

        <Route exact path="/about" component={About} />

        <Route exact path="/projects" component={Projects} />

        <Route exact path="/projects/podkast-medievaner" component={PodkastMedievaner} />

        <Route exact path="/games" component={Games} />
        <Route path="/games/play" component={Play} />

        <Route exact path="/error/404" component={Error404} />

        <Redirect to="/error/404" />
      </Switch>
    </div>

    <Footer />
  </>
}

export default App;
