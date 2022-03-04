import axios from 'axios';
import env from '../env.json'

export default axios.create({
   baseURL:  'https://badco.herokuapp.com'
});
