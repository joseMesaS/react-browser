export const CHANGE_PAGE = 'CHANGE_PAGE';

export const changePage = (first, last) => {
    return {
      type: CHANGE_PAGE,
      payload: {first, last}
    }
}