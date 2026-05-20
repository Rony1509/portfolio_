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
      degree: 'Bachelor of Science in Software Engineering (B.Sc. Engg.)',
      institution: 'University of Dhaka',
      yearRange: '2023 - 2027',
      gpa: 'In Progress (6th Semester)',
      highlights: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Web Engineering',
        'Database Management Systems',
        'Software Design & Architecture',
        'Computer Networks',
        'Operating Systems',
        'Discrete Mathematics'
      ],
      description: 'Four-year undergraduate program under the Institute of Information Technology (IIT), University of Dhaka, following the semester system of the Bangladesh University Grants Commission (UGC).',
      logoUrl: ''
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC) — Science',
      institution: 'Dhaka City College',
      yearRange: '2020 - 2022', // HSC is a 2-year programme (Class 11–12)
      gpa: '5.00 / 5.00',
      highlights: [
        'Physics, Chemistry & Biology / Mathematics',
        'Compulsory Bengali & English',
        'ICT (Information & Communication Technology)',
        'Dhaka Board — GPA 5.00 (Golden A+)'
      ],
      description: 'Two-year higher secondary programme under the Dhaka Education Board. The Science group covers Physics, Chemistry, Mathematics/Biology, and ICT, assessed via the HSC public examination conducted by the Bangladesh Inter Education Board.',
      logoUrl: ''
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC) — Science',
      institution: 'Foiljana High School',
      yearRange: '2019 - 2020', // SSC sits at end of Class 10
      gpa: '5.00 / 5.00',
      highlights: [
        'Physics, Chemistry & Higher Mathematics',
        'Compulsory Bengali & English',
        'ICT (Information & Communication Technology)',
        'Dhaka Board — GPA 5.00 (Golden A+)'
      ],
      description: 'Secondary school programme under the national curriculum of the National Curriculum and Textbook Board (NCTB), culminating in the SSC public examination at the end of Class 10.',
      logoUrl: ''
    },
  ];
}