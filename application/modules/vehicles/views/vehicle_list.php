
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">

    <title>Grid Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="../csstest/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="<?php echo base_url();?>dist/css/grid.css" rel="stylesheet">

<link rel='stylesheet' href='<?php echo base_url();?>dist/css/tablet.css?ver=4.9.8' type='text/css' media='(min-width: 601px) and (max-width: 782px)' />

<link rel='stylesheet' href='<?php echo base_url();?>dist/css/mobile.css?ver=4.9.8' type='text/css' media='(min-width: 401px) and (max-width: 600px)' />

<link rel='stylesheet' href='<?php echo base_url();?>dist/css/oldmobile.css?ver=4.9.8' type='text/css' media='(max-width: 400px)' />
  
    <style id='car-manager-main-inline-css' type='text/css'>
 
    
    a{color: #004274; text-decoration: none;}
    a:hover{color: #23282d; text-decoration: none;}
    .thumbnail{border:1px solid #D4D4D4;}

  
    /*body*/
    
    
    /*footer*/
    footer{font-family: Lato;font-style: ;font-weight: ;font-size: 13px;line-height: 20px;text-align: ; }
    /*headings*/
    h1{font-family: Basic;font-style: ;font-weight: 400;font-size: 35px;line-height: 35px;text-align: ; }
    h2{font-family: Basic;font-style: ;font-weight: 400;font-size: 27px;line-height: 27px;text-align: ; }
    h3{font-family: Basic;font-style: ;font-weight: 400;font-size: 24px;line-height: 30px;text-align: ; }
    h4{font-family: Lato;font-style: ;font-weight: 400;font-size: 21px;line-height: 30px;text-align: ;}
    h5{font-family: Lato;font-style: ;font-weight: 400;font-size: 18px;line-height: 25px;text-align: ;}
    h6{font-family: Lato;font-style: ;font-weight: 700;font-size: 15px;line-height: 30px;text-align: ;}
            .navbar a.navbar-brand{
                padding-top: 0;
                padding-left: 0;
                padding-right: 0;
                padding-bottom: 0;
                width: 55%;
                height: 55%;

            }
            .navbar a.navbar-brand img{
                max-width: 55%;
                max-height: 55%;
                
            }
        
/*price box*/

div.price-box-wrp {
    background-color: rgba( 35,40,45, .8);
}

/*vehicle list*/
div.veh-list-wrapper div.veh-list-wrap {}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap {
    border-left: 1px solid #D4D4D4;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-top-wrap {
    border-bottom: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-top-wrap .veh-list-top-title {
    color: #004274;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-middle-wrap div.veh-list-middle-val {
    color: #464646;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-middle-wrap div.veh-list-middle-val span.veh-list-middle-tit {
    color: #171717;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-bottom-wrap span.veh-list-bottom-optn-wrap span.veh-list-bottom-optn {
    color: #171717;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-top-wrap .veh-list-top-price {
    border-left: 1px solid #D4D4D4;
    background: #004274;
    ;
    color: #FFFFFF;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-middle-wrap div.veh-list-middle-img {
    border: 1px solid #D4D4D4;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-bottom-wrap {
    border-top: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-bottom-wrap div.veh-list-bottom-btn-wrap div.veh-list-bottom-btns a.veh-list-bottom-btn {
    border: 1px solid #D4D4D4;
    background: #FFFFFF;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-bottom-wrap div.veh-list-bottom-btn-wrap div.veh-list-bottom-btns a.veh-list-bottom-btn.selected {
    border: 1px solid #004274;
}


@media screen and (max-width:782px) {
  .adslot_1 { 
    display:inline-block;
    width: 728px ;
    height: 90px ;
  } 
  .jsvm-ad-wrap{width:782px;}
}
@media screen and (max-width:600px) {
  .adslot_1 { display:inline-block;width: 468px ; height: 60px ; }
  .jsvm-ad-wrap{width:600px !important;}
}

@media screen and (max-width:400px) {
  .adslot_1 { display:inline-block;width: 320px ; height: 100px; }
  .jsvm-ad-wrap{width:400px !important; }
  
}

</style>

  </head>

  <body>
  	<div class ="container-fluid veh-list-wrapper" style="margin-top: 150px;"><!-- veh list wrapper-->
<?php
//$arr = get_defined_vars();
//print_r($arr);
  	foreach ($vehicles->result()as $row){
    //var_dump($row);
    ?>


  
<div class = "col-xs-12 col-md-12 veh-list-wrap"><!-- veh list wrap-->
  <div class ="thumbnail veh-list"><!-- thumbnail veh-list-->
  <div class ="veh-list-img-wrap hover-pointer"><!--veh-list img wrap-->
    <?php

    if ($row->hasstatus == "SOLD") { ?>
      <div class="veh-sold-wrap">
        <span class="veh-sold">
        verkocht
        </span>
      </div>
<?php
  }        
  if ($row->hasstatus == "EXPECTED") { ?>
    <div class="veh-sold-wrap">
     <span class="veh-expected">
      verwacht
    </span>
  </div>
  <?php
    }
  ?>
    <img class="img-responsive veh-list-img" src="<?php echo base_url()."uploads/files/".$row->file_name; ?>">  
  <span class="sl-veh-left-txt"> bekijk <?php echo $row->imagecount?> fotos </span>

</div><!--veh-list img wrap-->

  <div class="veh-list-data-wrap "><!--data wrap-->
  <a href="<?php echo base_url();?>vehicles/vehicle_details/<?php echo $row->vehicleid; ?>">
    <div class="veh-list-top-wrap">
      <h4 class="veh-list-top-title"><?php echo $row->make." ".$row->model; ?></h4>
      <h4 class="veh-list-top-price"> € <?php echo $row->sellprice; ?></h4>
    </div>

    <div class="veh-list-middle-wrap">
      <div class="veh-list-middle-val biglineheight">
        <span class="veh-list-middle-tit"> Uitvoering: </span>
        <span class="veh-list-middle-val"><?php echo $row->modelline; ?></span></span>
      </div>
      <div class="veh-list-middle-val biglineheight">
        <span class="veh-list-middle-tit"> bouwjaar: </span>
        <span class="veh-list-middle-val"><?php echo $row->year; ?></span>
      </div>
      <div class="veh-list-middle-val biglineheight">
        <span class="veh-list-middle-tit"> Vermogen: </span>
        <span class="veh-list-middle-val"> xxx</span>
      </div>
    </div>
  </a>
<div class="veh-list-bottom-wrap bigfont">
  <div class="veh-list-bottom-optn-wrap">
    
    <span class="veh-list-bottom-optn">
      <img src="<?php echo base_url()?>pictures/milage-icon.png" class="img-responsives"><?php echo " ".$row->mileage; ?> km
    </span>
    <span class="veh-list-bottom-optn">
      <img src="<?php echo base_url()?>pictures/transmission-icon.png" class="img-responsives"> <?php echo $row->transmission; ?>
    </span>
    <span class="veh-list-bottom-optn">
      <img src="<?php echo base_url()?>pictures/fuel-icon.png" class="img-responsives"> <?php echo $row->fueltype; ?>
    </span>
</div>
  </div><!--data wrap-->
</div><!-- thumbnail veh-list-->
</div><!-- veh list wrap-->
</div><!-- veh list wrapper-->



<?php
}
?>
</div>
  </body>
  </html>