import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

import Carousel from './Carousel';

const useStyles = makeStyles(theme => ({
  title: {
      color: '#41c96a',
      fontWeight: 'bold'
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App" style={{ padding: 31 }}>
      <Grid container justify={"space-evenly"} spacing={2} direction="column">
        <Grid item xs={12}>
          <Typography  className={classes.title} variant="h4">Signos</Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <Carousel />
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
