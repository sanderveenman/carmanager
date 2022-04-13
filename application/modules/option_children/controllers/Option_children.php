<?php
class Option_children extends MX_Controller 
{

function __construct() {
parent::__construct();
}

function get_all_options(){
  $this->load->model('mdl_option_children');
$options = $this->mdl_option_children->fetch_options();
return $options;
}



function startview()
    {
        $this->load->model('mdl_option_children');
        //$data = $this->mdl_option_children->fetch_all();
        $data = $this->list_options_for_manage_view();
        echo json_encode($data->result_array());
    }

function list_options(){

$mysql_query = "SELECT t1.option_name
     , t2.id
     , t2.parent_name 
  FROM option_children AS t1
LEFT OUTER JOIN option_parents AS t2
    ON t2.id = t1.parent_id";
$query = $this->_custom_query($mysql_query);
$result = $query->result();



foreach($result as $row){

 $groupedData[$row->parent_name][] = $row->option_name;
 }
 return $groupedData;

}

function list_options_for_manage_view(){

$mysql_query = "SELECT t1.option_name,t1.published,t1.id as optionid
     , t2.id
     , t2.parent_name 
  FROM option_children AS t1
LEFT OUTER JOIN option_parents AS t2
    ON t2.id = t1.parent_id";
$query = $this->_custom_query($mysql_query);
//$result = $query->result();

 return $query;

}


function manage(){
     $this->load->module('site_security');
     $this->site_security->_make_sure_is_admin();
     //echo 'manage store items';
     $data['flash'] = $this->session->flashdata('item');
     $data['query'] = $this->get('id');
     $data['options'] = $this->list_options_for_manage_view();
     $data['view_file'] = "manage";
     $this->load->module('templates');
     $this->templates->admin($data);
}


function getVehiclesFieldsOrderingBySection($section) {
        //$db = new jsvehiclemanagerdb();
        if (!is_numeric($section))
            return false;
        //$published = JSVEHICLEMANAGERincluder::getObjectClass('user')->isguest() ? ' isvisitorpublished ' : ' published ' ;
        $published = "1";

        $mysql_query = "SELECT  ".$published." FROM `options`
                    WHERE fieldfor =  1 AND ordering = 0";

        
        $query = $this->_custom_query($mysql_query);


        //$db->setQuery($query);
        $published_count = count($query->result());
       // echo $published_count; die();
        //$fields = (object) array();
        
        if($published_count != 0 || $section == 10){
            $mysql_query = "SELECT  * FROM `options`
                        WHERE ".$published." = 1 AND fieldfor =  1 AND section = ".$section." ORDER BY ordering";

            $query = $this->_custom_query($mysql_query);
            $fields = $query->result();
            
            //var_dump($fields); die();
        }


//while (($row = mysql_fetch_array($fields, MSSQL_BOTH)))
 //   {
        // we get data in UCS-2
        // I use UTF-8 in my project, so I encode it back
  //      echo(iconv('UCS-2LE', 'UTF-8', $row['myfield']));
   // }

    //    print_r($fields); die();
    //    return $fields;
    //    foreach ($array as $key => $value)
    foreach ($fields as $key=>$value){
     //$htmlmsg = htmlentities($row->name);
     //$msg .= "<li><b>" . $row->id . "</b> " . $htmlmsg . "</li>";
     //echo ($row->{'id'});
     //var_dump($value); 
     //die();
    // die();
}
return $fields;
    }




function _fetch_all_options(){
      $mysql_query = "
            
        SELECT u.id as vehicleid,u.hasstatus, u.chassisnumber, m.title as make,n.title as model,u.sellprice, p.*, MIN(p.priority)
FROM files p 
JOIN vehicles u ON u.id=p.vehicleid
JOIN makes m on u.makeid = m.id
join models n on u.modelid = n.id
WHERE u.hasstatus !='SOLD'
GROUP BY u.id
ORDER BY p.file_name DESC
            ";
    
    $query = $this->_custom_query($mysql_query);
    return $query;
}

function get($order_by)
{
    $this->load->model('mdl_option_children');
    $query = $this->mdl_option_children->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_option_children');
    $query = $this->mdl_option_children->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_option_children');
    $query = $this->mdl_option_children->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_option_children');
    $query = $this->mdl_option_children->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_option_children');
    $this->mdl_option_children->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_option_children');
    $this->mdl_option_children->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_option_children');
    $this->mdl_option_children->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_option_children');
    $count = $this->mdl_option_children->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_option_children');
    $max_id = $this->mdl_option_children->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_option_children');
    $query = $this->mdl_option_children->_custom_query($mysql_query);
    return $query;
}


function action()
    {
        if($this->input->post('data_action'))
        {
            $data_action = $this->input->post('data_action');
            if($data_action == "Delete")
            {
                $api_url = "http://localhost/option_children/delete";

                $form_data = array(
                    'id'        =>  $this->input->post('option_id')
                );

                $client = curl_init($api_url);

                curl_setopt($client, CURLOPT_POST, true);
                curl_setopt($client, CURLOPT_POSTFIELDS, $form_data);
                curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
                $response = curl_exec($client);

                curl_close($client);
                echo $response;
            }

            if($data_action == "Edit")
            {
             // echo "poop";  
//here we are $this->form_validation->set_rules('parent_name', 'Parent Name', 'required');
        $this->load->library('form_validation');
        $this->form_validation->set_rules('option_name', 'Option Name', 'required');
        $this->form_validation->set_rules('parent_name', 'Parent Name', 'required');
        if($this->form_validation->run() == TRUE)
        {   
            $option_id = $this->input->post('option_id');
            //$user_id = 3;
            //$data['option_name'] = $this->input->post('option_name');
            //$data['parent_name'] = $this->input->post('parent_name');
            $data['option_name'] = "dfgdfgfd";
            $data['parent_name'] = "fdgdfg";
            $this->update($option_id,$data);

            //$this->load->model('mdl_option_children');
            //$this->mdl_option_children->_update($option_id, $data);

           // $data = array(
            //    'option_name'        =>  $this->input->post('option_name'),
             //   'parent_name'         =>  $this->input->post('parent_name')
            //);

            //$this->update_api($this->input->post('id'), $data);

            $array = array(
               'success'       =>  true
            );
        }
        else
        {
            $array = array(
                'error'             =>  true,
                'option_name_error'  =>  form_error('option_name'),
                'parent_name_error'   =>  form_error('parent_name')
            );
          //  echo "poop";
        }
        echo json_encode($array);

                //$form_data = array(
                 //   'option_name'        =>  $this->input->post('option_name'),
                  //  'parent_name'         =>  $this->input->post('parent_name'),
                  //  'id'                =>  $this->input->post('user_id')
                //);

                //$client = curl_init($api_url);

                //curl_setopt($client, CURLOPT_POST, true);
                //curl_setopt($client, CURLOPT_POSTFIELDS, $form_data);
                //curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
                //$response = curl_exec($client);

                //curl_close($client);
               //echo $response;
            }

            if($data_action == "fetch_single")
            {
                
                $option_id = $this->input->post('option_id');
                $response = $this->fetch_single($option_id);
                echo $response;
            }

            if($data_action == "Insert")
            {
                $api_url = "http://localhost/option_children/insert";
            
                $form_data = array(
                    'option_name'        =>  $this->input->post('option_name'),
                    'parent_name'         =>  $this->input->post('parent_name')
                );

                $client = curl_init($api_url);
                curl_setopt($client, CURLOPT_POST, true);
                curl_setopt($client, CURLOPT_POSTFIELDS, $form_data);
                curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
                $response = curl_exec($client);

                curl_close($client);
                echo $response;
            }


            if($data_action == "fetch_all")
            {
              
                $data = $this->list_options_for_manage_view();
                $result = $data->result();
                $output = '';

                if(count($result) > 0)
                {
                    foreach($result as $row)
                    {
                        $output .= '
                        <tr>
                            <td>'.$row->option_name.'</td>
                            <td>'.$row->parent_name.'</td>
                            <td><butto type="button" name="edit" class="btn btn-warning btn-xs edit" id="'.$row->optionid.'">Edit</button></td>
                            <td><button type="button" name="delete" class="btn btn-danger btn-xs delete" id="'.$row->optionid.'">Delete</button></td>
                        </tr>

                        ';
                    }
                }
                else
                {
                    $output .= '
                    <tr>
                        <td colspan="4" align="center">No Data Found</td>
                    </tr>
                    ';
                }

                echo $output;
            }
        }
    }



function insert()
    {
        $this->form_validation->set_rules('first_name', 'First Name', 'required');
        $this->form_validation->set_rules('last_name', 'Last Name', 'required');
        if($this->form_validation->run())
        {
            $data = array(
                'first_name'    =>  $this->input->post('first_name'),
                'last_name'     =>  $this->input->post('last_name')
            );

            $this->api_model->insert_api($data);

            $array = array(
                'success'       =>  true
            );
        }
        else
        {
            $array = array(
                'error'                 =>  true,
                'first_name_error'      =>  form_error('first_name'),
                'last_name_error'       =>  form_error('last_name')
            );
        }
        echo json_encode($array);
    }
    
  


