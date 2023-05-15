import { MONGODB_URI, DATABASE_NAME } from '$env/static/private';
import { MongoClient } from 'mongodb';

const db = new MongoClient(MONGODB_URI);
export async function start_mongo() {
	try {
		console.info('Trying to Starting Mongo ...');
		await db.connect();
		return Promise.resolve('Success');
	} catch (e) {
		console.error('some fault happen');
		return Promise.reject('Failed to Connect Database');
	}
}
export default db.db(DATABASE_NAME);
