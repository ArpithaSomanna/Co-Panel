import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarService } from './side-bar/side-bar.service';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [SideBarComponent, NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [SideBarService],
  exports: [SideBarComponent, NavBarComponent, FooterComponent]
})
export class CommonComponentsModule { }
