<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Vehicles extends MX_Controller 
{
    

function __construct() {
parent::__construct();
}

function testing(){
    $this->load->view('view');
}


function fetch_vehicle_images(){
    //$update_id= 44;
    $update_id= $this->uri->segment(3);

$mysql_query = "SELECT * FROM files WHERE vehicleid = $update_id ORDER BY id ASC";
$query = $this->_custom_query($mysql_query);
$base_url = base_url();
  //  return $query;


//$statement = $connect->prepare($query);
//$statement->execute();
//$result = $statement->fetchAll();
$number_of_rows = $query->num_rows();

//var_dump($query->result());
$output = '';
$output .= '



 
';
if($number_of_rows > 0)
{
 $count = 0;
 foreach($query->result() as $row)
 {
  $count ++; 
  //var_dump($row);
  $output .= '
  <li class="sort" id="'.$row->id.'"><img src="'.$row->file_name.'" class="img-thumbnail" width="100" height="100" /><span><img src="delete-icon.png" width=30 height="30"></span>
  </li>
  
  ';
 }
}
else
{
 $output .= '
  <tr>
   <td colspan="6" align="center">No Data Found</td>
  </tr>
 ';
}
$output .= '';
echo $output;
//var_dump($result);
}

function vehicle_details(){
    $this->load->module('site_security');
    $this->load->module('files');
   //$this->site_security->_make_sure_is_admin();
   $vehicle_id = $this->uri->segment(3);
   //echo 'manage store items';
   $data['flash'] = $this->session->flashdata('item');
   //$data['vehicles'] = $this->_fetch_new_vehicles();
   $data['images'] = $this->files->get_images_for_vehicle_details($vehicle_id);

$data['query'] = $this->get_vehicle_details($vehicle_id);
   //$data['view_module'] = "store_items";
   $data['image'] = $this->fetch_first_image();
   $data['view_file'] = "new_car_listing";
   $this->load->view('vehicle_details', $data);
}

function vehicle_list(){
     //echo 'manage store items';
     $data['flash'] = $this->session->flashdata('item');
     $data['vehicles'] = $this->fetch_vehicle_list();
     
 
     //$data['view_module'] = "store_items";
     $data['image'] = $this->fetch_first_image();
     $data['view_file'] = "vehicle_list";
     $this->load->module('templates');
    $this->templates->main_template($data);
}

function test(){
     //echo 'manage store items';
     $data['flash'] = $this->session->flashdata('item');
     $data['vehicles'] = $this->fetch_vehicle_list();
     
 
     //$data['view_module'] = "store_items";
     $data['image'] = $this->fetch_first_image();
     $data['view_file'] = "vehicle_list";
     $this->load->view('vehicle_list', $data);
    
}

function sort()
    {
        $this->load->module('site_security');
        $this->load->module('files');
        $this->site_security->_make_sure_is_admin();

        $number = $this->input->post('number', TRUE);

        for ($i=1; $i <=$number; $i++)
        {
            $update_id = $_POST['order'.$i];
            $data['priority'] = $i;
            $this->files->_update($update_id, $data);
        }
    }

function draw_new_vehicles(){
     $this->load->module('site_security');
    //$this->site_security->_make_sure_is_admin();
    //echo 'manage store items';
    $data['flash'] = $this->session->flashdata('item');
    $data['vehicles'] = $this->_fetch_new_vehicles();
    //$test = $data['vehicles']->result_array();
    //var_dump($test[0]['vehicleid']); die();
    //$test[0]['images'] = $this->fetch_new_vehicles_images(50);
   // $data['vehicles'][0]->images =  $this->fetch_new_vehicles_images(50);
    //var_dump($data['vehicles']->result_array()); die();
    //var_dump($test);die();
    //$data['total'] = $test;
    $data['test'] = $this->fetch_new_vehicles_test();

    //var_dump($data['test']);
    if(empty($data['test'])){
        $data['test']=[];
        $data['view_file'] = "no_new_car_listing";
    $this->load->view('no_new_car_listing', $data);
    }
    $data['images'] = $this->fetch_new_vehicles_images(50);
    //$data['dtimeslider'] = $this->contruct_timeslider_data()
    //$data['vehicles']['test'] = 5;
    

    //$data['view_module'] = "store_items";
    $data['first_image'] = $this->fetch_first_image();
    //$data['all_images'] = $this->fetch_all_images_of_vehicle();
    $data['view_file'] = "new_car_listing";
    $this->load->view('new_car_listing', $data);
}

function updatestatustoactive(){
    $vehicle_id = $this->uri->segment(3);
    $data['hasstatus'] = "ACTIVE";
    $this->_update($vehicle_id, $data);
    redirect('vehicles/manage/');
}

function updatestatustosold(){
    $vehicle_id = $this->uri->segment(3);
    $data['hasstatus'] = "SOLD";
    $this->_update($vehicle_id, $data);
    redirect('vehicles/manage/');
}

function create()
{
    $this->load->library('session');
    $this->load->module('site_security');
    $this->load->module('makes');
    $this->load->module('modelyears');
    $this->load->module('vehicle_types');
    $this->load->module('fueltypes');
    $this->load->module('transmissions');
    $this->load->module('cylinders');
    $this->load->module('option_children');
    $this->load->module('fileupload');
    $this->load->module('timedate');
    $this->site_security->_make_sure_is_admin();

    $update_id= $this->uri->segment(3);
    $submit = $this->input->post('submit', TRUE);
    $data= $this->fetch_data_from_post();
    $this->load->model('mdl_makes');
    $this->load->model('mdl_modelyears');
    $this->load->model('mdl_fueltypes');
    $this->load->model('mdl_transmissions');
    $this->load->model('mdl_cylinders');
    $this->load->model('mdl_fileupload');
    $this->load->model('mdl_vehicle_types');


    if ($submit=="Cancel")
    {
        redirect('webpages/manage');
    }

    if ($submit=="Submit")
    {
        //process the form
        //$this->load->library('form_validation');
        //$this->form_validation->set_rules('page_title', 'Page Title', 'required|max_length[240]');
        //$this->form_validation->set_rules('page_keywords', 'Page Keywords', 'required');
        //$this->form_validation->set_rules('page_description', 'Page Description', 'required');
        //$this->form_validation->set_rules('page_headline', 'Page Headline', 'required');
        //$this->form_validation->set_rules('page_content', 'Page Content', 'required');

        //if ($this->form_validation->run() == TRUE)
        //{
            //get the variables
          
            $data= $this->fetch_data_from_post();
            //var_dump($data); die();
            //$data['page_url'] = url_title($data['page_title']);
            //var_dump($data['optionsarray']); die();  

            if (is_numeric($update_id))
            {
               
                //update the car details
                $data['options'] = json_encode($data['optionsarray']);
                unset($data['optionsarray']);
                $this->_update($update_id, $data);
                $flash_msg = "The page details were successfully updated";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('vehicles/create/'.$update_id);
            } else
            {
                //insert the new car into the database
                
                $data['options'] = json_encode($data['optionsarray']);
               
                $data['date_created'] = time();
                unset($data['optionsarray']);
    
                $this->fileupload->doupload($data['files']);
                unset($data['files']);
                $data['date_created'] = date('Y-m-j');
                $this->_insert($data);
                $update_id= $this->get_max(); //get the ID of the new car
                    
                $flash_msg = "The Car was successfully added";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('vehicles/manage/');
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
        $data['headline'] = "Add New car";
        $data['sort_this'] = TRUE;
        $data['date_created'] = date("Y/m/d");
        $data['makes'] = $this->mdl_makes->fetch_makes();
        $data['modelyears'] = $this->mdl_modelyears->fetch_modelyears();
        $data['vehicletypes'] = $this->mdl_vehicle_types->fetch_vehicletypes();
        $data['fueltypes'] = $this->mdl_fueltypes->fetch_fueltypes();
        $data['transmissions'] = $this->mdl_transmissions->fetch_transmissions();
        $data['cylinders'] = $this->mdl_cylinders->fetch_cylinders();
        //$data['caroptions'] = $this->options->get_all_options();
        $data['caroptions'] = $this->option_children->list_options();

    } else
    {
        $data['headline']    = "Update car Details";
    }

    $data['update_id'] = $update_id;
    $data['sort_this'] = TRUE;
    $data['flash'] = $this->session->flashdata('item');

    //$data['view_module'] = "store_items";
    $data['view_file'] = "create";
    $this->load->module('templates');
    $this->templates->admin($data);
}


function edit()
{

    $this->load->library('session');
    $this->load->module('site_security');
    $this->load->module('makes');
    $this->load->module('modelyears');
    $this->load->module('fueltypes');
    $this->load->module('transmissions');
    $this->load->module('cylinders');
    $this->load->module('options');
    $this->load->module('fileupload');
    $this->load->module('timedate');
    $this->load->module('vehicle_types');
    $this->site_security->_make_sure_is_admin();

    $update_id= $this->uri->segment(3);
    $submit = $this->input->post('submit', TRUE);
    $data= $this->fetch_data_from_post();

    $this->load->model('mdl_makes');
    $this->load->model('mdl_modelyears');
    $this->load->model('mdl_fueltypes');
    $this->load->model('mdl_transmissions');
    $this->load->model('mdl_cylinders');
    $this->load->model('mdl_fileupload');
    $this->load->model('mdl_vehicle_types');


    if ($submit=="Cancel")
    {
        redirect('webpages/manage');
    }

    if ($submit=="Submit")
    {
        $data= $this->fetch_data_from_post();
        
            if (is_numeric($update_id))
            {
               
                //update the car details
                $data['options'] = json_encode($data['optionsarray']);
                unset($data['optionsarray']);
                $this->_update($update_id, $data);
                $flash_msg = "The page details were successfully updated";
                $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
                $this->session->set_flashdata('item', $value);
                redirect('vehicles/create/'.$update_id);
            }
    }

    if ((is_numeric($update_id)) && ($submit!="Submit"))
    {
        $data= $this->fetch_data_from_db($update_id);
    
     
    } else
    {
        $data= $this->fetch_data_from_post();
        
    
    }

        $data['headline']    = "Update car Details";
        $data['update_id'] = $update_id;
        $data['sort_this'] = TRUE;
        $data['flash'] = $this->session->flashdata('item');

        //$data['view_module'] = "store_items";
        $data['view_file'] = "edit";
        $this->load->module('templates');
        $this->templates->admin($data);
}



function manage()
{

    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();
    //echo 'manage store items';
    $data['flash'] = $this->session->flashdata('item');
    $data['query'] = $this->_fetch_all_vehicles();

    //$data['view_module'] = "store_items";
    $data['image'] = $this->fetch_first_image();
    $data['view_file'] = "manage";
    $this->load->module('templates');
    $this->templates->admin($data);
}



function get($order_by)
{
    $this->load->model('mdl_vehicles');
    $query = $this->mdl_vehicles->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_vehicles');
    $query = $this->mdl_vehicles->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_vehicles');
    $query = $this->mdl_vehicles->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_vehicles');
    $query = $this->mdl_vehicles->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_vehicles');
    $this->mdl_vehicles->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_vehicles');
    $this->mdl_vehicles->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_vehicles');
    $this->mdl_vehicles->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_vehicles');
    $count = $this->mdl_vehicles->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_vehicles');
    $max_id = $this->mdl_vehicles->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_vehicles');
    $query = $this->mdl_vehicles->_custom_query($mysql_query);
    return $query;
}

function fetch_data_from_post()
{
    
    $data["modelyearid"] = $this->input->post('modelyears', TRUE);
    $data["vehicletypeid"] = $this->input->post('vehicletypes', TRUE);
    $data["makeid"] = $this->input->post('make', TRUE);
    $data['modelid'] = $this->input->post('models', TRUE);
    $data["mileage"] = $this->input->post('mileage', TRUE);
    $data["transmissionid"] = $this->input->post('transmissions', TRUE);
    $data["sellprice"] = $this->input->post('sellprice', TRUE);
    $data["purchaseprice"] = $this->input->post('purchaseprice', TRUE);
    $data["fueltypeid"] = $this->input->post('fueltypes', TRUE);
    $data["interiorcolour"] = $this->input->post('interiorcolour', TRUE);
    $data["exteriourcolour"] = $this->input->post('exteriourcolour', TRUE);
    $data["enginevolume"] = $this->input->post('enginevolume', TRUE);
    $data["modelline"] = $this->input->post('modelline', TRUE);
    $data["description"] = $this->input->post('description', TRUE);
   $data["cylinderid"] = $this->input->post('cylinders', TRUE);
    $data["optionsarray"] = $this->input->post('options[]', TRUE);
    $data["files"] = $this->input->post('files[]', TRUE);
    $data["chassisnumber"] = $this->input->post('chassisnumber', TRUE);
    $data["ismargin"] = $this->input->post('ismargin', TRUE);
    $data["hasstatus"] = $this->input->post('hasstatus', TRUE);
    return $data;
    
}


function fetch_data_from_db($update_id)
{
    $this->load->module('option_children');
    
    if(!is_numeric($update_id)) 
    {
        redirect('site_security/not_allowed');
    }
    
    $query = $this->get_where($update_id);
    foreach($query->result() as $row)
    {
        $data['id'] = $row->id;
        $data['uid'] = $row->uid;
        $data['makeid'] = $row->makeid;
        $data['modelid'] = $row->modelid;
        $data['transmissions'] = $row->transmissionid;
        $data['mileage']= $row->mileage;
        $data['sellprice']=$row->sellprice;
        $data['purchaseprice']=$row->purchaseprice;
        $data['exteriourcolour'] = $row->exteriourcolour;
        $data['interiorcolour'] = $row->interiorcolour;
        $data['enginevolume'] = $row->enginevolume;
        $data['modelline'] = $row->modelline;
        $data['description'] = $row->description;
        $data['fueltypeid'] = $row->fueltypeid;
        $data['transmissionid'] = $row->transmissionid;
        $data['caroptions'] = json_decode($row->options);
        $data['chassisnumber'] = $row->chassisnumber;
        $data['datecreated'] = $row->date_created;
        $data['ismargin'] = $row->ismargin;
        $data['hasstatus'] = $row->hasstatus;
        $data['vehicletypeid'] =$row->vehicletypeid;
        
      }
    
    if (!isset($data))
    {
        $data = "";
    }
    $data['makes'] = $this->mdl_makes->fetch_makes();
    $data['modelyears'] = $this->mdl_modelyears->fetch_modelyears();
    $data['vehicletypes'] = $this->mdl_vehicle_types->fetch_vehicletypes();
    $data['fueltypes'] = $this->mdl_fueltypes->fetch_fueltypes();
    $data['transmissionlist'] = $this->mdl_transmissions->fetch_transmissions();
    $data['cylinderlist'] = $this->mdl_cylinders->fetch_cylinders();
    $data['carlist'] = $this->option_children->get_all_options();
    $data['files'] = $this->fileupload->get_all_images_for_vehicle($update_id);
    
    return $data;
}

   public function loader()
    {
        $this->load->helper(array('dropdown','form'));
        $this->load->database();
        $dropdownItems = listData('country_tbl','country_id', 'country_name');
        $countryDropdown = form_dropdown('country',$dropdownItems);
        $stateDropdown =   form_dropdown('state',[]);
        $this->load->view('welcome_message', ['countryDropdown' => $countryDropdown, 'stateDropdown' => $stateDropdown]);
    }
 
    public function getState() {
        $this->load->helper(array('dropdown','form'));
        $this->load->database();
     $country_id = $this->input->get('country_id');
        $dropdownItems = listData('state_tbl','sate_id', 'sate_name',['where' => ['country_id' => $country_id]]);
        echo $stateDropdown =   form_dropdown('state',$dropdownItems);
        
    }

    function get_makes()
 {
    $this->load->model('mdl_makes');
  $data['country'] = $this->mdl_makes->fetch_makes();

 $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();
    //echo 'manage store items';
    $data['flash'] = $this->session->flashdata('item');
    //$data['query'] = $this->get('id');
    //$data['view_module'] = "store_items";
    $data['view_file'] = "dropdown";
    $this->load->module('templates');
    $this->templates->admin($data);

 }

 function _fetch_all_vehicles()
{
    //$mysql_query = "select * from enquiries where sent_to=0 order by date_created desc";
    
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

function _fetch_new_vehicles()
{
    //$mysql_query = "select * from enquiries where sent_to=0 order by date_created desc";
    
    $mysql_query = "
            
    SELECT u.id as vehicleid,u.hasstatus,u.modelline,u.mileage, u.chassisnumber,o.title as year,q.title as transmission,r.title as fueltype, m.title as make,n.title as model,u.sellprice, COUNT(p.file_name) as imagecount,p.file_name as files, p.*, MIN(p.priority)
    FROM files p 
    JOIN vehicles u ON u.id=p.vehicleid
    JOIN makes m on u.makeid = m.id
    join models n on u.modelid = n.id
    join modelyears o on u.modelyearid = o.id
    join transmissions q on u.transmissionid = q.id
    join fueltypes r on u.fueltypeid = r.id
    WHERE u.date_created >= date_sub(curdate(),interval 1 month)
    GROUP BY u.id
    ORDER BY p.priority DESC
            ";
    
    $query = $this->_custom_query($mysql_query);

   //$array = $query->result_array();
   
 
    return $query;
}


function fetch_new_vehicles_test(){
 $mysql_query = "
            
    SELECT u.id as vehicleid,u.hasstatus,u.modelline,u.mileage, u.chassisnumber,o.title as year,q.title as transmission,r.title as fueltype, m.title as make,n.title as model,u.sellprice, COUNT(p.file_name) as imagecount,p.file_name as files, p.*, MIN(p.priority)
    FROM files p 
    JOIN vehicles u ON u.id=p.vehicleid
    JOIN makes m on u.makeid = m.id
    join models n on u.modelid = n.id
    join modelyears o on u.modelyearid = o.id
    join transmissions q on u.transmissionid = q.id
    join fueltypes r on u.fueltypeid = r.id
    WHERE u.date_created >= date_sub(curdate(),interval 1 month)
    GROUP BY u.id
    ORDER BY p.priority DESC
            ";
    
    $query = $this->_custom_query($mysql_query);
    $result = $query->result();

$count = count($result);
//echo $count;
if($count==0){
    echo"returning null";
    $groupedData=[];
    return $groupedData;
}
foreach ($result as $key => $value){
   $groupedData[$key] = $value;
   //echo " key is ".$key;
   //echo "value is ".$value;
   //var_dump($groupedData);
}


$x=0;
$y=1;
while ($y <= $count){

$groupedData[$x]->listfiles = $this->fetch_new_vehicles_images($groupedData[$x]->vehicleid);
$x++;
$y++;
}

return $groupedData;
}


function fetch_new_vehicles_images($vehicleID){
    $mysql_query = "
            SELECT file_name from files where vehicleid = $vehicleID;
    
            ";
    
    $query = $this->_custom_query($mysql_query);
//$array()= "";
   //$array = json_encode($query->result_array());
 foreach ($query->result_array() as $row){
    $array[]= base_url()."uploads/files/".$row['file_name'];
    //$array[]= $row['file_name'];
 }
 $removed=array_shift($array);
 //$finalarray = str_replace('[', '', $array);

    $betweenarray  = json_encode($array);
    $finalarray1 = str_replace('[', '', $betweenarray);
    $finalarray2 = str_replace(']', '', $finalarray1);
    $finalarray3 = str_replace('"', '', $finalarray2);
    $finalarray4 = str_replace('\\', '', $finalarray3);
    return $finalarray4;
    //return $betweenarray;
    //return $array;
}


function fetch_vehicle_list(){
    $mysql_query = "
            
    SELECT u.id as vehicleid,u.hasstatus,u.modelline,u.mileage,u.licenseplate,COUNT(p.file_name) as imagecount, u.chassisnumber,o.title as year,q.title as transmission,r.title as fueltype, m.title as make,n.title as model,u.sellprice, p.*, MIN(p.priority)
    FROM files p 
    JOIN vehicles u ON u.id=p.vehicleid
    JOIN makes m on u.makeid = m.id
    join models n on u.modelid = n.id
    join modelyears o on u.modelyearid = o.id
    join transmissions q on u.transmissionid = q.id
    join fueltypes r on u.fueltypeid = r.id
    
    GROUP BY u.id
    ORDER BY p.file_name DESC
            ";
    
    $query = $this->_custom_query($mysql_query);
    return $query;
}
function get_vehicle_details($vehicle_id){
    $mysql_query = "
            
    SELECT u.id as vehicleid,u.hasstatus,u.modelline,u.mileage,u.description,u.licenseplate,u.enginepower,u.exteriourcolour,u.interiorcolour,u.enginevolume, u.chassisnumber,u.options,o.title as year,q.title as transmission,r.title as fueltype,s.title as cylinders,v.title as vehicletype, m.title as make,n.title as model,u.sellprice, p.file_name, MIN(p.priority)
    FROM files p 
    JOIN vehicles u ON u.id=p.vehicleid
    JOIN makes m on u.makeid = m.id
    join models n on u.modelid = n.id
    join modelyears o on u.modelyearid = o.id
    join transmissions q on u.transmissionid = q.id
    join fueltypes r on u.fueltypeid = r.id
    join cylinders s on u.cylinderid = s.id
    join vehicle_types v on u.vehicletypeid = v.id
    WHERE u.id = $vehicle_id
    GROUP BY u.id
    ORDER BY p.file_name DESC
            ";
    
    $query = $this->_custom_query($mysql_query);
    return $query->result();
}

function sold(){
    $this->load->module('files');
    $mysql_query = "SELECT u.id as vehicleid,u.hasstatus,u.sellprice, p.*, MIN(p.priority)
    FROM files p 
    JOIN vehicles u ON u.id=p.vehicleid
    WHERE u.hasstatus = 'sold'
    GROUP BY u.id
    ORDER BY p.file_name DESC";
    $data['query']= $this->_custom_query($mysql_query);
    $data['view_file'] = "sold_vehicles";
    $this->load->module('templates');
    $this->templates->main_template($data);
//$this->load->view('sold_vehicles', $data);
}

 function fetch_selected_vehicles()
{
    $this->load->model('mdl_vehicles');

  if($this->input->post('hasstatus'))
  {
    
$status = $this->input->post('hasstatus');
  
    //echo 3;
     $mysql_query = "
            
        SELECT u.id as vehicleid,u.hasstatus, u.chassisnumber, m.title as make,n.title as model, p.*, MIN(p.priority)
FROM files p 
JOIN vehicles u ON u.id=p.vehicleid
JOIN makes m on u.makeid = m.id
join models n on u.modelid = n.id
WHERE u.hasstatus ='$status'
GROUP BY u.id
ORDER BY p.file_name DESC
            ";
    
    $query = $this->_custom_query($mysql_query);
   $output = '';

foreach ($query->result() as $row)
                                {
                                    $delete_url = base_url()."vehicles/confirmdelete/".$row->vehicleid;
                                    $edit_item_url = base_url()."vehicles/create/".$row->vehicleid;
                                    $administration_url = base_url()."debitcredit/manage/".$row->vehicleid;
                            
                                       // $status_desc = "Active";
                              
                         
                            $output .='<tr>';
                                $output .='<td><center><img style="height: 75px; border: 1px solid #ddd; border-radius: 4px; padding: 5px;" src = "'.base_url().'uploads/files/'.$row->file_name.'"></center></td>';
                                $output .='<td>'.$row->chassisnumber.'</td>';
                                $output .='<td class="center">'.$row->make.'</td>';
                                $output .='<td class="center">'.$row->model.'</td>';
                                $output .='<td class="center">'.$row->hasstatus.'</td>';
                                $output .='<td class="center">';
                                    $output .='<a class="btn btn-danger" href="'.$delete_url.'">
                                        <i class="fa fa-trash-o"></i>  
                                    </a>';
                                    $output .='<a class="btn btn-info" href="'.$edit_item_url.'">
                                        <i class="fa fa-pencil-square-o"></i>  
                                    </a>';
                                    $output .='<a class="btn btn-secondary"  href="'.$administration_url.'">
                                        <img src="'.base_url().'pictures/administration-icon.png" height="30" width="30" title="administration"/>
                                    </a>';
                                $output .='</td>';
                            $output .='</tr>';
                           
                    
                          
                            }
$output .='</tbody>';

echo $output;




   //echo $this->mdl_models->fetch_models($this->input->post('make_id'));
  } else {
    echo 4;
  }
 }

function _fetch_vehicle_id()
{
    //$mysql_query = "select * from enquiries where sent_to=0 order by date_created desc";
    



    $mysql_query = "
            
        SELECT 
            vehicles.id
            FROM vehicles
            ";
    
    $query = $this->_custom_query($mysql_query);
  
foreach ($query->result() as $row){
    $data[] = $row->id;
}

return $data;



}

function fetch_first_image(){

$vehicle_id = $this->_fetch_vehicle_id();

foreach ($vehicle_id as $row){
    $mysql_query = '
            
       SELECT files.file_name
            
            FROM files where files.vehicleid ='.$row. '
            order by files.priority asc limit 1
            ';
            $query = $this->_custom_query($mysql_query);
            $image = $query->result();
    //var_dump($image);
} 
//var_dump($data);
//return $data;

}

function fetch_all_images_of_vehicle(){

$vehicle_id = $this->_fetch_vehicle_id();

foreach ($vehicle_id as $row){
    $mysql_query = '
            
       SELECT files.file_name
            
            FROM files where files.vehicleid ='.$row. '
            order by files.priority asc limit 1
            ';
            $query = $this->_custom_query($mysql_query);
            $image = $query->result();
    //var_dump($image);
} 
//var_dump($data);
//return $data;

}

function deleteconf($update_id)
{
    if (!is_numeric($update_id))
    {
        redirect('site_security/not_allowed');
    }

    $this->load->library('session');
    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();

    $data['headline'] = "Delete Vehicle";
    $data['update_id'] = $update_id;
    $data['flash'] = $this->session->flashdata('item');
    $data['view_file'] = "deleteconf";

    $this->load->module('templates');
    $this->templates->admin($data);
}

function delete($update_id)
{
    if (!is_numeric($update_id))
    {
        redirect('site_security/not_allowed');
    }

    $this->load->library('session');
    $this->load->module('site_security');
    $this->site_security->_make_sure_is_admin();

    $submit = $this->input->post('submit', TRUE);

    if ($submit=="Cancel")
    {
        redirect('vehicles/manage/');
    }elseif ($submit=="Yes, Delete")
    {
        $this->_process_delete($update_id);
        $flash_msg = "The page was successfully deleted";
        $value = '<div class="alert alert-success" role="alert">'.$flash_msg.'</div>';
        $this->session->set_flashdata('item', $value);
        redirect('blog/manage');
    }
}


}
