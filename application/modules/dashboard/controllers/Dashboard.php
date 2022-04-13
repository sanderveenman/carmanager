<?php
class Dashboard extends MX_Controller 
{

function __construct() {
parent::__construct();
}

function home()
{
    
    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();
    
    $data['flash'] = $this->session->flashdata('item');
    $data['view_file'] = "home";
    $this->load->module('templates');
    $this->templates->admin($data);
}


function index(){
     $this->load->module('site_security');

    $this->site_security->_make_sure_is_admin();
    $data['total_inventory'] = $this->_get_inventory_value();
    $data['quarterly_tax'] = $this->_get_quarterly_tax();
    //echo 'manage store items';
    //$data['update_id'] = $this->uri->segment(3);
    //$data['car'] = $this->_get_car_make_and_model($data['update_id']);
    //$data['flash'] = $this->session->flashdata('item');
    //$data['query'] = $this->get_where_custom('vehicleid', $data['update_id']);
    //$data['view_module'] = "store_items";
    $data['view_file'] = "index";
    $this->load->module('templates');
    $this->templates->admin($data);
}



function _get_inventory_value(){
    $this->load->module('vehicles');
    $this->load->model('mdl_vehicles');
    $mysql_query = "SELECT FORMAT(sum(price),2 )as total FROM vehicles";
    $query = $this->mdl_vehicles->_custom_query($mysql_query);
    //var_dump($query); die();
    //$data = $query->result();
    //return $data;
    return $query->result();
}


function _get_quarterly_tax(){
    $this->load->module('vehicles');
    $this->load->model('mdl_vehicles');
    $mysql_query = "SELECT sum(tax) as total FROM debitcredit WHERE date>=date_sub(curdate(),interval 1 month)";
    $query = $this->mdl_vehicles->_custom_query($mysql_query);
    //var_dump($query); die();
    //$data = $query->result();
    //return $data;
    return $query->result();
}


function get($order_by)
{
    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_perfectcontroller');
    $this->mdl_perfectcontroller->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_perfectcontroller');
    $this->mdl_perfectcontroller->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_perfectcontroller');
    $this->mdl_perfectcontroller->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_perfectcontroller');
    $count = $this->mdl_perfectcontroller->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_perfectcontroller');
    $max_id = $this->mdl_perfectcontroller->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->_custom_query($mysql_query);
    return $query;
}

}