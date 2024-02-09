import { json } from '@sveltejs/kit';
import redis from '$lib/server/redis-connection/src/redis';
import { pokemonQueue } from '$lib/server/redis-connection/src/queues';
import { Names } from '$lib/server/redis-connection/src/constants';

export async function GET() {
	const result = await redis.get(Names.pokemon);
	if (result) {
		return new Response(result, {
			headers: {
				'content-type': 'application/json'
			}
		});
	}
  const existingJob = await pokemonQueue.getJob(Names.pokemon);
  if (!existingJob) {
    await pokemonQueue.add(
      Names.pokemon,
      {
        all: true,
        any: 'custom',
        data: 'you need',
        for: 'the job'
      },
      {
        jobId: Names.pokemon,
        removeOnComplete: true,
        removeOnFail: true,
      }
    );
  }

	return json(
		{
			message: 'IN PROGRESS',
			retryIn: 500,
		},
		{
			status: 202
		}
	);
}
