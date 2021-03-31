import axios from 'axios';

const API_KEY = '20020370-9a83858931624ea8d777f9f7a';
axios.defaults.url = 'https://pixabay.com/api';

const fetchImage = ({ search = '', page = 1, pageSize = 12 }) => {
    return axios
        .get(
            `${axios.defaults.url}/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`)
        .then(response => response.data.hits)
        .catch(() => []);
};
export default { fetchImage };