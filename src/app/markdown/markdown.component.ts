import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {
  markdownContent: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch Markdown file from the public folder
    this.http.get('README.md', { responseType: 'text' })
      .subscribe({
        next: (data) => {
          this.markdownContent = data;
        },
        error: (err) => {
          console.error('Error fetching Markdown file:', err);
        }
      });
  }
}
