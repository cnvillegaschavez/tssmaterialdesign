import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';

import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/app-layouts/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [HeaderComponent, MainLayoutComponent],
  exports: [MainLayoutComponent]
})
export class SharedModule { }
