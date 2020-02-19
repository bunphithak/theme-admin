import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomesRoutingModule } from './homes-routing.module';
import { HomesComponent } from './homes.component';
import { AppheaderComponent } from '../theme/appheader/appheader.component';

@NgModule({
  declarations: [HomesComponent, AppheaderComponent],
  imports: [CommonModule, HomesRoutingModule]
})
export class HomesModule {}
