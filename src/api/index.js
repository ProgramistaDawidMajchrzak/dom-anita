import axios from 'axios';

const url = 'http://localhost:5000/news';

export const getData = () => {
    return axios.get(url);
};
// export const createNews = (news) => {
//     return axios.post(url, news);
// };
// export const deleteNews = (id) => {
//     return axios.delete(`${url}/${id}`);
// };