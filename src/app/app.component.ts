import { Component } from '@angular/core';
import { BarChartComponent } from '../app/shared/bar-chart/bar-chart.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private chartData: Array<any>;
  private barChartComponent: BarChartComponent;
  constructor() { }
  ngOnInit() {		    // give everything a chance to get loaded before starting the animation to reduce choppiness	
    setTimeout(() => {
      this.generateData();
      // change the data periodically		      
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }
  generateData() {
    this.chartData = []; for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) { this.chartData.push([`Index ${i}`, Math.floor(Math.random() * 100)]); }
  }
  onResize($event) {
    debugger;
    this.barChartComponent.updateChart();
  }
}
