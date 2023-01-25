import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginReqDto } from "../dto/login/login-req-dto";
import { LoginResDto } from "../dto/login/login-res-dto";

import { Observable } from "rxjs";
const BASE_URL  : string = 'http://localhost:8080'

@Injectable({
    providedIn : 'root'
})
export class LoginService{
    constructor(private http : HttpClient){}

    login(data : LoginReqDto) : Observable<LoginResDto>{
        return this.http.post<LoginResDto>(`${BASE_URL}/login`,data);
    }
}