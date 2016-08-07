function PagesController(PagesService) {
  var ctrl = this;

  ctrl.allPages = [];
  ctrl.getPages = function () {
    PagesService
      .getAllPages()
      .then(function(response){
        ctrl.allPages = response;
      })
  };
  this.getPages();
}

angular
  .module('app')
  .controller('PagesController', PagesController);
