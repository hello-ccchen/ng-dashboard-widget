import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ChartsModule } from 'ng2-charts';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    BrowserModule,
    ChartsModule
  ],
  declarations: [
    BarChartComponent,
    PieChartComponent,
    TableComponent
  ],
  providers: [],
  bootstrap: [],
  entryComponents: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const pieChart = createCustomElement(PieChartComponent, { injector: this.injector });
    customElements.define('pie-chart', pieChart);

    const barChart = createCustomElement(BarChartComponent, { injector: this.injector });
    customElements.define('bar-chart', barChart);

    const table = createCustomElement(TableComponent, { injector: this.injector });
    customElements.define('custom-table', table);
  }
}
