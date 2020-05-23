import React from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';

class StudentList extends React.Component {
  componentDidMount() {
    axios
      .get('http://localhost:8080/students')
      .then(
        //always executed
        function (response) {
          console.log(response);
        }
      )
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Container maxWidth='lg'>
        <h1>This is a StudentList page</h1>
      </Container>
    );
  }
}

export default StudentList;
