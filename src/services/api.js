import axios from 'axios';
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32895691-46e81bd7531541cc66e325b33'
axios.defaults.params = {
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12


}
export const requestPhotos = async (query, page= 1) => {
  const { data  } = await axios.get(
    `https://pixabay.com/api/?q=${query}&key=${API_KEY}&page=${page}`
  );
 
  return data;
};

