import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WritingEssay } from '../models/writing-essay';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  private apiUrl = 'https://api.ielts-speller.com'; 
  constructor(private httpClient:HttpClient) { }

  public Essay(id : number) : Observable<WritingEssay>{
    return this.httpClient.get<WritingEssay>(`${this.apiUrl}/api/WritingEssay/${id}`);
  }

  public Essays() : Observable<WritingEssay[]>{
    return this.httpClient.get<WritingEssay[]>(`${this.apiUrl}/api/WritingEssay`);
  }

  public RandomEssay() : Observable<WritingEssay>{
    return this.httpClient.get<WritingEssay>(`${this.apiUrl}/api/WritingEssay/randomEssay`);
  }

  public BandScore(id: number, bandScore: string, data: any = {}): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/api/WritingEssay/${id}/${bandScore}`, data);
  }
}
