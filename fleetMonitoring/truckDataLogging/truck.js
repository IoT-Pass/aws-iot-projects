
var awsIot = require('aws-iot-device-sdk');

const aws = require('aws-sdk');

var device = awsIot.device({
  keyPath: './0b097dc5cf-private.pem.key',
  certPath: './0b097dc5cf-certificate.pem.crt',
  caPath: './rootCA.pem',
  clientId: 'CognitiveTruck',
  host: 'awf0qyr416vol.iot.us-east-1.amazonaws.com'
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
  .on('connect', function() {
    console.log('connect');

    var i = 0;

    setInterval(function() {
        if (i >= sampleTruckData.length) {

          return;
        }

        device.publish('trucks/myCognitiveTruckPolicy/1', JSON.stringify(sampleTruckData[i]));

        console.log('\n Publishing:\n', JSON.stringify(sampleTruckData[i]));

        i++;
      }, 2 * 1000);

  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });

device
   .on('close', function() {
      console.log('close');
    });
device
   .on('reconnect', function() {
      console.log('reconnect');
    });
device
   .on('offline', function() {
      console.log('offline');
    });
device
   .on('error', function(error) {
      console.log('error', error);
    });

const sampleTruckData = [{'nms': 1412638168724,'location': '39.09972,-94.57853','geoJSON': {'type': 'Point','coordinates': [-94.57853,39.09972]},'pressure': 111,'engine_temperature': 213,'cargo_temperature': 41,'rpm': 2216,'speed': 18,'battery': 12.3},{'nms': 1412638168724,'location': '39.09908,-94.57276','geoJSON': {'type': 'Point','coordinates': [-94.57276,39.09908]},'pressure': 111,'engine_temperature': 232,'cargo_temperature': 38,'rpm': 3465,'speed': 38,'battery': 14.3},{'nms': 1412638168724,'location': '39.09608,-94.57731','geoJSON': {'type': 'Point','coordinates': [-94.57731,39.09608]},'pressure': 106,'engine_temperature': 227,'cargo_temperature': 39,'rpm': 2254,'speed': 26,'battery': 13.3},{'nms': 1412638168724,'location': '39.09664,-94.59459','geoJSON': {'type': 'Point','coordinates': [-94.59459,39.09664]},'pressure': 109,'engine_temperature': 246,'cargo_temperature': 42,'rpm': 3452,'speed': 46,'battery': 13.3},{'nms': 1412638168724,'location': '39.10003,-94.62029','geoJSON': {'type': 'Point','coordinates': [-94.62029,39.10003]},'pressure': 112,'engine_temperature': 214,'cargo_temperature': 35,'rpm': 2953,'speed': 46,'battery': 12.3},{'nms': 1412638168724,'location': '39.09326,-94.62767','geoJSON': {'type': 'Point','coordinates': [-94.62767,39.09326]},'pressure': 112,'engine_temperature': 243,'cargo_temperature': 39,'rpm': 2877,'speed': 58,'battery': 11.3},{'nms': 1412638168724,'location': '39.09257,-94.6391','geoJSON': {'type': 'Point','coordinates': [-94.6391,39.09257]},'pressure': 105,'engine_temperature': 245,'cargo_temperature': 39,'rpm': 2776,'speed': 51,'battery': 14.3},{'nms': 1412638168724,'location': '39.09701,-94.6571','geoJSON': {'type': 'Point','coordinates': [-94.6571,39.09701]},'pressure': 103,'engine_temperature': 220,'cargo_temperature': 39,'rpm': 1617,'speed': 51,'battery': 12.3},{'nms': 1412638168724,'location': '39.10442,-94.67646','geoJSON': {'type': 'Point','coordinates': [-94.67646,39.10442]},'pressure': 103,'engine_temperature': 237,'cargo_temperature': 37,'rpm': 1881,'speed': 15,'battery': 11.3},{'nms': 1412638168724,'location': '39.10609,-94.69806','geoJSON': {'type': 'Point','coordinates': [-94.69806,39.10609]},'pressure': 118,'engine_temperature': 233,'cargo_temperature': 35,'rpm': 1815,'speed': 18,'battery': 14.3},{'nms': 1412638168724,'location': '39.10594,-94.72404','geoJSON': {'type': 'Point','coordinates': [-94.72404,39.10594]},'pressure': 101,'engine_temperature': 230,'cargo_temperature': 38,'rpm': 2695,'speed': 33,'battery': 14.3},{'nms': 1412638168724,'location': '39.10488,-94.78237','geoJSON': {'type': 'Point','coordinates': [-94.78237,39.10488]},'pressure': 105,'engine_temperature': 222,'cargo_temperature': 39,'rpm': 1510,'speed': 29,'battery': 13.3},{'nms': 1412638168724,'location': '39.10514,-94.84945','geoJSON': {'type': 'Point','coordinates': [-94.84945,39.10514]},'pressure': 118,'engine_temperature': 218,'cargo_temperature': 41,'rpm': 2679,'speed': 41,'battery': 11.3},{'nms': 1412638168724,'location': '39.08989,-94.91053','geoJSON': {'type': 'Point','coordinates': [-94.91053,39.08989]},'pressure': 108,'engine_temperature': 231,'cargo_temperature': 35,'rpm': 3095,'speed': 23,'battery': 13.3},{'nms': 1412638168724,'location': '39.08478,-94.92918','geoJSON': {'type': 'Point','coordinates': [-94.92918,39.08478]},'pressure': 111,'engine_temperature': 219,'cargo_temperature': 38,'rpm': 1703,'speed': 58,'battery': 12.3},{'nms': 1412638168724,'location': '39.07097,-95.00527','geoJSON': {'type': 'Point','coordinates': [-95.00527,39.07097]},'pressure': 119,'engine_temperature': 223,'cargo_temperature': 37,'rpm': 2156,'speed': 46,'battery': 11.3},{'nms': 1412638168724,'location': '39.06469,-95.04014','geoJSON': {'type': 'Point','coordinates': [-95.04014,39.06469]},'pressure': 117,'engine_temperature': 240,'cargo_temperature': 40,'rpm': 1802,'speed': 35,'battery': 14.3},{'nms': 1412638168724,'location': '39.045,-95.09102','geoJSON': {'type': 'Point','coordinates': [-95.09102,39.045]},'pressure': 119,'engine_temperature': 243,'cargo_temperature': 39,'rpm': 3316,'speed': 53,'battery': 13.3},{'nms': 1412638168724,'location': '39.02121,-95.13523','geoJSON': {'type': 'Point','coordinates': [-95.13523,39.02121]},'pressure': 113,'engine_temperature': 212,'cargo_temperature': 38,'rpm': 3163,'speed': 40,'battery': 12.3},{'nms': 1412638168724,'location': '39.01038,-95.15322','geoJSON': {'type': 'Point','coordinates': [-95.15322,39.01038]},'pressure': 106,'engine_temperature': 241,'cargo_temperature': 41,'rpm': 2818,'speed': 35,'battery': 14.3},{'nms': 1412638168724,'location': '38.99703,-95.18568','geoJSON': {'type': 'Point','coordinates': [-95.18568,38.99703]},'pressure': 102,'engine_temperature': 211,'cargo_temperature': 41,'rpm': 1749,'speed': 24,'battery': 11.3},{'nms': 1412638168724,'location': '38.99359,-95.22965','geoJSON': {'type': 'Point','coordinates': [-95.22965,38.99359]},'pressure': 112,'engine_temperature': 240,'cargo_temperature': 37,'rpm': 2370,'speed': 30,'battery': 14.3},{'nms': 1412638168724,'location': '38.99013,-95.26026','geoJSON': {'type': 'Point','coordinates': [-95.26026,38.99013]},'pressure': 114,'engine_temperature': 210,'cargo_temperature': 36,'rpm': 1636,'speed': 14,'battery': 14.3},{'nms': 1412638168724,'location': '38.998,-95.31716','geoJSON': {'type': 'Point','coordinates': [-95.31716,38.998]},'pressure': 103,'engine_temperature': 212,'cargo_temperature': 41,'rpm': 2510,'speed': 50,'battery': 11.3},{'nms': 1412638168724,'location': '38.99719,-95.35307','geoJSON': {'type': 'Point','coordinates': [-95.35307,38.99719]},'pressure': 106,'engine_temperature': 226,'cargo_temperature': 41,'rpm': 2051,'speed': 45,'battery': 12.3},{'nms': 1412638168724,'location': '39.00195,-95.431','geoJSON': {'type': 'Point','coordinates': [-95.431,39.00195]},'pressure': 110,'engine_temperature': 215,'cargo_temperature': 39,'rpm': 2395,'speed': 48,'battery': 12.3},{'nms': 1412638168724,'location': '39.01857,-95.52503','geoJSON': {'type': 'Point','coordinates': [-95.52503,39.01857]},'pressure': 103,'engine_temperature': 240,'cargo_temperature': 40,'rpm': 1914,'speed': 19,'battery': 13.3},{'nms': 1412638168724,'location': '39.03078,-95.57892','geoJSON': {'type': 'Point','coordinates': [-95.57892,39.03078]},'pressure': 111,'engine_temperature': 238,'cargo_temperature': 39,'rpm': 2996,'speed': 54,'battery': 13.3},{'nms': 1412638168724,'location': '39.03506,-95.60582','geoJSON': {'type': 'Point','coordinates': [-95.60582,39.03506]},'pressure': 106,'engine_temperature': 228,'cargo_temperature': 42,'rpm': 2395,'speed': 31,'battery': 14.3},{'nms': 1412638168724,'location': '39.03454,-95.6477','geoJSON': {'type': 'Point','coordinates': [-95.6477,39.03454]},'pressure': 114,'engine_temperature': 247,'cargo_temperature': 42,'rpm': 2984,'speed': 13,'battery': 14.3},{'nms': 1412638168724,'location': '39.04236,-95.67102','geoJSON': {'type': 'Point','coordinates': [-95.67102,39.04236]},'pressure': 112,'engine_temperature': 228,'cargo_temperature': 39,'rpm': 1904,'speed': 12,'battery': 12.3},{'nms': 1412638168724,'location': '39.05611,-95.66857','geoJSON': {'type': 'Point','coordinates': [-95.66857,39.05611]},'pressure': 117,'engine_temperature': 227,'cargo_temperature': 41,'rpm': 3388,'speed': 11,'battery': 11.3},{'nms': 1412638168724,'location': '39.06419,-95.68249','geoJSON': {'type': 'Point','coordinates': [-95.68249,39.06419]},'pressure': 116,'engine_temperature': 213,'cargo_temperature': 35,'rpm': 2011,'speed': 19,'battery': 14.3},{'nms': 1412638168724,'location': '39.06824,-95.71593','geoJSON': {'type': 'Point','coordinates': [-95.71593,39.06824]},'pressure': 105,'engine_temperature': 244,'cargo_temperature': 35,'rpm': 2824,'speed': 46,'battery': 13.3},{'nms': 1412638168724,'location': '39.06372,-95.73827','geoJSON': {'type': 'Point','coordinates': [-95.73827,39.06372]},'pressure': 118,'engine_temperature': 230,'cargo_temperature': 38,'rpm': 2083,'speed': 13,'battery': 14.3},{'nms': 1412638168724,'location': '39.05376,-95.75965','geoJSON': {'type': 'Point','coordinates': [-95.75965,39.05376]},'pressure': 108,'engine_temperature': 245,'cargo_temperature': 42,'rpm': 3039,'speed': 39,'battery': 13.3},{'nms': 1412638168724,'location': '39.05044,-95.81616','geoJSON': {'type': 'Point','coordinates': [-95.81616,39.05044]},'pressure': 111,'engine_temperature': 225,'cargo_temperature': 42,'rpm': 1951,'speed': 17,'battery': 11.3},{'nms': 1412638168724,'location': '39.05703,-95.84472','geoJSON': {'type': 'Point','coordinates': [-95.84472,39.05703]},'pressure': 102,'engine_temperature': 210,'cargo_temperature': 40,'rpm': 3061,'speed': 36,'battery': 11.3},{'nms': 1412638168724,'location': '39.05866,-96.01004','geoJSON': {'type': 'Point','coordinates': [-96.01004,39.05866]},'pressure': 103,'engine_temperature': 215,'cargo_temperature': 37,'rpm': 1546,'speed': 49,'battery': 12.3},{'nms': 1412638168724,'location': '39.06047,-96.11803','geoJSON': {'type': 'Point','coordinates': [-96.11803,39.06047]},'pressure': 102,'engine_temperature': 211,'cargo_temperature': 35,'rpm': 3114,'speed': 10,'battery': 14.3},{'nms': 1412638168724,'location': '39.05834,-96.14115','geoJSON': {'type': 'Point','coordinates': [-96.14115,39.05834]},'pressure': 115,'engine_temperature': 239,'cargo_temperature': 36,'rpm': 3498,'speed': 23,'battery': 14.3},{'nms': 1412638168724,'location': '39.06556,-96.19052','geoJSON': {'type': 'Point','coordinates': [-96.19052,39.06556]},'pressure': 101,'engine_temperature': 234,'cargo_temperature': 41,'rpm': 1573,'speed': 18,'battery': 14.3},{'nms': 1412638168724,'location': '39.06433,-96.44219','geoJSON': {'type': 'Point','coordinates': [-96.44219,39.06433]},'pressure': 106,'engine_temperature': 210,'cargo_temperature': 36,'rpm': 3285,'speed': 50,'battery': 12.3},{'nms': 1412638168724,'location': '39.0693,-96.48436','geoJSON': {'type': 'Point','coordinates': [-96.48436,39.0693]},'pressure': 119,'engine_temperature': 221,'cargo_temperature': 41,'rpm': 1895,'speed': 38,'battery': 14.3},{'nms': 1412638168724,'location': '39.06285,-96.52279','geoJSON': {'type': 'Point','coordinates': [-96.52279,39.06285]},'pressure': 112,'engine_temperature': 238,'cargo_temperature': 38,'rpm': 1834,'speed': 15,'battery': 11.3},{'nms': 1412638168724,'location': '39.06568,-96.61286','geoJSON': {'type': 'Point','coordinates': [-96.61286,39.06568]},'pressure': 106,'engine_temperature': 233,'cargo_temperature': 41,'rpm': 2325,'speed': 42,'battery': 12.3},{'nms': 1412638168724,'location': '39.05996,-96.7415','geoJSON': {'type': 'Point','coordinates': [-96.7415,39.05996]},'pressure': 108,'engine_temperature': 237,'cargo_temperature': 36,'rpm': 3313,'speed': 38,'battery': 12.3},{'nms': 1412638168724,'location': '39.04001,-96.76547','geoJSON': {'type': 'Point','coordinates': [-96.76547,39.04001]},'pressure': 112,'engine_temperature': 237,'cargo_temperature': 36,'rpm': 3033,'speed': 29,'battery': 14.3},{'nms': 1412638168724,'location': '39.02869,-96.791','geoJSON': {'type': 'Point','coordinates': [-96.791,39.02869]},'pressure': 106,'engine_temperature': 249,'cargo_temperature': 39,'rpm': 2727,'speed': 33,'battery': 11.3},{'nms': 1412638168724,'location': '39.00075,-96.8492','geoJSON': {'type': 'Point','coordinates': [-96.8492,39.00075]},'pressure': 105,'engine_temperature': 223,'cargo_temperature': 39,'rpm': 3486,'speed': 27,'battery': 14.3},{'nms': 1412638168724,'location': '39.00091,-96.91373','geoJSON': {'type': 'Point','coordinates': [-96.91373,39.00091]},'pressure': 105,'engine_temperature': 247,'cargo_temperature': 36,'rpm': 2337,'speed': 27,'battery': 14.3},{'nms': 1412638168724,'location': '38.98969,-97.03256','geoJSON': {'type': 'Point','coordinates': [-97.03256,38.98969]},'pressure': 113,'engine_temperature': 246,'cargo_temperature': 41,'rpm': 1599,'speed': 53,'battery': 12.3},{'nms': 1412638168724,'location': '38.94565,-97.14362','geoJSON': {'type': 'Point','coordinates': [-97.14362,38.94565]},'pressure': 108,'engine_temperature': 245,'cargo_temperature': 36,'rpm': 1779,'speed': 57,'battery': 13.3},{'nms': 1412638168724,'location': '38.94341,-97.19925','geoJSON': {'type': 'Point','coordinates': [-97.19925,38.94341]},'pressure': 100,'engine_temperature': 228,'cargo_temperature': 35,'rpm': 1683,'speed': 50,'battery': 11.3},{'nms': 1412638168724,'location': '38.93585,-97.25901','geoJSON': {'type': 'Point','coordinates': [-97.25901,38.93585]},'pressure': 105,'engine_temperature': 226,'cargo_temperature': 36,'rpm': 3397,'speed': 46,'battery': 14.3},{'nms': 1412638168724,'location': '38.92886,-97.38487','geoJSON': {'type': 'Point','coordinates': [-97.38487,38.92886]},'pressure': 100,'engine_temperature': 246,'cargo_temperature': 35,'rpm': 2799,'speed': 59,'battery': 11.3},{'nms': 1412638168724,'location': '38.91165,-97.41839','geoJSON': {'type': 'Point','coordinates': [-97.41839,38.91165]},'pressure': 103,'engine_temperature': 232,'cargo_temperature': 35,'rpm': 2362,'speed': 37,'battery': 11.3},{'nms': 1412638168724,'location': '38.90729,-97.47376','geoJSON': {'type': 'Point','coordinates': [-97.47376,38.90729]},'pressure': 109,'engine_temperature': 235,'cargo_temperature': 35,'rpm': 1808,'speed': 34,'battery': 11.3},{'nms': 1412638168724,'location': '38.90043,-97.55542','geoJSON': {'type': 'Point','coordinates': [-97.55542,38.90043]},'pressure': 108,'engine_temperature': 240,'cargo_temperature': 40,'rpm': 2341,'speed': 17,'battery': 12.3},{'nms': 1412638168724,'location': '38.87447,-97.65253','geoJSON': {'type': 'Point','coordinates': [-97.65253,38.87447]},'pressure': 112,'engine_temperature': 239,'cargo_temperature': 37,'rpm': 3355,'speed': 13,'battery': 14.3},{'nms': 1412638168724,'location': '38.87942,-97.88257','geoJSON': {'type': 'Point','coordinates': [-97.88257,38.87942]},'pressure': 102,'engine_temperature': 243,'cargo_temperature': 39,'rpm': 3490,'speed': 43,'battery': 13.3},{'nms': 1412638168724,'location': '38.87795,-98.01892','geoJSON': {'type': 'Point','coordinates': [-98.01892,38.87795]},'pressure': 114,'engine_temperature': 218,'cargo_temperature': 42,'rpm': 1627,'speed': 47,'battery': 14.3},{'nms': 1412638168724,'location': '38.8737,-98.05546','geoJSON': {'type': 'Point','coordinates': [-98.05546,38.8737]},'pressure': 107,'engine_temperature': 241,'cargo_temperature': 36,'rpm': 1733,'speed': 31,'battery': 11.3},{'nms': 1412638168724,'location': '38.86778,-98.09278','geoJSON': {'type': 'Point','coordinates': [-98.09278,38.86778]},'pressure': 116,'engine_temperature': 232,'cargo_temperature': 42,'rpm': 2958,'speed': 14,'battery': 12.3},{'nms': 1412638168724,'location': '38.85988,-98.10678','geoJSON': {'type': 'Point','coordinates': [-98.10678,38.85988]},'pressure': 117,'engine_temperature': 240,'cargo_temperature': 42,'rpm': 1658,'speed': 42,'battery': 11.3},{'nms': 1412638168724,'location': '38.85535,-98.14483','geoJSON': {'type': 'Point','coordinates': [-98.14483,38.85535]},'pressure': 103,'engine_temperature': 239,'cargo_temperature': 39,'rpm': 3221,'speed': 34,'battery': 11.3},{'nms': 1412638168724,'location': '38.84913,-98.15982','geoJSON': {'type': 'Point','coordinates': [-98.15982,38.84913]},'pressure': 109,'engine_temperature': 226,'cargo_temperature': 35,'rpm': 3329,'speed': 16,'battery': 14.3},{'nms': 1412638168724,'location': '38.84867,-98.33039','geoJSON': {'type': 'Point','coordinates': [-98.33039,38.84867]},'pressure': 113,'engine_temperature': 223,'cargo_temperature': 38,'rpm': 1742,'speed': 26,'battery': 11.3},{'nms': 1412638168724,'location': '38.84901,-98.43209','geoJSON': {'type': 'Point','coordinates': [-98.43209,38.84901]},'pressure': 116,'engine_temperature': 235,'cargo_temperature': 36,'rpm': 2781,'speed': 40,'battery': 13.3},{'nms': 1412638168724,'location': '38.85036,-98.51037','geoJSON': {'type': 'Point','coordinates': [-98.51037,38.85036]},'pressure': 104,'engine_temperature': 234,'cargo_temperature': 39,'rpm': 2824,'speed': 22,'battery': 14.3},{'nms': 1412638168724,'location': '38.85673,-98.62965','geoJSON': {'type': 'Point','coordinates': [-98.62965,38.85673]},'pressure': 116,'engine_temperature': 213,'cargo_temperature': 37,'rpm': 2641,'speed': 13,'battery': 11.3},{'nms': 1412638168724,'location': '38.85726,-98.77475','geoJSON': {'type': 'Point','coordinates': [-98.77475,38.85726]},'pressure': 116,'engine_temperature': 234,'cargo_temperature': 37,'rpm': 1771,'speed': 35,'battery': 14.3},{'nms': 1412638168724,'location': '38.86373,-98.83804','geoJSON': {'type': 'Point','coordinates': [-98.83804,38.86373]},'pressure': 20,'engine_temperature': 243,'cargo_temperature': 35,'rpm': 2943,'speed': 45,'battery': 14.3},{'nms': 1412638168724,'location': '38.86321,-98.98829','geoJSON': {'type': 'Point','coordinates': [-98.98829,38.86321]},'pressure': 18,'engine_temperature': 224,'cargo_temperature': 36,'rpm': 2953,'speed': 33,'battery': 14.3},{'pressure': 18},{'nms': 1412638168724,'location': '38.863,-99.08356','geoJSON': {'type': 'Point','coordinates': [-99.08356,38.863]},'pressure': 22,'engine_temperature': 239,'cargo_temperature': 35,'rpm': 2197,'speed': 40,'battery': 11.3},{'nms': 1412638168724,'location': '38.87839,-99.13108','geoJSON': {'type': 'Point','coordinates': [-99.13108,38.87839]},'pressure': 115,'engine_temperature': 247,'cargo_temperature': 42,'rpm': 2188,'speed': 30,'battery': 12.3},{'nms': 1412638168724,'location': '38.87976,-99.21833','geoJSON': {'type': 'Point','coordinates': [-99.21833,38.87976]},'pressure': 111,'engine_temperature': 232,'cargo_temperature': 38,'rpm': 3245,'speed': 55,'battery': 12.3},{'nms': 1412638168724,'location': '38.87905,-99.27324','geoJSON': {'type': 'Point','coordinates': [-99.27324,38.87905]},'pressure': 100,'engine_temperature': 237,'cargo_temperature': 40,'rpm': 2070,'speed': 31,'battery': 12.3},{'nms': 1412638168724,'location': '38.92032,-99.37703','geoJSON': {'type': 'Point','coordinates': [-99.37703,38.92032]},'pressure': 112,'engine_temperature': 235,'cargo_temperature': 36,'rpm': 2968,'speed': 21,'battery': 13.3},{'nms': 1412638168724,'location': '38.92253,-99.42598','geoJSON': {'type': 'Point','coordinates': [-99.42598,38.92253]},'pressure': 112,'engine_temperature': 234,'cargo_temperature': 35,'rpm': 1847,'speed': 43,'battery': 13.3},{'nms': 1412638168724,'location': '38.95023,-99.57','geoJSON': {'type': 'Point','coordinates': [-99.57,38.95023]},'pressure': 117,'engine_temperature': 221,'cargo_temperature': 38,'rpm': 2512,'speed': 38,'battery': 12.3},{'nms': 1412638168724,'location': '38.97905,-99.69186','geoJSON': {'type': 'Point','coordinates': [-99.69186,38.97905]},'pressure': 111,'engine_temperature': 216,'cargo_temperature': 36,'rpm': 2903,'speed': 32,'battery': 13.3},{'nms': 1412638168724,'location': '38.99835,-99.8','geoJSON': {'type': 'Point','coordinates': [-99.8,38.99835]},'pressure': 111,'engine_temperature': 219,'cargo_temperature': 41,'rpm': 1792,'speed': 26,'battery': 12.3},{'nms': 1412638168724,'location': '39.02315,-100.01715','geoJSON': {'type': 'Point','coordinates': [-100.01715,39.02315]},'pressure': 105,'engine_temperature': 230,'cargo_temperature': 37,'rpm': 2825,'speed': 46,'battery': 11.3},{'nms': 1412638168724,'location': '39.025,-100.17086','geoJSON': {'type': 'Point','coordinates': [-100.17086,39.025]},'pressure': 115,'engine_temperature': 238,'cargo_temperature': 35,'rpm': 3033,'speed': 51,'battery': 12.3},{'nms': 1412638168724,'location': '39.09749,-100.32972','geoJSON': {'type': 'Point','coordinates': [-100.32972,39.09749]},'pressure': 108,'engine_temperature': 233,'cargo_temperature': 42,'rpm': 2431,'speed': 33,'battery': 11.3},{'nms': 1412638168724,'location': '39.11146,-100.48992','geoJSON': {'type': 'Point','coordinates': [-100.48992,39.11146]},'pressure': 103,'engine_temperature': 230,'cargo_temperature': 37,'rpm': 2251,'speed': 22,'battery': 14.3},{'nms': 1412638168724,'location': '39.1124,-100.79566','geoJSON': {'type': 'Point','coordinates': [-100.79566,39.1124]},'pressure': 103,'engine_temperature': 233,'cargo_temperature': 35,'rpm': 1848,'speed': 34,'battery': 12.3},{'nms': 1412638168724,'location': '39.11639,-100.80508','geoJSON': {'type': 'Point','coordinates': [-100.80508,39.11639]},'pressure': 100,'engine_temperature': 218,'cargo_temperature': 42,'rpm': 1636,'speed': 48,'battery': 12.3},{'nms': 1412638168724,'location': '39.19882,-100.8799','geoJSON': {'type': 'Point','coordinates': [-100.8799,39.19882]},'pressure': 104,'engine_temperature': 221,'cargo_temperature': 40,'rpm': 3003,'speed': 55,'battery': 13.3},{'nms': 1412638168724,'location': '39.31055,-100.97016','geoJSON': {'type': 'Point','coordinates': [-100.97016,39.31055]},'pressure': 111,'engine_temperature': 249,'cargo_temperature': 35,'rpm': 1665,'speed': 10,'battery': 12.3},{'nms': 1412638168724,'location': '39.32151,-100.99323','geoJSON': {'type': 'Point','coordinates': [-100.99323,39.32151]},'pressure': 107,'engine_temperature': 211,'cargo_temperature': 41,'rpm': 1815,'speed': 51,'battery': 12.3},{'nms': 1412638168724,'location': '39.36467,-101.03971','geoJSON': {'type': 'Point','coordinates': [-101.03971,39.36467]},'pressure': 116,'engine_temperature': 224,'cargo_temperature': 38,'rpm': 2920,'speed': 58,'battery': 14.3},{'nms': 1412638168724,'location': '39.36609,-101.19591','geoJSON': {'type': 'Point','coordinates': [-101.19591,39.36609]},'pressure': 102,'engine_temperature': 231,'cargo_temperature': 38,'rpm': 3313,'speed': 44,'battery': 13.3},{'nms': 1412638168724,'location': '39.33348,-101.38496','geoJSON': {'type': 'Point','coordinates': [-101.38496,39.33348]},'pressure': 109,'engine_temperature': 249,'cargo_temperature': 36,'rpm': 1991,'speed': 33,'battery': 13.3},{'nms': 1412638168724,'location': '39.3297,-101.66173','geoJSON': {'type': 'Point','coordinates': [-101.66173,39.3297]},'pressure': 100,'engine_temperature': 214,'cargo_temperature': 37,'rpm': 2177,'speed': 40,'battery': 11.3},{'nms': 1412638168724,'location': '39.3281,-101.73205','geoJSON': {'type': 'Point','coordinates': [-101.73205,39.3281]},'pressure': 108,'engine_temperature': 237,'cargo_temperature': 41,'rpm': 1604,'speed': 31,'battery': 12.3},{'nms': 1412638168724,'location': '39.32884,-101.87913','geoJSON': {'type': 'Point','coordinates': [-101.87913,39.32884]},'pressure': 105,'engine_temperature': 238,'cargo_temperature': 37,'rpm': 1633,'speed': 22,'battery': 13.3},{'nms': 1412638168724,'location': '39.32976,-101.90256','geoJSON': {'type': 'Point','coordinates': [-101.90256,39.32976]},'pressure': 115,'engine_temperature': 246,'cargo_temperature': 38,'rpm': 2377,'speed': 40,'battery': 13.3},{'nms': 1412638168724,'location': '39.33007,-102.03791','geoJSON': {'type': 'Point','coordinates': [-102.03791,39.33007]},'pressure': 117,'engine_temperature': 222,'cargo_temperature': 41,'rpm': 1563,'speed': 56,'battery': 12.3},{'nms': 1412638168724,'location': '39.31976,-102.15085','geoJSON': {'type': 'Point','coordinates': [-102.15085,39.31976]},'pressure': 110,'engine_temperature': 243,'cargo_temperature': 35,'rpm': 2722,'speed': 26,'battery': 13.3},{'nms': 1412638168724,'location': '39.30672,-102.2473','geoJSON': {'type': 'Point','coordinates': [-102.2473,39.30672]},'pressure': 110,'engine_temperature': 245,'cargo_temperature': 38,'rpm': 1765,'speed': 29,'battery': 14.3},{'nms': 1412638168724,'location': '39.29438,-102.27172','geoJSON': {'type': 'Point','coordinates': [-102.27172,39.29438]},'pressure': 103,'engine_temperature': 240,'cargo_temperature': 36,'rpm': 2174,'speed': 53,'battery': 13.3},{'nms': 1412638168724,'location': '39.29302,-102.45545','geoJSON': {'type': 'Point','coordinates': [-102.45545,39.29302]},'pressure': 117,'engine_temperature': 248,'cargo_temperature': 36,'rpm': 1604,'speed': 59,'battery': 14.3},{'nms': 1412638168724,'location': '39.2937,-102.70745','geoJSON': {'type': 'Point','coordinates': [-102.70745,39.2937]},'pressure': 111,'engine_temperature': 249,'cargo_temperature': 40,'rpm': 2055,'speed': 37,'battery': 12.3},{'nms': 1412638168724,'location': '39.27283,-102.99299','geoJSON': {'type': 'Point','coordinates': [-102.99299,39.27283]},'pressure': 108,'engine_temperature': 244,'cargo_temperature': 36,'rpm': 2195,'speed': 43,'battery': 12.3},{'nms': 1412638168724,'location': '39.28451,-103.04759','geoJSON': {'type': 'Point','coordinates': [-103.04759,39.28451]},'pressure': 109,'engine_temperature': 220,'cargo_temperature': 35,'rpm': 2294,'speed': 36,'battery': 11.3},{'nms': 1412638168724,'location': '39.28694,-103.15909','geoJSON': {'type': 'Point','coordinates': [-103.15909,39.28694]},'pressure': 109,'engine_temperature': 213,'cargo_temperature': 40,'rpm': 3063,'speed': 56,'battery': 11.3},{'nms': 1412638168724,'location': '39.28301,-103.28804','geoJSON': {'type': 'Point','coordinates': [-103.28804,39.28301]},'pressure': 107,'engine_temperature': 217,'cargo_temperature': 40,'rpm': 2975,'speed': 43,'battery': 13.3},{'nms': 1412638168724,'location': '39.27659,-103.48135','geoJSON': {'type': 'Point','coordinates': [-103.48135,39.27659]},'pressure': 106,'engine_temperature': 219,'cargo_temperature': 37,'rpm': 2969,'speed': 40,'battery': 14.3},{'nms': 1412638168724,'location': '39.27006,-103.51868','geoJSON': {'type': 'Point','coordinates': [-103.51868,39.27006]},'pressure': 100,'engine_temperature': 223,'cargo_temperature': 35,'rpm': 3101,'speed': 43,'battery': 11.3},{'nms': 1412638168724,'location': '39.26491,-103.55761','geoJSON': {'type': 'Point','coordinates': [-103.55761,39.26491]},'pressure': 101,'engine_temperature': 231,'cargo_temperature': 35,'rpm': 2070,'speed': 12,'battery': 12.3},{'nms': 1412638168724,'location': '39.26503,-103.63668','geoJSON': {'type': 'Point','coordinates': [-103.63668,39.26503]},'pressure': 104,'engine_temperature': 219,'cargo_temperature': 39,'rpm': 2612,'speed': 52,'battery': 11.3},{'nms': 1412638168724,'location': '39.26204,-103.66333','geoJSON': {'type': 'Point','coordinates': [-103.66333,39.26204]},'pressure': 114,'engine_temperature': 246,'cargo_temperature': 42,'rpm': 2910,'speed': 15,'battery': 12.3},{'nms': 1412638168724,'location': '39.27334,-103.73062','geoJSON': {'type': 'Point','coordinates': [-103.73062,39.27334]},'pressure': 101,'engine_temperature': 247,'cargo_temperature': 41,'rpm': 2840,'speed': 37,'battery': 13.3},{'nms': 1412638168724,'location': '39.28697,-103.78722','geoJSON': {'type': 'Point','coordinates': [-103.78722,39.28697]},'pressure': 116,'engine_temperature': 234,'cargo_temperature': 42,'rpm': 2927,'speed': 41,'battery': 14.3},{'nms': 1412638168724,'location': '39.31175,-103.82452','geoJSON': {'type': 'Point','coordinates': [-103.82452,39.31175]},'pressure': 112,'engine_temperature': 229,'cargo_temperature': 40,'rpm': 1718,'speed': 58,'battery': 12.3},{'nms': 1412638168724,'location': '39.34763,-103.85335','geoJSON': {'type': 'Point','coordinates': [-103.85335,39.34763]},'pressure': 109,'engine_temperature': 248,'cargo_temperature': 39,'rpm': 1862,'speed': 26,'battery': 11.3},{'nms': 1412638168724,'location': '39.3763,-103.88447','geoJSON': {'type': 'Point','coordinates': [-103.88447,39.3763]},'pressure': 116,'engine_temperature': 216,'cargo_temperature': 42,'rpm': 1798,'speed': 30,'battery': 11.3},{'nms': 1412638168724,'location': '39.41329,-103.90178','geoJSON': {'type': 'Point','coordinates': [-103.90178,39.41329]},'pressure': 104,'engine_temperature': 235,'cargo_temperature': 35,'rpm': 2058,'speed': 36,'battery': 11.3},{'nms': 1412638168724,'location': '39.47553,-103.94462','geoJSON': {'type': 'Point','coordinates': [-103.94462,39.47553]},'pressure': 115,'engine_temperature': 246,'cargo_temperature': 39,'rpm': 1714,'speed': 12,'battery': 12.3},{'nms': 1412638168724,'location': '39.53178,-103.99054','geoJSON': {'type': 'Point','coordinates': [-103.99054,39.53178]},'pressure': 100,'engine_temperature': 212,'cargo_temperature': 38,'rpm': 2157,'speed': 28,'battery': 11.3},{'nms': 1412638168724,'location': '39.63067,-104.05135','geoJSON': {'type': 'Point','coordinates': [-104.05135,39.63067]},'pressure': 114,'engine_temperature': 211,'cargo_temperature': 37,'rpm': 2239,'speed': 52,'battery': 14.3},{'nms': 1412638168724,'location': '39.68711,-104.12492','geoJSON': {'type': 'Point','coordinates': [-104.12492,39.68711]},'pressure': 112,'engine_temperature': 243,'cargo_temperature': 37,'rpm': 3112,'speed': 45,'battery': 13.3},{'nms': 1412638168724,'location': '39.71532,-104.22014','geoJSON': {'type': 'Point','coordinates': [-104.22014,39.71532]},'pressure': 115,'engine_temperature': 244,'cargo_temperature': 40,'rpm': 2654,'speed': 34,'battery': 13.3},{'nms': 1412638168724,'location': '39.72987,-104.28323','geoJSON': {'type': 'Point','coordinates': [-104.28323,39.72987]},'pressure': 106,'engine_temperature': 221,'cargo_temperature': 36,'rpm': 1657,'speed': 21,'battery': 14.3},{'nms': 1412638168724,'location': '39.7348,-104.3345','geoJSON': {'type': 'Point','coordinates': [-104.3345,39.7348]},'pressure': 114,'engine_temperature': 215,'cargo_temperature': 38,'rpm': 2183,'speed': 43,'battery': 11.3},{'nms': 1412638168724,'location': '39.73828,-104.4121','geoJSON': {'type': 'Point','coordinates': [-104.4121,39.73828]},'pressure': 119,'engine_temperature': 235,'cargo_temperature': 36,'rpm': 3140,'speed': 32,'battery': 11.3},{'nms': 1412638168724,'location': '39.73948,-104.6314','geoJSON': {'type': 'Point','coordinates': [-104.6314,39.73948]},'pressure': 112,'engine_temperature': 236,'cargo_temperature': 40,'rpm': 2810,'speed': 22,'battery': 12.3},{'nms': 1412638168724,'location': '39.74022,-104.66806','geoJSON': {'type': 'Point','coordinates': [-104.66806,39.74022]},'pressure': 100,'engine_temperature': 212,'cargo_temperature': 35,'rpm': 1899,'speed': 57,'battery': 12.3},{'nms': 1412638168724,'location': '39.74151,-104.73374','geoJSON': {'type': 'Point','coordinates': [-104.73374,39.74151]},'pressure': 100,'engine_temperature': 235,'cargo_temperature': 38,'rpm': 1642,'speed': 48,'battery': 11.3},{'nms': 1412638168724,'location': '39.76899,-104.80001','geoJSON': {'type': 'Point','coordinates': [-104.80001,39.76899]},'pressure': 119,'engine_temperature': 215,'cargo_temperature': 35,'rpm': 1571,'speed': 43,'battery': 12.3},{'nms': 1412638168724,'location': '39.77713,-104.88117','geoJSON': {'type': 'Point','coordinates': [-104.88117,39.77713]},'pressure': 105,'engine_temperature': 242,'cargo_temperature': 37,'rpm': 2815,'speed': 53,'battery': 12.3},{'nms': 1412638168724,'location': '39.78008,-104.94013','geoJSON': {'type': 'Point','coordinates': [-104.94013,39.78008]},'pressure': 104,'engine_temperature': 233,'cargo_temperature': 39,'rpm': 2333,'speed': 15,'battery': 11.3},{'nms': 1412638168724,'location': '39.77966,-104.96724','geoJSON': {'type': 'Point','coordinates': [-104.96724,39.77966]},'pressure': 106,'engine_temperature': 232,'cargo_temperature': 39,'rpm': 3488,'speed': 42,'battery': 11.3},{'nms': 1412638168724,'location': '39.76231,-104.98823','geoJSON': {'type': 'Point','coordinates': [-104.98823,39.76231]},'pressure': 115,'engine_temperature': 230,'cargo_temperature': 37,'rpm': 3446,'speed': 48,'battery': 14.3},{'nms': 1412638168724,'location': '39.73756,-104.98486','geoJSON': {'type': 'Point','coordinates': [-104.98486,39.73756]},'pressure': 106,'engine_temperature': 219,'cargo_temperature': 41,'rpm': 2370,'speed': 13,'battery': 11.3}];
