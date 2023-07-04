angular.module('taskManagerApp', [])
  .controller('TaskController', ['$scope', function($scope) {
    var vm = this;

    vm.tasks = [];
    vm.newTask = '';
    vm.sortColumn = 'title';
    vm.filterText = '';
    vm.editMode = false;
    vm.editTask = {};

    vm.addTask = function() {
      vm.tasks.push({
        title: vm.newTask,
        assignedTo: ''
      });
      vm.newTask = '';
    };

    vm.deleteTask = function(task) {
      var index = vm.tasks.indexOf(task);
      vm.tasks.splice(index, 1);
    };

    vm.editTask = function(task) {
      vm.editMode = true;
      vm.editTask = angular.copy(task);
    };

    vm.updateTask = function() {
      var index = vm.tasks.indexOf(vm.editTask);
      vm.tasks[index] = vm.editTask;
      vm.cancelEdit();
    };

    vm.cancelEdit = function() {
      vm.editMode = false;
      vm.editTask = {};
    };

    vm.sort = function(column) {
      vm.sortColumn = column;
    };
  }]);