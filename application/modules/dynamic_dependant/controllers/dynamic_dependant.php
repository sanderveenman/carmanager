<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Dynamic_dependent extends MX_Controller {
 
 function __construct() {
parent::__construct();
}

 function test(){
 	echo "hello";
 	die();
 }


 function index()
 {
 	$this->load->model('mdl_dynamic_dependent');
  $data['country'] = $this->dynamic_dependent_model->fetch_country();
   $data['view_file'] = "dynamic_dependent";
    $this->load->module('templates');
    $this->templates->admin($data);
  	$this->load->view('dynamic_dependent', $data);
 }

 function fetch_state()
 {
 	$this->load->model('mdl_dynamic_dependent');
  if($this->input->post('country_id'))
  {
   echo $this->dynamic_dependent_model->fetch_state($this->input->post('country_id'));
  }
 }

 function fetch_city()
 {
 	$this->load->model('mdl_dynamic_dependent');
  if($this->input->post('state_id'))
  {
   echo $this->dynamic_dependent_model->fetch_city($this->input->post('state_id'));
  }
 }
  
}