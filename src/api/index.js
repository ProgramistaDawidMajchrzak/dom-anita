import axios from 'axios';

const url = 'http://dom-anita.herokuapp.com/news';

export const getData = () => {
    return axios.get(url);
};
// export const createNews = (news) => {
//     return axios.post(url, news);
// };
// export const deleteNews = (id) => {
//     return axios.delete(`${url}/${id}`);
// };