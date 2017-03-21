var app = angular.module("app",[]);

app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl : "templates/index.html"
    })
    .when('/info/:id', {
        templateUrl : "templates/info.html",
        controller : "infoController"
    })
    .when('/add', {
        title : 'Añadir Usuario',
        templateUrl : 'templates/add.html',
        controller : 'addControlller'
    })
    .when('/edit/:id', {
        title : 'Editar Usuario',
        templateUrl : 'templates/edit.html',
        controller : 'editController'
    })
    .when('/remove/:id', {
        title : 'Eliminar Usuario',
        templateUrl : 'templates/remove.html',
        controller : 'removeController'
    })
    .otherwise({ redirectTo : "/"})
})