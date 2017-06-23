import axios from 'axios';

export default function fetchComponentData(token = 'token') {
  const promises = [axios.get('http://localhost:8000/api/posts'), axios.get('http://localhost:8000/api/authenticate?token=' + token)];
  return Promise.all(promises);
}
