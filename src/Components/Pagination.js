import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux';
import {changePage} from '../actions/Pagination'


class PaginationComponent extends Component {

  handlePageClick = (data) => {
    this.props.changePage(data.selected*10, (data.selected+1)*10)
  };

  render() {
    return (
      <div className="commentBox">
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={Math.ceil(this.props.totalItems / 10)}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    );
  }
};

const mapStateToProps = function (state) {
  return {
    pagination: state.Pagination,
    totalItems: Object.keys(state.Submmisions.submissions).length
  }
};

export default connect(mapStateToProps, { changePage })(PaginationComponent)