<?php
class Debitcredit extends MX_Controller 
{

function __construct() {
parent::__construct();
}


function manage()
{

    $this->load->module('site_security');

    $this->site_security->_make_sure_is_admin();
    //echo 'manage store items';
    $data['update_id'] = $this->uri->segment(3);
    $data['car'] = $this->_get_car_make_and_model($data['update_id']);
    $data['flash'] = $this->session->flashdata('item');
    $data['query'] = $this->get_where_custom('vehicleid', $data['update_id']);
    //$data['view_module'] = "store_items";
    $data['view_file'] = "manage";
    $this->load->module('templates');
    $this->templates->admin($data);
}

function create()
{
    $this->load->library('session');

    $this->load->module('invoices');
    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();

    $update_id= $this->uri->segment(3);
    $data['nope'] = $update_id;
    $submit = $this->input->post('submit', TRUE);

    if ($submit=="Cancel")
    {
        redirect('debitcredit/manage');
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
        $this->load->module('invoices');
            $this->load->module('site_security');
            $data= $this->fetch_data_from_post();
             //var_dump($data);
            //die();

                
                
          
                //insert the new item into the database

                $_FILES['files']['vehicleid'] = 3;
                $_FILES['files']['invoiceid'] = $this->get_max() +1; 
                //var_dump($_FILES); die();
               
                $temp[]=$data['files']; 
                unset($data['files']);
                $this->_insert($data);
                $data['files'] = $temp;
                 $this->invoices->doupload($data['files'], $_POST['vehicleid']);
                //var_dump($data); die();
                
                
                $update_id= $this->get_max(); //get the ID of the new item
                
                    
                $flash_msg = "invoice successfully created";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('debitcredit/manage/'.$_POST['vehicleid']);
            
        //}

    }

   

    //echo 'manage store items';
    $data['test'] = $update_id;
    $data['headline'] = "Add new invoice";
    $data['flash'] = $this->session->flashdata('item');

    //$data['view_module'] = "store_items";
    $data['view_file'] = "create";
    $this->load->module('templates');
    $this->templates->admin($data);
}

function fetch_data_from_post()
{

    $data['description'] = $this->input->post('description', TRUE);
    $data['amount'] = $this->input->post('amount', TRUE);
    $data['tax'] = $this->input->post('tax', TRUE);
    $data['sort'] = $this->input->post('sort', TRUE);
    $data['date'] = $this->input->post('date', TRUE);
    //$data['invoice'] = $this->input->post('invoice', TRUE);
    $data['vehicleid'] = $this->input->post('vehicleid', TRUE);
    $data["files"] = $this->input->post('files[]', TRUE);
    
    
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
        $data['description'] = $row->description;
    $data['amount'] = $row->amount;
    $data['tax'] = $row->tax;
    $data['sort'] = $row->sort;
    $data['date'] = $row->date;
    //$data['invoice'] = $row->invoice;
    }

    if (!isset($data))
    {
        $data = "";
    }

    return $data;
}

function delete(){
     $this->load->module('site_security');

    $this->site_security->_make_sure_is_admin();
   $data['update_id']= $this->uri->segment(3);
    $invoice_id = $this->input->post('bookId', TRUE);
   //$invoice_id = 25;
    $data['flash'] = $this->session->flashdata('item');
    $result = $this->get_where($invoice_id);
    $temp = $result->result();
    //var_dump($temp); die();
    //$update_id= $temp->vehicleid;
    $update_id = $temp[0]->vehicleid;
    $this->_delete($invoice_id);
    //echo "done"; die();
    redirect('debitcredit/manage/'.$update_id);
}


function get($order_by)
{
    $this->load->model('mdl_debitcredit');
    $query = $this->mdl_debitcredit->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_debitcredit');
    $query = $this->mdl_debitcredit->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_debitcredit');
    $query = $this->mdl_debitcredit->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_debitcredit');
    $query = $this->mdl_debitcredit->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_debitcredit');
    $this->mdl_debitcredit->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_debitcredit');
    $this->mdl_debitcredit->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_debitcredit');
    $this->mdl_debitcredit->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_debitcredit');
    $count = $this->mdl_debitcredit->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_debitcredit');
    $max_id = $this->mdl_debitcredit->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_debitcredit');
    $query = $this->mdl_debitcredit->_custom_query($mysql_query);
    return $query;
}


function _get_car_make_and_model($update_id)
{
    //$mysql_query = "select * from enquiries where sent_to=0 order by date_created desc";
    
    $mysql_query = "
            
        SELECT u.id as vehicleid, u.chassisnumber,u.sellprice,u.purchaseprice, m.title as make,n.title as model, p.*, MIN(p.priority)
FROM files p
JOIN vehicles u ON u.id=p.vehicleid
JOIN makes m on u.makeid = m.id
join models n on u.modelid = n.id
WHERE vehicleid = $update_id
GROUP BY u.id
ORDER BY p.file_name DESC
            ";
    
    $query = $this->_custom_query($mysql_query);
    //var_dump($query->result()); die();
    $data = $query->result();
    return $data;
}

}