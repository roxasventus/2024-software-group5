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
import CircularProgress from '@mui/material/CircularProgress';
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
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({issues: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/Issues')
    const body = await response.json();
    return body;
  }

  progress = () => {
    const {completed} = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1});
  }

  render() {
    const { root, table, progress } = this.props;
    return (

      <div className="App">
        <div className="sidebar">
            <div className="logo">Team5</div>
            <div className = "login">Login</div>
            <div className="menu">
                <a href="/">Home</a>
                <a href="#">Issue</a>
                <a href="#">Analysis</a>
            </div>
        </div>

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
            {this.state.issues ? this.state.issues.map((i) => {
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
            }): 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>

      </div>
    );
  }
}

//export default withStyles(styles)(App);
export default App;
