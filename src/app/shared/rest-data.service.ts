import {Injectable}                 from '@angular/core';
import {Http, Response,
        Headers, RequestOptions}    from '@angular/http';
import {Observable}                 from 'rxjs/Rx';
import {AppSettings}                from "../app.config";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export abstract class RestDataService<T> {
  
  private restUrl: string;
  
  constructor(protected _http: Http, path: string) {
    this.restUrl = AppSettings.REST_DATA_URL + '/' + path;
  }
  
  private getEntityUrl(id: number) {
    return this.restUrl + '/' + id;
  }
  
  public create(entity: T): Observable<T> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this.restUrl, JSON.stringify(entity), options)
      .map((res: Response) => <T>res.json())
      .catch(this.handleError);
  }
  
  public update(entity: T, primaryKey: any): Observable<T> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.put(this.getEntityUrl(primaryKey), JSON.stringify(entity), options)
      .map((res: Response) => <T>res.json())
      .catch(this.handleError);
  }
  
  public findOne(id: any): Observable<T> {
    return this._http.get(this.getEntityUrl(id))
      .map((res: Response) => <T>res.json())
      .catch(this.handleError);
  }
  
  public findAll(): Observable<T[]> {
    return this._http.get(this.restUrl)
      .map((res: Response) => <T[]>res.json())
      .catch(this.handleError);
  }
  
  public search(query: string): Observable<T[]> {
    let queryUrl = this.restUrl +'/'+ query; //i.e, '?pfmFileId=5001&isCoApp=true';
    return this._http.get(queryUrl)
      .map((res: Response) => <T[]>res.json())
      .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error!');
  }
}

