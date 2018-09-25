import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TopBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 77px;
  background-color: blue;
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
      <TopBar>
        
      </TopBar>
    );
  }
}

export default FilterBarComponent