<?php
$arr=get_defined_vars();
//var_dump($arr);
$segment  = $this->uri->segment(3);
//echo $segment;
//var_dump($arr);
//echo "update_id = ".$update_id;
?>
 <style type="text/css">

.sort {
  list-style: none;
  border: 1px #ccc solid;
  color: #333;
  padding: 10px;
  margin-bottom: 4px;
  width: 200px;

}
</style>


 <script src="<?php echo base_url(); ?>dist/js/jquery-ui.js"></script>
 <script src="<?php echo base_url(); ?>dist/js/jquery-sortable-photos.js"></script>
 <?php
//$arr = get_defined_vars();
//var_dump($arr);
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
    vehicle type:<br />
       <select name="vehicletype" id="vehicletype" class="form-control input-lg">
    <option value="">Select vehicle type</option>
    <?php
    foreach($vehicletypes as $row)
    {
     echo '<option value="'.$row->id.'"';
      if($row->id==$vehicletypeid){
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

</div><!--end second colom-->


 </div><!--end row-->



 
        </div>

<div class="tile">
<?php
if (!isset($update_id)){

$max_per_row = 5;
$item_count = 0;

echo "<table>";
echo "<tr>";
foreach ($caroptions as $row)
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
      echo $row->title;
      echo ']';
      echo '" value ="1" type="checkbox"';
      //if($row->id==1)
      //{
      //  echo " checked";
     //}
      echo '>';
      echo $row->title;
    echo '</label>';
  echo '</div>';
   echo '</td>';
    $item_count++;
}
echo "</tr>";
echo "</table>";
} else {


$max_per_row = 5;
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
      echo $row->option_name;
      echo ']';
      echo '" value ="1" type="checkbox"';
      foreach($caroptions as $key => $value){
      if($row->option_name==$key)
      {
        echo " checked";
     }
   }
      echo '>';
      echo $row->option_name;
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
 



 <br />
  <div class="container">
  
   <div align="right">
    <input type="file" name="multiple_files" id="multiple_files" multiple />
    <span class="text-muted">Only .jpg, png, .gif file allowed</span>
    <span id="error_multiple_files"></span>
   </div>
   <br />
   <ul id="sortable">
    
   </ul>
  </div>


<div id="imageModal" class="modal fade" role="dialog">
 <div class="modal-dialog">
  <div class="modal-content">
   <form method="POST" id="edit_image_form">
    <div class="modal-header">
     <button type="button" class="close" data-dismiss="modal">&times;</button>
     <h4 class="modal-title">Edit Image Details</h4>
    </div>
    <div class="modal-body">
     <div class="form-group">
      <label>Image Name</label>
      <input type="text" name="image_name" id="image_name" class="form-control" />
     </div>
     <div class="form-group">
      <label>Image Description</label>
      <input type="text" name="image_description" id="image_description" class="form-control" />
     </div>
    </div>
    <div class="modal-footer">
     <input type="hidden" name="image_id" id="image_id" value="" />
     <input type="submit" name="submit" class="btn btn-info" value="Edit" />
     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    </div>
   </form>
  </div>
 </div>
</div>



<script>
$(document).ready(function(){
 load_image_data();
 function load_image_data()
 {
  var link=window.location.href;
  var arr=link.split('/');
  var test = "<?php echo $segment; ?>";
 
 var cap = '<?php echo base_url(); ?>vehicles/fetch_vehicle_images('+test+')';
 console.log(cap);


  $.ajax({
   url:'<?php echo base_url(); ?>vehicles/fetch_vehicle_images/'+test ,
   method:"POST",

   success:function(data)
   {
    $('#sortable').html(data);
   }
  });
 } 
 $('#multiple_files').change(function(){
  var error_images = '';
  var form_data = new FormData();
  var files = $('#multiple_files')[0].files;
  if(files.length > 10)
  {
   error_images += 'You can not select more than 10 files';
  }
  else
  {
   for(var i=0; i<files.length; i++)
   {
    var name = document.getElementById("multiple_files").files[i].name;
    var ext = name.split('.').pop().toLowerCase();
    if(jQuery.inArray(ext, ['gif','png','jpg','jpeg']) == -1) 
    {
     error_images += '<p>Invalid '+i+' File</p>';
    }
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("multiple_files").files[i]);
    var f = document.getElementById("multiple_files").files[i];
    var fsize = f.size||f.fileSize;
    if(fsize > 2000000)
    {
     error_images += '<p>' + i + ' File Size is very big</p>';
    }
    else
    {
     form_data.append("file[]", document.getElementById('multiple_files').files[i]);
    }
   }
  }
  if(error_images == '')
  {
   $.ajax({
    url:"upload.php",
    method:"POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    beforeSend:function(){
     $('#error_multiple_files').html('<br /><label class="text-primary">Uploading...</label>');
    },   
    success:function(data)
    {
     $('#error_multiple_files').html('<br /><label class="text-success">Uploaded</label>');
     load_image_data();
    }
   });
  }
  else
  {
   $('#multiple_files').val('');
   $('#error_multiple_files').html("<span class='text-danger'>"+error_images+"</span>");
   return false;
  }
 });  
 $(document).on('click', '.edit', function(){
  var image_id = $(this).attr("id");
  $.ajax({
   url:"edit.php",
   method:"post",
   data:{image_id:image_id},
   dataType:"json",
   success:function(data)
   {
    $('#imageModal').modal('show');
    $('#image_id').val(image_id);
    $('#image_name').val(data.image_name);
    $('#image_description').val(data.image_description);
   }
  });
 }); 
 $(document).on('click', '.delete', function(){
  var image_id = $(this).attr("id");
  var image_name = $(this).data("image_name");
  if(confirm("Are you sure you want to remove it?"))
  {
   $.ajax({
    url:"delete.php",
    method:"POST",
    data:{image_id:image_id, image_name:image_name},
    success:function(data)
    {
     load_image_data();
     alert("Image removed");
    }
   });
  }
 }); 
 $('#edit_image_form').on('submit', function(event){
  event.preventDefault();
  if($('#image_name').val() == '')
  {
   alert("Enter Image Name");
  }
  else
  {
   $.ajax({
    url:"update.php",
    method:"POST",
    data:$('#edit_image_form').serialize(),
    success:function(data)
    {
     $('#imageModal').modal('hide');
     load_image_data();
     alert('Image Details updated');
    }
   });
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





<script>
$(document).ready(function(){

  $( "#sortable" ).sortable({
    stop: function(event, ui) {saveChanges();}
});
  $( "#sortable" ).disableSelection();
  
});

  function saveChanges()
  {
    var $num = $('#sortable > li').length;
    $dataString = "number=" +$num;
    for($x=1;$x<=$num;$x++)
    {
      var $catid = $('#sortable li:nth-child('+$x+') ').attr('id');
      $dataString = $dataString + "&order"+$x+"="+$catid;
    }     $.ajax({
      type : "POST",
      url : "../vehicles/sort",
      data : $dataString
    });
    return false;
  }
</script>