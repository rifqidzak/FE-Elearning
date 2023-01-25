import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StudyClassesDto } from "../dto/studyclass/studyclasses-dto";
import { HttpClient } from "@angular/common/http";
import { StudyClassDto } from "../dto/studyclass/studyclass-dto";
const BASE_URL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class StudyClassService {
  constructor(private http: HttpClient) { }
  getByTeacherSide(data: number): Observable<StudyClassesDto> {
    return this.http.get<StudyClassesDto>(`${BASE_URL}/study-class/ts/?id=${data}`)
  }

  getAll(): Observable<StudyClassesDto> {
    return this.http.get<StudyClassesDto>(`${BASE_URL}/study-class`)
  }

  getById(data: number): Observable<StudyClassDto> {
    return this.http.get<StudyClassDto>(`${BASE_URL}/study-class/${data}`)
  }
}
