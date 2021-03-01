import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar: MatSnackBar,
              private location: Location,
              private formBuilder: FormBuilder,
              private loginService: LoginService) { }
  loginGroup: FormGroup;
  ngOnInit(): void {
    this.loginGroup = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  login(): void{
    const login = new Login(this.loginGroup.get('username').value, this.loginGroup.get('password').value);
    this.loginService.validateLogin(login).subscribe(
      value => window.location.assign('/admin'),
      error => {
        this.snackbar.open(error.error.message.concat(error.error.details[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );

  }
  goBack(): void {
    this.location.back();
  }

}
