(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('book', {
            url: '/book',
            views: {
                "main": {
                    controller: 'BookController',
                    templateUrl: 'book/book.tpl.html'
                }
            },
            data:{ pageTitle: 'Book' }
        });
    }]);

    app.controller('BookController', function ($scope, $timeout, $state, $stateParams, Book, Ad) {

        console.log($scope.app.selling);

        $scope.ad = {status:"poor"};

        if ($scope.app.selling == null) {
            console.log("Going to home from book module.");
            $state.go("home");
        }
        else if (!$scope.app.school) {
            console.log("Going to school from book module.");
            $state.go("school");            
        }

        $scope.search = {book:""};

        $scope.search.placeholder = "Search Book by Title, Author, ISBN";
        $scope.app.selectedSchool = $scope.app.school;    

        $scope.books = Book.books;
        $scope.app.loading = "loading";

        $scope.switchBook = function (book) {
            console.log("sb");
            $scope.selectedBook = book;

            $scope.app.red     = "red";
            $scope.app.purple  = "purple";
            $scope.app.loading = "";

            $scope.ads = Ad.getAds();

            $scope.search.placeholder = "Search Ad by Price or Status";
            $scope.search.icon = "book";
            $scope.search.book = "";
            
        };

        $scope.createAd = function() {
            console.log("inserting Ad");
            console.log($scope.ad);
            $scope.ad.published = new Date();
            console.log($scope.ad.published);
            Ad.insertAd($scope.ad);
            $scope.ad = {};
            $scope.app.selling = false;
        };       
        
    });

}(angular.module("bookyet.book", [
    'ui.router'
])));