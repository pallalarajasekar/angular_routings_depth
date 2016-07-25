
(function () {

    var app = angular.module('app',['ngRoute']);

    app.config(['$logProvider', '$routeProvider', '$locationProvider', function ($logProvider, $routeProvider, $locationProvider) {

        console.log('app file');

        $logProvider.debugEnabled(true);
        //$locationProvider.hashPrefix('!');
        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homeController',
                controllerAs: 'homes'
            })
            .when('/schools', {
                templateUrl: 'templates/schools.html',
                controller: 'schoolsController',
                controllerAs: 'schools'
            })
            .when('/classrooms', {
                templateUrl: 'templates/classroom.html',
                controller: 'classroomController',
                controllerAs: 'classrooms',
                caseInsensitiveMatch: true
            })
            .when('/activities',{
                templateUrl: 'templates/activities.html',
                controller: 'activitiesController',
                controllerAs: 'activities',
                resolve: {
                    activities: function (dataService) {
                        return dataService.getAllActivities();
                    }
                }
            })
            .when('/classrooms/:id',{
                template: "templates/classroomDetail.html",
                controller: 'classroomDetailController',
                controllerAs: 'classroom'
            })
            .when('/classrooms/:id/detail/:month?', {
                templateUrl: 'templates/classrum.html',
                controller: 'classroomDetailController',
                controllerAs: 'classroom'
            })
    }]);


    app.run(['$rootScope', '$log', function($rootScope, $log) {

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

            $log.debug('successfully changed routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);

        });

        $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {

            $log.debug('error changing routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
            $log.debug(rejection);

        });

    }]);

}());


/*
(function () {

    var app = angular.module('app', ['ui.router', 'ngRoute']);

    app.config(['$logProvider', '$stateProvider', '$routeProvider', function ($logProvider, $stateProvider, $routeProvider) {

        //$urlRouterProvider.otherwise('/');

        $stateProvider
            .state('homes', {
                //url: '/',
                templateUrl: 'templates/home.html',
                controller: 'homeController',
                controllerAs: 'homes'
            })
            .state('schools', {
                //url: '/schools',
                templateUrl: 'templates/schools.html',
                controller: 'schoolsController',
                controllerAs: 'schools'
            })
            .state('classrooms', {
                   // url: '/classrooms',
                    templateUrl: 'templates/classroom.html',
                    controller: 'classroomController',
                    controllerAs: 'classrooms',
                    caseInsensitiveMatch: true
                })
            .state('activities',{
                   // url: '/activities',
                    templateUrl: 'templates/activities.html',
                    controller: 'activitiesController',
                    controllerAs: 'activities'
            })
            .state('classroom_parent',{
                abstract: 'true',
                url: '/classroom/:id',
                template: 'templates/classroom_parent.html',
                controller: 'classroomDetailController',
                controllerAs: 'classroom',
                params: {
                    classroomMessage: { value: 'leaning class room teaching!' }
                }
            })
            .state('classroom_parent.classrooms_summary',{
                url: '/summary',
                template: "templates/classroomDetail.html"
            })
            .state('classroom_parent.classroom_detail', {
                url: '/detail/{month}',
                templateUrl: 'templates/classrum.html'
            })


    }]);
    app.run(['$rootScope', '$log', function($rootScope, $log) {

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

            $log.debug('successfully changed routes');

            $log.debug(event);
            $log.debug(toState);
            $log.debug(toParams);
            $log.debug(fromState);
            $log.debug(fromParams);

        })
        $rootScope.$on('stateNotFound', function (event, unfoundState, fromState, fromParams) {

            $log.error(unfoundState);
            
        })

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {

            $log.debug('error changing routes');

            $log.debug(event);
            $log.debug(toState);
            $log.debug(toParams);
            $log.debug(fromState);
            $log.debug(fromParams);

        });
        

    }]);
}());*/
