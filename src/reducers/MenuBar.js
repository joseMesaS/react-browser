import {FILTER_OPTIONS_MENU} from '../actions/Submissions';

const reducer = (state = false, action = {}) => {
    switch(action.type) {
      case FILTER_OPTIONS_MENU:
        return !state;
      default:
        return state;
    }
};
    
export default reducer;