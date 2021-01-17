//Node core API is built around events; events that listen for events, in other words, something that waits for something else to happen
//so that it can happen and then cause a chain reaction which leads to the apocalypse of the entire world.

/* 
.on = listen for an event
.emit = fire an event
*/

const EventEmitter = require(`events`);

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on(`event`, ()=> console.log("Event Fired"));

//Init Event
myEmitter.emit(`event`);

