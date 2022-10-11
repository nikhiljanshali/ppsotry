import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Config } from '../../app/models/config';
import { IConfig } from '../model/config.model';

@Injectable({
  providedIn: 'root'
})

export class AppinitService {

  constructor(private httpClient: HttpClient) { }

  // keep track of config
  private config = new BehaviorSubject<IConfig>(Config as IConfig);
  config$: Observable<IConfig> = this.config.asObservable();


  private static _config: IConfig;

  static get Config(): IConfig {
    return this._config || Config;
  }

  // set configurtaion
  private _createConfig(config: any, withError: boolean): void {
    // cast all keys as are
    const _config = { ...Config, ...(<IConfig>config) };

    // is severd
    _config.isServed = true;

    // with error
    _config.withError = withError;

    // set static member
    AppinitService._config = _config;

    // next
    this.config.next(config);
  }

  loadAppConfig(): Observable<boolean> {
    return this.httpClient.get("../../assets/configuration/config.json").pipe(map((response) => {
      this._createConfig(response, false);
      return true;
    }));
  }

}
