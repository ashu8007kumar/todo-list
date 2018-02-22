(function() {

    "use strict";
  
    angular
      .module('angularTest', ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/todos');
        $stateProvider
          .state('todos', {
            url: '/todos',
            templateUrl: 'components/todos/todos.controller.html',
            controller: 'todosController as vm'
          })
      });
      
  })();
  
  