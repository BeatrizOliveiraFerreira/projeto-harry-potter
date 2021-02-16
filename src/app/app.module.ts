import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { DemoMaterialModule } from './material.modules';
import { HomeComponent } from './home/home.component';
import { AlunosBruxosComponent } from './alunos-bruxos/alunos-bruxos.component';
import { GrifinoriaComponent } from './grifinoria/grifinoria.component';
import { LufalufaComponent } from './lufalufa/lufalufa.component';
import { SonserinaComponent } from './sonserina/sonserina.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlunosBruxosComponent,
    GrifinoriaComponent,
    LufalufaComponent,
    SonserinaComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
