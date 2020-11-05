const axios = require('axios');

const dogs_url = 'https://dog.ceo/api/breeds/list/all';

// Testing the axios lib by fetching data
// provided by the Dog API
const getDogs = async () => {
    try{
        let dogs = await axios.get(dogs_url);
        return dogs;
    }catch(error){
        console.log(error);
    }
}

const countDogs = async () => {
    let dogs = await getDogs();

    if (dogs.data.message){
        let dogCount = Object.entries(dogs.data.message).length;
        console.log(`Number of fetched dogs is ${dogCount}!`);
    }
}

countDogs();