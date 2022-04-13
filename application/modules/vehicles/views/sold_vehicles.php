<link rel="stylesheet"  href="<?php echo base_url();?>dist/css/bootstrap.min.css">
<style>
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
          </style>
<script src="<?php echo base_url();?>dist/js/jquery-3.2.1.min.js"></script>
<script src="<?php echo base_url();?>dist/js/bootstrap.min.js"></script>
<?php
$arr = get_defined_vars();
//var_dump($arr);
$a=0;
?>
<div class="container" style="padding-top: 200px;">
</div>
<div class="col-md-12">
<h3>Bent u op zoek naar een auto, maar staat het gewenste merk of model niet tussen de occasions?
Dan kunt u bij mij ook een zoekopdracht plaatsen.</h3>
</div>

<div class="container" >
<h2 style="padding-bottom: 30px; padding-top:30px;">verkocht</h2>
<div id="carousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
  <?php foreach ($query->result() as $row){?>
                <li data-target="#mycarousel" data-slide-to="<?php echo $a++;?>"></li>
            <?php } ?>
            </ol>
  </ol>
  <div class="carousel-inner">
  <div class="col-sm-9">
      <?php
      foreach ($query->result() as $row){?>
    <div id="myDIV"class="carousel-item">
      <img class="d-block w-100" src="<?= base_url()?>uploads/files/<?php echo $row->file_name;?>" alt="First slide">
    </div>
    <?php
      }
      ?>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
</div>
</div>
<div class="container" style="height: 50px;">
  
</div>
<script>
$(document).ready(function(){
    var element1 = document.getElementById("myDIV");
    console.log( "ready!" );
    element1.classList.add("active");
});
</script>
<script>
    $('.carousel').carousel({
  interval: 5000
})
</script>