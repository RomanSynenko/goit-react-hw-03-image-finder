import axios from 'axios';

const API_KEY = '20020370-9a83858931624ea8d777f9f7a';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
};
// const fetchImage = ({ search = '', page = 1, pageSize = 12 }) => {
//     return axios
//         .get(
//             `/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`)
//         .then(response => response.data.hits)
//         .catch(() => []);
// };
const fetchImage = async ({ quary = '', page = 1 }) => {
    try {
        const { data } = await axios.get('', { params: { quary, page }, });
        console.log(data)
        return data.hits;
    } catch (error) {
        console.log('error', { error });
        return [];
    }
};
export default { fetchImage };