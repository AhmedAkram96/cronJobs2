import { Queue } from 'bullmq'

const myQueue = new Queue('Teldaqueue', {
    connection: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT!
    }
});

export const scheduleJobs = (config: any) => {
    Object.keys(config).forEach(async (key) => {
        const job = config[key]
        console.log("freq: ", job.frequency)
        await myQueue.add(key, {
            repeat: {
                pattern: job.frequency,
            },
        },
        );
    })
}
