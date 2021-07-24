import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://my-portfolio-mhs.herokuapp.com'
});

export default instance