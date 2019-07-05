import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import Slider from "react-slick";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Axios from 'axios';

import config from './config';
import './App.css';

const useStyles = makeStyles(theme => ({
  paper: {
    background: '#FCE6CC'
  },
  externalBorder:{
    backgroundImage: 'linear-gradient(138deg, #f9b502, #f17e01)',
    padding: '3px'
  },
  signName:{
    color: '#f17f01',
    fontWeight: 'bold',
    fontSize: '30px'
    }
}));


function Carousel() {
  
  const classes = useStyles();

  //Axios function to catch the sign
  async function getSign(sign){
    try{
      const response =  await Axios.get(config.apiURL+sign+'/dia');
      console.log(response);
    }
    catch(error){
      console.error(error);
    }
  }

  //Fuctions for personalized buttons
  function NextArrow(props){
    const {onClick } = props;

    return (
        <Button onClick={onClick}>
            <KeyboardArrowRight />
        </Button>
    );
  };
  function PrevArrow(props){
    const {onClick } = props;

    return (
        <Button onClick={onClick}>
            <KeyboardArrowLeft />
        </Button>
    );
  };

  //For slick configurations
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight:false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

  };
  return (
    <div className={classes.externalBorder}>
      <Paper className={classes.paper}>
        <Slider {...settings}>
          <div>
            <div className={classes.signName}>Áries</div>
          </div>
          <div>
            <Typography className={classes.signName}>Touro</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Gêmeos</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Câncer</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Leão</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Virgem</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Libra</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Escorpião</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Sagitário</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Capricórnio</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Áquario</Typography>
          </div>
          <div>
            <Typography className={classes.signName}>Peixes</Typography>
          </div>
        </Slider>
      </Paper>
    </div>
  );
}

export default Carousel;