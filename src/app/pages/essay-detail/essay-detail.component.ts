import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartConfiguration } from 'chart.js';
import { WritingEssay } from 'src/app/models/writing-essay';
import { CallApiService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-essay-detail',
  templateUrl: './essay-detail.component.html',
})
export class EssayDetailComponent implements OnInit {
  public ctx: any;
  public isLoadingEssay: boolean = true;
  public essay : WritingEssay | undefined;
  public scores: number[] = [];

  constructor(private route: ActivatedRoute, private callApiService: CallApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Get the ID from the route parameters
      this.loadEssay(id); // Load the essay based on the ID
    });
  }

  loadEssay(id: number): void {
    this.callApiService.Essay(id).subscribe({
      next: (response: WritingEssay) => {
        this.essay = response;
        this.scores.push(response.score55);
        this.scores.push(response.score60);
        this.scores.push(response.score65);
        this.scores.push(response.score70);
        this.scores.push(response.score75);
        this.scores.push(response.score80);
        this.scores.push(response.score85);
        this.isLoadingEssay = false;
        this.showStatistic();
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    })
  }

  public showStatistic() {
    this.ctx = (document.getElementById('mychart') as HTMLCanvasElement).getContext('2d');
    if (this.ctx) {
      const data = {
        labels: ['5.5', '6.0', '6.5', '7.0', '7.5', '8.0', '8.5'], // Example labels
        datasets: [{
          data: this.scores,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };
      const config: ChartConfiguration<'bar'> = { // Specify the type here
        type: 'bar', // 'bar' is a key of ChartTypeRegistry
        data: data,
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 20// Adjust this value to increase/decrease the font size for x-axis labels
                }
              },
              title: {
                display: true,
                text: 'other people\'s opinion', // Set the title for x-axis if needed
                font: {
                  size: 16 // Adjust this value for x-axis title font size
                }
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 20// Adjust this value to increase/decrease the font size for x-axis labels
                }
              },
            }
          }
        }
      };
      new Chart(this.ctx, config);
    }
  }
}
