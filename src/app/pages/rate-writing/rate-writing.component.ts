import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js'
import { WritingEssay } from 'src/app/models/writing-essay';
import { CallApiService } from 'src/app/services/call-api.service';
Chart.register(...registerables)
@Component({
  selector: 'app-rate-writing',
  templateUrl: './rate-writing.component.html',
})
export class RateWritingComponent implements OnInit {
  public ctx: any;
  public scores: number[] = [];
  public isLoadingEssay: boolean = true;
  public showScoreButtons: boolean = true;
  public showCanvas: boolean = false;
  public showLoader: boolean = false;
  public showNext: boolean = false;
  public id : number = 0;
  public essay : WritingEssay | undefined;

  constructor(private callApiService: CallApiService) { }

  ngOnInit(): void {
    this.loadEssay()
  }

  public loadEssay(){
    this.callApiService.RandomEssay().subscribe({
      next: (response: WritingEssay) => {
        this.id = response.id;
        this.essay = response;
        this.scores = [];
        this.scores.push(response.score55);
        this.scores.push(response.score60);
        this.scores.push(response.score65);
        this.scores.push(response.score70);
        this.scores.push(response.score75);
        this.scores.push(response.score80);
        this.scores.push(response.score85);
        this.isLoadingEssay = false;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    })
  }

  public nextEssay(){
    this.isLoadingEssay = true;
    this.showScoreButtons = true;
    this.showCanvas = false;
    this.showLoader = false;
    this.showNext = false;
    this.loadEssay();
  }
  
  public sendCcore(bandScore: string) {
    this.showScoreButtons = false;
    this.showLoader = true;
    this.callApiService.BandScore(this.id, bandScore).subscribe({
      next: () => {
        this.showLoader = false;
        this.showNext = true;
        this.showStatistic()
      },
      error: (error) => {
        console.error('Error occurred during POST request', error);
      }
    });
  }

  public showStatistic() {
    this.showScoreButtons = false;
    this.showCanvas = true;
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
      this.showCanvas = false;
    }
  }
}