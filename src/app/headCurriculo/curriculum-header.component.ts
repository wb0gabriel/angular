import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curriculum-header',
  templateUrl: './curriculum-header.component.html',
  styleUrls: ['./curriculum-header.component.css'],
})
export class CurriculumHeaderComponent {
  @Input() profilePhoto: string;
}
