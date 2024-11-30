import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './theme/layout/guest/guest.component'
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {
        path: '',
        component: GuestComponent,
        children: [
          {
            path: 'auth',
            loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
          },
          {
            path: 'reset-password',
            loadChildren: () =>
              import('./authentication/authentication.module').then(
                (m) => m.AuthenticationModule
              ),
          },
        
        ]
      }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
