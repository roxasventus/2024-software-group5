import './App.css';
import '../src/components/Issue.js';
import Issue from './components/Issue';
import { Component } from 'react';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import withStyles from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});
const issues = [
  {
    Title: '#1',
    Description: '10h',
    Reporter: '5h',
    ReportedDate: '2h',
    Comment: '0.0',
    History: 'milestone1',
  },

  {
    Title: '#2',
    Description: '10h',
    Reporter: '5h',
    ReportedDate: '2h',
    Comment: '0.0',
    History: 'milestone1',
  },

  {
    Title: '#3',
    Description: '10h',
    Reporter: '5h',
    ReportedDate: '2h',
    Comment: '0.0',
    History: 'milestone1',
  },
];

class App extends Component {
  render() {
    const { root, table } = this.props;
    return (
      <Paper className={root}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Reporter</TableCell>
              <TableCell>ReportedDate</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>History</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issues.map((i) => {
              return (
                <Issue
                  Title={i.Title}
                  Description={i.Description}
                  Reporter={i.Reporter}
                  ReportedDate={i.ReportedDate}
                  Comment={i.Comment}
                  History={i.History}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

//export default withStyles(styles)(App);
export default App;
