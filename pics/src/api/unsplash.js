import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4446ee75a5a0df8b2a078ee6f1739ba9ad329fddd180d010562d8a8decdbcc35'
    }
});