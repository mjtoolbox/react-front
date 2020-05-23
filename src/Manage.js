import React from 'react';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';
import { BrowserRouter as Route, Link } from 'react-router-dom';

function Manage() {
  const section = {
    height: '100%',
    paddingTop: 50,
    backgroundColor: '#fff',
  };

  return (
    <Container maxWidth='lg'>
      <div style={section}></div>
      <Grid
        container
        direction='column'
        justify='flex-start'
        alignItems='flex-start'
        spacing={2}
      >
        <Grid item xs={12} sm={2}>
          <Button
            variant='contained'
            component={Link}
            to={'/guardians'}
            color='primary'
          >
            Manage Guardians
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button component={Link} to={'/students'} className='primary'>
            Manage Students
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button component={Link} to={'/teachers'} className='primary'>
            Manage Teachers
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Manage;
