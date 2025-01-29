import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { passwordMatched } from '../../CustomValidation/CustomConfirmpassword';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  prodForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.prodForm = this.fb.group({
      Name: ['', [Validators.required,Validators.pattern('[A-Za-z]{5}')
      ]],
      add:fb.group({
        city:['',Validators.required],
        street:['',Validators.required]
      }),
      referral:[''],
      referralother:[''],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    },{validators:[passwordMatched()]});

  }
  get Name(){
    return this.prodForm.get('Name')
  }
  get referral(){
    return this.prodForm.get('referral')
  }
  get referralother(){
    return this.prodForm.get('referralother')
  }
  get password(){
return
  }
  get confirmpassword(){
return
  }
}
