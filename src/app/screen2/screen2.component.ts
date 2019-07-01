import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { GetDataService} from 'src/app/get-data.service'

interface response {
  data : any[]
}

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})

export class Screen2Component {

  
  highcharts=Highcharts;
  areaChartOptions:any;
  lineChartOptions:any;
  data=[];

  constructor(private service :GetDataService) {

    this.service.getAttackerData().subscribe((res:response)=>{
      res.data.map((i)=>{ this.data.push(i.number) });
      console.log(this.data);
      this.getAreaGraph();
      this.getLineGraph();
  })
  this.genRandomData();
  }

  genRandomData()
  {
    setInterval(() => {
      this.data.push(Math.random()*150)
      this.getAreaGraph();
      this.getLineGraph();
    }, 4000);
  }

  //**********AREA GRAPH --START ***********/

  getAreaGraph(){
  this.areaChartOptions = {   
     chart: {
       zoomType: 'x'
     },
     title: {
       text: 'Live Cyber Attacks'
     },
     subtitle: {
       text: document.ontouchstart === undefined ?
       'Click and drag in the plot area to zoom in' :
       'Pinch the chart to zoom in'
     },
     yAxis: {          
        title:{
         text: 'Live Attacks'
        } 
     },
     legand:{
       enabled: false
     },
     tooltip: {
        
     },
     plotOptions : {
        area: {
           fillColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
              stops: [
                 [0, Highcharts.getOptions().colors[0]],
                 [1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
           },
           marker: {
              radius: 2
           },
           lineWidth: 1,
           states: {
              hover: {
                 lineWidth: 1
              }
           },
           threshold: null
        }
     },
     series:[{
        type: 'area',
        name: 'Cyber Attack Tracker',
        data: this.data
     }]
  };

  }
   //**********AREA GRAPH --END */

  //**********LINE GRAPH --START */

  getLineGraph()
  {
    let kushalData=[];
    let ayushData=[];
    let vrishtiData=[];
    let shaminData=[];

    for(let i=0;i<7;i++)  // generating Data
    {
      kushalData.push(this.data[i]  * Math.random());
      ayushData.push(this.data[i]   * Math.random());
      vrishtiData.push(this.data[i] * Math.random());
      shaminData.push(this.data[i]  * Math.random());

    }
    
    this.lineChartOptions = {   
       chart: {
          type: "spline"
       },
       title: {
          text: "Dynamic change of Blood components"
       },
       subtitle: {
          text: "Source: WorldHealthOrganization"
       },
       xAxis:{
          categories:["Haemoglobin","RBC","WBC","PlateLets","lymphocytes","monocytes","cholestrol "]
       },
       yAxis: {          
          title:{
             text:""
          } 
       },
       tooltip: {
          valueSuffix:" moles/dm"
       },
       series: [{
          name: 'Kushal',
          data: kushalData,
       },
       {
          name: 'Shamin',
          data: shaminData,
       },
       {
          name: 'Ayush',
          data: ayushData,
       },
       {
          name: 'Vrishti',
          data: vrishtiData
       }]
    };
  }
 //**********LINE GRAPH --END */

}

 