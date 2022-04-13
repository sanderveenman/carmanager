<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="<?php echo base_url(); ?>dist/js/jquery-ui.js"></script>
 <script src="<?php echo base_url(); ?>dist/js/jquery-sortable-photos.js"></script>
<h1><?php echo $headline;?></h1>
<?php 
echo validation_errors("<p style='color: red;'>", "</p>");?>

<?php 
if (isset($flash))
{
	echo $flash;
}

$arr = get_defined_vars();
//  var_dump($arr);
//print_r($caroptions);
?>
<?php 
    $form_location = base_url()."vehicles/create/".$update_id;
    ?>
     <form action="<?php echo $form_location; ?>" method="post" enctype="multipart/form-data">

        <div class="box span12">
         
<div class=row><!--row-->
<div class ="col-6"> <!--first colom-->
  <?php 
  if (!isset($update_id)){
  ?> 
 

<div class="form-group">
    <label for="exampleSelect1">Merk:</label>
    <select class="form-control" name="make" id="make">
      <option value="">Selecteer Merk</option>
  <?php
    foreach($makes as $row)
    {
     echo '<option value="'.$row->id.'">'.$row->title.'</option>';
    }
    ?>
    </select>
</div>


      <div class="form-group">
       <label for="exampleSelect1">Model:</label>
   <select name="models" id="models" class="form-control input-lg">
    <option value="">Selecteer Model</option>
   </select>
  </div>


  <div class="form-group">
    <label for="exampleSelect1">Model Year:</label>
       <select name="modelyears" id="modelyears" class="form-control input-lg">
    <option value="">Selecteer Bouwjaar</option>
    <?php
    foreach($modelyears as $row)
    {
     echo '<option value="'.$row->id.'">'.$row->title.'</option>';
      //echo $row;
    }
    ?>
    
   </select>
      </div>

      <div class="form-group">
    <label for="exampleSelect1">Vehicle Type:</label>
       <select name="vehicletypes" id="vehicletypes" class="form-control input-lg">
    <option value="">Kies voertuig type</option>
    <?php
    foreach($vehicletypes as $row)
    {
     echo '<option value="'.$row->id.'">'.$row->title.'</option>';
      //echo $row;
    }
    ?>
    
   </select>
      </div>

<?php } else { ?>


  <div class="form-group">
    Make:<br />
       <select name="make" id="make" class="form-control input-lg">
    <option value="">Select Make</option>
    <?php
    foreach($makes as $row)
    {
     echo '<option value="'.$row->id.'"';
      if($row->id==$makeid){
      echo 'selected = "selected"';
     }
     echo '>'.$row->title;
    
     echo '</option>';
    }
    ?>
   </select>
 </div>

   <div class="form-group">
        Model:<br />
   <select name="models" id="models" class="form-control input-lg">
    <option value="">Select Model</option>
   </select>
  </div>


<div class="form-group">
    Model year:<br />
       <select name="modelyears" id="modelyears" class="form-control input-lg">
    <option value="">Select Model Year</option>
    <?php
    foreach($modelyears as $row)
    {
     echo '<option value="'.$row->id.'"';
      if($row->id==$makeid){
      echo 'selected = "selected"';
     }
     echo '>'.$row->title;
    
     echo '</option>';
    }
    ?>
    
   </select>
      </div>

<div class="form-group">
    Vehicle type<br />
       <select name="modelyears" id="modelyears" class="form-control input-lg">
    <option value="">Select Model Year</option>
    <?php
    foreach($modelyears as $row)
    {
     echo '<option value="'.$row->id.'"';
      if($row->id==$makeid){
      echo 'selected = "selected"';
     }
     echo '>'.$row->title;
    
     echo '</option>';
    }
    ?>
    
   </select>
      </div>




<?php
}
?>

     <div class="form-group">
        Model Line ( e.g: 1.2 16V trendline) <br />
       <input type="text" class="form-control" name="modelline" value="<?= $modelline ?>">

      </div>

