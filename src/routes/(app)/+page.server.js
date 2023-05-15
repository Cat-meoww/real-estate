import crypto from 'crypto';
import { fail } from '@sveltejs/kit';
import { promise, z } from 'zod';
import db from '$db/mongo.js';
export async function load() {
	try {
		const agent_data = await db.collection('agents').find({}).toArray();
		console.log(agent_data);
		const user = { name: 'naveen' };
		return { user };
	} catch (error) {
		console.log('error loading +page data');
		return { error: true };
	}
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
		phone: z
			.number({ required_error: 'Phone is required' })
			.gt(999999999, { message: 'Phone must be a valid number' })
			.lt(9999999999, { message: 'Phone must be a valid number' }),
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
		try {
			const formData = Object.fromEntries(await request.formData());
			const result = RegisterAgentSchema.parse(formData);

			console.log(result);
			return await createAgent(formData);
			// return fail(400, {
			// 	data: formData,
			// 	errmsg: 'User already exist'
			// });
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

async function createAgent({ name, email, password, phone }) {
	const document = {
		name,
		email,
		phone,
		isVerified: { email: false, phone: false }
	};
	const pass = await hash_password(password);

	const doc = { ...document, password: pass };
	return Promise.resolve({ success: true });
}

async function hash_password(password) {
	const hash = crypto.createHash('sha256').update(password).digest('hex');
	return { hash };
}
