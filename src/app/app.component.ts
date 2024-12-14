import { Component } from '@angular/core';
import { MarkdownComponent } from './markdown/markdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MarkdownComponent], // Remove HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'markdown-app';
}
