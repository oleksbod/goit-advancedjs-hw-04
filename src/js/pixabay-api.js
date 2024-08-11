import axios from 'axios';

const API_KEY = '45384085-93240435f28f8173a532fd559';

export const fetchImages = async (query, page = 1, perPage = 15) => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

    const response = await axios.get(url);

    return response.data;
}