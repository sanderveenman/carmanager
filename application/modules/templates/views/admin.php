<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="description" content="">
    <!-- Twitter meta-->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:site" content="@pratikborsadiya">
    <meta property="twitter:creator" content="@pratikborsadiya">
    <!-- Open Graph Meta-->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Auto's">
    <meta property="og:title" content="Vali - Free Bootstrap 4 admin theme">
    <meta property="og:url" content="http://pratikborsadiya.in/blog/vali-admin">
    <meta property="og:image" content="http://pratikborsadiya.in/blog/vali-admin/hero-social.png">
    <meta property="og:description" content="Vali is a responsive and free admin theme built with Bootstrap 4, SASS and PUG.js. It's fully customizable and modular.">
    <title>maintitle</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Main CSS-->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>dist/css/main.css">
    <!-- Font-icon css-->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>dist/css/custom.css">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
     <script src="<?php echo base_url();?>dist/js/jquery-3.2.1.min.js"></script>
    <script src="<?php echo base_url();?>dist/js/popper.min.js"></script>
    <script src="<?php echo base_url();?>dist/js/bootstrap.min.js"></script>
    <script src="<?php echo base_url();?>dist/js/main.js"></script>
    <!-- The javascript plugin to display page loading on top-->
    <script src="<?php echo base_url();?>dist/js/plugins/pace.min.js"></script>
    <!-- Page specific javascripts-->
    <script type="text/javascript" src="<?php echo base_url();?>dist/js/plugins/chart.js"></script>
  </head>
  <body class="app sidebar-mini rtl">

    <!-- Navbar-->
    <header class="app-header"><a class="app-header__logo" href="<?= base_url() ?>/dashboard/home">Dashboard</a>
      <!-- Sidebar toggle button--><a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
      <!-- Navbar Right Menu-->
      <ul class="app-nav">
        <li class="app-search">
          <input class="app-search__input" type="search" placeholder="Search">
          <button class="app-search__button"><i class="fa fa-search"></i></button>
        </li>
        <!--Notification Menu-->
        <li class="dropdown"><a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications"><i class="fa fa-bell-o fa-lg"></i></a>
          <ul class="app-notification dropdown-menu dropdown-menu-right">
            <li class="app-notification__title">You have 4 new notifications.</li>
            <div class="app-notification__content">
              <li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p class="app-notification__message">Lisa sent you a mail</p>
                    <p class="app-notification__meta">2 min ago</p>
                  </div></a></li>
              <li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-danger"></i><i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p class="app-notification__message">Mail server not working</p>
                    <p class="app-notification__meta">5 min ago</p>
                  </div></a></li>
              <li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-success"></i><i class="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p class="app-notification__message">Transaction complete</p>
                    <p class="app-notification__meta">2 days ago</p>
                  </div></a></li>
              <div class="app-notification__content">
                <li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p class="app-notification__message">Lisa sent you a mail</p>
                      <p class="app-notification__meta">2 min ago</p>
                    </div></a></li>
                <li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-danger"></i><i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p class="app-notification__message">Mail server not working</p>
                      <p class="app-notification__meta">5 min ago</p>
                    </div></a></li>
                <li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-success"></i><i class="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p class="app-notification__message">Transaction complete</p>
                      <p class="app-notification__meta">2 days ago</p>
                    </div></a></li>
              </div>
            </div>
            <li class="app-notification__footer"><a href="#">See all notifications.</a></li>
          </ul>
        </li>
        <!-- User Menu-->
        <li class="dropdown"><a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i class="fa fa-user fa-lg"></i></a>
          <ul class="dropdown-menu settings-menu dropdown-menu-right">
            <li><a class="dropdown-item" href="page-user.html"><i class="fa fa-cog fa-lg"></i> Settings</a></li>
            <li><a class="dropdown-item" href="page-user.html"><i class="fa fa-user fa-lg"></i> Profile</a></li>
            <li><a class="dropdown-item" href="<?= base_url()?>/dexter/logout"><i class="fa fa-sign-out fa-lg"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </header>
    <!-- Sidebar menu-->
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image">
        <div>
          <p class="app-sidebar__user-name">Admin name</p>
          <p class="app-sidebar__user-designation">Eigenaar</p>
        </div>
      </div>
      <ul class="app-menu">
        



<?php
//echo Modules::run('store_order_status/_draw_left_nav_links');

