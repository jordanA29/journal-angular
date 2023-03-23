import { NgModule } from '@angular/core';
import { EntryListComponent } from './pages/entry-list/entry-list.component';
import { CommonModule } from '@angular/common';
import { EntriesRoutingModule } from './entries-routing.module';
import { EntryService } from './services/entry.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    EntriesRoutingModule,
  ],
  declarations: [EntryListComponent],
  providers: [EntryService],
})
export class EntriesModule {}
