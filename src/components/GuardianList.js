import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Container, Card, CardHeader } from '@material-ui/core';

class GuardianList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guardians: [],
    };
  }
  componentDidMount() {}

  tableRow() {}

  render() {
    const section = {
      height: '100%',
      paddingTop: 50,
      backgroundColor: '#fff',
    };

    return (
      <Container maxWidth='lg'>
        <div style={section}></div>
        <h1>This is a GuardianList page</h1>
        <Card>
          <CardHeader
            style={{ textAlign: 'center' }}
            subheader='Guardian information can be viewed, edited, or deleted'
            title='Guardian List'
            action={
              <IconButton
                aria-label='add'
                color='primary'
                component={Link}
                to='/oss/guardiancreate'
              >
                <AddIcon />
              </IconButton>
            }
          />

          <table className='table table-striped' style={{ marginTop: 5 }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Relationship</th>
                <th>Student</th>
                <th>Registration Date</th>
                <th colSpan='4'>Actions</th>
              </tr>
            </thead>
            <tbody>{this.tableRow()}</tbody>
          </table>
        </Card>
      </Container>
    );
  }
}

export default GuardianList;
