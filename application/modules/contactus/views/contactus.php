<link href="<?php echo base_url(); ?>dist/css/main.css" rel="stylesheet">
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

            
.jumbotron {
background: #358CCE;
color: #FFF;
border-radius: 0px;
}
.jumbotron-sm { padding-top: 24px;
padding-bottom: 24px; }
.jumbotron small {
color: #FFF;
}
.h1 small {
font-size: 24px;
}

.map-responsive{
    overflow:hidden;
    padding-bottom:35.25%;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}

.name {
display : none;
}

div.jsvm_cm-contact-form-wrap {
    border: 1px solid #D4D4D4;
    position: relative;
    top: -100px;
    padding: 0px;
    background: white;
    width: 78%;
}

div.jsvm_cm-contact-form-wrap div.jsvm_cm-form-title-wrap {
    border-bottom: 1px solid #D4D4D4;
    background: #f7f7f7;
    

}

</style>


<div class="row">

<div class="col-md-12">

<div style="clear: both;">



<div class="jumbotron jumbotron-sm">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="h1">
                    Contact Formulier <small></small></h1>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="well well-sm">
            <?php 
            echo validation_errors("<p style='color: red;'>", "</p?");
            ?>
                
            </div>
        </div>
       
    </div>
    <br>
    <div class="row">
        <div class="col-md-12">
        <div class="map-responsive">
        <?= $map ?>
        </div>
        </div>
      
        </div>
        
    
</div>

</div>
</div>
</div>


<div class ="row">
    <div class="col-md-8">
 <form>
            <legend><span class="glyphicon glyphicon-globe"></span> Contact</legend>
            <address>
              <img src="<?php echo base_url();?>dist/images/cu_loc.png">  
                   <?= $address ?>
                <br>
                <br>
                <img src="<?php echo base_url();?>dist/images/cu_phone.png">   <?= $phonenum ?>
            </address>
            <address>
                
                <img src="<?php echo base_url();?>dist/images/cu_mail.png"><a href="mailto:#">   <?= $email ?></a>
            </address>
            </form>
</div>
<div class="col-md-4">

   <form action="<?= $form_location ?>" method="post">
                <div class="row">
                    <div class="jsvm_cm-contact-form-wrap">
                        <div class ="jsvm_cm-form-title-wrap" style="padding: 10px;">
                            <h2>Contact formulier</h2>
                        </div>
                        <div class="form-group"  style="padding: 10px;">
                            <label for="name">
                                Naam</label><div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span>
                                </span>
                            <input type="text" name="yourname" value="<?= $yourname ?>" class="form-control" id="name" placeholder="Uw naam" required="required" />
                        </div>
                        </div>
                        
                         <div class="form-group name"  style="padding: 10px;">
                            <label for="name">
                                Name</label><div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span>
                                </span>
                            <input type="text" name="firstname" class="form-control" id="name" placeholder="Enter name"  />
                        </div>
                        </div>
                        
                        <div class="form-group"  style="padding: 10px;">
                            <label for="email">
                                Uw Email</label>
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="email" name="youremail" value="<?= $youremail ?>" class="form-control" id="email" placeholder="Uw email adres" required="required" /></div>
                        </div>
                       
                    
                        <div class="form-group"  style="padding: 10px;">
                            <label for="name">
                                Uw bericht</label>
                            <textarea name="message" id="message" class="form-control" rows="4" cols="25" required="required"
                                placeholder="Uw bericht"><?= $message ?></textarea>
                        </div>
                    
                        <button type="submit" name="submit" value="Submit" class="btn btn-primary" id="btnContactUs" >
                            Verstuur</button>
                     </form>
                </div>
            </div>
               
    </div>
</div>