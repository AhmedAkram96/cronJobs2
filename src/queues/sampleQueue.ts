import { Queue, Worker } from 'bullmq'

const myQueue = new Queue('myqueue', {
    connection: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT!
    }
});

export const scheduleJobs = (config: any) => {
    Object.keys(config).forEach(async (key) => {
        const job = config[key]
        await myQueue.add(key, {
            repeat: {
                pattern: job.frequency,
            },
        },
        );
    })
}
