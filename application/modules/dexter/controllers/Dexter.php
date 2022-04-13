<?php
class Dexter extends MX_Controller 
{

function __construct() {
parent::__construct();
$this->load->library('form_validation');
$this->form_validation->CI =& $this;
}

function index()
{
	$data['username'] = $this->input->post('username', TRUE);
	$this->load->module('templates');
	$this->templates->login($data);
}

function _in_you_go($login_type)
{

//var_dump($login_type);die();

if ($login_type=="longterm")
	{
		//set the cookie
		$this->load->module('site_cookies');
		$this->site_cookies->_set_cookie($user_id);
		//echo " cookie set"; die();
	}else 
	{
		$this->session->set_userdata('is_admin', '1');
		//echo " session set"; die();
	}


	// the login type can be longterm or shortterm
	
	//var_dump($_SESSION); die();
	//send them to the private admin page
	redirect('dashboard/home');
}

function submit_login()
{
	$submit = $this->input->post('submit', TRUE);
	if ($submit=="Submit")
	{
		//process the form
		$this->load->library('form_validation');
		$this->form_validation->set_rules('username', 'Username', 'required|min_length[4]|max_length[70]|callback_username_check');
		$this->form_validation->set_rules('pword', 'pword', 'required|min_length[8]');

		if ($this->form_validation->run() == TRUE)
		{



			$remember = $this->input->post('remember', TRUE);
			
			if ($remember=="remember-me")
			{
				$login_type = "longterm";
				//var_dump($login_type); die();
			} else 
			{
				$login_type = "shortterm";
			}
		//send the user to the private admin page
			//echo " you are an admin"; die();
			$this->_in_you_go($login_type);

		} else
		{
			echo "authentication failed";
			echo validation_errors();
		}
	}
}

function logout()
{
	//$user_id = $_SESSION['user_id'];
	$this->load->module('site_cookies');
	$this->session->set_userdata('is_admin', '0');
	//$this->session->unset_userdata($user_id);
	$this->session->unset_userdata('is_admin');
	//$this->load->module('site_cookies');
	//$this->site_cookies->_destroy_cookie();
	
	redirect(base_url());

}


function username_check($str)
{

	$this->load->module('site_security');
	$error_message = "Email and/or username not valid";
	$pword = $this->input->post('pword', TRUE);
	
	$result = $this->site_security->_check_admin_login_details($str, $pword);
	
	if ($result==FALSE)
	{
		$this->form_validation->set_message('username_check', $error_message);
		return FALSE;
	} else 
	{
		return TRUE;
	}

	


}


}