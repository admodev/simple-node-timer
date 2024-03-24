const readline = require('readline');

let selectedTimeInHours, selectedTimeInMinutes, selectedTimeInSeconds = 0;
let hasSelectedTime = false;

// User input
const { stdin: input, stdout: output } = require('process');

const read_line = readline.createInterface({ input, output });

// Get the user input
read_line.question("Enter the desired time in format 'HH:MM:SS': ", userSelectedTime => {
    console.log(`Selected time is: ${userSelectedTime}`);

    // Split the user input where : is placed
    const splittedTime = userSelectedTime.split(':');

    selectedTimeInHours = parseInt(splittedTime[0]);
    selectedTimeInMinutes = parseInt(splittedTime[1]);
    selectedTimeInSeconds = parseInt(splittedTime[2]);
    console.log(`Selected time in hours: ${selectedTimeInHours}, selected time in minutes: ${selectedTimeInMinutes}, selected time in seconds: ${selectedTimeInSeconds}`);

    hasSelectedTime = true;

    // Timer logic
    setInterval(() => {
        if (hasSelectedTime) {
            if (selectedTimeInSeconds === 0) {
                if (selectedTimeInMinutes === 0) {
                    if (selectedTimeInHours === 0) {
                        clearInterval(); // Time's up, clear the interval
                        console.log("Time's up!");
                        read_line.close(); // Close readline interface
                        return;
                    }
                    selectedTimeInHours--;
                    selectedTimeInMinutes = 59;
                } else {
                    selectedTimeInMinutes--;
                }
                selectedTimeInSeconds = 59;
            } else {
                selectedTimeInSeconds--;
            }

            console.log(`Time remaining: ${selectedTimeInHours}:${selectedTimeInMinutes}:${selectedTimeInSeconds}`);
        }
    }, 1000);
});

// Close the interface when user input is completed
read_line.on('close', () => {
    console.log('Closing the program.');
    process.exit(0);
});

