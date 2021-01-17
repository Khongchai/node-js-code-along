const EventEmitter = require(`events`);
const path = require(`path`);
const fs = require("fs");
const uuid = require(`uuid`);


class Logger extends EventEmitter
{
    log(msg)
    {
        // Calls an event
        this.emit(`greet`, {id: uuid.v4(), msg, dataInHellotxt:  this.readHelloFile()});
    }

    readHelloFile()
    {
        let joinedPath = path.join(__dirname, `/reference/test`, "hello.txt");
        let returnThis;
        returnThis =  fs.readFileSync(joinedPath, "utf-8", (err, data) => 
            {
                if (err) throw err;
                return data
            });

        return returnThis;
    }
}

const logger = new Logger();

//(data) here is the argument passed by the "emit" function in logger.js
logger.on('greet', (data) => console.log(`Called Listener: `, data));

logger.log(`Hello world`);


