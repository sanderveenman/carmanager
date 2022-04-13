<?php
class Invoices extends MX_Controller 
{

function __construct() {
parent::__construct();
}


function get_all_images_for_vehicle($update_id){
    $this->load->model('mdl_fileupload');
 if (!is_numeric($update_id)) {
        die('Non-numeric variable!');
    }

    $query = $this->mdl_fileupload->_custom_query("select * from files where vehicleid = $update_id");
    return $query;


}

function doupload($files, $update_id){
    //$this->load->model('file');
    $this->load->model('mdl_invoices');
    $this->load->module('debitcredit');
    //$this->load->model('mdl_vehicles');
        $data = array();
        // If file upload form submitted
        if(!empty($_FILES['files']['name'])){
 //$var = get_defined_vars();
 //var_dump($var); die();
            $filesCount = count($_FILES['files']['name']);
   
            for($i = 0; $i < $filesCount; $i++){
                $_FILES['file']['name']     = $_FILES['files']['name'][$i];
                $_FILES['file']['type']     = $_FILES['files']['type'][$i];
                $_FILES['file']['tmp_name'] = $_FILES['files']['tmp_name'][$i];
                $_FILES['file']['error']     = $_FILES['files']['error'][$i];
                $_FILES['file']['size']     = $_FILES['files']['size'][$i];
                
                // File upload configuration
                $uploadPath = 'uploads/invoices/';
                $config['upload_path'] = $uploadPath;
                $config['allowed_types'] = 'jpg|jpeg|png|gif';
                
                // Load and initialize upload library
                $this->load->library('upload', $config);
                $this->upload->initialize($config);
                
                // Upload file to server
                if($this->upload->do_upload('file')){
                    // Uploaded file data
                    $fileData = $this->upload->data();

                    
                    $uploadData[$i]['file_name'] = $fileData['file_name'];
                    $uploadData[$i]['uploaded_on'] = date("Y-m-d H:i:s");
                    //$uploadData[$i]['vehicleid'] = $_FILES['vehicleid'];
                    $uploadData[$i]['vehicleid'] = $update_id;
                    $uploadData[$i]['invoiceid'] = $this->debitcredit->get_max();
                    //$arr = get_defined_vars();
                    //var_dump($arr); die();
                  
                    
                }
            }
            
            if(!empty($uploadData)){
                // Insert files data into the database
                $insert = $this->mdl_invoices->insert($uploadData);
                
                // Upload status message
                $statusMsg = $insert?'Files uploaded successfully.':'Some problem occurred, please try again.';
                $this->session->set_flashdata('statusMsg',$statusMsg);
            }
        } else {
            echo "poop"; die();
        }
        
        // Get files data from the database
        $data['files'] = $this->mdl_invoices->getRows();
        
        // Pass the files data to view
        //$this->load->view('upload_files/index', $data);
         //$data['view_file'] = "upload_form";
    //$this->load->module('templates');
    //$this->templates->admin($data);
    }




function get($order_by)
{
    $this->load->model('mdl_invoices');
    $query = $this->mdl_invoices->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_invoices');
    $query = $this->mdl_invoices->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_invoices');
    $query = $this->mdl_invoices->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_invoices');
    $query = $this->mdl_invoices->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_invoices');
    $this->mdl_invoices->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_invoices');
    $this->mdl_invoices->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_invoices');
    $this->mdl_invoices->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_invoices');
    $count = $this->mdl_invoices->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_invoices');
    $max_id = $this->mdl_invoices->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_invoices');
    $query = $this->mdl_invoices->_custom_query($mysql_query);
    return $query;
}

}