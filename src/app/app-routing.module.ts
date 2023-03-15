import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'entries',
        loadChildren: () => import('./features/entry-list/entry-list.module').then(m =>
            m.EntryListModule)
    },
    {
        path: '**',
        redirectTo: 'entries',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
