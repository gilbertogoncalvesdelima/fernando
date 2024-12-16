import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManualPostingsService {
  private _fileUploadState: Subject<any> = new Subject<any>();

  constructor() {}

  get fileUploadState(): Subject<any> {
    return this._fileUploadState;
  }

  set fileUploadState(file: any) {
    this._fileUploadState.next(structuredClone(file))
  }
}
