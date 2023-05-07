import {  fail } from '@sveltejs/kit';

export async function load() {
	const user = { name: 'naveen' };
	return { user };
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const name = data.get('name');

		const user = true;
		return fail(400, { email, missing: true });
	},
	RegisterAgent: async ({ cookies, request }) => {
		// TODO register the user
		const data = await request.formData();
		const email = data.get('email');
		// const password = data.get('password');
		// const name = data.get('name');

		const user = true;
		//return fail(400, { email, missing: true });
		if (!user) {
			return fail(400, { email, missing: true });
		}

		// if (user.password !== hash(password)) {
		// 	return fail(400, { email, incorrect: true });
		// }

		// cookies.set('sessionid', 'Naveen');

		return { success: true };
	}
};
