(function setup() {
  var app = angular.module('devTech-io', ['ionic', 'ngAnimate']);

  app.controller('AppCtrl', ['$scope', '$state', '$timeout', function($scope, $state, $timeout) {

  }]);

  app.controller('HomeCtrl', ['$scope', '$timeout', 'i18n', function($scope, $timeout, i18n) {
    $scope.title = '...';

    $scope.$watch('language', function(b, a) {
      $timeout(function() {
        $scope.$root.$broadcast('viewState.viewEnter', {
          title: i18n('home'),
          animate: false,
          rightButtons: $scope.rightButtons,
          leftButtons: $scope.leftButtons
        });
      }, 100);
    });
    $scope.leftButtons = [];

    $scope.rightButtons = [
      {
        content: '<i class="icon ion-ios7-gear"></i>',
        type: 'button button-outline sideMenuButton',
        tap: function() {
          $scope.sideMenuController.toggleRight();
        }
      }
    ];
    $scope.$root.settings = {
      title: 'Options',
      items: [
      ]
    }

  }]);

  app.controller('ContactCtrl', ['$scope', '$timeout', 'i18n', function($scope, $timeout, i18n) {
    $scope.title = '...';

    $scope.$watch('language', function(b, a) {
      $timeout(function() {
        $scope.$root.$broadcast('viewState.viewEnter', {
          title: i18n('contact'),
          animate: false,
          rightButtons: $scope.rightButtons,
          leftButtons: $scope.leftButtons
        });
      }, 100);
    });
    $scope.leftButtons = [];

    $scope.rightButtons = [
      {
        content: '<i class="icon ion-ios7-gear"></i>',
        type: 'button button-outline sideMenuButton',
        tap: function() {
          $scope.sideMenuController.toggleRight();
        }
      }
    ];
    $scope.$root.settings = {
      title: 'Options',
      items: [
      ]
    }

  }]);

  app.controller('SettingsCtrl', ['$scope', 'i18n', function($scope, i18n) {
    $scope.settings = {
      title: i18n('Options'),
      items: [
        {
          text: 'profile',
          icon: 'ion-person',
          action: function() {
            alert(i18n('not yet supported'));
          }
        }
      ]};
  }]);

  app.factory('i18n', ['$rootScope', function($rootScope) {

    var toggle_language = function() {
      $rootScope.language = $rootScope.language === 'fr' ? 'en' : 'fr'
    }

    $rootScope.language = 'en';
    $rootScope.toggle_language = toggle_language;
    toggle_language();

    return function(term) {
      var lang = translations[$rootScope.language];
      return lang.hasOwnProperty(term) ? lang[term] : term + '?';
    };
  }]);

  app.filter('i18n', ['i18n', function(i18n) {
    return function(input) {
      return i18n(input);
    }
  } ]);

  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home_view.html',
        controller: 'HomeCtrl'
      });

    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact_view.html',
        controller: 'ContactCtrl'
      });

    $urlRouterProvider.otherwise('/home');
  }]);

  var translations = {
    fr: {
      SWITCH_LANGUAGE: "English",
      'home': 'accueil | devTech.io',
      'Home': 'Accueil',
      'more to come...':'à venir...',
      'Options':'Options',
      'Contact Us':'Contactez-nous',
      'Contact':'Contacts',
      'contact':'contact',
      'Call':'Appeler',
      'Email':'Courriel',
    },
    en: {
      SWITCH_LANGUAGE: "français",
      'home': 'home | devTech.io',
      'Home': 'Home',
      'more to come...':'more to come...',
      'Options':'Settings',
      'Contact':'Contacts',
      'contact':'contact',
      'Call':'Call',
      'Email':'Email',
    }
  };
})();