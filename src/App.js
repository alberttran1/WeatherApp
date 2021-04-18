import React, { useState } from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, TextField, Button, Grid} from '@material-ui/core';
import { Cloud } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { addWeather } from './actions/weather'

import MyCard from './components/card/MyCards'

const App = () =>{
  const classes = useStyles();
  const [input, setInput] = useState("");
  const weatherList = useSelector(state =>state.weatherList);
  const dispatch = useDispatch();

  console.log(weatherList);

  const handleChange = e => {
    setInput(e.target.value)
  }

  const keyPress = e =>{
    if (e.keyCode === 13){
      e.preventDefault();
      handleSubmit();
    }
  }

  const handleSubmit = (e) => {
    dispatch(addWeather(input));
    setInput("");
  }

  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
        <Cloud />
          <Typography variant="h6" style={{paddingLeft: 10}} >
              Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.centerContainer}>
        <Typography variant="h2" align="center" gutterBottom>
          Enter the name of a city.
        </Typography>
        <form  align="center" noValidate autoComplete="off">
          <TextField id="standard-basic" label="City Name" value={input} onChange={handleChange} onKeyDown={keyPress} on/>
          <Button variant="contained" align="center" color="primary" onClick={handleSubmit}>
            Enter
          </Button>
        </form>
      </div>
      <Grid className={classes.container} container alignItems="stretch" >
          {weatherList.slice((weatherList.length > 5) ? weatherList.length-5 : 0).map((weatherData) => (
            <MyCard data={weatherData}/>
          ))}
      </Grid>

    </>

  );
}

export default App;
