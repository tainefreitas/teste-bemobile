import React from "react";
import PropTypes from  'prop-types';
import Axios from 'axios';
import Slider from "react-slick";

//From Material-UI
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//Arrow Icons
import KeyboardArrowLeft from 'mdi-material-ui/ChevronLeft';
import KeyboardArrowRight from 'mdi-material-ui/ChevronRight';

//Zodiac Icons
import Aries from 'mdi-material-ui/ZodiacAries';
import Taurus from 'mdi-material-ui/ZodiacTaurus';
import Gemini from 'mdi-material-ui/ZodiacGemini';
import Cancer from 'mdi-material-ui/ZodiacCancer';
import Leo from 'mdi-material-ui/ZodiacLeo';
import Virgo from  'mdi-material-ui/ZodiacVirgo';
import Libra from 'mdi-material-ui/ZodiacLibra';
import Scorpio from 'mdi-material-ui/ZodiacScorpio';
import Sagittarius from 'mdi-material-ui/ZodiacSagittarius';
import Capricorn from 'mdi-material-ui/ZodiacCapricorn';
import Aquarius from 'mdi-material-ui/ZodiacAquarius';
import Pisces from 'mdi-material-ui/ZodiacPisces';

//Archives
import config from './config';


const useStyles = theme => ({
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
    fontSize: '30px',
    padding: '15px'
    },
  icon:{
    width: '57px',
    height: '52px'
  },
  horoscopeText:{
    padding: '30px',
    fontSize: '20px',
    textAlign: 'justify',
  },
});

//Fuctions for personalized buttons
function NextArrow(props){
  const {onClick, className, style } = props;

  return (
         <KeyboardArrowRight onClick={onClick}
                            className={className} 
                            style={{...style, width:'50px', 
                                              height: '50px', 
                                              color: 'black',
                                              position: 'absolute',
                                              right: '30px',
                                              top:'40px'}}
          />

  );
};
function PrevArrow(props){
  const {onClick, className, style } = props;

  return (
    
          <KeyboardArrowLeft 
            onClick={onClick}
            className={className} 
            style={{...style, width:'50px', 
                              height: '50px', 
                              color: 'black',
                              position: 'absolute',
                              top: '40px',
                              left: '30px',
                              zIndex: '1000'
                             }} 
           />

  );
};

class  Carousel extends React.Component {

  constructor(){
    super();
    this.state={
      aries: '',
      taurus: '',
      gemini: '',
      cancer: '',
      leo: '',
      virgo: '',
      libra: '',
      scorpio: '',
      sagittarius: '',
      capricorn: '',
      aquarius: '',
      pisces: ''
    }
    this.getSign = this.getSign.bind(this);
  }


  //Axios function to catch the sign
  async getSign(sign){
    const response =  await Axios.get(config.apiURL+sign+'/today');
    setTimeout(()=>{ this.setState({
        [sign]: response.data.horoscope
      });
    }, 100);
}
componentWillMount(){
  this.getSign('aries');
  this.getSign('taurus');
  this.getSign('gemini');
  this.getSign('cancer');
  this.getSign('leo');
  this.getSign('virgo');
  this.getSign('libra');
  this.getSign('scorpio');
  this.getSign('sagittarius');
  this.getSign('capricorn');
  this.getSign('aquarius');
  this.getSign('pisces');
}
  
  render(){
    const {classes} = this.props;

    //For slick configurations
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight:false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div className={classes.externalBorder}>
        <Paper className={classes.paper}>
          <Slider {...settings}>
            <div  id="aries">
              <Grid container spacing={1} alignItems="center" justify="center">
                 <Grid item>
                   <Aries className={classes.icon}
                   component={svgProps => {
                    return (
                      <svg {...svgProps}>
                        <defs>
                          <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                            <stop offset="0%" stopColor={'#f18201'} />
                            <stop offset="100%" stopColor={'#f7a502'} />
                          </linearGradient>
                        </defs>
                        {React.cloneElement(svgProps.children[0], {
                          fill: 'url(#gradient1)',
                        })}
                      </svg>
                     );
                    }}/>
                  </Grid>
                <Grid item> 
                  <Typography className={classes.signName}>Áries</Typography>
                </Grid>
                <Grid item xs={12}>
                 <Typography className={classes.horoscopeText}>{this.state.aries}</Typography>
                </Grid>
              </Grid>
            </div>

            <div id="taurus">
              <Grid container spacing={1} alignItems="center" justify="center">
                <Grid item>
                  <Taurus className={classes.icon}
                   component={svgProps => {
                    return (
                      <svg {...svgProps}>
                        <defs>
                          <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                            <stop offset="0%" stopColor={'#f18201'} />
                            <stop offset="100%" stopColor={'#f7a502'} />
                          </linearGradient>
                        </defs>
                        {React.cloneElement(svgProps.children[0], {
                          fill: 'url(#gradient1)',
                        })}
                      </svg>
                     );
                    }}/>
                </Grid>
                <Grid item> 
                  <Typography className={classes.signName}>Touro</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.horoscopeText}>{this.state.taurus}</Typography>
                </Grid>
             </Grid>
            </div>

