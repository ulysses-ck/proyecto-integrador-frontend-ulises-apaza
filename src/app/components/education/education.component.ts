import { Component } from '@angular/core';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.css'],
})
export class EducationComponent {
	educations = [
		{
			title: 'Tecnicatura de Desarrollo de Software',
			nameInstitution: 'IFTS',
			startYear: '2023',
			finishYear: '2026',
		},
		{
			title: 'Bachiller',
			nameInstitution: 'Liceo 10 Ricardo Rojas',
			startYear: '2016',
			finishYear: '2020',
		},
	];
}
