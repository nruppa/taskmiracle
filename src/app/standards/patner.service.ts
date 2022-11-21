import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from 'primeng/image';

@Injectable({
  providedIn: 'root'
})
export class PatnerService {

  constructor(private http:HttpClient) { }

getImages() {
  return this.http.get<any>('assets/pictures.json')
    .toPromise()
    .then(res => <Image[]>res.data)
    .then(data => { return data; });
  }
}