const https = require('https');
fs = require('fs');

let name = 'Jmd';
const url = `https://raider.io/api/search-advanced?type=character&name%5B0%5D%5Bcontains%5D=${name}`;
https.get(url, resp => {
let dataMain = '';

resp.on('data', chunk => {
  dataMain += chunk;
});

resp.on('end', () => {

let charId = '';
let realm = 'Area 52';

  let userJSON = JSON.parse(dataMain).matches;
  name = name[0].toUpperCase() + name.substring(1);
//check charId scope
        for(key in userJSON) 
          if(userJSON[key].data.realm.name === realm && userJSON[key].name === name) {
            charId = userJSON[key].data.id;
            break
          };

        const dungeonId = {
          freehold : 9164,
          mechagon_junkyard : 800001,
          tol_dagor : 9327,
          ataldazar : 9028,
          the_motherload : 8064,
          shrine_of_the_storm : 9525,
          mechagon_workshop : 800002,
          the_underrot : 9391,
          temple_of_sethraliss : 9527,
          kings_rest : 9526,
          waycrest_manor : 9424,
          siege_of_boralus : 9354,
        };

        let dungeonName = dungeonId.freehold; //from html form
    
        https.get(`https://raider.io/api/characters/mythic-plus-runs?season=season-bfa-4&characterId=${charId}&dungeonId=${dungeonName}&role=all&specId=0&mode=scored&affixes=all&date=all`, (resp) => {

        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          JSON.parse(data);
        });

      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });

      let data = '';
      let x = 0;
      let completeData = '';
  for(let key in dungeonId){
         https.get(`https://raider.io/api/characters/mythic-plus-runs?season=season-bfa-4&characterId=${charId}&dungeonId=${dungeonId[key]}&role=all&specId=0&mode=scored&affixes=all&date=all`, (resp) => {


        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          data += ',';
            completeData += data;x++
          console.log(x);
          if(x === 11) fs.writeFile('dungeon',data, err => { if(err) return console.log(err); });
        });

      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
   };
  });
}) .on('error', err => console.log('Error: ' + err.message));


