<?php
class Youraccount extends MX_Controller 
{

function __construct() {
parent::__construct();

$this->load->library('form_validation');
$this->form_validation->CI =& $this;
}


function logout()
{
	//$user_id = $_SESSION['user_id'];
	$this->load->module('site_cookies');
	//$this->session->unset_userdata($user_id);
	unset ($_SESSION['user_id']);
	//$this->load->module('site_cookies');
	$this->site_cookies->_destroy_cookie();
	$this->session->unset_userdata('your_name');
	redirect(base_url());
	
}

function welcome()
{
	$this->load->module('site_security');
	$this->site_security->_make_sure_is_logged_in();
	$data['flash'] = $this->session->flashdata('item');
	$data['view_file'] = "welcome";

	$this->load->module('templates');
	$this->templates->public_bootstrap($data);
}

function test1()
{
	$yourname = "saner";
	$this->session->set_userdata('your_name', $yourname);
}

function test2()
{
	$yourname = $this->session->userdata('your_name');
	echo "your name is $yourname";
}

function test3()
{
	$this->session->unset_userdata('your_name');
}

function login()
{
	$data['username'] = $this->input->post('username', TRUE);
	$this->load->module('templates');
	$this->templates->login($data);
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
		//figure out the user_id
			$col1 = 'username';
			$value1 = $this->input->post('username', TRUE);
			$col2 = 'email';
			$value2 = $this->input->post('username', TRUE);
			$query = $this->store_accounts->get_with_double_condition($col1, $value1, $col2, $value2);
			$num_rows = $query->num_rows();
			
			if($num_rows<1)
			{
				$this->form_validation->set_message('username_check', $error_message);
				return FALSE;
			}
			
			foreach ($query->result() as $row)
			{
				$user_id = $row->id;
			}
			
			$remember = $this->input->post('remember', TRUE);
			
			if ($remember=="remember-me")
			{
				$login_type = "longterm";
			} else 
			{
				$login_type = "shortterm";
			}
			$data['last_login'] = time();
			$this->store_accounts->_update($user_id, $data);
			//send them to the private page
			$data['last_login'] = time();
			$this->_in_you_go($user_id, $login_type);

		} else
		{
			echo " woops authentication failed";
			echo validation_errors();
		}
	}
}

function _in_you_go($user_id, $login_type)
{
	
//echo "user id ".$user_id; die();
	// the login type can be longterm or shortterm
	if ($login_type=="longterm")
	{
		//set the cookie
		$this->load->module('site_cookies');
		$this->site_cookies->_set_cookie($user_id);
	}else 
	{
		$this->session->set_userdata('user_id', $user_id);

		$query = $this->store_accounts->get_where_custom('id', $user_id);
	$num_rows = $query->num_rows();
	//echo "number of rows found is ".$num_rows; die();
	if($num_rows > 0) //we have found content
	{

		foreach ($query->result() as $row)
	//	{
			$data['username'] = $row->username;
	//		
		}
		//print_r($query); die();
		$yourname =  $data['username'];
		$this->session->set_userdata('your_name', $yourname);

	}
	//attempt to update the shopping cart table and to divert to cart
	//$this->_attempt_cart_divert($user_id);
	//send them to the private page
	//$data['yourname'] = $this->session->userdata('your_name');
	redirect('youraccount/welcome');
}

function _attempt_cart_divert($user_id)
{
	$this->load->module('store_basket');
	$customer_session_id = $this->session->session_id;
	$col1 = 'session_id';
	$value1 = $customer_session_id;
	$col2 = 'shopper_id';
	$value2 = 0;
	$query = $this->store_basket->get_with_double_condition($col1, $value1, $col2, $value2);
	$num_rows = $query->num_rows();
	if($num_rows>0)
	{
		//there are records that need to be corrected
		$mysql_query = "update store_basket set shopper_id=$user_id where session_id='$customer_session_id'";
		$query = $this->store_basket->_custom_query($mysql_query);
		redirect('cart');
	}
}

function submit()
{
	
	$submit = $this->input->post('submit', TRUE);
	if ($submit=="Submit")
	{ 
	//process the form
	$this->load->library('form_validation');
	$this->form_validation->set_rules('firstname', 'First Name', 'required');
	$this->form_validation->set_rules('lastname', 'Last Name', 'required');
	$this->form_validation->set_rules('username', 'Username', 'required|min_length[6]|max_length[70]');
	$this->form_validation->set_rules('address1', 'address line 1', 'required');
	$this->form_validation->set_rules('town', 'Town', 'required');
	$this->form_validation->set_rules('country', 'Country', 'required');
	$this->form_validation->set_rules('postcode', 'postcode', 'required');
	$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
	$this->form_validation->set_rules('telnum', 'telnum number', 'required');
	$this->form_validation->set_rules('pword', 'pword', 'required|min_length[8]');
	$this->form_validation->set_rules('confirmpwd', 'Confirm pword', 'required|matches[pword]');

	
	if ($this->form_validation->run() == TRUE)
	{
		$this->_process_create_account();
		redirect('youraccount/login');
		
	} else
	{
		$this->start();
	}
	}

}

function _process_create_account()
{
	$this->load->module('store_accounts');
	$data = $this->fetch_data_from_post();
	unset($data['confirmpwd']);
	
	$pword = $data['pword'];
	$this->load->module('site_security');
	$data['pword'] = $this->site_security->_hashed_string($pword);
	$this->store_accounts->_insert($data);
	
}


function start()
{
	$data = $this->fetch_data_from_post();
	$data['flash'] = $this->session->flashdata('item');
	$data['view_file'] = "start";
	
	$this->load->module('templates');
	$this->templates->public_bootstrap($data);
}

function fetch_data_from_post()
{
	
	$data['username'] = $this->input->post('username', TRUE);
	$data['firstname'] = $this->input->post('firstname', TRUE);
	$data['lastname'] = $this->input->post('lastname', TRUE);
	$data['company'] = $this->input->post('company', TRUE);
	$data['address1'] = $this->input->post('address1', TRUE);
	$data['address2'] = $this->input->post('address2', TRUE);
	$data['town'] = $this->input->post('town', TRUE);
	$data['country']  = $this->input->post('country', TRUE);
	$data['postcode'] = $this->input->post('postcode', TRUE);
	$data['email'] = $this->input->post('email', TRUE);
	$data['telnum'] = $this->input->post('telnum', TRUE);
	$data['pword'] = $this->input->post('pword', TRUE);
	$data['confirmpwd'] = $this->input->post('confirmpwd', TRUE);
	return $data;
	
}


function username_check($str)
{
	$this->load->module('store_accounts');
	$this->load->module('site_security');
	
	$error_message = "Email and/or username not valid";
	
	$col1 = 'username';
	$value1 = $str;
	$col2 = 'email';
	$value2 = $str;
	$query = $this->store_accounts->get_with_double_condition($col1, $value1, $col2, $value2);
	$num_rows = $query->num_rows();
	
	if($num_rows<1)
	{
		$this->form_validation->set_message('username_check', $error_message);
		return FALSE;
	}
	
	foreach ($query->result() as $row)
	{
		$pword_on_table = $row->pword;
		
	}
	
	$pword = $this->input->post('pword', TRUE);
	//echo $pword;
	$result = $this->site_security->_verify_hash($pword, $pword_on_table);
	//echo "result is ".$result; die();
	if($result==TRUE)
	{
		//echo "password verify success" .$pword; die();
		return TRUE;
	} else 
	{
		//echo "password verify failed"; die();
		$this->form_validation->set_message('username_check', $error_message);
		return FALSE;
	}
	
	
}



}