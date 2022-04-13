<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="<?php echo base_url(); ?>dist/js/jquery-ui.js"></script>

			<div class="app-title">
        <div>
		  <h1><i class="fa fa-car"></i> Manage Vehicles</h1>
		  <!--
          <p>A free and open source Bootstrap 4 admin template</p>
-->
		</div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        </ul>
      </div>

<style type="text/css">
    body {
		font-family: 'Varela Round', sans-serif;
	}
	.modal-confirm {		
		color: #636363;
		width: 400px;
	}
	.modal-confirm .modal-content {
		padding: 20px;
		border-radius: 5px;
		border: none;
        text-align: center;
		font-size: 14px;
	}
	.modal-confirm .modal-header {
		border-bottom: none;   
        position: relative;
	}
	.modal-confirm h4 {
		text-align: center;
		font-size: 26px;
		margin: 30px 0 -10px;
	}
	
	.modal-confirm .icon-box {
		width: 80px;
		height: 80px;
		margin: 0 auto;
		border-radius: 50%;
		z-index: 9;
		text-align: center;
		border: 3px solid #f15e5e;
	}
	.modal-confirm .icon-box i {
		color: #f15e5e;
		font-size: 46px;
		display: inline-block;
		margin-top: 13px;
	}
    
</style>





<?php
if (isset($flash))
{
	echo $flash;
}

?>

<?php 
$create_account_url = base_url()."vehicles/create";
//$arr = get_defined_vars();
//var_dump($query->result());
//var_dump($arr);
?>

<p style="margin-top: 30px">
<a href="<?php echo $create_account_url?>"><button type="button" class="btn btn-primary">Add New Vehicle</button></a>
</p>



<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white user"></i><span class="break"></span></h2>
						<div class="box-icon">
							<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<div class="box-content">


<div class="form-group">
								<label class="control-label" for="selectError3">Choose vehicles to show</label>
								<div class="controls">
								  <select id="testid" class="form-control">
								  	<option value="*">Make a selection</option>
									<option value="ACTIVE">Active vehicles</option>
									<option value="expected">Expected vehicles</option>
									<option value="sold">Sold vehicles</option>
									
								  </select>
								</div>
							  </div>

				</div>
			</div>
</div>


 

			<div class = "col-md-12">
				<div class="tile">
					<div class="table responsive">
							
					<table id ="selectedvehicles" class="table">
						  <thead>
							  <tr>
							  	<th></th>
								  <th>Chassisnumber</th>
								  <th>make</th>
								  <th>model</th>
								  <th>Status</th>
								 
							  </tr>
						  </thead>   
						  <tbody>
						  <?php foreach ($query->result() as $row)
						  		{
						  			$delete_url = base_url()."vehicles/deleteconf/".$row->vehicleid;
						  			$edit_item_url = base_url()."vehicles/edit/".$row->vehicleid;
						  			$administration_url = base_url()."debitcredit/manage/".$row->vehicleid;
						  			$change_statusactive_url = base_url()."vehicles/updatestatustoactive/".$row->vehicleid;
						  			$change_statussold_url = base_url()."vehicles/updatestatustosold/".$row->vehicleid;
						  	
						  				$status_desc = "Active";
						  		?>
						 
							<tr>
								<td><center><img style="height: 75px; border: 1px solid #ddd; border-radius: 4px; padding: 5px;" src = "<?= base_url()?>uploads/files/<?=$row->file_name?>"></center></td>
								<td><?= $row->chassisnumber ?></td>
								<td class="center"><?= $row->make ?></td>
								<td class="center"><?= $row->model ?></td>
								<td class="center"><?= $row->hasstatus ?></td>
								<td class="center">
									<a class="btn btn-danger" href="<?= $delete_url ?>">
										<i class="fa fa-trash-o"></i>  
									</a>
									<a class="btn btn-info" href="<?= $edit_item_url ?>">
										<i class="fa fa-pencil-square-o"></i>  
									</a>
									<a class="btn btn-secondary"  href="<?= $administration_url ?>">
										<img src="<?php echo base_url(); ?>pictures/administration-icon.png" height="30" width="30" title="administration"/>
									</a>
									<?php
									if ($row->hasstatus == "EXPECTED"){
										?>
										<a href="<?= $change_statusactive_url ?>">
										<img src="<?php echo base_url(); ?>pictures/key.png" height="30" width="30" title="Set to Active"/>
									</a>
									<?php
									}
									
									if ($row->hasstatus == "ACTIVE"){
										?>
										<a href="<?= $change_statussold_url ?>">
										<img src="<?php echo base_url(); ?>pictures/Sold.png" height="30" width="30" title="administration"/>
									</a>
									<?php
									}
									?>
								</td>
							</tr>
							<?php
							 }
							?>
					
						  </tbody>
					  </table> 
				
				
				</div>
							</div>
							
							
			</div>

			<script>
$(document).ready(function(){
 $('#testid').change(function(){
  var getvehicles_id = $('#testid').val();
  if(getvehicles_id != '')

  {

   $.ajax({
    url:"<?php echo base_url(); ?>vehicles/fetch_selected_vehicles",
    method:"POST",
    data:{hasstatus:getvehicles_id},
    success:function(data)
    {
    	//console.log(data);
     $('#selectedvehicles').html(data);
    }
   });
  }
  else
  {
   $('#selectedvehicles').html('<option value="">Select State</option>');
   
  }
 });
});
</script>