 function fetch_single($option_id)
    {
       
        //$this->load->module('option_children');
       // $data = $this->fetch_single_option($this->input->post('id'));
        $data = $this->fetch_single_option($option_id);
        //echo $data;//var_dump($data); die();

         foreach($data as $row){
            $output['option_name'] = $row['option_name'];
            $output['parent_name'] = $row['parent_name'];
         }
         //$output['option_name'] = "test option name";
          // $output['parent_name'] = "test parent name";
            return json_encode($output);
    }

 function fetch_single_option($option_id)
    {   
  
        $this->load->model('mdl_option_children');
        $query = "SELECT t1.option_name,t1.published,t1.id as optionid
                    , t2.id
                    , t2.parent_name 
                    FROM option_children AS t1
                    LEFT OUTER JOIN option_parents AS t2
                    ON t2.id = t1.parent_id
                    WHERE t1.id =  $option_id";
        $data = $this->mdl_option_children->_custom_query($query);
        
        return $data->result_array();
    }

    function update($update_id, $data)
    {
        //$this->form_validation->set_rules('option_name', 'Option Name', 'required');

        $this->form_validation->set_rules('parent_name', 'Parent Name', 'required');
        if($this->form_validation->run())
        {   
            $user_id = 3;
            $data['option_name'] = "sdafasdf";
            $data['parent_name'] = "dfgdfg";

            $this->load->model('mdl_option_children');
            $this->mdl_option_children->_update($user_id, $data);

           // $data = array(
            //    'option_name'        =>  $this->input->post('option_name'),
             //   'parent_name'         =>  $this->input->post('parent_name')
            //);

            //$this->update_api($this->input->post('id'), $data);

            $array = array(
                'success'       =>  true
            );
        }
        else
        {
            $array = array(
                'error'             =>  true,
                'option_name_error'  =>  form_error('option_name'),
                'parent_name_error'   =>  form_error('parent_name')
            );
        }
        echo json_encode($array);
    }

function delete()
    {
        $this->load->model('mdl_option_children');
        if($this->input->post('id'))
        {
            if($this->mdl_option_children->delete_single_user($this->input->post('id')))
            {
                $array = array(

                    'success'   =>  true
                );
            }
            else
            {
                $array = array(
                    'error'     =>  true
                );
            }
            echo json_encode($array);
        }
    }




