angular.module('toDoApp').controller('toDoCTRL', function($scope,toDoServ){

    $scope.toDo = toDoServ.getList();




});
