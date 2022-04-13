<?php
class Files extends MX_Controller 
{

function __construct() {
parent::__construct();
}



function get_images_for_vehicle_details($vehicle_id){
    $mysql_query = "
            
    SELECT file_name, priority from files
    WHERE vehicleid = $vehicle_id ORDER BY priority
            ";
    
    $images = $this->_custom_query($mysql_query);
    return $images;
}


function get($order_by)
{
    $this->load->model('mdl_files');
    $query = $this->mdl_files->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_files');
    $query = $this->mdl_files->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_files');
    $query = $this->mdl_files->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_files');
    $query = $this->mdl_files->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_files');
    $this->mdl_files->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_files');
    $this->mdl_files->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_files');
    $this->mdl_files->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_files');
    $count = $this->mdl_files->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_files');
    $max_id = $this->mdl_files->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_files');
    $query = $this->mdl_files->_custom_query($mysql_query);
    return $query;
}

}