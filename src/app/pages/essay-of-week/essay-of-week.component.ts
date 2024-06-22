import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WritingEssay } from 'src/app/models/writing-essay';
import { CallApiService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-essay-of-week',
  templateUrl: './essay-of-week.component.html',
})
export class EssayOfWeekComponent implements OnInit {
  public isLoadingEssay: boolean = true;
  public essays: WritingEssay[] = [];
  constructor(private router: Router, private callApiService: CallApiService) { }

  ngOnInit(): void {
    this.callApiService.Essays().subscribe({
      next: (response: WritingEssay[]) => {
        this.essays = response;
        this.isLoadingEssay = false;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    })
  }
  navigateToEssay(id: number): void {
    this.router.navigate(['/essay', id]);
  }
}
