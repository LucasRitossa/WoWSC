const axios = require('axios').default;
fs = require('fs');

let name = 'jmd';
let realm = 'Area 52';

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
name = name[0].toUpperCase() + name.substring(1);
let bulkData = [];
//get charId
  axios.get(`https://raider.io/api/search-advanced?type=character&name%5B0%5D%5Bcontains%5D=${name}`)
    .then(function (response) {
      for(key in response.data.matches){
       if(response.data.matches[key].data.realm.name === realm && response.data.matches[key].name === name){
           charId = response.data.matches[key].data.id
            break;
         };
     };
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function(){
      let x = 0;
      for(key in dungeonId){
          let req = `https://raider.io/api/characters/mythic-plus-runs?season=season-bfa-4&characterId=${charId}&dungeonId=${dungeonId[key]}&role=all&specId=0&mode=scored&affixes=all&date=all`;
          console.log(req);

            axios.get(req)
            .then(function (response) {
              bulkData.push(response.data);
            }) 
            .then(function(){
              console.log(x);
              if(x == 12) for(el in bulkData) console.log(bulkData[el]);
              })
            .catch(function (error) {
              console.log(error);
              console.log('ERR');
            });
        x++;
      };
    });
