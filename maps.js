const axios = require('axios');
const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();

router.get('/get-map', async (req,res) => {
    axios.get('https://maps.googleapis.com/maps/api/staticmap', {
        headers : {
          'Content-Type': 'image/png'
        },
        responseType: 'arraybuffer',
        params: {
          size: '400x400',
          center: '59.900503,-135.478011',
          zoom: '4',
          path: "weight:3|color:orange|enc:_fisIp~u|U}|a@pytA_~b@hhCyhS~hResU||x@oig@rwg@amUfbjA}f[roaAynd@|vXxiAt{ZwdUfbjAewYrqGchH~vXkqnAria@c_o@inc@k{g@i`]o|F}vXaj\\h`]ovs@?yi_@rcAgtO|j_AyaJren@nzQrst@zuYh`]v|GbldEuzd@||x@spD|trAzwP|d_@yiB~vXmlWhdPez\\_{Km_`@~re@ew^rcAeu_@zhyByjPrst@ttGren@aeNhoFemKrvdAuvVidPwbVr~j@or@f_z@ftHr{ZlwBrvdAmtHrmT{rOt{Zz}E|c|@o|Lpn~AgfRpxqBfoVz_iAocAhrVjr@rh~@jzKhjp@``NrfQpcHrb^k|Dh_z@nwB|kb@a{R|yh@uyZ|llByuZpzw@wbd@rh~@||Fhqs@teTztrAupHhyY}t]huf@e|Fria@o}GfezAkdW|}[ocMt_Neq@ren@e~Ika@pgE|i|AfiQ|`l@uoJrvdAgq@fppAsjGhg`@|hQpg{Ai_V||x@mkHhyYsdP|xeA~gF|}[mv`@t_NitSfjp@c}Mhg`@sbChyYq}e@rwg@atFff}@ghN~zKybk@fl}A}cPftcAite@tmT__Lha@u~DrfQi}MhkSqyWivIumCria@ciO_tHifm@fl}A{rc@fbjAqvg@rrqAcjCf|i@mqJtb^s|@fbjA{wDfs`BmvEfqs@umWt_Nwn^pen@qiBr`xAcvMr{Zidg@dtjDkbM|d_@",
          key: process.env.API_KEY
        }
      })
      .then( function (response) {
        console.log('image sent...');
        res.send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
});

router.get('/test', (req, res) => {
    res.send('hello world!');
});

module.exports = router;