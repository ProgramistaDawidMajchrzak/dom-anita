import * as api from '../../api';

export const getNews = () => async (dispatch) => {
    try {
        const { data } = await api.getData();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (err) {
        console.log(err.message);
    };
};
// export const createNews = (news) => async (dispatch) => {
//     try {
//         const { data } = await api.createNews();
//         dispatch({ type: "ADD_NEWS", payload: data });
//     } catch (err) {
//         console.log(err.message);
//     };
// };
// export const deleteNews = (id) => async (dispatch) => {
//     try {
//         const response = await api.deleteNews();
//         dispatch({ type: "DELETE_NEWS", payload: response });
//     } catch (err) {
//         console.log(err.message);
//     };
// };