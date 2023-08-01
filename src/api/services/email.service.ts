import { Injectable } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

    public sendEmail(recommendation: string, image_url: string) {
        const userName = localStorage.getItem('name');
        const userEmail = localStorage.getItem('email');

        const emailParams = {
            to_name: userName,
            image_url: image_url,
            to_email: userEmail,
            recommendation: recommendation,
        };

        emailjs.send('service_sb9s4cc', 'template_cxp737m', emailParams, '4_lbYw0kaPLJZT783')
            .then((result: EmailJSResponseStatus) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    constructor(private http: HttpClient) {}

    public sendEmailAppsScript(recommendation: string, image_url: string) {
        let url = 'https://script.google.com/macros/s/AKfycbw5iDGyFqGHEmsgIVn76s-eVag4hRmjYe9AE8XqBlRcLWLvtSchLWvtLoJ0ftl5hsqE/exec';
        const userEmail = localStorage.getItem('email');
        url += '?email_to=' + encodeURIComponent(userEmail);
        url += '&recommendation=' + encodeURIComponent(recommendation);
        url += '&image_url=' + encodeURIComponent(image_url);
        url += '&api_token=' + encodeURIComponent(environment.apiKey);


        return this.http.get(url).subscribe();
    }

}
