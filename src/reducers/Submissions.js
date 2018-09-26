import {GET_SUBMISSIONS, SORT_BY_DATE_ASC, SORT_BY_DATE_DESC} from '../actions/Submissions';
import {FILTER_BY_DATE} from '../actions/Filters';
import moment from 'moment';

const reducer = (state = [], action = {}) => {
  switch(action.type) {
    case GET_SUBMISSIONS:
      return  {submissions: action.payload.submissions,
        answers: action.payload.answers.reduce((answers, answer) => {
        answers[answer.SubmissionId] = answer
        return answers
      }, {})};
    
    case SORT_BY_DATE_ASC:
      return {submissions: Object.values({...state}.submissions).sort(function(a,b){
        return new Date(a.Date) - new Date(b.Date);
      }), answers: {...state.answers}}
    
    case SORT_BY_DATE_DESC:
      return {submissions: Object.values({...state}.submissions).sort(function(a,b){
         return new Date(b.Date) - new Date(a.Date);
      }), answers: {...state.answers}}
    case FILTER_BY_DATE:
      return {submissions: [...state.submissions].filter(element => moment(element.Date).isSame(action.payload, 'days') ), answers: {...state.answers}}
    default:
      return state
    }
}
  
export default reducer

