// (function () {
//   'use strict';
//   angular.module('LunchCheck', [])
//   .controller('LunchCheckController', LunchCheckController);
//
//     LunchCheckController.$inject = ['$scope'];
//     function LunchCheckController ($scope) {
//       $scope.message ="";
//       $scope.messageAdd="";
//       $scope.msgClass = "message";
//
//       $scope.displayMessage = function () {
//         var list = $scope.listDishes;
//         var listArr ,length , count = 0, i;
//
//         if(!isEmpty(list)){
//           listArr = list.split(',');
//           length = listArr.length;
//
//         for(i=0; i<listArr.length; i++){
//             if(listArr[i].trim().length >0){
//               count++;
//             }
//           }
//
//           $scope.message = evalIfTooMuch(count);
//           $scope.msgClass = "message_val";
//           $scope.messageAdd ="**NOT consider and empty item, i.e., , ,";
//
//
//          }else{
//           $scope.msgClass = "message_inv";
//           $scope.message ="Please enter data first";
//
//         }
//
//       }
//
//       function isEmpty(value){
//         if(angular.isUndefined(value)){
//           return true;
//         }
//         if(value.trim().length == 0 || value.replace(/,/g, " ").trim().length ==0){
//           return true;
//         }
//         return false;
//       }
//
//       function evalIfTooMuch(quantity){
//         if(quantity <=3){
//           return "Enjoy!";
//         }else{
//           return "Too much!";
//         }
//       }
//     }
// })();
!function(){"use strict";function e(e){function s(e){return angular.isUndefined(e)?!0:0==e.trim().length||0==e.replace(/,/g," ").trim().length?!0:!1}function n(e){return 3>=e?"Enjoy!":"Too much!"}e.message="",e.messageAdd="",e.msgClass="message",e.displayMessage=function(){var t,a,i,l=e.listDishes,g=0;if(s(l))e.msgClass="message_inv",e.message="Please enter data first";else{for(t=l.split(","),a=t.length,i=0;i<t.length;i++)t[i].trim().length>0&&g++;e.message=n(g),e.msgClass="message_val",e.messageAdd="**NOT consider and empty item, i.e., , ,"}}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
