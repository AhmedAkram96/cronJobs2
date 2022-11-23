export const config = {
    //Example for a job that's scheduled frequently
    receiveMoney: {
        frequency: "* * * * * *",
    },
    //Example for a job that's scheduled for single run at exact time
    sendMoney: {
        frequency: "30 3 2 20 11 *",
    }
}