import {Component, ElementRef, OnInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import domtoimage from 'dom-to-image';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexMarkers, ApexLegend, ApexDataLabels, ApexYAxis,
} from 'ng-apexcharts';
import {EmailService} from '../../api/services/email.service';
import {Router} from '@angular/router';
export interface ChartOptions {
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private emailService: EmailService,
              private router: Router) {
  }

  @ViewChild('chart') chartRef: ElementRef;
  public chartOptions: Partial<ChartOptions>;
  average = 0;
  name: string;
  data: number[];
  recommendation: string;
  src: string;


  ngOnInit(): void {
    if (!(localStorage.getItem('loggedIn') === 'true')) {
      this.router.navigate(['/data-entry']);
    }
    this.average = Number(localStorage.getItem('average'));
    this.name = localStorage.getItem('name');
    const dataString = localStorage.getItem('data');
    this.data = dataString ? dataString.split(',').map(Number) : [];
    this.chartOptions = {
      legend: {
        show: true,
        position: 'top'
      },
      series: [
        {
          name: 'Diferente',
          data: [8, 9, 7, 8, 7, 9, 7, 8, 7, 7]
        },

        {
          name: 'Esperado',
          data: [5, 5, 4, 4, 5, 4, 5, 5, 4, 5]
        },
        {
          name: this.name,
          data: this.data
        },

      ],
      chart: {
        id: 'chart1',
        // height: '100vh',
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 1
      },
      fill: {
        opacity: 0
      },
      markers: {
        size: 0
      },
      xaxis: {
        labels: {
          trim: true
        },
        categories: ['Liderazgo', 'Influencia', ['Relacionamiento', 'organizacional'], 'Trabajo en equipo', 'Pensamiento crítico', ['Transmisión', 'de ideas'], ['Creatividad', 'e innovación'], ['Resolución', 'de problemas'], ['Gestión', 'del tiempo'], 'Auto-Desarrollo' ]
      },
      yaxis: {
        max: 10,
        min: 0,
        tickAmount: 5
      }
    };
    this.selectRecommendation();
    this.emailService.sendEmailAppsScript(this.recommendation, this.src, this.data[0], this.data[1], this.data[2],
        this.data[3], this.data[4], this.data[5], this.data[6], this.data[7], this.data[8], this.data[9]);
    // this.generateImage();


  }
  generateImage() {
    // Get the DOM element for which you want to generate the image
    const element = document.getElementById('chart');

    setTimeout(() => {
      // Code to be executed after 3 seconds
      // Generate the image
      domtoimage.toPng(element).then(async (dataUrl) => {
        // Do something with the generated image data URL
        // For example, you can create an image element and set the src attribute to the data URL
        const image = new Image();
        image.src = dataUrl;
        this.src = dataUrl.toString();
        // console.log(this.src);
        await this.emailService.sendEmailAppsScript(this.recommendation, this.src, this.data[0], this.data[1], this.data[2],
            this.data[3], this.data[4], this.data[5], this.data[6], this.data[7], this.data[8], this.data[9]);

        // You can also use the data URL to download the image or perform other actions
      }).catch((error) => {
        console.error('Error generating image:', error);
      });
    }, 3000);
  }


  selectRecommendation() {
    if (this.average < 4) {
      this.recommendation = 'No debes preocuparte, el 70% de los jóvenes profesionales no detectaron que debían entrenar estas habilidades. Debes comenzar a trabajar tus habilidades, agrupándolas y dedicándoles un tiempo de 1 hora por semana. Escribinos a t2tscacademy@gmail.com y armamos juntos tu plan de entrenamiento personalizado.';
    } else if (this.average < 5) {
      this.recommendation = 'Estas casi bien para tu edad. No debes preocuparte, pero ' +
          'estas justo para comenzar un desarrollo exponencial de cada una de ellas. El tiempo ' +
          'que necesites estará entre 30-60 minutos por semana. Comenzar con las que te dieron ' +
          'más baja. Escribinos a t2tscacademy@gmail.com y armamos juntos tu plan de ' +
          'entrenamiento personalizado.';
    } else if (this.average < 7) {
      this.recommendation = 'Estas dentro del 15% de las jóvenes profesiones que ' +
          'tienen muchas chances de ser un profesional diferente. Debes seguir mejorando, te ' +
          'dará muchas oportunidades de destaque y de crecimiento. Con 30 minutos por ' +
          'semana tu desarrollo será muy alto. Escribinos a t2tscacademy@gmail.com y ' +
          'armamos juntos tu plan de entrenamiento personalizado.';
    } else {
      this.recommendation = 'Eres increíble profesional. Muchísimo potencial. Ya piensas ' +
          'como un directivo. No debes dejar de evolucionar, claramente hay mucho por ' +
          'descubrir en tu personalidad. Debes desarrollar un plan de aprendizaje en tips y ' +
          'consejos que adquisición de habilidades. Tremendo desafío. Escribinos a ' +
          't2tscacademy@gmail.com y armamos juntos tu plan de entrenamiento ' +
          'personalizado bien desafiante.';
    }
  }


}
