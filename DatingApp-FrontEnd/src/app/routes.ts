import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [

    { path: '', component: HomeComponent },
    // protecting multiple routes with a single route guard using dummy routes
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent },
        ]
    },
    // using canActivate for this particular route
    { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
export const routing = RouterModule.forRoot(appRoutes);