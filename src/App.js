import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import TrendingPage from './TrendingPage';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
          </Route>
          <Route path="/search/:searchTerm" >
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/trending" >
            <div className="app__page">
              <Sidebar />
              <TrendingPage />
            </div>
          </Route> 
        </Switch>   
      </Router>
    </div>
  );
}

export default App;