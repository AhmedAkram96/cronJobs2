
# cronJobs-Scheduler-optimized

In this repo, we are creating another version of the the cronjobs scheduler app [here](https://github.com/AhmedAkram96/cronJobs) where we are using data storage for jobs (redis) to persist them and avoid loss, crashes and do retrials.

## Run the app with Docker Compose:

1. Run `docker-compose up --build` 

## User Manual to add jobs

1. Inside the `handlers` folder, users should be creating a new file for their job wrapped inside a function.
    
      **filename** : `ReadmeExample.ts`
      
      **content** : ```
                  export const ReadmeExample = () => {
                      console.log("function logic!")
                  }
              ```
2. Import the function in the `handlers` folder index file.

3. Users then should open `config` folder, at which they can append their created job along with its exact frequency to be executed at.

    ```
    export const config = {
    ReadmeExample: {
        frequency: "* * * * * *",
        }
    }
    ```
4. Frequency specs:
    1. **" * * * * * * "** : Each astric means: second, minute, hour, day of month, month, day of week, in the same order.
    3. **"*/2"** : means every 2 seconds, minutes,hours..etc according to it's place.
    4. If you want to have a single run for the job, you have to specify values at the 6 entries (or 5 without seconds) exactly.
        
        for example : **"3 2 20 11 5"**
        
4. Run `docker-compose up --build`


## Future Improvements

1. Our app can be using express server in the next phase, through which we can expose an endpoint that accepts a **job** and **frequency** and schedule them inside the in memory/db scheduler.
