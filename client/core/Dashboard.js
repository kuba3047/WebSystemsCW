import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import myImg from './../assets/images/myimage.png';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 1000,
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

  return (
    <Box display='flex' flexDirection='row'>
      <Card className={classes.card}>
        <Typography variant='h6' className={classes.title}>
          DASHBOARD
        </Typography>

        <CardContent>
          <Typography variant='body1' component='p'>
            Welcome to Lab Six.
            <Link to='/users'> Users </Link>
          </Typography>
          <Typography variant='body2' component='p'>
            <Button variant='outlined' color='primary' href='#outlined-buttons'>
              Buy Now
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
