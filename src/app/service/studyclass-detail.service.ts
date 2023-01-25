import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { StudyClassDetailInsertReqDataDto } from "../dto/studyclass-detail/studyclass-detail-insert-req-dto";
import { StudyClassDetailInsertResDto } from "../dto/studyclass-detail/studyclass-detail-insert-res-dto";
import { StudyClassesDetailDto } from "../dto/studyclass-detail/studyclasses-detail-dto";
import { TheoryListStudentComponent } from "../pages/theory/theory-list-student/theory-list-student.component";
import { StudyClassDetailDto } from "../dto/studyclass-detail/studyclass-detail-dto";
const BASE_URL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class StudyClassDetailService {
  constructor(private http: HttpClient) { }
  insert(data: StudyClassDetailInsertReqDataDto): Observable<StudyClassDetailInsertResDto> {
    return this.http.post<StudyClassDetailInsertResDto>(`${BASE_URL}/study-class-details`, data)
  }

  getAllByStudent(data: number): Observable<StudyClassesDetailDto>{
    return this.http.get<StudyClassesDetailDto>(`${BASE_URL}/study-class-details/?id=${data}`)
  }

  getById(id: number): Observable<StudyClassDetailDto> {
    return this.http.get<StudyClassDetailDto>(`${BASE_URL}/study-class-details/${id}`)
  }
}
