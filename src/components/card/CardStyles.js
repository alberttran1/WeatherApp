import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    maxWidth: 500,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '110%',
    color: 'rgb(250,250,250)',
    animation: `$hover 2s ease-in-out infinite`,
    '&:hover': {
      animation : '$rise 0.1s ease-in',
      boxShadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
      transform: 'translatey(-10px)',
    }
  },
  rain: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://cdn.hipwallpaper.com/i/52/67/d40o9U.jpg)',
  },
  snow: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ993Zx6IKByHLYmlSXW1AH7Vjhe8DmEssXRA&usqp=CAU)',
  },
  cloud: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8hbtiPeQ5kMZEh44vnPp-TlqTgKm7pPn8w&usqp=CAU)',
  },
  sun: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://media.istockphoto.com/photos/blue-sky-with-bright-sun-and-clouds-picture-id1007768414?k=6&m=1007768414&s=612x612&w=0&h=2T_GnDxb1nQlQagY8daVoYhW3_jRRUbcAdw64NbrEPg=)',
  },

  "@keyframes hover":{
    '0%': {
      boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
      transform: 'translatey(0px)',
    },
    '50%': {
      boxShadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
      transform: 'translatey(-10px)',
    },
    '100%': {
      boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
      transform: 'translatey(0px)',
    },
  },

  
  "@keyframes rise":{
    '0%': {
      boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
      transform: 'translatey(0px)',
    },
    '100%': {
      boxShadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
      transform: 'translatey(-10px)',
    },
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: 'rgb(250,250,250)',
  },
  gridPart:{
    display: 'block',
  },
  
}));

export default useStyles;