export const FILTER_BY_DATE = 'FILTER_BY_DATE';

export const filterByDate = (date) => {
    return {
      type: FILTER_BY_DATE,
      payload: date
    };
};