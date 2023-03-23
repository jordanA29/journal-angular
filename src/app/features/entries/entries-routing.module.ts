import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryListComponent } from './pages/entry-list/entry-list.component';

const routes: Routes = [
  {
    path: 'entries',
    component: EntryListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntriesRoutingModule {}
