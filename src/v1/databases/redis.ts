import { createClient } from "redis" //need strictly change it to typescript

const client = createClient({
  url: process.env.REDIS_URL
});

client.ping(function (err: Error, result: any) {
  console.log(result);
})

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on("error", (error: Error) => {
  console.error(error);
});

export default client