import { Typography, Card, CardContent, Grid} from '@material-ui/core';
import useStyles from './CardStyles';
import { AcUnit, WbSunny, CloudQueue, Grain } from '@material-ui/icons'

const MyCard = (input) =>{
    const classes = useStyles();
    const data = input.data;
    const weatherDescription = data.weather[0].main

    // These Determine which photo and icon to display
    const snow = weatherDescription.includes("Snow");
    const cloud = (weatherDescription.includes("Haze") || weatherDescription.includes("Cloud"));
    const rain = weatherDescription.includes("Rain");

    return (
        <div>
            <Grid item xs={12} sm={6} align="center" className={classes.gridPart} >
                <Card className={`${classes.card} ${rain ? classes.rain : snow ? classes.snow : cloud ? classes.cloud : classes.sun}`}  variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {data.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    {data.weather[0].description}
                    </Typography>
                    {rain ? <Grain/> : snow ? <AcUnit/> : cloud ? <CloudQueue/> : <WbSunny/>}
                    <Typography variant="body2" component="p">
                    {(data.main.temp - 275.15).toFixed(0)}°C
                    <br />
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

export default MyCard;
