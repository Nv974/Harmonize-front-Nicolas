import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import jwt_decode from "jwt-decode";

import Home from '../../containers/Home';
import Nav from '../../containers/Nav';
import Artists from '../../containers/Artists'
import Artist from '../../containers/Artist'
import Project from '../../containers/Project';
import Projects from '../../containers/Projects';
import UserInfos from '../../containers/UserInfos';
import SignUp from '../../containers/SignUp';
import Player from '../../containers/Player';
import Footer from '../../components/Footer';
import Contact from '../Footer/Contact';
import AboutUs from '../Footer/AboutUs';
import Mentions from '../Footer/Mentions';
import Error404 from '../../components/Error404';
import PopUp from '../../containers/PopUp';


import './app.css';


function App({ loadProjectsFromAPI, loadArtistsFromAPI, token,setLoading ,seeMyInfos,

  loadGenreFromAPI,getGenreSelected,clearComment,authorizeLogIn}) {
    const [cookies, setCookie] = useCookies();
    const saveInfoCookie = () =>{
      const decoded = jwt_decode(cookies.sessionHarmonize);
      authorizeLogIn(decoded.userId,decoded.username,cookies.sessionHarmonize,decoded.picture);
      

    }
    
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setLoading(true,"projects")
    setLoading(true,"artists")
    loadProjectsFromAPI();
    loadArtistsFromAPI();
    clearComment();
    let subtitle = location.pathname.split('/');
    document.title= `Harmonize ${subtitle[1]}`
    if(location.pathname !== '/Projets'){
      getGenreSelected('null');
    }
  }, [location.pathname])
  useEffect(()=> {
    loadGenreFromAPI();
  },[])
  useEffect(()=>{
    
    if(token){
      setCookie('sessionHarmonize',token, { path: '/' })
    } else {
      
      if (cookies.sessionHarmonize && cookies.sessionHarmonize !== 'undefined'){
        saveInfoCookie(cookies)
      }
    }
  },[token])
  return (
    <div className="App">

      <Nav />
      <PopUp />
      <Player />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/Projets'>
          <Projects />
        </Route>
        <Route exact path='/Artistes'>
          <Artists />
        </Route>
        <Route exact path='/Inscription'>
          {token && <Redirect to='/' /> }
          {!token && <SignUp />}
        </Route>
        <Route exact path='/Artistes/:slug'>
          <Artist />
        </Route>
        <Route exact path='/Projets/:slug'>
          <Project />
        </Route>
        <Route exact path="/MonCompte">
          {token &&<UserInfos /> }
          {!token && <>  <Redirect to='/' /></>}
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/Mentions">
          <Mentions />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

App.propTypes = {
  loadArtistsFromAPI: PropTypes.func.isRequired,
  loadProjectFromAPI: PropTypes.func.isRequired
}

export default App;
