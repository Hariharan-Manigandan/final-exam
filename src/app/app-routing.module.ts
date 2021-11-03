import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ab1Component } from './about/ab1/ab1.component';
import { FaqComponent } from './about/faq/faq.component';
import { FindcenterComponent } from './about/findcenter/findcenter.component';
import { G1Component } from './about/g1/g1.component';
import { PrepareComponent } from './about/prepare/prepare.component';
import { ResultComponent } from './about/result/result.component';
import { SpkComponent } from './about/spk/spk.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  
  {
    path:"about",
    children:[
      {
      path:"ab1",
      component:Ab1Component
    },
    {
      path:"g1",
      component:G1Component
    },
    {
      path:"spk",
      component:SpkComponent
    },
    
    {
      path:"faq",
      component:FaqComponent
    }
  ]
  },
  {
    path:"test",
    component:TestComponent
  },
  {
    path:"prepare",
    component:PrepareComponent
  },
  {
    path:"result",
    component:ResultComponent
  },
  {
    path:"find",
    component:FindcenterComponent
  },
  {
    path:"",
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
