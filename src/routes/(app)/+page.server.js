import crypto from 'crypto';
import { fail } from '@sveltejs/kit';
import { RegisterAgentSchema } from '$lib/Zod/Schema.js';
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

export const actions = {
	RegisterAgent: async ({ request }) => {
		try {
			const formData = Object.fromEntries(await request.formData());
			formData.phone = parseInt(formData?.phone ?? 0);
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
			const { password, passwordConfirm, ...rest } = await request.formData;
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
	try {
		const document = {
			name,
			email,
			phone,
			bio: "Working as a agent",
			isVerified: { email: false, phone: false }
		};
		const pass = await hash_password(password);
		const doc = { ...document, password: pass };

		const res = await db.collection('agents').insertOne(doc);
		console.log(res)
		return Promise.resolve({ success: true });
	} catch (e) {
		return Promise.reject({ fail: true });
	}
}

async function hash_password(password) {
	return crypto.createHash('sha256').update(password).digest('hex');
}
