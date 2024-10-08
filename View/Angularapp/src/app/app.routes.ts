import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: "home", component:HomeComponent},
    {path: "friends", component:FriendsComponent},
    {path: "profile", component:ProfileComponent},
];
