import axios from 'axios';

const KEY = 'AIzaSyBNVF84eZeMzJOiIoC_VXfMcBnVq3oS8h8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});