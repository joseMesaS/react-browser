import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { getSubmissions, sortByDateAsc } from '../actions/Submissions'


const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`

class ListContainerComponent extends PureComponent {

  componentWillMount() {
    this.props.getSubmissions()
      
  }

  componentDidMount() {
      this.props.sortByDateAsc()
  }


  createElement = (element) => {
    this.props.sendRequest(element)
  }

  render() {
    return ( 
      <ListContainer>
        
      </ListContainer>
    );
  }
}



const mapStateToProps = function (state) {
    return {
      submissions: state.Submmisions
    }
};

export default connect(mapStateToProps, {getSubmissions, sortByDateAsc})(ListContainerComponent)