import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { TmplAstBoundText } from '@angular/compiler';
import {CalcService} from './calc.service';
import {SampleService} from './sample.service'
import { DataComponent } from './data/data.component';
import { from } from 'rxjs';
const approutes:Routes=[{path:"new",component:AddComponent},{path:"edit",component:EditComponent},{path:"delete",component:DeleteComponent},{path:"view",component:ViewComponent},
{path:"about",component:AboutusComponent},{path:"contact",component:ContactComponent},{path:"data",component:DataComponent}]
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ViewComponent,
    AboutusComponent,
    ContactComponent,
    HeaderComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(approutes)
  ],
  providers: [CalcService,SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
