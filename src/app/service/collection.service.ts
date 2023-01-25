import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CollectionExamDto } from "../dto/collection-exam/collection-exam-dto";
import { CollectionExamInsertReqDataDto } from "../dto/collection-exam/collection-exam-insert-req-data-dto";
import { CollectionExamInsertResDto } from "../dto/collection-exam/collection-exam-insert-res-dto";
import { CollectionExamUpdateReqDataDto } from "../dto/collection-exam/collection-exam-update-req-data-dto";
import { CollectionExamUpdateResDto } from "../dto/collection-exam/collection-exam-update-res-dto";
import { CollectionExamsDto } from "../dto/collection-exam/collection-exams-dto";
import { CollectionQuizDto } from "../dto/collection-quiz/collection-quiz-dto";
import { CollectionQuizInsertReqDataDto } from "../dto/collection-quiz/collection-quiz-insert-req-data-dto";
import { CollectionQuizInsertResDto } from "../dto/collection-quiz/collection-quiz-insert-res-dto";
import { CollectionQuizUpdateReqDataDto } from "../dto/collection-quiz/collection-quiz-update-req-data-dto";
import { CollectionQuizUpdateResDto } from "../dto/collection-quiz/collection-quiz-update-res-dto";
import { CollectionQuizsDto } from "../dto/collection-quiz/collection-quizs-dto";
const BASE_URL: string = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  constructor(private http: HttpClient) { }

  insertQuiz(data: CollectionQuizInsertReqDataDto): Observable<CollectionQuizInsertResDto> {
    return this.http.post<CollectionQuizInsertResDto>(`${BASE_URL}/collection-quizs`,data);
  }

  insertExam(data: CollectionExamInsertReqDataDto): Observable<CollectionExamInsertResDto> {
    return this.http.post<CollectionExamInsertResDto>(`${BASE_URL}/collection-exams`,data);
  }

  getAllCollectionQuizByTeacherSide(data:number): Observable<CollectionQuizsDto>{
    return this.http.get<CollectionQuizsDto>(`${BASE_URL}/collection-quizs/teacher/${data}`);
  }

  getAllCollectionExamByTeacherSide(data:number): Observable<CollectionExamsDto>{
    return this.http.get<CollectionExamsDto>(`${BASE_URL}/collection-exams/teacher/${data}`);
  }

  getByIdCollectionExam(data:number): Observable<CollectionExamDto>{
    return this.http.get<CollectionExamDto>(`${BASE_URL}/collection-exams/${data}`);
  }
  getByIdCollectionQuiz(data:number): Observable<CollectionQuizDto>{
    return this.http.get<CollectionQuizDto>(`${BASE_URL}/collection-quizs/${data}`);
  }

  scoringQuiz(data:CollectionQuizUpdateReqDataDto): Observable<CollectionQuizUpdateResDto>{
    return this.http.put<CollectionQuizUpdateResDto>(`${BASE_URL}/collection-quizs/`,data);
  }

  scoringExam(data:CollectionExamUpdateReqDataDto): Observable<CollectionExamUpdateResDto>{
    return this.http.put<CollectionExamUpdateResDto>(`${BASE_URL}/collection-exams/`,data);
  }
}
