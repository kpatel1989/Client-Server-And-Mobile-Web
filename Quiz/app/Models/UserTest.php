<?php
	namespace App\Models;
	use Illuminate\Database\Eloquent\Model;
	
	/**
	* 	Defines a User Model.
	*/
	class UserTest extends Model
	{
		protected $table = 'user_tests';
		public $timestamps = false;
	}
?>