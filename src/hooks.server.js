import { start_mongo } from '$db/mongo.js';
const db = {
	__init: async () => {
		try {
			await start_mongo();
			console.info('Mongo Connnection started .............');
		} catch (error) {
			console.error(error);
		}
	},
	
};
db.__init();
export const handle = async ({ event, resolve }) => {
	try {
		//console.log("req");
		if (event.url.pathname.startsWith('/api/auth')) {
			return resolve(event);
		} else if (event.url.pathname.startsWith('/auth')) {
			return resolve(event);
		} else if (event.url.pathname === '/') {
			return resolve(event);
		} else {
			// const authheader = event.request.headers.get('authorization')
			// const Token = authheader && authheader.split(' ')[1]
			// if (typeof Token == 'undefined' || Token == null) {
			//     throw new Error('hook', { cause: "Token empty" });
			// }
			// let access = await new Promise((resolve, reject) => {
			//     verify(Token, JWT_ACCESSTOKEN, (err, data) => {
			//         if (err) return reject("Token error");
			//         return resolve(data);
			//     });
			// })
			// if (!access) throw new Error('hook', { cause: 'invaild token' });
			// //console.log(access);
			// event.locals.userdata = access
			// return resolve(event);
			return new Response('❤️');
		}
	} catch (e) {
		//console.log(e);
		return new Response('❤️');
	}
};
