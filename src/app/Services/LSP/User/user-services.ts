import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../Models/LSP/User/user.model';
import { LotsPayment } from '../../../Models/LSP/LotsPayment/lots-payment.model';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private apiUrl = `${environment.apiUrl}/lsp/`;

  constructor(private http: HttpClient) {}
  
  getCustomerName(post: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}verifyName`,post);
  }
  getLots(number: any): Observable<LotsPayment[]>{
    return this.http.get<LotsPayment[]>(`${this.apiUrl}checkLots/${number}`);
  }
}
