(function() {
    "use strict";
    angular
      .module('angularTest')
      .controller('todosController', function($scope) {
        var vm = this;
        vm.tasksToDo = [];
        vm.addTask = addTask;
        vm.deleteTasks = deleteTasks;
        vm.toggleTask = toggleTask;
        vm.description = '';
        vm.selectAll = false;
        vm.selectDeselectAll = selectDeselectAll;
        vm.checkSelectAll = checkSelectAll;
        function addTask() {
          if(vm.description != null && vm.description != '') {
            vm.tasksToDo.push({
              description: vm.description,
              checked: false
            });
            vm.description = '';
            vm.selectAll = false;
          }
        }

        function toggleTask(task) {
          task.checked=!task.checked;
        }

        function deleteTasks() {
          for(var i=vm.tasksToDo.length-1 ; i>=0; i--) {
            if(vm.tasksToDo[i].checked) {
              vm.tasksToDo.splice(i, 1);
            }
          }
          vm.checkSelectAll();
        }

        function selectDeselectAll(select) {
          angular.forEach(vm.tasksToDo, function(element){
            element.checked = select;
          });
        }

        function checkSelectAll() {
          if(vm.tasksToDo.length === 0 ) {
            vm.selectAll = false;
          } else {
            vm.selectAll = vm.tasksToDo.every(function(element) {return element.checked});
          }
        }

      });
  
  })();