import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { FilterModule } from '../filter/filter.module';
import { InputModule } from '../input/input.module';
import { FilterUserGrantsComponent } from './filter-user-grants.component';

@NgModule({
  declarations: [FilterUserGrantsComponent],
  imports: [
    CommonModule,
    FilterModule,
    InputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
  exports: [FilterUserGrantsComponent],
})
export class FilterUserGrantsModule {}
