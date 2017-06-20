(function() {

  'use strict';
  var factories = {
    MODULE: 'guide.factories',
    dependencies: []
  };
  angular.module(factories.MODULE, factories.dependencies)
    .constant('ApiUrl', 'https://adaptablear.mybluemix.net/getRecommendations');
    //.constant('ApiUrl', 'http://localhost:8100/ApiUrl')


})();
