import { Injectable } from '@angular/core';
import {List, Item, User, Comment} from "./list";
import {HttpClient} from "@angular/common/http";
import {Observable, pipe, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class CoronaShoppingListService {


  private api = 'http://shoppingcorona.s1710456032.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {}
    getAll():Observable<Array<List>> {
      return this.http.get(`${this.api}/lists`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler))
    }
    getSingle(id:number):Observable<List> {
      return this.http.get<List>(`${this.api}/lists/${id}`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler))
    }
    create(list:List):Observable<any> {
        return this.http.post(`${this.api}/lists`, list)
    .pipe(retry(3)).pipe(catchError(this.errorHandler))
    }
    update(list:List):Observable<any> {
      return this.http.put(`${this.api}/lists/${list.id}`, list)
        .pipe(retry(3)).pipe(catchError(this.errorHandler))
    }
    remove(id:number):Observable<any> {
      return this.http.delete(`${this.api}/lists/${id}`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler))
    }
  private errorHandler(error: Error | any): Observable<any>{
    return throwError(error);
  }
  takeOver(list:List){
    return this.http.put(`${this.api}/lists/takeover/${list.id}`, '')
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }



}




