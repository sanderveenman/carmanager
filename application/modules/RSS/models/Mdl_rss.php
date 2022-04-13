<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Mdl_rss extends CI_Model
{

function __construct() {
parent::__construct();
}

function get_table()
{
    $table = "tablename";
    return $table;
}

function get($order_by)
{
    $table = $this->get_table();
    $this->db->order_by($order_by);
    $query=$this->db->get($table);
    return $query;
}


function get_feed(){

$ch = curl_init("https://www.autoweek.nl/rss");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

$doc = new SimpleXmlElement($data, LIBXML_NOCDATA);
//print_r($doc); die();
if(isset($doc->channel))
{
    $test = $this->parseRSS($doc);
    //var_dump($test); die();
    return $test;
}
if(isset($doc->entry))
{
   $this->parseAtom($doc);
}

//print_r($test); die();

}

function parseRSS($xml)
{
  
    //$cnt = count($xml->channel->item);
    $cnt = 3;
   
    for($x = 0; $x < $cnt; $x++)
    {
     //   echo $i;
    $data['test'.$x]['rssimage'] = $xml->channel->item[$x]->enclosure->attributes();
    $data['test'.$x]['rssurl']    = $xml->channel->item[$x]->link;
    $data['test'.$x]['rsstitle']  = $xml->channel->item[$x]->title;
    //$excerpt['test'.$x] = $xml->channel->item[$x]->description;
    $data['test'.$x]['rssdesc'] = $this->get_excerpt($xml->channel->item[$x]->description, 150);
    //$data['test'.$x]['rssdesc'] = substr($excerpt['test'.$x], 0, 150);
    

    }
 //var_dump($data);
    return $data;
}


function get_excerpt($description, $cutOffLength){
    
        $charAtPosition = "";
    $titleLength = strlen($description);

    do {
        $cutOffLength++;
        $charAtPosition = substr($description, $cutOffLength, 1);
    } while ($cutOffLength < $titleLength && $charAtPosition != " ");

    return substr($description, 0, $cutOffLength) . '...';

}



function parseAtom($xml)
{
    echo "<strong>".$xml->author->name."</strong>";
    $cnt = count($xml->entry);
    for($i=0; $i<$cnt; $i++)
    {
    $urlAtt = $xml->entry->link[1]->attributes();
    $url    = $urlAtt['href'];
    $title  = $xml->entry->title;
    $desc   = strip_tags($xml->entry->content);
 
    //echo '<a href="'.$url.'">'.$title.'</a>'.$desc.'';
    }
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

}