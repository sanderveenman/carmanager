<?php
class Modelyears extends MX_Controller 
{

function __construct() {
parent::__construct();
}

function get($order_by)
{
    $this->load->model('mdl_modelyears');
    $query = $this->mdl_modelyears->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_modelyears');
    $query = $this->mdl_modelyears->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_modelyears');
    $query = $this->mdl_modelyears->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_modelyears');
    $query = $this->mdl_modelyears->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_modelyears');
    $this->mdl_modelyears->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_modelyears');
    $this->mdl_modelyears->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_modelyears');
    $this->mdl_modelyears->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_modelyears');
    $count = $this->mdl_modelyears->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_modelyears');
    $max_id = $this->mdl_modelyears->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_modelyears');
    $query = $this->mdl_modelyears->_custom_query($mysql_query);
    return $query;
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

function create()
{
    $this->load->library('session');
    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();

    $update_id= $this->uri->segment(3);
    $submit = $this->input->post('submit', TRUE);

    if ($submit=="Cancel")
    {
        redirect('modelyears/manage');
    }

    if ($submit=="Submit")
    {
        //process the form
       // $this->load->library('form_validation');
        //$this->form_validation->set_rules('firstname', 'First Name', 'required');
        //$this->form_validation->set_rules('username', 'Username', 'required');
        //$this->form_validation->set_rules('Lastname', 'Last Name', 'required');
        //$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
        

        //if ($this->form_validation->run() == TRUE)
        //{
            //get the variables
            //echo 'well done'; die();
            $this->load->module('site_security');
            $data= $this->fetch_data_from_post();

                
                
            if (is_numeric($update_id))
            {
                //update the item details
                $this->_update($update_id, $data);
                $flash_msg = "Modelyear successfully updated";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('modelyears/create/'.$update_id);
            } else
            {
                //insert the new item into the database
                //$data['date_made'] = time();
                $this->_insert($data);
                $update_id= $this->get_max(); //get the ID of the new item
                    
                $flash_msg = "Modelyear successfully created";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('modelyears/create/');
            }
        //}

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
        $data['headline'] = "Add New model year";
    } else
    {
        $data['headline']    = "Update model year Details";
    }

    //echo 'manage store items';
    $data['update_id'] = $update_id;
    $data['flash'] = $this->session->flashdata('item');

    //$data['view_module'] = "store_items";
    $data['view_file'] = "create";
    $this->load->module('templates');
    $this->templates->admin($data);
}

function fetch_data_from_post()
{

    $data['title'] = $this->input->post('title', TRUE);
    
    return $data;

}

function fetch_data_from_db($update_id)
{

    if(!is_numeric($update_id))
    {
        redirect('site_security/not_allowed');
    }

    $query = $this->get_where($update_id);
    foreach($query->result() as $row)
    {
        $data['id'] = $row->id;
        $data['title'] = $row->title;
        $data['ordering'] = $row->ordering;
        
    }

    if (!isset($data))
    {
        $data = "";
    }

    return $data;
}



}