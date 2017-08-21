'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]).filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }])

.controller('View1Ctrl', ['$scope',function($scope) {


$scope.reportItems = [
         {
            sectionName: 'Master Bedroom', taskNumber: 1, comment: "Note 1- Wall lights are being removed <br/> Note 2- Pendant light is being moved 600mm towards the front<br/> Note 3- Addition switch for a 2 way.Above GPO @1000mm AFFL <br/>(blinds will switch from this point also) <br/>All other lighting is to be wired to the architectural spec's"
        },
           {
            sectionName: 'Master Bedroom', taskNumber: 1, comment: "Note 1- Wall lights are being removed <br/> Note 2- Pendant light is being moved 600mm towards the front<br/> Note 3- Addition switch for a 2 way.Above GPO @1000mm AFFL <br/>(blinds will switch from this point also) <br/>All other lighting is to be wired to the architectural spec's"
        },
           {
            sectionName: 'Master Bedroom', taskNumber: 1, comment: "Note 1- Wall lights are being removed <br/> Note 2- Pendant light is being moved 600mm towards the front<br/> Note 3- Addition switch for a 2 way.Above GPO @1000mm AFFL <br/>(blinds will switch from this point also) <br/>All other lighting is to be wired to the architectural spec's"
        },
           {
            sectionName: 'Master Bedroom', taskNumber: 1, comment: "Note 1- Wall lights are being removed <br/> Note 2- Pendant light is being moved 600mm towards the front<br/> Note 3- Addition switch for a 2 way.Above GPO @1000mm AFFL <br/>(blinds will switch from this point also) <br/>All other lighting is to be wired to the architectural spec's"
        },
           {
            sectionName: 'Master Bedroom', taskNumber: 1, comment: "Note 1- Wall lights are being removed <br/> Note 2- Pendant light is being moved 600mm towards the front<br/> Note 3- Addition switch for a 2 way.Above GPO @1000mm AFFL <br/>(blinds will switch from this point also) <br/>All other lighting is to be wired to the architectural spec's"
        },
           {
            sectionName: 'Master Bedroom', taskNumber: 1, comment: "Note 1- Wall lights are being removed <br/> Note 2- Pendant light is being moved 600mm towards the front<br/> Note 3- Addition switch for a 2 way.Above GPO @1000mm AFFL <br/>(blinds will switch from this point also) <br/>All other lighting is to be wired to the architectural spec's"
        },
           {
            sectionName: 'Master Bedroom', taskNumber: 1, comment: "Note 1- Wall lights are being removed <br/> Note 2- Pendant light is being moved 600mm towards the front<br/> Note 3- Addition switch for a 2 way.Above GPO @1000mm AFFL <br/>(blinds will switch from this point also) <br/>All other lighting is to be wired to the architectural spec's"
        },
           {
            sectionName: 'Master Bedroom', taskNumber: 1, comment: "Note 1- Wall lights are being removed <br/> Note 2- Pendant light is being moved 600mm towards the front<br/> Note 3- Addition switch for a 2 way.Above GPO @1000mm AFFL <br/>(blinds will switch from this point also) <br/>All other lighting is to be wired to the architectural spec's"
        },
           {
            sectionName: 'Master Bedroom', taskNumber: 1, comment: "Note 1- Wall lights are being removed <br/> Note 2- Pendant light is being moved 600mm towards the front<br/> Note 3- Addition switch for a 2 way.Above GPO @1000mm AFFL <br/>(blinds will switch from this point also) <br/>All other lighting is to be wired to the architectural spec's"
        }
];

  
}]);