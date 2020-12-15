import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import { useStateValue } from './components/stateManagement/StateProvider';


function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ): (
        <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
                <Chat />
            </Route>
            <Route path="/">
              {/* <Chat/> */}
            </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
