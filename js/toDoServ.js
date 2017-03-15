angular.module('toDoApp').service("toDoServ", function() {

    // Add item function
    var toDoList = ["Laundry", "Dishes", "Vaccume", "Mop"]; // Default data

    this.addItem = function (item) {
        todo.push(item); //add item
    };

    //remove item function
    this.removeItem = function (index) {
        for (var i = 0; i < toDoList.length; i++) {
            if (toDoList[i] === index) {
                toDoList.splice(i, 1)
            }
        }
    };
    //function for $scope on controller to access toDoList array
    this.getList = function () {
        return toDoList;
    };


});

