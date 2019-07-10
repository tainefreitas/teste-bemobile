import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

import Carousel from './modules/Carousel';

const useStyles = theme => ({
  title: {
      color: '#41c96a',
      fontWeight: 'bold'
  }
});


class App extends React.Component {
  
  render(){
    const {classes} = this.props;
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
}

App.propTypes={
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(App);
