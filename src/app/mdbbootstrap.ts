import { NgModule } from '@angular/core';

import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BadgeModule, IconsModule } from 'angular-bootstrap-md'
import { ModalModule, InputsModule } from 'angular-bootstrap-md'


@NgModule({
  imports: [
    ButtonsModule,
    WavesModule,
    CardsModule,
    FormsModule,
    BadgeModule, 
    IconsModule,
    ModalModule,
    InputsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonsModule,
    WavesModule,
    CardsModule,
    FormsModule,
    BadgeModule, 
    IconsModule,
    ModalModule,
    InputsModule,
    ReactiveFormsModule
  ],
})
export class MDBBootstrap { }
