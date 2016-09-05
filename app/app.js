var app = angular.module("KMRPortfolio", ["ngRoute"])

app.config(function($routeProvider){
    $routeProvider.
        when("/about", {
            templateUrl: "partials/about.html",
        }).
        when("/resume", {
            templateUrl: "partials/experience.html",
            controller: "ExperienceCtrl",

        }).
        when("/projects", {
            templateUrl: "partials/projects.html",
            controller: "ProjectsCtrl",
        }).
        when("/", {
            templateUrl: "partials/home.html",
            controller: "HomeCtrl",
        }).

      otherwise("/");
});