import { SellComponent } from './components/sell/sell.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [

    {
      path:"register",
      component:RegisterComponent,
      pathMatch:"full"
    }
    ,
    {
      path:'',
      component:HomeComponent,
      pathMatch:"full"
    },
    {
      path:'login',
      component:LoginComponent,
      pathMatch:"full"

    },
    {
      path : 'search',
      component:SearchComponent,
      pathMatch:"full",
      canActivate : [AuthGuard]
    },
    {
      path : 'cart/:id',
      component:CartComponent,
      pathMatch: "full",
      canActivate : [AuthGuard]
    },
    {
      path: 'checkout/:id',
      component : CheckoutComponent,
      pathMatch: "full",
      canActivate : [AuthGuard]

    },
    {
      path : 'sell',
      component : SellComponent,
      pathMatch : "full",
      canActivate : [AuthGuard]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
