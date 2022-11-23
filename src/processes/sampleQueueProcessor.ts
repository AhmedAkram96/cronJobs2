
import { Worker, Job } from 'bullmq'

import { handlers } from '../handlers';
import Logger from '../util/winston';

const logger = new Logger(module);

export const myWorker = new Worker('Teldaqueue', async (job) => {
    const handler = (await import('../handlers')).default
    const jobName: string = job.name;
    handler[`${jobName}` as keyof handlers]();
}, {
    connection: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT!
    }
});



myWorker.on('completed', (job: Job, returnvalue: any) => {
    // Do something with the return value.
    const date = new Date(job.timestamp).timeNow()
    console.log(`${job.name} with id ${job.id} is executed at ${date}`)
});

myWorker.on('error', err => {
    console.error(err);
});