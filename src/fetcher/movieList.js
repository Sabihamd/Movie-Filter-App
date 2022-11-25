import {Observable} from 'rxjs';
import axios from "axios";

let observable$ = new Observable((observer) => {
  axios
    .get("http://localhost:3001/movies")
    .then((response) => {
      observer.next(response);
      observer.complete();
    })
    .catch((e) => {
      observer.error(e);
    });
});

export default observable$;
