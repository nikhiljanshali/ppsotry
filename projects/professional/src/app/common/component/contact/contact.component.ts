import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactMe!: FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactMe = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile: ['', Validators.required],
      message: ['', Validators.required],
    });

  }


  //convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl; } {
    return this.contactMe.controls;
  }



  public onSubmit(event: Event) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.contactMe.invalid) {
      return;
    }
    else {

      event.preventDefault();

      console.warn(this.contactMe.value);
    }
  }
}
