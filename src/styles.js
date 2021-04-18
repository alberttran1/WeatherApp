import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  centerContainer: {
    padding: theme.spacing(8, 0, 6),
    justifyContent: 'center'
  },  
  container: {
    justifyContent:'center',
  },
  
}));

export default useStyles;