import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map, filter } from "rxjs/operators";
import { environment as env } from "src/environments/environment";
import { MockCookieService } from './mock-coockie.service';

export class RequestGatewayConfig {
  vipDev: any;
  vipGateway: any;
}

@Injectable({
  providedIn: 'root'
})
export class GatewayViewService {

  private subParametrosPortal = new BehaviorSubject(null);
  private obsParametrosPortal = this.subParametrosPortal.asObservable();

  public consultaParametrosPortal() {
    return this.obsParametrosPortal.pipe(filter(p => p != null && p != undefined));
  }

  constructor(
    private http: HttpClient,
    private mockCookieService: MockCookieService
  ) {
    this.consultarVip()
      .subscribe(parametrosPortal => {
        console.log('version: ', env.config_aplication.version);
        console.log(env.config_local.mock_cookie == true ? 'parametros portal mock' : 'parametros portal', parametrosPortal)
      });
  }

  requestConfig(config: any): RequestGatewayConfig { 
    let requestConfig: RequestGatewayConfig = new RequestGatewayConfig();
    requestConfig.vipDev = config.vip_dev;
    requestConfig.vipGateway = config.vip_gateway;
    return requestConfig;
  }

  public get<T>(path: String, request: RequestGatewayConfig): Observable<T> {
    if (env.config_local.ambiente_local) {
      return this.http.get<T>(`${request.vipDev + path}`);
    } else {
      return this.http.get<T>(`${request.vipGateway + path}`);
    }
  }

  public post<T>(path: String, dto: any, request: RequestGatewayConfig): Observable<T> {
    if (env.config_local.ambiente_local) {
      return this.http.post<T>(`${request.vipDev + path}`, dto);
    } else {
      return this.http.post<T>(`${request.vipGateway + path}`, dto);
    }
  }

  public postWithHeaders<T>(path: String, dto: any, request: RequestGatewayConfig, headers: HttpHeaders): Observable<T> {
    if (env.config_local.ambiente_local) {
      return this.http.post<T>(`${request.vipDev + path}`, dto, { headers });
    } else {
      return this.http.post<T>(`${request.vipGateway + path}`, dto, { headers });
    }
  }

  public put<T>(path: string, dto: any, request: RequestGatewayConfig): Observable<T> {
    if (env.config_local.ambiente_local) {
      return this.http.put<T>(`${request.vipDev + path}`, dto);
    } else {
      return this.http.put<T>(`${request.vipGateway + path}`, dto);
    }
  }

  public delete<T>(path: string, request: RequestGatewayConfig): Observable<T> {
    if (env.config_local.ambiente_local) {
      return this.http.delete<T>(`${request.vipDev + path}`);
    } else {
      return this.http.delete<T>(`${request.vipGateway + path}`);
    }
  }

  public postFormData<T>(aplicacao: string, usuario: string, fileList: File[], request: RequestGatewayConfig): Observable<T> {
    const formData: FormData = new FormData();
    for (let index = 0; index < fileList.length; index++) {
      const element = fileList[index];
      formData.append('file', element);
    }
    if (env.config_local.ambiente_local) {
      return this.http.post<T>(`${env.config_local.context_gateway_upload_dev}?aplicacao=${aplicacao}&usuario=${usuario}`, formData);
    } else {
      return this.http.post<T>(`${env.config_aplication.context_gateway_upload}?aplicacao=${aplicacao}&usuario=${usuario}`, formData);
    }
  }

  public postFile<T>(path: String, dto: any, request: RequestGatewayConfig): Observable<T> {
    if (env.config_local.ambiente_local) {
      return this.http.post<T>(`${request.vipDev + path}`, dto, { responseType: 'blob' as 'json' });
    } else {
      return this.http.post<T>(`${request.vipGateway + path}`, dto, { responseType: 'blob' as 'json' });
    }
  }

  private consultarVip(): Observable<any> {
    if(env.config_local.mock_cookie) {
       let param: any = '';
       if(!env.config_aplication.novo_cookie) {
         param = `?novoCookie=N`;
       }
       return this.mockCookieService.carregar(env.config_local.mock_tipo_cookie)      
       .pipe(
         map(parametrosPortal => {
           // @ts-ignore                  
           parametrosPortal.vip = env.parametrosPortal_descrip || parametrosPortal.descrip;
           // @ts-ignore
           this._vipServico = parametrosPortal.vip;
           this.subParametrosPortal.next(parametrosPortal);
           return parametrosPortal;
         })
       ); 
    }else {
       let param: any = '';
       if(!env.config_aplication.novo_cookie) {
         param = `?novoCookie=N`;
       }
       return this.http
       .get(`${env.config_aplication.context_gateway_portal_properties + param}`)
       .pipe(
         map((parametrosPortal: any) => {
           // @ts-ignore                  
           parametrosPortal.vip = env.parametrosPortal_descrip || parametrosPortal.descrip;
           // @ts-ignore
           this._vipServico = parametrosPortal.vip;
           this.subParametrosPortal.next(parametrosPortal);
           return parametrosPortal;
         })
       ); 
     }  
   }
}
