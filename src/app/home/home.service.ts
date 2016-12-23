import {Injectable}                 from '@angular/core';
import {Http, Response,
        Headers, RequestOptions}    from '@angular/http';
import {Observable}                 from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppSettings}                from '../app.config';
import {IBorrower}                  from "./borrower";

@Injectable()
export class HomeService {
  private _borrowerUrl = AppSettings.BORROWER_URL;
  
  constructor(private _http: Http) {
  }
  
  private getBorrowerUrl(id) {
    return this._borrowerUrl + "/" + id;
  }
  
  getBorrowerById(id: number): Observable<IBorrower> {
    return this._http.get(this.getBorrowerUrl(id))
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  
  getBorrower(pfmFileId: string, isCoApp: boolean): Observable<IBorrower[]> {
    var url = this._borrowerUrl + "?pfmFileId=" + pfmFileId + "&isCoApp=" + isCoApp;
    return this._http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  
  addBorrower(borrower: IBorrower): Observable<IBorrower> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._borrowerUrl, JSON.stringify(borrower), options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  
  updateBorrower(borrower: IBorrower): Observable<IBorrower> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.put(this.getBorrowerUrl(borrower.id), JSON.stringify(borrower), options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error!');
  }
}
