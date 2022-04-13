<?php
class Site_security extends MX_Controller 
{

function __construct() {
parent::__construct();
}

function _check_admin_login_details($username, $pword)
{
	$target_username = "Admin";
	$target_password = "Password";
	
	
	if (($username==$target_username) && ($pword==$target_password))
	{
		return TRUE;
	}else 
	{
		return FALSE;
	}
	
	
}
function _make_sure_is_logged_in()
{
//make sure customer (member) is logged in
$user_id = $this->_get_user_id();
if (!is_numeric($user_id))
{
	redirect('youraccount/login');
}
}


function _get_user_id()
{
	//try to get the ID of the user
	
	//check if there is a session variable
	$user_id = $this->session->userdata('user_id');
	
	if(!is_numeric($user_id))
	{
		//check for a valid cookie
		$this->load->module('site_cookies');
		$user_id = $this->site_cookies->_attempt_get_user_id();
	}
	return $user_id;
}

function _generate_random_string($length)
{
	$characters = "23456789abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
	$randomstring = '';
			for($i = 0; $i < $length; $i++)
			{
				$randomstring.= $characters[rand(0, strlen($characters) -1)];
			}
		return $randomstring;
}

function _encrypted_string($str)
{
	$this->load->library('encryption');
	$encrypted_string = $this->encryption->encrypt($str);
	return $encrypted_string;
}

function _decrypted_string($str)
{
	$this->load->library('encryption');
	$decrypted_string = $this->encryption->decrypt($str);
	return $decrypted_string;
}

function _hashed_string($str)
{
$hashed_string = password_hash($str, PASSWORD_BCRYPT, array(
		'cost' => 11
));
return $hashed_string;
}

function _verify_hash($plain_text_str, $hashed_string)
{
	//echo $hashed_string; die();
	$result = password_verify($plain_text_str, $hashed_string);
	return $result; // either TRUE or FALSE
	
	
}

function test(){
	$length = 32;
	echo $this->_generate_random_string($length);
}

function _make_sure_is_admin()
{
	
	$is_admin = $this->session->userdata('is_admin');
	//$is_admin = 1;
	if ($is_admin==1)
	{
		return TRUE;
	} else 
	{
		redirect('site_security/not_allowed');
	}
	}


function not_allowed()
{
	echo 'You are not allowed to be here';
}

function _delete_homepage_not_allowed()
{
	echo 'You can not delete the homepage or the contact-us page';
}

}