<?php 
  if (!isset($update_id)){
  ?> 


      <div class="form-group">
        Brandstof:<br />
       <select name="fueltypes" id="fueltypes" class="form-control input-lg">
    <option value="">Selecteer Brandstof</option>
    <?php
    foreach($fueltypes as $row)
    {
     echo '<option value="'.$row->id.'">'.$row->title.'</option>';
      //echo $row;
    }
    ?>
  
   </select>
      </div>

       <div class="form-group">
        Transmissie:<br />
       <select name="transmissions" id="transmissions" class="form-control input-lg">
    <option value="">Selecteer transmissie type</option>
    <?php
    foreach($transmissions as $row)
    {
     echo '<option value="'.$row->id.'">'.$row->title.'</option>';
      //echo $row;
    }
    ?>
    
   </select>
      </div>

      <div class="form-group">
        aantal cilinders<br />
       <select name="cylinders" id="cylinders" class="form-control input-lg">
    <option value="">Selecteer aantal cilinders</option>
    <?php
    foreach($cylinders as $row)
    {
     echo '<option value="'.$row->id.'">'.$row->title.'</option>';
      //echo $row;
    }
    ?>
    
   </select>

      </div>
<?php
} else { ?>

 <div class="form-group">
        Brandstof:<br />
       <select name="fueltypes" id="fueltypes" class="form-control input-lg">
    <option value="">Selecteer Brandstof</option>
    <?php
     foreach($fueltypes as $row)
    {
     echo '<option value="'.$row->id.'"';
      if($row->id==$fueltypeid){
      echo 'selected = "selected"';
     }
     echo '>'.$row->title;
    
     echo '</option>';
    }
    ?>
  
   </select>
      </div>

       <div class="form-group">
        Transmissie:<br />
       <select name="transmissions" id="transmissions" class="form-control input-lg">
    <option value="">Selecteer transmissie type</option>
    <?php
    foreach($transmissionlist as $row)
    {
     echo '<option value="'.$row->id.'"';
      if($row->id==$transmissionid){
      echo 'selected = "selected"';
     }
     echo '>'.$row->title;
    
     echo '</option>';
    }
    ?>
   </select>
      </div>

      <div class="form-group">
        Aantal cilinders<br />
       <select name="cylinders" id="cylinders" class="form-control input-lg">
    <option value="">Selecteer aantal cilinders</option>
    <?php
     foreach($cylinderlist as $row)
    {
     echo '<option value="'.$row->id.'"';
      if($row->id==$makeid){
      echo 'selected = "selected"';
     }
     echo '>'.$row->title;
    
     echo '</option>';
    }
    ?>
   </select>

      </div>

<?php
}
?>


<div class="form-group">
        Chassisnummer<br />
       <input type="text" class="form-control" name="chassisnumber" value="<?= $chassisnumber ?>">

      </div>

</div><!--end first colom-->
<div class="col-6"><!--second colom-->

   <div class="form-group">
        <label for="exampleSelect1">Inkoop prijs:</label>
       <input type="text" class="form-control" name="purchaseprice" value="<?= $purchaseprice ?>">
    </div>

<div class="form-group">
        <label for="exampleSelect1">Marge voertuig:</label>
       <select name="ismargin" id="ismargin" class="form-control input-lg" value="<?= $ismargin ?>">
    <option value="">Select Margin</option>
    <option value="No">Nee</option>
    <option value="Yes">Ja</option>
   </select>
</div>


      
<div class="form-group">
        <label for="exampleSelect1">Verkoop prijs:</label>
       <input type="text" class="form-control" name="sellprice" value="<?= $sellprice ?>">
