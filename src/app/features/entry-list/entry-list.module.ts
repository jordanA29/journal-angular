import { NgModule } from '@angular/core';
import { EntryDetailsComponent } from './pages/entry-details/entry-details.component';
import { EntryComponent } from './components/entry/entry.component';
import { EntryListComponent } from './pages/entry-list/entry-list.component';
import { CommonModule } from '@angular/common';
import { EntryListRoutingModule } from './entry-list-routing.module';
import { EntryService } from './services/entry.service';

@NgModule({
    imports: [CommonModule, EntryListRoutingModule],
    declarations: [EntryListComponent],
    providers: [EntryService],
})
export class EntryListModule { }
