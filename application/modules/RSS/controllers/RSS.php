<?php
class RSS extends MX_Controller 
{

function __construct() {
parent::__construct();
}

function _draw_rss_feed(){
    $this->load->model('mdl_rss');
    //$this->load->model('mdl_makes');
    $data = $this->mdl_rss->get_feed();
    //var_dump($data);
    $data['view_file'] = "rss";
    $this->load->view('rss', $data);
}




function get($order_by)
{
    $this->load->model('mdl_rss');
    $query = $this->mdl_rss->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_rss');
    $query = $this->mdl_rss->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_rss');
    $query = $this->mdl_rss->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_rss');
    $query = $this->mdl_rss->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_rss');
    $this->mdl_rss->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_rss');
    $this->mdl_rss->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_rss');
    $this->mdl_rss->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_rss');
    $count = $this->mdl_rss->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_rss');
    $max_id = $this->mdl_rss->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_rss');
    $query = $this->mdl_rss->_custom_query($mysql_query);
    return $query;
}

}