import { Component, Input, OnInit } from '@angular/core';

import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['A', 'B', 'C'];
  public pieChartData: number[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;

  constructor() { }

  ngOnInit(): void {
    this.pieChartData = [this.a, this.b, this.c];
  }

}
