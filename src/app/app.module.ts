import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { BtnComponent } from './btn/btn.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';
import { StComponent } from './st/st.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { FormpComponent } from './formp/formp.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestComponent } from './test/test.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { AddprodcutComponent } from './product/addprodcut/addprodcut.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './product/deleteproduct/deleteproduct.component';
import { DetailproductComponent } from './product/detailproduct/detailproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    NgclassComponent,
    BtnComponent,
    LoginComponent,
    NotfoundComponent,
    DetailComponent,
    StComponent,
    UpdateComponent,
    DeleteComponent,
    FormpComponent,
    ReactiveformComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    ListproductComponent,
    AddprodcutComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    DetailproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
