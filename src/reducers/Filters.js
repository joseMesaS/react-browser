const GET_SUBMISSIONS = 'GET_SUBMISSIONS';
const SORT_SUBMISSIONS = 'SORT_SUBMISSIONS';

const reducer = (state = [], action = {}) => {
    switch(action.type) {
      case GET_SUBMISSIONS:
        return action.payload
      case SORT_SUBMISSIONS:
        return action.payload
      default:
        return state
    }
}
    
export default reducer