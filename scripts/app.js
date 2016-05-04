var juiceApp = angular.module("juiceApp", ['ngRoute']);

juiceApp.controller("recipesController", function($http) {
    this.recipes = ['Adios Coffee', 'Apple Crisp', 'Appleberry Lush', 'Asparagus Delight ', 'Beets and Treats'];
});

juiceApp.controller("healthController", function($http) {
    this.healthdata = ['Alzheimer"s Prevention', 'Antioxidants', 'Cancer Prevention', 'Arthritis', 'Breast Cancer'];
});

juiceApp.controller("benefitsController", function($http) {
    this.benefits = ['carrot', 'orange', 'grape', 'kiwi', 'ginger'];
});


juiceApp.controller("ingredientsController", function($http) {
    this.ingredients = ['carrot', 'orange', 'grape', 'kiwi', 'ginger'];
});

juiceApp.controller("ContactController", function($scope) {
/*    var _fname = "Please enter your first name";
    var _lname = "Please enter your last name";
    var _email = "Please enter your email";

    $scope.user = {
        fname: _fname,
        lname: _lname,
        email: _email
    };
*/

});


juiceApp.directive('showErrors', function() {
    return {
      restrict:'A',
      require:'^form',
      link: function (scope, el, attrs, formCtrl) {
        // find the text box element, which has the 'name' attribute
        var inputEl   = el[0].querySelector("[name]");
        // convert the native text box element to an angular element
        var inputNgEl = angular.element(inputEl);
        // get the name on the text box so we know the property to check
        // on the form controller
        var inputName = inputNgEl.attr('name');

        // only apply the has-error class after the user leaves the text box
        inputNgEl.bind('blur', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        })
      }
    }
  });