import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  form: FormGroup;
  isButtonDisabled = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(16)]],
    });
    // Subscribe to form value changes to update the button state
    this.form.valueChanges.subscribe(() => {
      this.isButtonDisabled = !this.form.valid;
    });
  }

  // Function to handle form submission
  onSubmit(): void {
    if (this.form.valid) {
      // Access the form values here
      const email = this.form.get('email').value;
      const nombre = this.form.get('nombre').value;
      const edad = this.form.get('edad').value;

      // Save the data to local storage if needed
      localStorage.setItem('email', email);
      localStorage.setItem('name', nombre);
      localStorage.setItem('edad', edad);

      // Navigate to the questions page
      this.router.navigate(['/questions']);
    }
  }

}
