const https = require('https');

// Performing a GET request
const options = {
    hostname: 'flaviocopes.com',
    port: 443,
    path: '/todos',
    method: 'GET'
};

const request = https.request(options, (res) =>{
    console.log(`Status code: ${res.statusCode}`);

    res.on('data', (data) =>{
        process.stdout.write(data);
    });
});

request.on('error', (error) => {
    console.log(error);
})

request.end();

// Performing a POST request
const postData = JSON.stringify({
    todo: 'buy some god damn milk'
});

const postOptions = {
    host: 'flaviocopes.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};

const postRequest = https.request(postOptions, (res) => {
    if (res.statusCode === 200){
        console.log(res.data);
    }else{
        console.log(`Error, status code: ${res.statusCode}`);
    }
})

postRequest.on('error', (error) => {
    console.log(error);
})

postRequest.end();
