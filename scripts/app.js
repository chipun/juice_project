var juiceApp = angular.module("juiceApp",['ngRoute']);

juiceApp.controller("recipesController",function($http){
	this.recipes = ['Adios Coffee', 'Apple Crisp','Appleberry Lush','Asparagus Delight ','Beets and Treats'];
});

juiceApp.controller("healthController",function($http){
	this.healthdata = ['Alzheimer"s Prevention', 'Antioxidants','Cancer Prevention','Arthritis','Breast Cancer'];
});

juiceApp.controller("benefitsController",function($http){
	this.benefits = ['carrot', 'orange','grape','kiwi','ginger'];
});


juiceApp.controller("ingredientsController",function($http){
	this.ingredients = ['carrot', 'orange','grape','kiwi','ginger'];
});


