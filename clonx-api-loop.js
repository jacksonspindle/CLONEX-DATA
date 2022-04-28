// LOOPING THROUGH EACH INDIVIDUAL CLONEX ASSET OPENSEA API ENDPOINT
// reason I had to do this is because without an OpenSea API key I am only allowed to get an individual JSON file for each CloneX.
// In order to create a master API I can query I needed to download each of the 19238 CloneX asset JSON files individually and then push them all into 1 single JSON file



// I used this loop to automatically generate each URL based on the Clone Token ID
// Then I copied the resulting list of URLs and used an extension to mass download all the links at once (this took a few hours)
let loop = "";
        let clone = 0;
        while (clone < 19239) {
            loop += `https://api.opensea.io/api/v1/asset/0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B/${clone}/?format=json&include_orders=false` + "<br></br>";
            clone++;
        }

document.getElementById("loop").innerHTML = loop;



// Here I'm combining all the individual JSON objects into a masterAPI array using fetch() and push()
let masterAPI = []

//This loops through each CloneX JSON file and then pushes to masterAPI array
let jsonLoop = "";
        let cloneID = 1;
        while (cloneID < 101) {
            fetch(`./cloneObjects/clone${cloneID}.json`)
                .then(response => {
                    return response.json()
                })
                .then(data => masterAPI.push(data.image_original_url))
            cloneID++;

            // console.log(JSON.stringify(masterAPI))
        }




// document.getElementById("loop").textContent = JSON.stringify(masterAPI);




console.log(masterAPI)

