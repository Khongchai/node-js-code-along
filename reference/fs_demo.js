const fs = require('fs');
const path = require('path');

/*
These fs functions are asynchronous, they take a callback function
several methods have their own synchronous version; consult documentation: https://nodejs.org/en/docs/
fs.mkdir(path.join(__dirname, '/test'), {}, function(err)
{
    if (err) throw err;
    console.log(`Folder created...`);
}); */

// Create and write to file (also create folder); overwrite existing data
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), `Hello World!`, function(err)
{
    if (err) throw err;
    console.log(`File written ...`);

    // Append inside callback of write
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ` \nHellow World Again!`, function(err)
    {
        if (err) throw err;
        console.log(`File appended ...`);
    });

    //Then read the file
    // Read file
    fs.readFile(path.join(__dirname, '/test', 'hello.txt'), `utf8`, function(err, data)
    {
        if (err) throw err;
        console.log(data);
    });
    /*
        fs.rename(
            path.join(__dirname, '/test', 'hello.txt'), <<<<< from
            path.join(__dirname, '/test', 'helloworld.txt'), <<<< to
            function(err)
            {
                if (err) throw err;
                console.log("File renamed...");
            });
    */
});

