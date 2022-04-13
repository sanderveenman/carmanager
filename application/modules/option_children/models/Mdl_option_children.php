<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Mdl_option_children extends CI_Model
{

function __construct() {
parent::__construct();
}

function get_table()
{
    $table = "option_children";
    return $table;
}

function delete_single_user($user_id)
    {
        $this->db->where('id', $user_id);
        $this->db->delete('option_children');
        if($this->db->affected_rows() > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

function fetch_options()
 {
  $this->db->order_by("option_name", "ASC");
  $query = $this->db->get("option_children");
  return $query->result();
 }

function get($order_by)
{
    $table = $this->get_table();
    $this->db->order_by($order_by);
    $query=$this->db->get($table);
    return $query;
}

function get_with_limit($limit, $offset, $order_by)
{
    $table = $this->get_table();
    $this->db->limit($limit, $offset);
    $this->db->order_by($order_by);
    $query=$this->db->get($table);
    return $query;
}

function get_where($id)
{
    $table = $this->get_table();
    $this->db->where('id', $id);
    $query=$this->db->get($table);
    return $query;
}

function get_where_custom($col, $value)
{
    $table = $this->get_table();
    $this->db->where($col, $value);
    $query=$this->db->get($table);
    return $query;
}

function _insert($data)
{
    $table = $this->get_table();
    $this->db->insert($table, $data);
}

function _update($id, $data)
{
    $table = $this->get_table();
    $this->db->where('id', $id);
    $this->db->update($table, $data);
}

function _delete($id)
{
    $table = $this->get_table();
    $this->db->where('id', $id);
    $this->db->delete($table);
}

function count_where($column, $value)
{
    $table = $this->get_table();
    $this->db->where($column, $value);
    $query=$this->db->get($table);
    $num_rows = $query->num_rows();
    return $num_rows;
}

function count_all()
{
    $table = $this->get_table();
    $query=$this->db->get($table);
    $num_rows = $query->num_rows();
    return $num_rows;
}

function get_max()
{
    $table = $this->get_table();
    $this->db->select_max('id');
    $query = $this->db->get($table);
    $row=$query->row();
    $id=$row->id;
    return $id;
}

function _custom_query($mysql_query)
{
    $query = $this->db->query($mysql_query);
    return $query;
}

function getAllModels($makeid) {
        if(!is_numeric($makeid)) return false;
        // Filter
        //$title = JSVEHICLEMANAGERrequest::getVar('title');
        //$status = JSVEHICLEMANAGERrequest::getVar('status');
        //$formsearch = JSVEHICLEMANAGERrequest::getVar('JSVEHICLEMANAGER_form_search', 'post');
        //if ($formsearch == 'JSVEHICLEMANAGER_SEARCH') {
         //   $_SESSION['JSVEHICLEMANAGER_SEARCH']['title'] = $title;
         //   $_SESSION['JSVEHICLEMANAGER_SEARCH']['status'] = $status;
        //}
        //if (JSVEHICLEMANAGERrequest::getVar('pagenum', 'get', null) != null) {
         //   $title = (isset($_SESSION['JSVEHICLEMANAGER_SEARCH']['title']) && $_SESSION['JSVEHICLEMANAGER_SEARCH']['title'] != '') ? $_SESSION['JSVEHICLEMANAGER_SEARCH']['title'] : null;
           // $status = (isset($_SESSION['JSVEHICLEMANAGER_SEARCH']['status']) && $_SESSION['JSVEHICLEMANAGER_SEARCH']['status'] != '') ? $_SESSION['JSVEHICLEMANAGER_SEARCH']['status'] : null;
        //} elseif ($formsearch !== 'JSVEHICLEMANAGER_SEARCH') {
          //  unset($_SESSION['JSVEHICLEMANAGER_SEARCH']);
        //}
        $inquery = '';
        //if ($title != null) {
            //$title = esc_sql($title);
          //  $inquery .= " AND title LIKE '%" . $title . "%'";
        //}
        //if (is_numeric($status))
          //  $inquery .= " AND status = " . $status;

        jsvehiclemanager::$_data['filter']['title'] = $title;
        jsvehiclemanager::$_data['filter']['status'] = $status;
        $db = new jsvehiclemanagerdb();
        //pagination
        //$query = "SELECT COUNT(id) FROM `#__js_vehiclemanager_models` WHERE makeid = ".$makeid;
        //$query .= $inquery;
        //$db->setQuery($query);
        //$total = $db->loadResult();
        //jsvehiclemanager::$_data['total'] = $total;
        //jsvehiclemanager::$_data[1] = JSVEHICLEMANAGERpagination::getPagination($total);

        //data
        $query = "SELECT * FROM `#__js_vehiclemanager_models` WHERE makeid = ".$makeid;
        $query .= $inquery;
        $query .= " ORDER BY ordering ASC LIMIT " . JSVEHICLEMANAGERpagination::$_offset . ", " . JSVEHICLEMANAGERpagination::$_limit;
        $db->setQuery($query);
        jsvehiclemanager::$_data[0] = $db->loadObjectList();
        return;


    $table = $this->get_table();
    $this->db->where('id', $id);
    $query=$this->db->get($table);
    return $query;
    }

 function fetch_models($make_id)
 {
  $this->db->where('make_id', $make_id);
  //$this->db->order_by('title', 'ASC');
  $query = $this->db->get('models');


if ($query->num_rows() > 0) {

  $output = '<option value="">Select Model</option>';
  //$output = $query;
  foreach($query->result() as $row)
  {
   $output .= '<option value="'.$row->id.'">'.$row->title.'</option>';
  }
 //$output = 3;
  return $output;
 } else {
    $output = "no records found";
    return $output;
 }
 //   $output = $make_id;
   // return $output;
}
}