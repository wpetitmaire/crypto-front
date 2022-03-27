import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {CoinbaseRecap} from "../interfaces/recapitulatif.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

/**
 * Created by willy on 24/03/2022
 */
@Injectable({
  providedIn: 'root'
})
export class RecapitulatifService {

  private static SERVER_URL = `${environment.back_server_url}:${environment.back_server_port}${environment.coinbase.base_url}`;
  private static GET_RECAP_URL = '/health/accounts';

  constructor(private http: HttpClient) {
  }

  getGlobalRecap(): Observable<CoinbaseRecap[]> {
    console.log("--> RecapitulatifService.getGlobalRecap()")
    return this.http.get<CoinbaseRecap[]>(`${RecapitulatifService.SERVER_URL}${RecapitulatifService.GET_RECAP_URL}`);
  }

}
