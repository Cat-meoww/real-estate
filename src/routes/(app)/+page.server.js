import { fail } from '@sveltejs/kit';
import { z } from 'zod';

export async function load() {
	const user = { name: 'naveen' };
	return { user };
}

const RegisterAgentSchema = z
	.object({
		name: z
			.string({ required_error: 'Name is required' })
			.trim()
			.min(1, { message: 'Name is required' })
			.max(64, { message: 'Name must be less than 64 characters' }),

		email: z
			.string({ required_error: 'Email is required' })
			.min(1, { message: 'Email is required' })
			.max(64, { message: 'Email must be less than 64 characters' })
			.email({ message: 'Email must be a valid email address' }),
		password: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim(),
		passwordConfirm: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim()
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['passwordConfirm']
			});
		}
	});
/** @type {import('./$types').Actions} */
export const actions = {
	RegisterAgent: async ({ request }) => {
		// TODO register the user
		const formData = Object.fromEntries(await request.formData());

		try {
			const result = RegisterAgentSchema.parse(formData);
			console.log('SUCCESS');
			console.log(result);
			return fail(400, {
				data: formData,
				errmsg:"User already exist",
			});
			//return { success: true };
		} catch (err) {
			console.log(err);
			const { fieldErrors: errors } = err.flatten();
			const { password, passwordConfirm, ...rest } = formData;
			return fail(400, {
				data: rest,
				errors
			});
		}

		// if (user.password !== hash(password)) {
		// 	return fail(400, { email, incorrect: true });
		// }

		// cookies.set('sessionid', 'Naveen');

		//return { success: true };
	},
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const name = data.get('name');

		const user = true;
		return fail(400, { email, missing: true });
	}
};