</div>






     <div class="form-group">
        Kilometerstand<br />
       <input type="text" class="form-control" name="mileage" value="<?= $mileage ?>">

      </div>

      <div class="form-group">
        Kleur Exterieur<br />
       <input type="text" class="form-control" name="exteriourcolour" value="<?= $exteriourcolour ?>">

      </div>

      <div class="form-group">
        Kleur interieur<br />
       <input type="text" class="form-control" name="interiorcolour" value="<?= $interiorcolour ?>">

      </div>
      <div class="form-group">
        Motorinhoud<br />
       <input type="text" class="form-control" name="enginevolume" value="<?= $enginevolume ?>">

      </div>


              <div class="control-group hidden-phone">
                <label for="textarea2">Omschrijving</label>
                <textarea class="form-control" id="description" rows="3" name="description"><?php echo $description;?></textarea>
                </div>

<div class="form-group">
        Status: <br />
       <select name="hasstatus" id="hasstatus" class="form-control input-lg" value="<?= $hasstatus ?>">
    <option value="">Selecteer Status</option>
    <option value="EXPECTED">Expected</option>
    <option value="ACTIVE">Active</option>
    <option value="sold">Sold</option>
   </select>

      </div>
<div class="tile">
      <div class="form-group">
        <label>Selecteer voertuig afbeeldingen</label>
        <input type="file" name="files[]" multiple/>
    </div>
  </div>
</div><!--end second colom-->


 </div><!--end row-->



 
        </div>

<div class="tile">


<?php
if (!isset($update_id)){
//echo " no update id"; die();
$max_per_row = 3;
$item_count = 0;

echo "<table>";
echo "<tr>";
foreach ($caroptions as $key => $value) {
   echo '<dl style="margin-bottom: 1em;">';
 echo "<dt>$key</dt>";
 foreach ($value as $row ) {
  ?>
 <div class="checkbox">
    <label>
      <input name="options[<?= $row ?>]" value ="1" type="checkbox">
      <?=  $row ?>
    </label>
  </div> 
<?php }
?>
 </dl>
<?php
}
}
 else {


$max_per_row = 3;
$item_count = 0;

echo "<table>";
echo "<tr>";
foreach ($carlist as $row)
{
    if ($item_count == $max_per_row)
    {
        echo "</tr><tr>";
        $item_count = 0;
    }
    echo '<td>';
      echo '<div class="checkbox">';
    echo '<label>';
      echo '<input name="options[';
      echo $row->field_title;
      echo ']';
      echo '" value ="1" type="checkbox"';
      foreach($caroptions as $key => $value){
      if($row->field_title==$key)
      {
        echo " checked";
     }
   }
      echo '>';
      echo $row->field_title;
    echo '</label>';
  echo '</div>';
  echo '</td>';
    $item_count++;
}
echo "</tr>";
echo "</table>";


}

?>


</div>




        <button type="submit" class="btn btn-primary" name="submit" value="Submit">Save changes</button>
        <button type="submit" class="btn" name="submit" value="Cancel">Cancel</button>
 
    </form>
 

   
        
      <div class="my-container">

    
   
 <?php
 if (isset($files)){
    foreach($files as $row)
    {
      echo '<div class="my-item">';
     echo '<img src="';
     echo base_url()."uploads/files/";
     echo $row->file_name;
     echo '"class="img-responsive" style="height: 75px width: 75px">';
     echo '';
     echo '</div>';

    }
  }
    ?>         

 

</div>



	<script>
$(document).ready(function(){
 $('#make').change(function(){
  var makes_id = $('#make').val();
  if(makes_id != '')

  {

   $.ajax({
    url:"<?php echo base_url(); ?>models/fetch_models",
    method:"POST",
    data:{make_id:makes_id},
    success:function(data)
    {
     $('#models').html(data);
    }
   });
  }
  else
  {
   $('#models').html('<option value="">Select State</option>');
   
  }
 });
});
</script>
<script>
  $('.my-container').sortablePhotos({
  selector: '> .my-item',
  sortable: true,
  padding: 2
});
</script>