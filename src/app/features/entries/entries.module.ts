import { NgModule } from '@angular/core';
import { EntryListComponent } from './pages/entry-list/entry-list.component';
import { CommonModule } from '@angular/common';
import { EntriesRoutingModule } from './entries-routing.module';
import { EntryService } from './services/entry.service';
import { FormsModule } from '@angular/forms';
import { EntryComponent } from './components/entry/entry.component';
import { MaterialConfigurationModule } from 'src/app/shared/material-configuration.module';
import { NumberToArray } from './pipes/number-to-array.pipe';
import { EntrySkeletonComponent } from './components/entry-skeleton/entry-skeleton.component';
import { AddEntryDialogComponent } from './pages/add-entry-dialog/add-entry-dialog.component';

@NgModule({
  declarations: [
    EntryListComponent,
    EntryComponent,
    NumberToArray,
    EntrySkeletonComponent,
    AddEntryDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EntriesRoutingModule,
    MaterialConfigurationModule,
  ],
  providers: [EntryService],
})
export class EntriesModule {}
