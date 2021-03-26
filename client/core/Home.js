import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import myImg from './../assets/images/myimage.png';
import myImg2 from './../assets/images/img1.png';
import myImg3 from './../assets/images/img2.png';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { joke } from '../thirdparty/api-dadjokes.js';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    minWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a': {
      color: '#3f4771',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [jokes, setJokes] = useState({
    joke: 'No joke available :(',
    error: '',
  });
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    joke(signal).then((data) => {
      if (data && data.error) {
        console.log('error in getting jokes');
        console.log(data.error);
        //setJokes(...jokes, error: data.error)
      } else {
        console.log('Here is the user data');
        console.log(data);
        if (data != undefined) {
          console.log('setting the data');
          setJokes(data);
        }
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Typography variant='h3' align='center' className={classes.title}>
        Here is a random joke to cheer you up 😊
      </Typography>
      <Typography variant='h4' align='center'>
        {jokes.joke}
      </Typography>
      <Box display='flex' flexDirection='row'>
        <Card className={classes.card}>
          <Typography variant='h6' className={classes.title}>
            Option 1
          </Typography>
          <CardMedia className={classes.media} image={myImg} title='My Image' />

          <CardContent>
            <Typography variant='body2' align='center' component='p'>
              <Button component={Link} to='/dashboard' variant='outlined' color='primary'>
                Option 1
              </Button>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant='h6' className={classes.title}>
            Option 2
          </Typography>
          <CardMedia className={classes.media} image={myImg2} title='My Image' />

          <CardContent>
            <Typography variant='body2' align='center' component='p'>
              <Button component={Link} to='/dashboard' variant='outlined' color='primary'>
                Option 2
              </Button>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant='h6' className={classes.title}>
            Option 3
          </Typography>
          <CardMedia className={classes.media} image={myImg3} title='My Image' />

          <CardContent>
            <Typography variant='body2' align='center' component='p'>
              <Button component={Link} to='/dashboard' variant='outlined' color='primary'>
                Option 3
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
