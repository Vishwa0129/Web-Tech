var app = angular.module('libraryApp', []);

app.controller('LibraryController', function($scope) {
    $scope.library = [
        { category: 'Fiction', count: 120 },
        { category: 'Non-Fiction', count: 80 },
        { category: 'Science', count: 150 },
        { category: 'Mathematics', count: 70 }
    ];

    $scope.newCategory = {};

    $scope.addCategory = function() {
        if ($scope.newCategory.name && 
            $scope.library.every(c => c.category !== $scope.newCategory.name)) {
            $scope.library.push({ 
                category: $scope.newCategory.name, 
                count: 0 
            });
            $scope.newCategory.name = ''; 
        } else {
            alert('Category name is invalid or already exists.');
        }
    };
});