import { Injectable } from "@angular/core";
import { LoginResDto } from "../dto/login/login-res-dto"

@Injectable({
    providedIn : 'root'
})
export class ApiService{
    saveData(data : LoginResDto) : void {
        localStorage.setItem('data', JSON.stringify(data))
    }

    getData() : string | null {
        const data = localStorage.getItem('data')
        let result : null | string = ''
        if(data) {
            result = JSON.parse(data).token
        }
        return result
    }

    getAllData() : LoginResDto | null {
        const data = localStorage.getItem('data')
        let result : null | LoginResDto = null
        if(data) {
            result = JSON.parse(data)
        }
        return result
    }

    logout(){
        localStorage.clear();   
    }

}