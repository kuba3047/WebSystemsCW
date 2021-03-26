import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import myImg from './../assets/images/myimage.png';
import myImg2 from './../assets/images/img1.png';
import myImg3 from './../assets/images/img2.png';
import { Link, withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { joke } from '../thirdparty/api-dadjokes.js';
import auth from './../auth/auth-helper';
import MainRouter from '../MainRouter';
import useMediaQuery from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
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
            Mcdonalds
          </Typography>
          <CardMedia className={classes.media} image={myImg} title='Mcdonalds' />

          <CardContent>
            <Typography variant='body2' align='center' component='p'>
              <Button component={Link} to='/' variant='outlined' color='primary'>
                Mcdonalds
              </Button>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant='h6' className={classes.title}>
            KFC
          </Typography>
          <CardMedia className={classes.media} image={myImg2} title='KFC' />

          <CardContent>
            <Typography variant='body2' align='center' component='p'>
              <Button component={Link} to='/' variant='outlined' color='primary'>
                KFC
              </Button>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <Typography variant='h6' className={classes.title}>
            Burger King
          </Typography>
          <CardMedia className={classes.media} image={myImg3} title='Burger King' />

          <CardContent>
            <Typography variant='body2' align='center' component='p'>
              <Button component={Link} to='/' variant='outlined' color='primary'>
                Burger King
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Typography variant='h4' align='center'>
        Go to my profile and edit to enter your choice
      </Typography>
    </>
  );
}
