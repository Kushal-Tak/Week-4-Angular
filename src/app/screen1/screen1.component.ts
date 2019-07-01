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
  data = [];
  id = 100;


  constructor(private service: GetDataService) {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((res: response) => {
      this.data = (res.data);
      console.log(typeof(this.data));
      this.getGenderCount(res.data);
    })
  }

  getGenderCount(data) {
    let male = 0;
    data.map((i) => {
      if (i.gender == "Male")
        male++;
    })
    console.log(male);
    this.genGenderGraph(male);
  }


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

addRecord(dt)
{
    dt.preventDefault();
    let email = dt.target[0].value;
    let gender = dt.target[1].value;
    let year  = dt.target[2].value;
    let dept = dt.target[3].value;

    console.log(email);

    let info = { "email": email, "gender":gender, "year":year , "Department":dept};
    console.log(info);
    this.data.push(info);
    this.getGenderCount(this.data);
    console.log(this.data);
}
  
}


