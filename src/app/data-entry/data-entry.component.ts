import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  form: FormGroup;
  isButtonDisabled = true;
  wrongpass = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(16)]],
      contrasena: ['', [Validators.required]],
    });
    // Subscribe to form value changes to update the button state
    this.form.valueChanges.subscribe(() => {
      this.isButtonDisabled = !this.form.valid;
    });
  }

  // Function to handle form submission
  async onSubmit(): Promise<void> {
    const sha1 = await this.sha1(this.form.get('contrasena').value);
    if (!(sha1 === environment.pass)) {
      console.log('wrong paass');
      this.wrongpass = true;
      localStorage.setItem('loggedIn', String(false));
      return ;
    }
    this.wrongpass = false;
    if (this.form.valid) {
      // Access the form values here
      const email = this.form.get('email').value;
      const nombre = this.form.get('nombre').value;
      const edad = this.form.get('edad').value;

      // Save the data to local storage if needed
      localStorage.setItem('email', email);
      localStorage.setItem('name', nombre);
      localStorage.setItem('edad', edad);
      localStorage.setItem('loggedIn', String(true));

      // Navigate to the questions page
      this.router.navigate(['/questions']);
    }
  }
  async sha1(str) {
    const enc = new TextEncoder();
    const hash = await crypto.subtle.digest('SHA-1', enc.encode(str));
    return Array.from(new Uint8Array(hash))
        .map(v => v.toString(16).padStart(2, '0'))
        .join('');
  }

}
