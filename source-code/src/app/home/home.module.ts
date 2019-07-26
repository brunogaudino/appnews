import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    HomeComponent
  ],
  imports: [ 
    CommonModule, 
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ]
})

export class HomeModule {}