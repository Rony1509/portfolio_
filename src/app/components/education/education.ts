import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  educations: Education[] = [
    {
      id: 1,
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of Dhaka',
      yearRange: '2023 - 2027',
      gpa: '----'+' (Currently in 6th Semester)',
      highlights: ['Data Structures', 'Algorithms', 'Web Development', 'Database Design', 'Software Architecture','Networking','Operating Systems'],
      description: 'Comprehensive computer science program focusing on software engineering principles and modern web technologies.',
      logoUrl: ''
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Dhaka City College',
      yearRange: '2020 - 2021',
      gpa: '5.00 / 5.00',
      highlights: ['Science & Math Honors', 'Coding Club President', 'Science Fair Winner'],
      description: 'Advanced STEM coursework with strong emphasis on computer science and mathematics.',
      logoUrl: ''
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Foilet High School',
      yearRange: '2015 - 2019',
      gpa: '5.00 / 5.00',
      highlights: ['Science & Math Honors', 'Coding Club President', 'Science Fair Winner'],
      description: 'Advanced STEM coursework with strong emphasis on computer science and mathematics.',
      logoUrl: ''
    },
  ];
}
