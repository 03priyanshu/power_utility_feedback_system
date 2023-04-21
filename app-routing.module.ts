import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OptionComponent } from './option/option.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProblemComponent } from './problem/problem.component';

const routes: Routes = [{path:"home",component:HomePageComponent},{path:"signup",component:SignUpComponent},
{path:"option",component:OptionComponent},{path:"option/feedback",component:FeedbackComponent},
{path:"option/problem",component:ProblemComponent},{path:"",component:HomePageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
