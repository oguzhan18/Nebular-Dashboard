import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { COMPONENTS } from "./index";

import { MatSlideToggleModule } from "@angular/material/slide-toggle";
 
import { NbDialogModule } from '@nebular/theme';

import {
  NbActionsModule,
  NbCardModule,
  NbContextMenuModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbSidebarService,
  NbUserModule,
  NbIconModule,
  NbToggleModule
} from "@nebular/theme";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NbActionsModule,
    HttpClientModule,
    NbCardModule,
    NbContextMenuModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbSidebarModule,
    NbIconModule,
    NbUserModule,
    MatSlideToggleModule,
    NbToggleModule,


 
    NbDialogModule.forRoot({hasBackdrop: true, closeOnBackdropClick: false})
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [NbSidebarService]
})
export class NarikNgxLayout {}
