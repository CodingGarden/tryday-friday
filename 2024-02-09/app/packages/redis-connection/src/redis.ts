import Redis from 'ioredis';
import { config } from 'dotenv';

config();

const {
	REDIS_HOST: host,
	REDIS_PORT_NUMBER: port,
	REDIS_USERNAME: username,
	REDIS_PASSWORD: password,
	REDIS_DB: db
} = process.env;

const redis = new Redis({
	port,
	host,
	username,
	password,
	db: Number(db),
	maxRetriesPerRequest: null,
});

export default redis;
