import { Injectable } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

    constructor(private http: HttpClient) {}

    public sendEmailAppsScript(recommendation: string, image_url: string) {
        let url = 'https://script.google.com/macros/s/AKfycbw5iDGyFqGHEmsgIVn76s-eVag4hRmjYe9AE8XqBlRcLWLvtSchLWvtLoJ0ftl5hsqE/exec';
        const userEmail = localStorage.getItem('email');
        url += '?email_to=' + encodeURIComponent(userEmail);
        url += '&recommendation=' + encodeURIComponent(recommendation);
        url += '&image_url=' + encodeURIComponent(image_url);
        url += '&api_token=' + encodeURIComponent(environment.apiKey);
        // log the url
        console.log(url);
        return this.http.get(url).subscribe();
    }

}
