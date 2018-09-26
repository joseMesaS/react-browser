import React, {PureComponent} from 'react';
import styled from 'styled-components';
import ListComponent from './List'
import PaginationComponent from './Pagination'

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: rgb(228,57,29);
  background: linear-gradient(0deg, rgba(228,57,29,1) 0%, rgba(238,101,44,1) 9%, rgba(238,98,40,1) 9%, rgba(244,149,115,1) 54%);
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow-y: scroll;
`

class ListContainerComponent extends PureComponent {

  render() {
    return ( 
      <ListContainer>
        <ListComponent />
        <PaginationComponent/>
      </ListContainer>
    );
  }
}

export default ListContainerComponent