?>
<li><a class="app-menu__item" href="<?= base_url() ?>vehicles/manage"><img src="<?php echo base_url(); ?>pictures/Car-2-icon.png" height="42" width="42"><span class="app-menu__label"> Vehicles</span></a></li>
<!--
<li><a class="app-menu__item" href="<?= base_url() ?>administration/manage"><img src="<?php echo base_url(); ?>pictures/administration-icon.png" height="42" width="42"><span class="app-menu__label"> Administration</span></a></li>-->

<li><a class="app-menu__item" href="<?= base_url() ?>webpages/manage"><img src="<?php echo base_url(); ?>pictures/CMS-icon.png" height="42" width="42"><span class="app-menu__label"> CMS</span></a></li>

<li><a class="app-menu__item" href="<?= base_url() ?>blog/manage"><i class="app-menu__icon fa fa-desktop"></i><span class="app-menu__label"> Manage News</span></a></li>


<!--
<li><a class="app-menu__item" href="<?= base_url()?>homepage_blocks/manage"><i class="app-menu__icon fa fa-desktop"></i><span class="app-menu__label">homepage offers</span></a></li>
<li><a class="app-menu__item" href="<?= base_url() ?>store_categories/manage"><i class="app-menu__icon fa fa-desktop"></i><span class="app-menu__label"> Manage Categories</span></a></li>
-->
<li><a class="app-menu__item" href="<?= base_url() ?>store_accounts/manage"><img src="<?php echo base_url(); ?>pictures/accounts-icon.png" height="42" width="42"><span class="app-menu__label"> Accounts</span></a></li>
<!--
<li><a class="app-menu__item" href="<?= base_url() ?>enquiries/inbox"><img src="<?php echo base_url(); ?>pictures/messages-icon.png" height="42" width="42"><span class="app-menu__label"> Messages</span></a></li>-->





<li class="treeview">
<a class="app-menu__item" href="#" data-toggle="treeview"><img src="<?php echo base_url(); ?>pictures/setting-icon.png" height="42" width="42"><span class="app-menu__label"> Settings</span><i class="treeview-indicator fa fa-angle-right"></i></a>
<ul class="treeview-menu">
<li><a class="treeview-item" href="<?= base_url() ?>makes/manage"><img src="<?php echo base_url(); ?>pictures/makes-icon.png" height="42" width="42"><span class="app-menu__label"> Makes/models</span></a></li>
<li><a class="treeview-item" href="<?= base_url() ?>vehicle_types/manage"><img src="<?php echo base_url(); ?>pictures/makes-icon.png" height="42" width="42"><span class="app-menu__label"> Vehicle Types</span></a></li>
<li><a class="treeview-item" href="<?= base_url() ?>option_children/manage"><img src="<?php echo base_url(); ?>pictures/makes-icon.png" height="42" width="42"><span class="app-menu__label"> Vehicle options</span></a></li>

<li><a class="treeview-item" href="<?= base_url() ?>modelyears/manage"><img src="<?php echo base_url(); ?>pictures/calendar-icon.png" height="42" width="42"><span class="app-menu__label"> Modelyears</span></a></li>
<li><a class="treeview-item" href="<?= base_url() ?>cylinders/manage"><img src="<?php echo base_url(); ?>pictures/cylinders-icon.png" height="42" width="42"><span class="app-menu__label"> Cylinders</span></a></li>
<li><a class="treeview-item" href="<?= base_url() ?>fueltypes/manage"><img src="<?php echo base_url(); ?>pictures/fuel-icon.png" height="42" width="42"><span class="app-menu__label"> Fueltypes</span></a></li>
<li><a class="treeview-item" href="<?= base_url() ?>transmissions/manage"><img src="<?php echo base_url(); ?>pictures/transmission-icon.png" height="42" width="42"><span class="app-menu__label"> Transmission</span></a></li>
</ul>
</li>



        
      </ul>
    </aside>
    <main class="app-content">
     
        
<?php 
if (isset($view_file))
{
  $this->load->view($view_module.'/'.$view_file);
}

?>
    </main>
    <!-- Essential javascripts for application to work-->
   
   <script>
    (function () {
  "use strict";

  var treeviewMenu = $('.app-menu');

  // Toggle Sidebar
  $('[data-toggle="sidebar"]').click(function(event) {
    event.preventDefault();
    $('.app').toggleClass('sidenav-toggled');
  });

  // Activate sidebar treeview toggle
  $("[data-toggle='treeview']").click(function(event) {
    event.preventDefault();
    if(!$(this).parent().hasClass('is-expanded')) {
      treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
    }
    $(this).parent().toggleClass('is-expanded');
  });

  // Set initial active toggle
  $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

  //Activate bootstrip tooltips
  $("[data-toggle='tooltip']").tooltip();

})();
</script>
 
  </body>
</html>