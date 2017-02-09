<?php 

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Config;
use Input;
use App\Models\User;

class UserController extends Controller {

	public function __construct() {

	}

	public function login(Request $request) {
		$userData = array(
			"emailId" => $request->input("emailId"),
			"password" => $request->input('password')
		);
		return $userData;
	}

	public function register(Request $request) {
		$userData = array(
			"emailId" => $request->input("emailId"),
			"password" => $request->input('password'),
			"firstName" => $request->input("firstName"),
			"lastName" => $request->input('lastName')
		);
		$user = new User();
		$user->emailId = $userData['emailId'];
		$user->password = $userData['password'];
		$user->firstName = $userData['firstName'];
		$user->lastName = $userData['lastName'];
		$user->save();

		return $userData;
	}
}

?>