<?php 

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Config;
use Input;
use App\Models\User;
use App\Models\UserCredential;

class UserController extends Controller {

	public function __construct() {

	}

	public function login(Request $request,Response $response) {
		$userData = array(
			"emailId" => $request->input("emailAddress"),
			"password" => $request->input('password')
		);
		$user = User::where('emailId',$userData['emailId'])->first();
		$userCred = UserCredential::where('userId',$user['id'])->first();
		if ($user['id'] != null && $userCred['password'] === $userData['password']) {
			$user["sessionId"] = $request->session()->getId();
			return $user;
		}
		return response(['error'=> 'Invalid User name/password'],401);
	}

	public function register(Request $request) {
		$userData = array(
			"emailId" => $request->input("emailAddress"),
			"password" => $request->input('password'),
			"firstName" => $request->input("firstName"),
			"lastName" => $request->input('lastName')
		);
		$user = new User();
		$user->emailId = $userData['emailId'];
		$user->firstName = $userData['firstName'];
		$user->lastName = $userData['lastName'];
		$user->save();

		$userCred = new UserCredential();
		$userCred->userId = $user['id'];
		$userCred->password = $userData['password'];
		$userCred->save();

		return $user;
	}

	public function logout(Request $request) {
		$request->session()->flush();
		return response([""],200);
	}

	public function get($userId, $request, $response) {
		return User::where('id',$userId)->first();
	}
}

?>