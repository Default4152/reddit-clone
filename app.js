var app = angular.module('redditClone', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.posts = [];

    $scope.addPost = function() {
        if (!$scope.title || $scope.title === '') {
            return;
        }
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
    };

    $scope.incrementVotes = function(post) {
        var upArrow = document.getElementsByClassName('arrow')[0];
        var downArrow = document.getElementsByClassName('arrow')[1];
        upArrow.innerHTML = "&#9650;";
        downArrow.innerHTML = "&#9661;";
        post.upvotes += 1;
    };

    $scope.decrementVotes = function(post) {
        var upArrow = document.getElementsByClassName('arrow')[0];
        var downArrow = document.getElementsByClassName('arrow')[1];
        downArrow.innerHTML = "&#9660;";
        upArrow.innerHTML = "&#9651;";

        post.upvotes -= 1;
    }
}]);
