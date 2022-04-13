<?php
class Makes extends MX_Controller 
{

function __construct() {
parent::__construct();
}

function create()
{
    $this->load->library('session');
    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();

    $update_id= $this->uri->segment(3);
    $submit = $this->input->post('submit', TRUE);

    if ($submit=="Cancel")
    {
        redirect('makes/manage');
    }

    if ($submit=="Submit")
    {
        //process the form
       // $this->load->library('form_validation');
        //$this->form_validation->set_rules('page_title', 'Page Title', 'required|max_length[240]');
        //$this->form_validation->set_rules('page_keywords', 'Page Keywords', 'required');
        //$this->form_validation->set_rules('page_description', 'Page Description', 'required');
        //$this->form_validation->set_rules('page_headline', 'Page Headline', 'required');
        //$this->form_validation->set_rules('page_content', 'Page Content', 'required');

                   //get the variables
            $data= $this->fetch_data_from_post();
            //$data['page_url'] = url_title($data['page_title']);
                
                
            if (is_numeric($update_id))
            {
                
                //update the page details
                $this->_update($update_id, $data);
                $flash_msg = "The make was successfully updated";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('makes/create/'.$update_id);
            } else
            {
                //insert the new page into the database
                $this->_insert($data);
                $update_id= $this->get_max(); //get the ID of the new page
                    
                $flash_msg = "The make was successfully added";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('makes/create/'.$update_id);
            }
        

    }

    if ((is_numeric($update_id)) && ($submit!="Submit"))
    {
        $data= $this->fetch_data_from_db($update_id);
    } else
    {
        $data= $this->fetch_data_from_post();
    
    }

    if(!is_numeric($update_id))
    {
        $data['headline'] = "Add New make";
    } else
    {
        $data['headline']    = "Update make";
    }

    //echo 'manage store items';
    $data['update_id'] = $update_id;
    $data['flash'] = $this->session->flashdata('item');

    //$data['view_module'] = "store_items";
    $data['view_file'] = "create";
    $this->load->module('templates');
    $this->templates->admin($data);
}


function manage()
{

    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();
    //echo 'manage store items';
    $data['flash'] = $this->session->flashdata('item');
    $data['query'] = $this->get('id');
    //$data['view_module'] = "store_items";
    $data['view_file'] = "manage";
    $this->load->module('templates');
    $this->templates->admin($data);
}

function get($order_by)
{
    $this->load->model('mdl_makes');
    $query = $this->mdl_makes->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_makes');
    $query = $this->mdl_makes->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_makes');
    $query = $this->mdl_makes->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_makes');
    $query = $this->mdl_makes->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_makes');
    $this->mdl_makes->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_makes');
    $this->mdl_makes->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_makes');
    $this->mdl_makes->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_makes');
    $count = $this->mdl_makes->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_makes');
    $max_id = $this->mdl_makes->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_makes');
    $query = $this->mdl_makes->_custom_query($mysql_query);
    return $query;
}

function fetch_data_from_post()
    {

        $data['title'] = $this->input->post('title', TRUE);
        //$data['cat_parent_id'] = $this->input->post('cat_parent_id', TRUE);

        return $data;

    }

    function fetch_data_from_db($update_id)
    {

        if(!is_numeric($update_id))
        {
            //echo 'woops';
            //die();
            redirect('site_security/not_allowed');
        }

        $query = $this->get_where($update_id);
        foreach($query->result() as $row)
        {
            $data['id'] = $row->id;
            $data['title'] = $row->title;
            



        }

        if (!isset($data))
        {
            $data = "";
        }

        return $data;
    }

function _get_all_makes_for_dropdown()
{
    // NOTE: this gets used on store_cat_assign
    $mysql_query = "select * from makes";
    $query = $this->_custom_query($mysql_query);
    
    foreach ($query->result() as $row)
    {
        //$cat_parent_title = $this->_get_cat_title($row->cat_parent_id);
        //$sub_categories[$row->id] = $cat_parent_title." > ".$row->cat_title;
        $makes[$row->id] = $row->title;
    }
    
    if(!isset ($makes))
    {
        $makes = "";
    }
    //var_dump($makes); die();
    return $makes;
}



}