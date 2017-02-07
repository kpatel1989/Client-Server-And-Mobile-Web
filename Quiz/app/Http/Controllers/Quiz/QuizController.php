<?php 

namespace App\Http\Controllers\Quiz;
use App\Http\Controllers\Controller;
use File;
use Config;

class QuizController extends Controller {

	public function __construct() {

	}

	public function getTest($testName) {
		return File::get(Config::get('app.ROOT_PATH') . '/api/quiz-' . $testName . ".json");
	}
}

?>