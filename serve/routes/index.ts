var express = require('express');
var router = express.Router();
var axios = require('axios')
// var redis = require("redis")
// var client = redis.createClient();
const LRU = require('lru-cache')
const cache = new LRU({
  max: 10000,
  ttl: 60 * 5 * 1000, // 5分钟
});


// client.on("error", function (err) {
//   console.log("Error " + err);
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express22' });
});

async function getData () {
     const coincapData = cache.get('coincapData')
    if(coincapData) {
      return {
        data : JSON.parse(coincapData),
        code: 200
      }
    }
    const res = await axios.get('https://api.coincap.io/v2/assets', {
      params: {
        limit: 20
      }
    })
    const data = res.data.data
    cache.set('coincapData', JSON.stringify(data))
    return {
      data,
      code: 200
    }
}

router.post('/money/list', async function(req, res, next) {
  const resp = await getData()
  res.send(resp)
});

module.exports = router;
