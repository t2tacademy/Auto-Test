import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

    constructor(private http: HttpClient) {}




    public async sendEmailAppsScript(
        recommendation: string, image_data: string,
        liderazgo: number, influencia: number,
        organizacional: number, equipo: number,
        critico: number, transmision: number,
        creatividad: number, problemas: number,
        tiempo: number, desarrollo: number) {
        // console.log(image_data);
        let url = 'https://script.google.com/macros/s/AKfycbw5iDGyFqGHEmsgIVn76s-eVag4hRmjYe9AE8XqBlRcLWLvtSchLWvtLoJ0ftl5hsqE/exec';
        const userEmail = localStorage.getItem('email');
        const userName = localStorage.getItem('name');
        const userAge = localStorage.getItem('edad');
        url += '?email_to=' + encodeURIComponent(userEmail);
        url += '&name=' + encodeURIComponent(userName);
        url += '&age=' + encodeURIComponent(userAge);
        url += '&recommendation=' + encodeURIComponent(recommendation);
        url += '&liderazgo=' + encodeURIComponent(liderazgo);
        url += '&influencia=' + encodeURIComponent(influencia);
        url += '&organizacional=' + encodeURIComponent(organizacional);
        url += '&equipo=' + encodeURIComponent(equipo);
        url += '&critico=' + encodeURIComponent(critico);
        url += '&transmision=' + encodeURIComponent(transmision);
        url += '&creatividad=' + encodeURIComponent(creatividad);
        url += '&problemas=' + encodeURIComponent(problemas);
        url += '&tiempo=' + encodeURIComponent(tiempo);
        url += '&desarrollo=' + encodeURIComponent(desarrollo);
        url += '&api_token=' + encodeURIComponent(environment.apiKey);
        // url += '&image_url=' + btoa(image_data);
        // console.log(url);

        this.http.get(url).subscribe();
    }

}