            <div id="gemini">
              <Grid container spacing={1} alignItems="center" justify="center">
                <Grid item>
                <Gemini className={classes.icon}
                    component={svgProps => {
                      return (
                        <svg {...svgProps}>
                          <defs>
                            <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                              <stop offset="0%" stopColor={'#f18201'} />
                              <stop offset="100%" stopColor={'#f7a502'} />
                            </linearGradient>
                          </defs>
                          {React.cloneElement(svgProps.children[0], {
                            fill: 'url(#gradient1)',
                          })}
                        </svg>
                      );
                      }}/>
                </Grid>
                <Grid item>
                  <Typography className={classes.signName}>Gêmeos</Typography>
                </Grid>
                <Grid item xz={12}>
                  <Typography className={classes.horoscopeText}>{this.state.gemini}</Typography>
                </Grid>
              </Grid>
            </div>

            <div id="cancer">
              <Grid container spacing={1} alignItems="center" justify="center">
                <Grid item>
                <Cancer className={classes.icon}
                    component={svgProps => {
                      return (
                        <svg {...svgProps}>
                          <defs>
                            <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                              <stop offset="0%" stopColor={'#f18201'} />
                              <stop offset="100%" stopColor={'#f7a502'} />
                            </linearGradient>
                          </defs>
                          {React.cloneElement(svgProps.children[0], {
                            fill: 'url(#gradient1)',
                          })}
                        </svg>
                      );
                      }}/>
                </Grid>
                <Grid item>
                  <Typography className={classes.signName}>Câncer</Typography>                
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.horoscopeText}>{this.state.cancer}</Typography>
                </Grid>
             </Grid>
            </div>

            <div id="leo">
              <Grid container spacing={1} alignItems="center" justify="center">
                <Grid item>
                  <Leo className={classes.icon}
                      component={svgProps => {
                        return (
                          <svg {...svgProps}>
                            <defs>
                              <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                                <stop offset="0%" stopColor={'#f18201'} />
                                <stop offset="100%" stopColor={'#f7a502'} />
                              </linearGradient>
                            </defs>
                            {React.cloneElement(svgProps.children[0], {
                              fill: 'url(#gradient1)',
                            })}
                          </svg>
                        );
                      }}/>
                </Grid>
                <Grid item>
                  <Typography className={classes.signName}>Leão</Typography>                
                </Grid>
                <Grid item xs={12}>
                <Typography className={classes.horoscopeText}>{this.state.leo}</Typography>
                </Grid>
              </Grid>
            </div>

            <div id="virgo">
              <Grid container spacing={1} alignItems="center" justify="center">
                <Grid item>
                  <Virgo className={classes.icon}
                      component={svgProps => {
                      return (
                        <svg {...svgProps}>
                          <defs>
                            <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                              <stop offset="0%" stopColor={'#f18201'} />
                              <stop offset="100%" stopColor={'#f7a502'} />
                            </linearGradient>
                          </defs>
                          {React.cloneElement(svgProps.children[0], {
                            fill: 'url(#gradient1)',
                          })}
                        </svg>
                      );
                      }}/>
                </Grid>
                <Grid item>
                  <Typography className={classes.signName}>Virgem</Typography>                
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.horoscopeText}>{this.state.virgo}</Typography>
                </Grid>
              </Grid>
            </div>

            <div id="libra">
            <Grid container spacing={1} alignItems="center" justify="center">
              <Grid item>
                <Libra className={classes.icon}
                   component={svgProps => {
                    return (
                      <svg {...svgProps}>
                        <defs>
                          <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                            <stop offset="0%" stopColor={'#f18201'} />
                            <stop offset="100%" stopColor={'#f7a502'} />
                          </linearGradient>
                        </defs>
                        {React.cloneElement(svgProps.children[0], {
                          fill: 'url(#gradient1)',
                        })}
                      </svg>
                     );
                    }}/>
              </Grid>
              <Grid item>
                <Typography className={classes.signName}>Libra</Typography>                
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.horoscopeText}>{this.state.libra}</Typography>                
              </Grid>
            </Grid>
            </div>

            <div id="scorpio">
            <Grid container spacing={1} alignItems="center" justify="center">
              <Grid item>
                <Scorpio className={classes.icon}
                   component={svgProps => {
                    return (
                      <svg {...svgProps}>
                        <defs>
                          <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                            <stop offset="0%" stopColor={'#f18201'} />
                            <stop offset="100%" stopColor={'#f7a502'} />
                          </linearGradient>
                        </defs>
                        {React.cloneElement(svgProps.children[0], {
                          fill: 'url(#gradient1)',
                        })}
                      </svg>
                     );
                    }}/>
              </Grid>
              <Grid item>
                <Typography className={classes.signName}>Escorpião</Typography>  
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.horoscopeText}>{this.state.scorpio}</Typography>
              </Grid>
            </Grid>
            </div>

            <div id="sagittarius">
            <Grid container spacing={1} alignItems="center" justify="center">
              <Grid item>
               <Sagittarius className={classes.icon}
                   component={svgProps => {
                    return (
                      <svg {...svgProps}>
                        <defs>
                          <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                            <stop offset="0%" stopColor={'#f18201'} />
                            <stop offset="100%" stopColor={'#f7a502'} />
                          </linearGradient>
                        </defs>
                        {React.cloneElement(svgProps.children[0], {
                          fill: 'url(#gradient1)',
                        })}
                      </svg>
                     );
                    }}/>
              </Grid>
              <Grid item>
                <Typography className={classes.signName}>Sagitário</Typography>   
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.horoscopeText}>{this.state.sagittarius}</Typography>
              </Grid>
            </Grid>
            </div>

            <div id="capricorn">
              <Grid container spacing={1} alignItems="center" justify="center">
                <Grid item>
                  <Capricorn className={classes.icon}
                    component={svgProps => {
                    return (
                      <svg {...svgProps}>
                        <defs>
                          <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                            <stop offset="0%" stopColor={'#f18201'} />
                            <stop offset="100%" stopColor={'#f7a502'} />
                          </linearGradient>
                        </defs>
                        {React.cloneElement(svgProps.children[0], {
                          fill: 'url(#gradient1)',
                        })}
                      </svg>
                      );
                    }}/>
              </Grid>
              <Grid item>
                <Typography className={classes.signName}>Capricórnio</Typography>                
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.horoscopeText}>{this.state.capricorn}</Typography>
              </Grid>
            </Grid>
            </div>

            <div id="aquarius">
            <Grid container spacing={1} alignItems="center" justify="center">
              <Grid item>
                <Aquarius className={classes.icon}
                    component={svgProps => {
                    return (
                      <svg {...svgProps}>
                        <defs>
                          <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                            <stop offset="0%" stopColor={'#f18201'} />
                            <stop offset="100%" stopColor={'#f7a502'} />
                          </linearGradient>
                        </defs>
                        {React.cloneElement(svgProps.children[0], {
                          fill: 'url(#gradient1)',
                        })}
                      </svg>
                      );
                    }}/>
              </Grid>
              <Grid item>
              <Typography className={classes.signName}>Áquario</Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography className={classes.horoscopeText}>{this.state.aquarius}</Typography>
              </Grid>
            </Grid>
            </div>

            <div id="pisces">
            <Grid container spacing={1} alignItems="center" justify="center">
              <Grid item>
                <Pisces className={classes.icon}
                    component={svgProps => {
                      return (
                        <svg {...svgProps}>
                          <defs>
                            <linearGradient id="gradient1" x1="97%" y1="100%" x2="3%" y2="0%">
                              <stop offset="0%" stopColor={'#f18201'} />
                              <stop offset="100%" stopColor={'#f7a502'} />
                            </linearGradient>
                          </defs>
                          {React.cloneElement(svgProps.children[0], {
                            fill: 'url(#gradient1)',
                          })}
                        </svg>
                      );
                      }}/>
                </Grid>
                <Grid item>
                  <Typography className={classes.signName}>Peixes</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.horoscopeText}>{this.state.pisces}</Typography>
                </Grid>
              </Grid>
            </div>

          </Slider>
        </Paper>
      </div>
    );
  }
}


Carousel.propTypes={
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Carousel);