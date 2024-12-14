import { Routes } from '@angular/router';
import { MarkdownComponent } from './markdown/markdown.component';

export const routes: Routes = [
  { path: '', component: MarkdownComponent }, // Default route
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route to handle unknown paths
];
