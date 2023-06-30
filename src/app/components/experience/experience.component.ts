import { Component } from '@angular/core';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
	experiences = [
		{
			titleJob: 'Frontend Developer',
			nameCompany: 'Company',
			workingDay: 'Jornada Completa',
			jobDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam quo non autem et quam nulla ipsam voluptatum vero molestiae porro facere, perferendis modi debitis tempora quia temporibus magnam eveniet?',
		},
		{
			titleJob: 'Frontend Developer',
			nameCompany: 'Company',
			workingDay: 'Jornada Completa',
			jobDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam quo non autem et quam nulla ipsam voluptatum vero molestiae porro facere, perferendis modi debitis tempora quia temporibus magnam eveniet?',
		},
	];
}
