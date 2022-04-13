<?php
class Models extends MX_Controller 
{

function __construct() {
parent::__construct();
}


function listmodels($update_id)
{
    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();
$data['query'] = $this->fetch_data_from_db_modellist($update_id);
$data['view_file'] = "manage";
    $this->load->module('templates');
    $this->templates->admin($data);

}

function create_model_for_make()
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
                
       
                //insert the new page into the database
            $data['make_id'] = $update_id;
                $this->_insert($data);
                $update_id= $this->get_max(); //get the ID of the new page
                    
                $flash_msg = "The model was successfully added";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('makes/manage');

        

    }

  
        $data= $this->fetch_data_from_post();
    

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
    $this->load->model('mdl_models');
    $query = $this->mdl_models->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_models');
    $query = $this->mdl_models->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_models');
    $query = $this->mdl_models->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_models');
    $query = $this->mdl_models->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_models');
    $this->mdl_models->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_models');
    $this->mdl_models->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_models');
    $this->mdl_models->_delete($id);
}


function delete_model($update_id)
{
    if (!is_numeric($update_id))
    {
        redirect('site_security/not_allowed');
    }
    
    $this->load->library('session');
    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();
    
    //fetch the item id
    $query = $this->get_where($update_id);
    foreach ($query->result() as $row)
    {
        $item_id = $row->item_id;
    }
    $this->_delete($update_id);
    $flash_msg = "The colour option is deleted";
    $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
    $this->session->set_flashdata('item', $value);
    redirect('models/manage/');
}



function count_where($column, $value) 
{
    $this->load->model('mdl_models');
    $count = $this->mdl_models->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_models');
    $max_id = $this->mdl_models->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_models');
    $query = $this->mdl_models->_custom_query($mysql_query);
    return $query;
}

function fetch_data_from_post()
    {

        $data['title'] = $this->input->post('title', TRUE);
        //$data['cat_parent_id'] = $this->input->post('cat_parent_id', TRUE);

        return $data;

    }

  function fetch_data_from_db_modellist($update_id)
    {

        if(!is_numeric($update_id))
        {
 
            redirect('site_security/not_allowed');
        }

        $query = $this->get_where_custom('make_id', $update_id);
        

        return $query;
    }

    function fetch_data_from_db()
    {

       
        $data['querytest'] = $this->models->get('id');
        
        

        //return $querytest;
    }

    function fetch_models()
 {
    $this->load->model('mdl_models');
   //echo "yep"; die();
  if($this->input->post('make_id'))
  {
    //echo "poop"; die();
    //echo 3;
   echo $this->mdl_models->fetch_models($this->input->post('make_id'));
  } else {
    echo 4;
  }
 }

}