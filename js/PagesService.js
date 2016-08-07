function PagesService($http){
  var API = "../pages.json";
  this.getAllPages = function(){
    return $http
      .get(API)
      .then(function(response){
        return response.data;
      }, function(reason){
        console.log(reason)
      });
  }
}

angular
  .module('app')
  .service('PagesService', PagesService);
