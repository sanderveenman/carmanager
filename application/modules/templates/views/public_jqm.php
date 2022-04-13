<!DOCTYPE html>
<html lang="en"
<?php 
if (isset($use_angularjs))
{
	echo 'ng-app="myApp"';
}
?>
>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>jQuery Mobile: Theme Download</title>

 
  <link rel="stylesheet" href="<?php echo base_url();?>dist/jqm/css/jquery.mobile.icons-1.4.5.min.css" />
  <link rel="stylesheet" href="<?php echo base_url();?>dist/jqm/css/jquery.mobile.structure-1.4.5.min.css" />
  <link rel="stylesheet" href="<?php echo base_url();?>dist/css/grid.css" /> 
  <link rel='stylesheet' href='<?php echo base_url();?>dist/css/tablet.css?ver=4.9.8' type='text/css' media='(min-width: 601px) and (max-width: 782px)' />

<link rel='stylesheet' href='<?php echo base_url();?>dist/css/mobile.css?ver=4.9.8' type='text/css' media='(min-width: 401px) and (max-width: 600px)' />
  <script
  src="https://code.jquery.com/jquery-1.12.4.min.js"
  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
  crossorigin="anonymous"></script>
  <script src="<?php echo base_url();?>dist/jqm/js/jquery.mobile-1.4.5.min.js"></script> 
<!--
<link rel="stylesheet" href="<?php echo base_url();?>dist/themes/cishop.min.css" />
<link rel="stylesheet" href="<?php echo base_url();?>dist/jqm/css/jquery.mobile.custom.structure.css" />

<link rel="stylesheet" href="<?php echo base_url();?>dist/jqm/css/jquery.mobile.custom.theme.css" />



<script src="<?php echo base_url();?>dist/js/jquery-3.2.1.min.js"></script>

<script src="<?php echo base_url();?>dist/jqm/js/jquery.mobile.custom.min.js"></script>

-->
    <?php 
if (isset($use_angularjs))
{
	echo '<script type="text/javascript" src="https://code.angularjs.org/1.4.9/angular.min.js"></script>';
}
?>

</head>
<body>
<div data-role="page" data-theme="a">
<div data-role="header" data-position="inline">
<h1>title</h1>
</div>

<?php 
echo Modules::run('templates/_draw_top_nav_jqm', $customer_id);
?>


<div data-role="content" data-theme="a">
<?php 
//echo Modules::run('sliders/_attempt_draw_slider');
?>
</p>
<?php
if($customer_id>0)
{
	include('customer_panel_top_jqm.php');
}

if (isset($page_content))
{
	
	echo '<div class="ui-body ui-body-a ui-corner-all">';
	echo nl2br($page_content);
	echo '</div>';
	if(!isset($page_url))
	{
		$page_url= 'homepage';
	}
	
	if($page_url=="")//if page content is the home page
	{
		require_once('homepage_content_jqm.php');
	} elseif ($page_content=="contactus")
	{
		//load up a contact us form
		echo Modules::run('contactus/_draw_form');
	}
	
} elseif (isset($view_file))
{
	$this->load->view($view_module.'/'.$view_file);
}

?>
</div>
</div>
</body>

</html>