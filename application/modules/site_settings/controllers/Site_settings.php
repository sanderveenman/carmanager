<?php
class Site_settings extends MX_Controller 
{

function __construct() {
parent::__construct();
}
function is_mobile()
{
$this->load->library('user_agent');
//$is_mobile = $this->agent->is_mobile;
$is_mobile = FALSE; // for testing mobile site
return $is_mobile;
}

function _get_currency_symbol()
{
	$symbol="&euro;";
	return $symbol;
}

function _get_currency_code()
{
	$code="EUR;"; //GBP , USD etc
	return $code;
}

function _get_map_code()
{
	$map = '<iframe src="" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
	return $map;
}
function _get_support_team_name()
{
	$name = "Customer Support";
	 return $name;
}

function _get_company_name()
{
	$company_name = "<br>";
	return $company_name;
}

function _get_our_address()
{
	$address = "";
	return $address;
}

function _get_our_phonenum()
{
	$phonenum = "<br>";
	return $phonenum;
}

function _get_our_email()
{
	$email = "";
	return $email;
}

function _get_paypal_email()
{
	$paypal_email = "";
	return $paypal_email;
}

function _get_welcome_message()
{
	$this->load->module('store_accounts');
	$customer_name = $this->store_accounts->_get_customer_name($customer_id);
	
	$msg= "Hello ".$customer_name.",<br><br>";
	$msg.="Thank you for ...... If you have any questions ";
	$msg.="about any of our products or services then please get in touch. We are here ";
	$msg.="seven days a week and would be happy to help you.<br><br>";
	$msg.="Regards,<br><br>";
	$msg.="";
	return $msg;
}

function _get_cookie_name()
{
	$cookie_name="fuoxbwl";
	return $cookie_name;
}

function _get_item_segments()
{
	//return the segments for the store_items pages (product_page)
	$segments = "";
	return $segments;
}

function _get_items_segments()
{
	//return the segments for the category pages
	$segments = "";
	return $segments;
}

function _get_page_not_found_msg()
{
	$msg = " <h1>WOOPS!</h1><h2>The page you are looking for does not exist!</h2>";
	return $msg;
}


}