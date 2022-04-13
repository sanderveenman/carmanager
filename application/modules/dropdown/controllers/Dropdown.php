<?php
class Dropdown extends MX_Controller 
{

function __construct() {
parent::__construct();
}


function test(){
    echo "hello";
    die();
}


function index()
 {
    $this->load->model('mdl_dropdown');
  $data['country'] = $this->mdl_dropdown->fetch_country();

 $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();
    //echo 'manage store items';
    $data['flash'] = $this->session->flashdata('item');
    //$data['query'] = $this->get('id');
    //$data['view_module'] = "store_items";
    $data['view_file'] = "dropdown";
    $this->load->module('templates');
    $this->templates->admin($data);

 }

 function fetch_state()
 {
    $this->load->model('mdl_dropdown');
  if($this->input->post('country_id'))
  {
   echo $this->dropdown->fetch_state($this->input->post('country_id'));
  }
 }

 function fetch_city()
 {
    $this->load->model('mdl_dynamic_dropdown');
  if($this->input->post('state_id'))
  {
   echo $this->dropdown->fetch_city($this->input->post('state_id'));
  }
 }




function get($order_by)
{
    $this->load->model('mdl_dropdown');
    $query = $this->mdl_dropdown->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_dropdown');
    $query = $this->mdl_dropdown->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_dropdown');
    $query = $this->mdl_dropdown->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_dropdown');
    $query = $this->mdl_dropdown->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_dropdown');
    $this->mdl_dropdown->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_dropdown');
    $this->mdl_dropdown->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_dropdown');
    $this->mdl_dropdown->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_dropdown');
    $count = $this->mdl_dropdown->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_dropdown');
    $max_id = $this->mdl_dropdown->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_dropdown');
    $query = $this->mdl_dropdown->_custom_query($mysql_query);
    return $query;
}

}