import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/header/header";
import {CustomMap} from "./classes/CustomMap";
import {User} from "./classes/User";
import {Company} from "./classes/Company";

function App() {
    useEffect(()=>{
        const customMap = new CustomMap("map");
        const user = new User();
        const company = new Company();
        customMap.addMarker(user);
        customMap.addMarker(company);
    },[])
  return (
    <div className="App">
      <Header/>
        <button id="refresh" onClick={()=>{window.location.reload()}}>Refresh</button>
    </div>
  );
}

export default App;
