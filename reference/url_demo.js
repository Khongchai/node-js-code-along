const myURL = new URL('https://khongchai.github.io/journeys?id=100&status=active');

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

//Host (root domain)
console.log(myURL.host);

// Hostname; if the url has a port, it will not be included in here.
console.log(myURL.hostname);

//Pathname
console.log(myURL.pathname);

//Seriazlied qeury; get anything after the question mark in a GET request.
console.log(myURL.search);

// Get  parameters as an object
console.log(myURL.searchParams);

// Add params
myURL.searchParams.append(`abc`, `123`);
console.log(myURL.searchParams);

//Loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));






