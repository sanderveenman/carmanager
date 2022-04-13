<?php
class Fileupload extends MX_Controller 
{

function __construct() {
parent::__construct();
}

function _draw_sortable_list($update_id)
{
    //echo $cat_parent_id;
    $mysql_query = "select * from files where vehicleid = $update_id order by priority";
    $data['query'] = $this->_custom_query($mysql_query);
    //var_dump($data['query']);
    //$data['query'] = $this->get_where_custom('cat_parent_id', $cat_parent_id);
    $this->load->view('sortable_list', $data);
}


function sort()
    {
        $this->load->module('site_security');
        $this->site_security->_make_sure_is_admin();

        $number = $this->input->post('number', TRUE);
    

        for ($i=1; $i <=$number; $i++)
        {
            $update_id = $_POST['order'.$i];
            $data['priority'] = $i;
            $this->_update($update_id, $data);
        }
    }
function upload(){

$this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();
    //echo 'manage store items';
    $data['flash'] = $this->session->flashdata('item');
    $data['query'] = "";
    //$data['view_module'] = "store_items";
    $data['view_file'] = "upload_form";
    $this->load->module('templates');
    $this->templates->admin($data);


}

function get_all_images_for_vehicle($update_id){
    $this->load->model('mdl_fileupload');
 if (!is_numeric($update_id)) {
        die('Non-numeric variable!');
    }

    $query = $this->mdl_fileupload->_custom_query("select * from files where vehicleid = $update_id");
    return $query;


}

function doupload($files){
    //$this->load->model('file');
    $this->load->model('mdl_fileupload');
    $this->load->model('mdl_vehicles');
    $link = " http://192.168.2.222/";
    //$url = $link.'uploads/files/'; 
     $url = base_url().'uploads/files/';
     //echo $url; die();
        $data = array();
        // If file upload form submitted
        if(!empty($_FILES['files']['name'])){
           //var_dump($_FILES); die();
            $filesCount = count($_FILES['files']['name']);
            for($i = 0; $i < $filesCount; $i++){
                $_FILES['file']['name']     = $_FILES['files']['name'][$i];
                $_FILES['file']['type']     = $_FILES['files']['type'][$i];
                $_FILES['file']['tmp_name'] = $_FILES['files']['tmp_name'][$i];
                $_FILES['file']['error']     = $_FILES['files']['error'][$i];
                $_FILES['file']['size']     = $_FILES['files']['size'][$i];
                
                // File upload configuration
                $uploadPath = 'uploads/files/';
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
                    $update_id_temp= $this->mdl_vehicles->get_max();
                $update_id = $update_id_temp + 1;
                    $uploadData[$i]['vehicleid'] = $update_id;
                }
            }
            
            if(!empty($uploadData)){
                // Insert files data into the database
                $insert = $this->mdl_fileupload->insert($uploadData);
                
                // Upload status message
                $statusMsg = $insert?'Files uploaded successfully.':'Some problem occurred, please try again.';
                $this->session->set_flashdata('statusMsg',$statusMsg);
            }
        } else {
            echo "poop"; die();
        }
        
        // Get files data from the database
        $data['files'] = $this->mdl_fileupload->getRows();
        
        // Pass the files data to view
        //$this->load->view('upload_files/index', $data);
         //$data['view_file'] = "upload_form";
    //$this->load->module('templates');
    //$this->templates->admin($data);
    }




function get($order_by)
{
    $this->load->model('mdl_fileupload');
    $query = $this->mdl_fileupload->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_fileupload');
    $query = $this->mdl_fileupload->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_fileupload');
    $query = $this->mdl_fileupload->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_fileupload');
    $query = $this->mdl_fileupload->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_fileupload');
    $this->mdl_fileupload->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_fileupload');
    $this->mdl_fileupload->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_fileupload');
    $this->mdl_fileupload->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_fileupload');
    $count = $this->mdl_fileupload->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_fileupload');
    $max_id = $this->mdl_fileupload->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_fileupload');
    $query = $this->mdl_fileupload->_custom_query($mysql_query);
    return $query;
}

}