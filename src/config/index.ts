export const config = {
    //Example for a job that's scheduled frequently
    receiveMoney: {
        frequency: "* * * * * *",
        handler: "../handlers/receiveMoney",
        singleRun: true
    },
    //Example for a job that's scheduled for single run at exact time
    sendMoney: {
        frequency: "30 3 2 20 11 *",
        handler: "../handlers/sendMoney"
    }
}