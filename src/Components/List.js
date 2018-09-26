import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { getSubmissions } from '../actions/Submissions'
import { withStyles } from '@material-ui/core/styles'
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const List = styled.div`
  width: 70%;
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: #FC5C00;
`

const styles = theme => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(17),
      color: theme.palette.text.secondary,
    },
})

class ListComponent extends PureComponent {

  state = {
    expanded: null,
    first: 0,
    last: 10 
  }

  componentWillMount() {
    this.props.getSubmissions()  
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  renderListItem = (arr, classes, expanded) => {
    return arr.map((item, index) => {
        return (
          <ExpansionPanel expanded={expanded === `panel${index}`} onChange={this.handleChange(`panel${index}`)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{item.Date}</Typography>
              <Typography className={classes.secondaryHeading}>{item.Address}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              
            </ExpansionPanelDetails>
          </ExpansionPanel>)
    })
  }

  render() {
    const { classes, theme, submissions, pagination} = this.props;
    const { expanded } = this.state;
    
    return ( 
      
      <List>
          {submissions && this.renderListItem(submissions.slice(pagination.first, pagination.last), classes, expanded)}
          {!submissions && 'Loading...'}
      </List>
     
      
    );
  }
}

const mapStateToProps = function (state) {
    return {
      submissions: state.Submmisions.submissions,
      pagination: state.Pagination
    }
};

export default connect(mapStateToProps, {getSubmissions})(withStyles(styles, { withTheme: true })(ListComponent))
