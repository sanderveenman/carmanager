<h1>Manage makes</h1>


<?php
if (isset($flash))
{
	echo $flash;
}

?>




<?php 
$create_account_url = base_url()."makes/create";

?>

<p style="margin-top: 30px">
<a href="<?php echo $create_account_url?>"><button type="button" class="btn btn-primary">Add New make</button></a>
</p>



			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white user"></i><span class="break"></span>Models</h2>
						<div class="box-icon">
							<a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
						  <thead>
							  <tr>
								  <th>id</th>
								  <th>title</th>
								 
								 
							  </tr>
						  </thead>   
						  <tbody>
						  <?php foreach ($query->result() as $row)
						  		{
						  			
						  			$edit_item_url = base_url()."makes/create/".$row->id;
						  			$edit_model_url = base_url()."models/listmodels/".$row->id;
						  		//	if ($status == 1)
						  		//	{
						  		//		$status_label = "success";
						  				$status_desc = "Active";
						  		//	} else 
						  		//	{
						  			//	$status_label = "default";
						  			//	$status_desc = "Not Active";
						  			//}
						  			
						  		?>
						 
							<tr>

								<td class="center"><?= $row->id ?></td>
								<td class="center"><?= $row->title ?></td>
								<td class="center">
									
									
									<a class="btn btn-default" href="<?= $edit_model_url ?>"> model & makes
										<i class="fa fa-pencil-square-o"></i> 
									</a>
									<a class="btn btn-info" href="<?= $edit_item_url ?>">
										edit
										<i class="fa fa-pencil-square-o"></i>  
									</a>
								</td>
							</tr>
							<?php
							 }
							?>
					
						  </tbody>
					  </table>            
					</div>
				</div><!--/span-->
			</div><!--/row-->