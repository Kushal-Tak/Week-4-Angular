import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private client:HttpClient) {}

getData(){
  return this.client.get('../assets/dataset.json');
}

getAttackerData()
{
  return this.client.get('../assets/AttackerData.json')
}

}
