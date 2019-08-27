
const URI = 'http://10.0.2.2:3000';

export default {
    async fetchRoutines() {
        try {
                let response = await fetch(URI + '/routines');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}   