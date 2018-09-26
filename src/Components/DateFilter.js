import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { filterByDate } from '../actions/Filters'
import { getSubmissions } from '../actions/Submissions'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class DateFilterComponent extends PureComponent {
  state = {
    date: moment("2014-07-15 17:53:02.127")
  }

  handleChange = (date) => {    
    this.props.getSubmissions() 
    this.setState({
        date: date
    }, ()=>{this.props.filterByDate(date)});
  }

  render() {
    return (
        <div>
            <DatePicker
                selected={this.state.date}
                onChange={this.handleChange}
            />
        </div> 
    );
  }
}

const mapStateToProps = function (state) {
    return {
        submissions: state.Submmisions.submissions
    }
};

export default connect(mapStateToProps, {filterByDate, getSubmissions})(DateFilterComponent)