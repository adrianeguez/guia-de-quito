(function () {

  'use strict';

  function PointOfInterestFactory($http, ApiUrl) {
    return {
      getPointsOfInterest: function (userId, latitude,
                                     longitude) {
        var url =  ApiUrl
        //   + '/poi?latitude=' + latitude +
        //   '&longitude=' + longitude + '&';
        // if (userId) {
        //   url += 'userId=' + userId + '&';
        // }
        // if (type) {
        //   url += 'type=' + type.id + '&';
        // }
        // if (subType) {
        //   url += 'subType=' + subType.id + "&";
        // }
        var sendData = {
          data : ["Cuál es la iglesia más importante en el centro histórico de Quito", "Cuál es la comida típica quiteña", "Donde se puede comer buena comida típica quiteña","lista de platos típicos quiteños", "edificios a visitar en quito",
            "catedral más importante en Quito", "Cuál es el pintor más famoso de Ecuador", "Cómo llegar al museo de Guayasamín",
            "Museos localizados en el centro histórico de Quito","Orden de importancia iglesias quito",
            "Iglesia de Cantuña", "Cómo llego a la catedral de Quito", "Cómo llego a la Merced", "Camino más corto para llegar al Municipio de Quito",
            "Comida típica más barata en el centro histórico de Quito","Restaurant típico más representativo del centro histórico de Quito",
            "Iglesia San Francisco cómo llegar",
            "Museo de la casa presidencial",
            "Museo del banco central",
            "Restaurante cinco estrellas"
          ],
          deviceLocation :{
            lat: latitude,
            long: longitude
          }
        };

        var promise = $http.post(url,sendData).then(function (response) {
          return response.data;
        });
        return promise;
      }

    }
  }

  angular.module('guide.factories')
    .factory('PointOfInterestFactory', PointOfInterestFactory);
})();
