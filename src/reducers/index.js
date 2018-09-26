import { combineReducers } from 'redux';
import Submmisions from './Submissions';
import MenuBar from './MenuBar';
import Pagination from './Pagination'

export default combineReducers({
    Submmisions,
    MenuBar,
    Pagination
});