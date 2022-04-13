
<?php 
//echo validation_errors("<p style='color: red;'>", "</p>");
 
if (isset($flash))
{
	echo $flash;
}

if(!isset($data)){
	$data = '';
}

$form_location= base_url()."debitcredit/create";	
?>
					
					<div class="app-title">
        <div>
		  <h1><i class="fa fa-dashboard"></i> <?php echo $headline;?></h1>
		  <!--
          <p>A free and open source Bootstrap 4 admin template</p>
-->
		</div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        </ul>
      </div>

<div class="row">
    <div class="col-md-12">
        <div class="tile">
        	<div class="row">
            	<div class="col-lg-6">
                <form action="<?php echo $form_location; ?>" method="post" enctype="multipart/form-data">
				<fieldset>

<div class="form-group"> 
	<label for="typeahead">Date</label>
	<input class="form-control" id="demoDate" type="text" placeholder="Select Date">
</div>

<div class="form-group"> 
	<label for="typeahead">Description</label>
		<input type="text" class="form-control" name="description">
</div>

<div class="form-group"> 
	<label for="typeahead">Amount</label>
	<div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text">€</span></div>
		<input type="text" class="form-control" name="amount">
		 </div>
		 </div>

<div class="form-group"> 
	<label for="typeahead">Tax</label>
	<div class="input-group">
	<div class="input-group-prepend"><span class="input-group-text">€</span></div>
		<input type="text" class="form-control" name="tax">
		 </div>
</div>

<div class="form-group">
    <label for="exampleSelect1">Debit/Credit</label>
    <select class="form-control" id="exampleSelect1" name="sort">
	<option>Please select</option>  
	<option>Debit</option>
    <option>Credit</option>
    </select>
</div>

<div class="form-group">
    <label for="exampleInputFile">Choose invoice</label>
        <input class="form-control-file" name="files[]" id="exampleInputFile" type="file" aria-describedby="fileHelp" multiple/><small class="form-text text-muted" id="fileHelp">Upload an image of your invoice</small>
</div>
				  
<div class="form-group"> 
	<label for="typeahead"></label> 
		<input type="hidden" class="span6" name="vehicleid" value="<?= $test ?>">
</div>
			
	
</div>  
</div>

<div class="tile-footer">
			<button type="submit" class="btn btn-primary" name="submit" value="Submit">Save changes</button>
			<button type="submit" class="btn" name="submit" value="Cancel">Cancel</button>

			<?php
				if(isset($update_id)){
				echo form_hidden('update_id', $update_id);
				}
			?>
				</fieldset>
	</form>
		</div>
	</div>
</div>
</div>

<script type="text/javascript" src="<?php echo base_url()?>dist/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="<?php echo base_url()?>dist/js/plugins/bootstrap-datepicker.min.js"></script>
<script type="text/javascript" src="<?php echo base_url()?>dist/js/plugins/select2.min.js"></script>
<script type="text/javascript">
  
      
    $('#demoDate').datepicker({
    format: "dd/mm/yyyy",
    autoclose: true,
    todayHighlight: true
	});
	 
    
    </script>