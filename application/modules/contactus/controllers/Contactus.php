<?php
class Contactus extends MX_Controller 
{

function __construct() {
parent::__construct();
}

function submit()
{
	$submit = $this->input->post('submit', TRUE);
	$refer_url= $_SERVER['HTTP_REFERER'];
	$target_refer_url = base_url().'contactus';
	$firstname = trim($this->input->post('firstname', TRUE));  //hidden field
	
	if ($firstname!='')
	{
		$this->_blacklist_user(); // must be a bot!
	}
	
	if (($submit=="Submit") AND ($refer_url==$target_refer_url))
	
	{

		//process the form
		$this->load->library('form_validation');
		$this->form_validation->set_rules('yourname', 'Your Name', 'required|max_length[60]');
		$this->form_validation->set_rules('youremail', 'Your Email', 'required|valid_email');
		$this->form_validation->set_rules('message', 'Messsage', 'required');
		$this->form_validation->set_rules('telnum', 'Telephone Number', 'required|numeric|max_length[20]');
	
		if ($this->form_validation->run() == TRUE)
		{

			//get the variables
			$posted_data= $this->fetch_data_from_post();
			$this->load->module('enquiries');
			$this->load->module('site_security');
				//insert the message  into the database
				$data['code'] = $this->site_security->_generate_random_string(6);
				$data['subject'] = "Contact Form";
				$data['message'] = $this->build_message($posted_data);
				$data['sent_to'] = 0;
				$data['date_created'] = time();
				$data['opened'] = 0;
				$data['sent_by'] = 0;
				$data['urgent'] = 0;
			$this->enquiries->_insert($data);
			
			redirect('contactus/thank_you');
			
		} else 
		{
			//form validation failed
			$this->index();
		}
	
	}
}

function build_message($posted_data)
{
	$yourname = ucfirst($posted_data['yourname']);
	$msg = $yourname."wrote the following in the contact-form:<br><br>";
	$msg .='Name '.$yourname."<br>";
	$msg .='email '.$posted_data['youremail']."<br>";
	$msg .='Tel. Number '.$posted_data['telnum']."<br>";
	$msg .='subject '.$posted_data['subject']."<br>";
	$msg .='message '.$posted_data['message']."<br>";
	
	return $msg;
	
}

function index()
{
	$this->load->module('site_settings');
	$data = $this->fetch_data_from_post();
	$data['flash'] = $this->session->flashdata('item');
	$data['view_file'] = "contactus";
	$data['company_name'] = $this->site_settings->_get_company_name();
	$data['map'] = $this->site_settings->_get_map_code();
	$data['address'] = $this->site_settings->_get_our_address();
	$data['phonenum'] = $this->site_settings->_get_our_phonenum();
	$data['email'] = $this->site_settings->_get_our_email();
	$data['form_location'] = base_url().'contactus/submit';
	
	$this->load->module('templates');
	$this->templates->main_template($data);
}


function thank_you()
{
	$this->load->module('site_settings');
	$data['flash'] = $this->session->flashdata('item');
	$data['view_file'] = "thankyou";
	
	$this->load->module('templates');
	$this->templates->public_bootstrap($data);
}

function fetch_data_from_post()
{

	$data['yourname'] = $this->input->post('yourname', TRUE);
	$data['firstname'] = $this->input->post('firstname', TRUE);
	$data['youremail'] = $this->input->post('youremail', TRUE);
	$data['telnum'] = $this->input->post('telnum', TRUE);
	$data['message'] = $this->input->post('message', TRUE);
	$data['subject'] = $this->input->post('subject', TRUE);
	return $data;

}

function _blacklist_user()
{
	$this->load->module('blacklist');
	$data['ip_address'] = $this->input->ip_address();
	$data['date_created'] = time();
	$this->blacklist->_insert($data);
}

}