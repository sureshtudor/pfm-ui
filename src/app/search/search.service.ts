import {Injectable, Output,
        EventEmitter}       from '@angular/core';
import {Http, Response}     from '@angular/http';
import {RestDataService}    from "../shared/rest-data.service";
import {AppSettings} from "../app.config";
import {Observable} from "rxjs";

// export interface IPfmFile {
//   pfmfileid: number,
//   product: string
//   status: string,
// }
//
export interface IPfmFile {
  // id: number,
  // pfmFileId: string,
  pfmfileid: number,
  status: string,
  product: string
}

@Injectable()
export class SearchService {
  
  // private _url = AppSettings.PFMFILE_URL;
  private _url = AppSettings.REST_DATA_URL +'/pfmfilesummary';
  
  @Output()
  fileSelectedEvent: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private _http: Http) {
  }
  
  private getPfmFileUrl(id) {
    return this._url + "/" + id;
  }
  
  getPfmFile(id: number): Observable<IPfmFile> {
    return this._http.get(this.getPfmFileUrl(id))
      .map(res => res.json())
      .catch(this.handleError);
  }
  
  getPfmFiles(): Observable<IPfmFile[]> {
    return this._http.get(this._url)
      .map(res => res.json())
      .catch(this.handleError);
    // return Observable.of(this.mock_pfmfiles).map(res => res);
  }
  
  fileSelected(file: IPfmFile) {
    localStorage.setItem("pfmFileId", String(file.pfmfileid));
    localStorage.setItem("isReadOnly", "false"); // todo: decide based on file status.
    this.fileSelectedEvent.emit(String(file.pfmfileid));
  }
  
  fileReset() {
    localStorage.removeItem("pfmFileId");
    localStorage.removeItem("isReadOnly");
    this.fileSelectedEvent.emit("Open File");
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error!');
  }

  private mock_pfmfiles = [
      {
        "pfmfileid": 1,
        // "pfmFileId": "PFM000000001001",
        "product": "MergePlus",
        "status": "Open"
      },
      {
        "pfmfileid": 2,
        // "pfmFileId": "PFM000000001002",
        "product": "RMCR",
        "status": "Amend"
      },
      {
        "pfmfileid": 3,
        // "pfmFileId": "PFM000000001003",
        "product": "4506-T",
        "status": "Closed"
      }
  ];
}

// @Injectable()
// export class SearchService extends RestDataService<IPfmFile> {
//   @Output()
//   fileSelectedEvent: EventEmitter<string> = new EventEmitter<string>();
//
//   constructor(http: Http) {
//     super(http, 'pfmfilesummary');
//   }
//
//   fileSelected(file: IPfmFile) {
//     localStorage.setItem("pfmFileId", String(file.pfmfileid));
//     localStorage.setItem("isReadOnly", "false"); // todo: decide based on file status.
//     this.fileSelectedEvent.emit(String(file.pfmfileid));
//   }
//
//   fileReset() {
//     localStorage.removeItem("pfmFileId");
//     localStorage.removeItem("isReadOnly");
//     this.fileSelectedEvent.emit("Open File");
//   }
// }
