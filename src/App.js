import logo from './logo.svg';
import './App.css';

import 'rsuite/dist/rsuite.min.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import {Container, CustomProvider, Placeholder} from "rsuite";
import React, { useState } from 'react';
function App() {
  const [loading, setLoading ] = useState(true)

  React.useEffect(()=>{
setTimeout(()=>{
  setLoading(false)
},

200)

  }, [])
  return (
    <CustomProvider theme='dark'>
    <div className="App" style={{baclkgroundColor:"#041621", fontFamily:"serif"}}>
      <Container>
        {loading? 
        <Placeholder active rows={2} graph="square"></Placeholder>
        :
          <Container style={{padding:"30px", marginTop:"200px", margin:"50px auto"}}>
            <h1>Welcome To Midgeotech Company</h1>
            <br/>
            <br/>

              <small>Site is ongoing maintenance</small>
          </Container>
}
      </Container>
      
    </div></CustomProvider>
  );
}

export default App;
