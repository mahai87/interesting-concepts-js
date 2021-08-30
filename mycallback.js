function welcomeMessage(greetHandler, name) {
    // console.log(greetHandler);
    greetHandler(name);
}

function morningGreeting(name) {

    console.log('Good Morning,', name)

}

const greeting = welcomeMessage(morningGreeting, 'Sakib');
// console.log(greeting);
// Clear 
