import { Component, OnInit,Inject, PLATFORM_ID} from '@angular/core';
import { NavigationEnd, Router ,RouterModule,RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { SpinnerComponent } from './theme/shared/components/spinner/spinner.component';
import { AuthenticationModule } from './authentication/authentication.module';
import AuthSigninComponent from './authentication/auth-signin/auth-signin.component';
import AuthSignupComponent from './authentication/auth-signup/auth-signup.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import  {ResetPasswordComponent}  from './authentication/reset-password/reset-password.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,RouterModule,SpinnerComponent,CommonModule,
    AuthenticationModule,AuthSigninComponent,AuthSignupComponent,GuestComponent,ResetPasswordComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = 'AK-Fitness';
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Detects the platform
  ) {}

  //constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (isPlatformBrowser(this.platformId)) {

      window.scrollTo(0, 0);
      }
    });
  }
}
