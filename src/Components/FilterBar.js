import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { sortByDateAsc, sortByDateDesc } from '../actions/Submissions'
import DateFilterComponent from './DateFilter'


const FilterBar = styled.div`
  
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #E4351D;

`

class FilterBarComponent extends PureComponent {
 

  createElement = (element) => {
    this.props.sendRequest(element)
  }

  render() {
    return (
        <div>
            {this.props.activeMenu && 
            <FilterBar>
                <button onClick={this.props.sortByDateDesc}> desc</button>
                <button onClick={this.props.sortByDateAsc}>asc</button>
                <DateFilterComponent/>
            </FilterBar>}
        </div> 
    );
  }
}

const mapStateToProps = function (state) {
    return {
      activeMenu: state.MenuBar
    }
};

export default connect(mapStateToProps, {sortByDateAsc, sortByDateDesc})(FilterBarComponent)
