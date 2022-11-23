import { config } from "./config"
import "./processes/sampleQueueProcessor"
import "./config/date"
import { scheduleJobs } from "./queues/sampleQueue"
scheduleJobs(config)
