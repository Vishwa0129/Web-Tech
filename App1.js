var app = angular.module('movieRentalApp', []);

app.service('RentalService', function() {
    this.calculateRentalPrice = function(year) {
        var currentYear = new Date().getFullYear();
        return (currentYear - year) < 3 ? 5 : 3; 
    };
});

app.controller('MovieController', function($scope, RentalService) {
    $scope.movies = [
        { title: 'Inception', genre: 'Sci-Fi', year: 2010 },
        { title: 'Parasite', genre: 'Drama', year: 2019 },
        { title: 'The Dark Knight', genre: 'Action', year: 2008 },
        { title: 'Avengers: Endgame', genre: 'Action', year: 2019 },
        { title: 'Interstellar', genre: 'Sci-Fi', year: 2014 }
    ];

    $scope.genres = _.uniq($scope.movies.map(movie => movie.genre)); 

    $scope.$watch('movies', function() {
        angular.forEach($scope.movies, function(movie) {
            movie.rentalPrice = RentalService.calculateRentalPrice(movie.year);
        });
    }, true); 
});