<?php
class Templates extends MX_Controller 
{

function __construct() {
parent::__construct();
}

function _draw_top_nav_jqm($customer_id)
{
	$top_nav_btns = [
			
			['text' => 'Home', 'icon' => 'home', 'btn_target_url' => base_url()],
			['text' => 'Occassions', 'icon' => 'action', 'btn_target_url' => base_url().'vehicles/vehicle_list'],
			['text' => 'Account', 'icon' => 'user', 'btn_target_url' => base_url().'youraccount/welcome'],
			['text' => 'Zoekopdracht', 'icon' => 'phone', 'btn_target_url' => base_url().'vehicles/sold'],
			['text' => 'Contact', 'icon' => 'shop', 'btn_target_url' => base_url().'contactus'],	
	];
	if ((is_numeric($customer_id)) AND ($customer_id>0))
	{
		//customer is logged in 
		unset($top_nav_btns['1']);
	} else 
	{
		unset($top_nav_btns['2']);
	}
	$data['top_nav_btns'] = $top_nav_btns;
	$data['current_url'] = current_url();
	$this->load->view('top_nav_jqm', $data);
}

function _draw_page_top()
{
	$this->load->module('site_security');
	$shopper_id = $this->site_security->_get_user_id();
	
	$this->_draw_page_top_lhs();
	$this->_draw_page_top_mid($shopper_id);
	$this->_draw_page_top_rhs($shopper_id);
}

function _draw_page_top_lhs()
{
	$this->load->view('page_top_lhs');
}

function _draw_footer(){
	$this->load->view('footer');
}

function _draw_page_top_mid($shopper_id)
{

	if (is_numeric($shopper_id) AND ($shopper_id>0))
	{
		$view_file = 'page_top_mid_in'; //user is logged in
	} else 
	{
		$view_file = 'page_top_mid_out'; //user is NOT  logged in
	}
	$this->load->view($view_file);
}

function _draw_page_top_rhs($shopper_id)
{
	$this->load->module('cart');
	$this->load->module('site_settings');
	
	$shopper_id = $this->site_security->_get_user_id();
	$cart_data['shopper_id'] = $shopper_id;
	$cart_data['customer_session_id'] = $this->session->session_id;
	$cart_data['table'] = 'store_basket';
	$cart_data['add_shipping'] = FALSE;
	
	//$cart_total = $this->cart->_calc_cart_total($cart_data);

	//if ($cart_total<0.01)
	//{
	$cart_info = "No items in Cart";
	//} else 
	//{
	//	$cart_total_desc = number_format($cart_total, 2);
	//	$currency_symbol = $this->site_settings->_get_currency_code();
	//	$cart_info = "Shopping Cart Total : ".$currency_symbol.$cart_total_desc;
	//}
	$data['cart_info'] = $cart_info;
	$this->load->view('page_top_rhs', $data);
}

function _draw_breadcrumbs($data)
{
	//NOTE : for this to work, $data needs to contain
	// template, current_page_title, breadcrumbs array
	$this->load->view('breadcrumbs_public_bootstrap', $data);
}

function login()
{
	if (!isset($data['view_module']))
	{
		$data['view_module'] = $this->uri->segment(1);
	}
	
	
	$this->load->view('login_page', $data);
}

function test()
{
	$data= "";
	$this->public_jqm($data);
}




function public_bootstrap($data)
{
	
	if (!isset($data['view_module']))
	{
		$data['view_module'] = $this->uri->segment(1);
	}
	
	$this->load->module('site_security');
	$data['customer_id'] = $this->site_security->_get_user_id();
	
	$this->load->view('public_bootstrap', $data);
}

function public_jqm($data)
{
	
	if (!isset($data['view_module']))
	{
		$data['view_module'] = $this->uri->segment(1);
	}
	
	$this->load->module('site_security');
	$data['customer_id'] = $this->site_security->_get_user_id();
	
	$this->load->view('public_jqm', $data);
}

function main_template($data)
{
	
	if (!isset($data['view_module']))
	{
		$data['view_module'] = $this->uri->segment(1);
	}
	
	$this->load->module('site_security');
	$data['customer_id'] = $this->site_security->_get_user_id();
	
	$this->load->view('main_template', $data);
}

function admin($data)
{
	if (!isset($data['view_module']))
	{
		$data['view_module'] = $this->uri->segment(1);
	}
	$this->load->view('admin', $data);
}


function get($order_by)
{
    $this->load->model('mdl_templates');
    $query = $this->mdl_templates->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_templates');
    $query = $this->mdl_templates->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_templates');
    $query = $this->mdl_templates->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_templates');
    $query = $this->mdl_templates->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_templates');
    $this->mdl_templates->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_templates');
    $this->mdl_templates->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_templates');
    $this->mdl_templates->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_templates');
    $count = $this->mdl_templates->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_templates');
    $max_id = $this->mdl_templates->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_templates');
    $query = $this->mdl_templates->_custom_query($mysql_query);
    return $query;
}

}