import {ajax} from 'rxjs/ajax';

const moviesapi = 'http://localhost:3001/movies';
const observable = ajax({
  url: moviesapi,
  method: 'GET'
});

export default observable;
