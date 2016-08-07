function PagesController($http) {
  var ctrl = this;
  var API = "../pages.json";
  ctrl.allPages = {};
  ctrl.getPages = function () {
    $http
      .get(API)
      .then(function(response){
        console.log(response)
        ctrl.allPages = response.data;
        console.log(ctrl.allPages);
      }, function(reason){
        console.log(reason)
      });
  };
  this.getPages();
}

angular
  .module('app')
  .controller('PagesController', PagesController);
