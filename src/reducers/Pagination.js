import {CHANGE_PAGE} from '../actions/Pagination';

const reducer = (state = {firts: 0, last: 10}, action = {}) => {
    switch(action.type) {
      case CHANGE_PAGE:
        return action.payload;
      default:
        return state;
    }
};
    
export default reducer;