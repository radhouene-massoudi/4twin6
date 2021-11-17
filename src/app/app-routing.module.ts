import { FormpComponent } from './formp/formp.component';
import { UpdateComponent } from './update/update.component';
import { StComponent } from './st/st.component';
import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './traitement/test/test.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import {AddprodcutComponent} from "./product/addprodcut/addprodcut.component";
import {UpdateproductComponent} from "./product/updateproduct/updateproduct.component";
import {DeleteproductComponent} from "./product/deleteproduct/deleteproduct.component";
import {DetailproductComponent} from "./product/detailproduct/detailproduct.component";


const routes: Routes = [

  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'addp',component:AddprodcutComponent},
  {path:'test', component:NgclassComponent},
  {path:'products', component: ListproductComponent},
  {path:'updateproduct/:id', component: UpdateproductComponent},
  {path:'remove/:id', component: DeleteproductComponent},
  {path:'detail/:id', component: DetailproductComponent},
  {path:'service', component: TestComponent},
  {path:'style', component: NgstyleComponent},
  {path:'student', component: StComponent,
children:[
  {path:'add', component: UpdateComponent},
  {path:'Delete', component: DetailComponent},
]
},
  {path:'detail/:id', component: DetailComponent},
  {path:'form', component: FormpComponent},
  {path:'**',component:NotfoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
