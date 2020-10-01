import React, {useEffect, useState} from 'react';
import './App.css';
import {Button, Grid, Typography} from "@material-ui/core";
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from './api/Api'

function App() {

  const [matches,setMatches]=useState([]);

  useEffect(()=>{
    {getMatches().then((data)=> setMatches(data.matches))
    .catch((error)=>alert("Couldn't Load Data"))}
  },[])

  return (
    <div className="App">
    <Navbar/>
    <Typography variant="h3" style={{marginTop:20}}>CrickScore- Welcome To Live Cricket ⚾ </Typography>
    
    <Grid container>
      <Grid sm="2"></Grid>
      <Grid sm="8">
      {
      matches.map((match)=>(
        <MyCard key={match.unique_id} match={match} />
      ))
    }
      </Grid>
    </Grid>
    
    </div>
  );
}

export default App;
