import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { GetDataService } from 'src/app/get-data.service'
import * as Highcharts from 'highcharts';

interface response {
  data: any[]
}

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})

export class Screen1Component {
  pieChart: any;
  barChart: any;
  data = [];
  categories=[];
  constructor(private service: GetDataService) {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((res: response) => {
      this.data = (res.data);
      console.log(typeof(this.data));
      this.operateData(res.data);
      this.getBarGraph();
    })
  }

  operateData(data) {

    // GET GENDER GRAPH

    let male = 0;
    data.map((i) => {
      if (i.gender == "Male")
        male++;
    })
    this.genGenderGraph(male);

    // GET BAR GRAPH

    data.map( (i)=>
    {
       if( ! this.categories.includes(i.Department))
       this.categories.push(i.Department)
    })
  }

// ************* PIE CHART --START********************

  genGenderGraph(male) {
    this.pieChart = new Chart({

      title: {
        text: 'Gender Graph'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%'],
          size: '45%',
          innerSize: '20%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Count',
        data: [['female', (100 - male)],
        ['Male', male]
        ]
      }]
    })
  }

// ************* PIE CHART --END********************


// ************* BAR CHART --START********************

getBarGraph()
{
  this.barChart = new Chart({

      title : {
      text: 'Department Classifier'   
   },
     xAxis : {
      categories: this.categories,
      title: {
         text: null
      }
   },
      yAxis : {
      min: 0,
      title: {
         text: 'Count in Numbers',
         align: 'high'
      },
      labels: {
         overflow: 'justify'
      }
   },
    
      plotOptions : {
      bar: {
         dataLabels: {
            enabled: true
         }
      }
   },
      legend : {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 100,
      floating: true,
      borderWidth: 1,
      
      backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
   },
   credits : {
      enabled: false
   },
   series:[
      {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6],
        type: undefined,
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31],
        type: undefined,
    }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40],
        type: undefined,
    }
  ]
  });

}

// ************* BAR CHART --END********************


// ADD RECORD ON USER INPUT

addRecord(dt)
{
    dt.preventDefault();
    let email = dt.target[0].value;
    let gender = dt.target[1].value;
    let year  = dt.target[2].value;
    let dept = dt.target[3].value;

    let info = { "email": email, "gender":gender, "year":year , "Department":dept};
    this.data.push(info);
    this.operateData(this.data);
  
}

}
