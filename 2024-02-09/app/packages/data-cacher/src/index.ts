import { Worker } from "bullmq";
import { Names } from "redis-connection/src/constants";
import redis from "redis-connection/src/redis";

console.log("Listening for cache jobs...");

const worker = new Worker(
  Names.pokemon,
  async (job) => {
    console.log("New job!", job.id);
    await new Promise((resolve) => setTimeout(() => resolve(null), 5000));
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1500"
    );
    const text = await response.text();
    // REDIS Lock??
    await redis.set(Names.pokemon, text, "EX", 10);
    console.log("Job done!");
  },
  {
    connection: redis,
  }
);
