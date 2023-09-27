import { error } from '@sveltejs/kit';
import { CARS } from '../../../constants.js';

export function load({ params }) {
	for (let car of CARS) {
		if (params['model'] === car.model) {
			return {
				title: `${car.brand} ${car.model} - ${car.type} Car rental Casablanca Morocco`,
				car
			};
		}
	}

	throw error(404, 'Not found');
}
