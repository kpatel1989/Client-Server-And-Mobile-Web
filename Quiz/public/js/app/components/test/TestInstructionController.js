app.controller("TestInstructionController", ['$scope','$rootScope', "User", "UserTest", "QuizModel", "$location",
	function($scope,$rootScope,User,UserTest,QuizModel,$location) {
		//create an object of user to connect the registration page
		$rootScope.user = new User();

		$scope.go = function ( path ) {
		  $location.path( path );
		};
		
		/**
		 * Register button click handler.
		 */
		$scope.start = function() {
			// Check if the form is valid.
			if (!$scope.validateForm()) {
				return false;
			}

			$scope.go('/test/start');
		};
		/**
		 * Reset button click handler.
		 */
		$scope.reset = function() {
			$scope.score = 0;
			$scope.invalidFirstName = false;
			$scope.invalidLastName = false;
			$scope.invalidEmailAddress = false;
			$scope.invalidPhoneNumber = false;
			$scope.invalidAddress = false;
		}

		/**
		 * Check of first name is valid on firstName textbox blur event. 
		 */
		$scope.validateFirstName = function() {
			$scope.invalidFirstName = ($scope.user.firstName == "")
		}
		
		/**
		 * Check of last name is valid on lastName textbox blur event. 
		 */
		$scope.validateLastName = function() {
			$scope.invalidLastName = ($scope.user.lastName == "");
		}
		
		/**
		 * Check of email address is valid on emailAddress textbox blur event. 
		 */
		$scope.validateEmailAddress = function() {
			$scope.invalidEmailAddress = !quizRegistrationForm.emailAddress.validity.valid;
		}
		
		/**
		 * Check of phone number is valid on phoneNumber textbox blur event. 
		 */
		$scope.validatePhoneNumber = function() {
			$scope.invalidPhoneNumber = ($scope.user.phoneNumber == "");
		}
		
		/**
		 * Check of address is valid on address textbox blur event. 
		 */
		$scope.validateAddress = function() {
			$scope.invalidAddress = ($scope.user.address == "");
		}
		
		/**
		 * Check if all the fields in the form are valid on submit button click. 
		 */
		$scope.validateForm = function() {
			$scope.validateFirstName();
			$scope.validateLastName();
			$scope.validateEmailAddress();
			$scope.validatePhoneNumber();
			$scope.validateAddress();
			return !($scope.invalidFirstName || $scope.invalidLastName || $scope.invalidEmailAddress || $scope.invalidPhoneNumber || $scope.invalidAddress);
		}
	}
]);