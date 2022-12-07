import axios from 'axios';
import ajax from 'rxjs/ajax'
import { Observable } from 'rxjs';

const moviesapi = 'http://localhost:3001/movies';

//ajax method
const observable = ajax({
  url: moviesapi,
  method: 'GET'
});
//returns ajax response

//axios method  
const observable$ = new Observable((observer)=>{
axios.get(moviesapi)
.then((res)=>{
  observer.next(res.data);
})
.catch((error)=>{
  console.log(error);
})
})

export default observable$;
