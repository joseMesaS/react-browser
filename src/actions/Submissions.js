import Submissions from '../SubmissionsData/Submission';
import SubmissionAnswers from '../SubmissionsData/SubmissionAnswer'
export const FILTER_OPTIONS_MENU = 'FILTER_OPTIONS_MENU';
export const GET_SUBMISSIONS = 'GET_SUBMISSIONS';
export const SORT_BY_DATE_ASC = 'SORT_BY_DATE_ASC';
export const SORT_BY_DATE_DESC = 'SORT_BY_DATE_DESC';

export const activeFilterMenu = () => {
    return {
      type: FILTER_OPTIONS_MENU,
      payload: {}
    }
}

export const getSubmissions = () => {
    return {
        type: GET_SUBMISSIONS,
        payload: {submissions: Submissions, answers: SubmissionAnswers}
    }
}

export const sortByDateAsc = () => {
    return {
        type: SORT_BY_DATE_ASC,
        payload: {}
    }
}

export const sortByDateDesc = () => {
    return {
        type: SORT_BY_DATE_DESC,
        payload: {}
    }
}