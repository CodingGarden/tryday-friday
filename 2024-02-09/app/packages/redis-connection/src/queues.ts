import { Queue } from 'bullmq';
import redis from './redis';
import { Names } from './constants';

export const pokemonQueue = new Queue(Names.pokemon, { connection: redis });
