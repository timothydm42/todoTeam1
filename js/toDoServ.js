angular.module('toDoApp').service("toDoServ", function() {

    // Add item function
    var newTask = ["Laundry", "Dishes", "Vaccume", "Mop"]; // Default data
    var inProgress = [];
    var complete = [];

    this.addItem = function (item) {
        newTask.push(item); //add item
    };

    //remove item function
    this.removeItem = function (index) {
        for (var i = 0; i < newTask.length; i++) {
            if (newTask[i] === index) {
                newTask.splice(i, 1)
            }
        }
    };
    //function for $scope on controller to access toDoList array
    this.getList = function () {
        return newTask;
    };




});

