import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private url = 'http://localhost:8080/toDo';

  constructor(private http: HttpClient) {
  }

  getToDos(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  addToDo(todo: Object): Observable<Object> {
    return this.http.post(`${this.url}`, todo);
  }

  deleteToDo(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}