    function update_api($user_id, $data)
    {
        
        $this->load->model('mdl_option_children');
        $this->mdl_option_children->_update($user_id, $data);
        //$this->db->update('tbl_sample', $data);
    }


function viewoptions(){
     $this->load->module('site_security');
     $this->site_security->_make_sure_is_admin();
     //echo 'manage store items';
     $data['flash'] = $this->session->flashdata('item');
     $data['query'] = $this->get('id');
     $data['options'] = $this->getVehiclesFieldsOrderingBySection(20);
        $data['options'] = $this->list_options();
     //$data['view_module'] = "store_items";
     //$data['image'] = $this->fetch_first_image();
     $data['view_file'] = "viewoptions";
     $this->load->module('templates');
     $this->templates->main_template($data);
}

function create()
{
    $this->load->library('session');
    $this->load->module('site_security');
    $this->load->module('option_parents');
    $this->site_security->_make_sure_is_admin();

    $update_id= $this->uri->segment(3);
    //$data['parents'] = $this->option_parents->get('id');
    $submit = $this->input->post('submit', TRUE);

    if ($submit=="Cancel")
    {
        redirect('option_children/manage');
    }

    if ($submit=="Submit")
    {
        //process the form
       // $this->load->library('form_validation');
        //$this->form_validation->set_rules('firstname', 'First Name', 'required');
        //$this->form_validation->set_rules('username', 'Username', 'required');
        
        //if ($this->form_validation->run() == TRUE)
        //{
            //get the variables
            //echo 'well done'; die();
            $this->load->module('site_security');
            $data= $this->fetch_data_from_post();
            //var_dump($data); die();

                
                
            if (is_numeric($update_id))
            {
                //update the item details
                $this->_update($update_id, $data);
                $flash_msg = "Option successfully updated";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('option_children/create/'.$update_id);
            } else
            {
                //insert the new item into the database
                //$data['date_made'] = time();
                // var_dump($data); die();
                $this->_insert($data);
                $update_id= $this->get_max(); //get the ID of the new item
                    
                $flash_msg = "Option successfully created";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('option_children/create/');
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
        $data['headline'] = "Add New Option";
    } else
    {
        $data['headline']    = "Update option";
    }

    //echo 'manage store items';
    $data['update_id'] = $update_id;
    $data['parents'] = $this->option_parents->get('id');
    $data['flash'] = $this->session->flashdata('item');

    //$data['view_module'] = "store_items";
    $data['view_file'] = "create";
    $this->load->module('templates');
    $this->templates->admin($data);
}

function fetch_data_from_post()
{

    $data['option_name'] = $this->input->post('option_name', TRUE);
     $data['parent_id'] = $this->input->post('parent_id', TRUE);
    
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
        $data['option_name'] = $row->option_name;
       // $data['ordering'] = $row->ordering;
        
    }

    if (!isset($data))
    {
        $data = "";
    }

    return $data;
}


}