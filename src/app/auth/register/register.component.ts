import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import validate = WebAssembly.validate;
import {Router} from '@angular/router';
import {SignUpForm} from '../sign-up-form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validators: checkPassword})
    });
    // update form state
    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }

  onSubmit() {
    const signUpForm = new SignUpForm(0, this.registerForm.get('name').value.toString(), this.registerForm.get('username').value.toString(),
      this.registerForm.get('email').value.toString(), this.registerForm.get('pwGroup').get('password').value.toString(), ['user']);
    this.authService.signUp(signUpForm).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      this.errorMessage = error.error.message;
    });
  }

}

function checkPassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}


