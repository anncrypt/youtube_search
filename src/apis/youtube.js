import axios from 'axios';

const KEY = 'AIzaSyCie_3HHTpdh5BRwm8D2BvNIcMzxOcsFdk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});