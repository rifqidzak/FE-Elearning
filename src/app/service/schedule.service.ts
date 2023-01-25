import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ScheduleExamsDto } from "../dto/schedule-exam/schedule-exams-dto";
import { ScheduleQuizsDto } from "../dto/schedule-quiz/schedule-quizs-dto";
import { ScheduleTheoriesDto } from "../dto/schedule-theory/schedule-theories-dto";
const BASE_URL  : string = 'http://localhost:8080'
@Injectable({
  providedIn :'root'
})
export class ScheduleService{

  constructor(private http : HttpClient){}

  getAllScheduleTheory(data : number): Observable<ScheduleTheoriesDto>{
    return this.http.get<ScheduleTheoriesDto>(`${BASE_URL}/schedule-theories-controller/student/${data}`)
  }

  getAllScheduleQuiz(data : number): Observable<ScheduleQuizsDto>{
    return this.http.get<ScheduleQuizsDto>(`${BASE_URL}/schedule-quizs-controller/student/${data}`)
  }

  getAllScheduleExam(data : number): Observable<ScheduleExamsDto>{
    return this.http.get<ScheduleExamsDto>(`${BASE_URL}/schedule-exams-controller/student/${data}`)
  }
}
