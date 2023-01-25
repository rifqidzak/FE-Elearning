import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AttendanceExamInsertReqDataDto } from "../dto/attendance-exam/attendance-exam-insert-req-data-dto";
import { AttendanceExamInsertResDto } from "../dto/attendance-exam/attendance-exam-insert-res-dto";
import { AttendanceExamUpdateReqDataDto } from "../dto/attendance-exam/attendance-exam-update-req-data-dto";
import { AttendanceExamUpdateResDto } from "../dto/attendance-exam/attendance-exam-update-res-dto";
import { AttendanceExamsDto } from "../dto/attendance-exam/attendance-exams-dto";
import { AttendanceQuizInsertReqDataDto } from "../dto/attendance-quiz/attendance-quiz-insert-req-data-dto";
import { AttendanceQuizInsertResDto } from "../dto/attendance-quiz/attendance-quiz-insert-res-dto";
import { AttendanceQuizUpdateReqDataDto } from "../dto/attendance-quiz/attendance-quiz-update-req-data-dto";
import { AttendanceQuizUpdateResDto } from "../dto/attendance-quiz/attendance-quiz-update-res-dto";
import { AttendanceQuizsDto } from "../dto/attendance-quiz/attendance-quizs-dto";
import { AttendanceTheoryInsertReqDataDto } from "../dto/attendance-theory/attendance-theory-insert-req-data-dto";
import { AttendanceTheoryInsertResDto } from "../dto/attendance-theory/attendance-theory-insert-res-dto";
import { AttendanceTheoryUpdateReqDataDto } from "../dto/attendance-theory/attendance-theory-update-req-data-dto";
import { AttendanceTheoryUpdateResDto } from "../dto/attendance-theory/attendance-theory-update-res-dto";
import { AttendanceTheorysDto } from "../dto/attendance-theory/attendance-theorys-dto";
const BASE_URL: string = 'http://localhost:8080'
@Injectable({
  providedIn: "root"
})
export class AttendanceService {
  constructor(private http: HttpClient) { }
  insertAttendanceTheory(data: AttendanceTheoryInsertReqDataDto): Observable<AttendanceTheoryInsertResDto> {
    return this.http.post<AttendanceTheoryInsertResDto>(`${BASE_URL}/attendance-theorys`, data)
  }

  insertAttendanceQuiz(data: AttendanceQuizInsertReqDataDto): Observable<AttendanceQuizInsertResDto> {
    return this.http.post<AttendanceQuizInsertResDto>(`${BASE_URL}/attendance-quizs`, data)
  }

  insertAttendanceExam(data: AttendanceExamInsertReqDataDto): Observable<AttendanceExamInsertResDto> {
    return this.http.post<AttendanceExamInsertResDto>(`${BASE_URL}/attendance-exams`, data)
  }

  attendanceTheoryGetAllByTeacherSide(data:number): Observable<AttendanceTheorysDto>{
    return this.http.get<AttendanceTheorysDto>(`${BASE_URL}/attendance-theorys/teacher/${data}`)
  }

  attendanceQuizGetAllByTeacherSide(data:number): Observable<AttendanceQuizsDto>{
    return this.http.get<AttendanceQuizsDto>(`${BASE_URL}/attendance-quizs/teacher/${data}`)
  }

  attendanceExamGetAllByTeacherSide(data:number): Observable<AttendanceExamsDto>{
    return this.http.get<AttendanceExamsDto>(`${BASE_URL}/attendance-exams/teacher/${data}`)
  }

  approvingTheory(data:AttendanceTheoryUpdateReqDataDto): Observable<AttendanceTheoryUpdateResDto>{
    return this.http.put<AttendanceTheoryUpdateResDto>(`${BASE_URL}/attendance-theorys`,data)
  }

  approvingQuiz(data:AttendanceQuizUpdateReqDataDto): Observable<AttendanceQuizUpdateResDto>{
    return this.http.put<AttendanceQuizUpdateResDto>(`${BASE_URL}/attendance-quizs`,data)
  }

  approvingExam(data:AttendanceExamUpdateReqDataDto): Observable<AttendanceExamUpdateResDto>{
    return this.http.put<AttendanceExamUpdateResDto>(`${BASE_URL}/attendance-exams`,data)
  }

  attendanceTheoryGetAllByStudentSide(data:number): Observable<AttendanceTheorysDto>{
    return this.http.get<AttendanceTheorysDto>(`${BASE_URL}/attendance-theorys/student/${data}`)
  }

  attendanceQuizGetAllByStudentSide(data:number): Observable<AttendanceQuizsDto>{
    return this.http.get<AttendanceQuizsDto>(`${BASE_URL}/attendance-quizs/student/${data}`)
  }

  attendanceExamGetAllByStudentSide(data:number): Observable<AttendanceExamsDto>{
    return this.http.get<AttendanceExamsDto>(`${BASE_URL}/attendance-exams/student/${data}`)
  }

}
