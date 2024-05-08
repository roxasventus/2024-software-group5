import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Issue extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.Title}</TableCell>
        <TableCell>{this.props.Description}</TableCell>
        <TableCell>{this.props.Reporter}</TableCell>
        <TableCell>{this.props.ReportedDate}</TableCell>
        <TableCell>{this.props.Comment}</TableCell>
        <TableCell>{this.props.History}</TableCell>
      </TableRow>
    );
  }
}

export default Issue;
