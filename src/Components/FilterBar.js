import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';

const FilterBar = styled.div`
  position: absolute;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: red;
`

class FilterBarComponent extends PureComponent {
  static propTypes = {
    logo: PropTypes.string.isRequired
  }

  createElement = (element) => {
    this.props.sendRequest(element)
  }

  render() {
    return (
        <div>
            {this.props.activeMenu && <FilterBar></FilterBar>}
        </div> 
    );
  }
}

const mapStateToProps = function (state) {
    return {
      activeMenu: state.MenuBar
    }
};

export default connect(mapStateToProps)(FilterBarComponent)
