<h1>Manage Users</h1>


<?php
if (isset($flash))
{
	echo $flash;
}

?>




<?php 
$create_account_url = base_url()."store_accounts/create";

?>

<p style="margin-top: 30px">
<a href="<?php echo $create_account_url?>"><button type="button" class="btn btn-primary">Add New account</button></a>
</p>



			<div class="row-fluid sortable">		
				<div class="box span10">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white user"></i><span class="break"></span>Custumor Accounts</h2>
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
								  <th>Lastname</th>
								  <th>Firstname</th>
								  <th>Username</th>
								  <th>Email</th>
								  <th>Date Created</th>
								  <th>Actions</th>
							  </tr>
						  </thead>   
						  <tbody>
						  <?php foreach ($query->result() as $row)
						  		{
						  			
						  			$edit_item_url = base_url()."store_accounts/create/".$row->id;
						  			
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
						  <?php 
						  $format = "F j, Y, g:i a";
						  $date = date($format, $row->date_made)
						  
						  ?>
							<tr>
								<td><?= $row->lastname ?></td>
								<td class="center"><?= $row->firstname ?></td>
								<td class="center"><?= $row->username ?></td>
								<td class="center"><?= $row->email ?></td>
								<td class="center"><?= $date ?></td>
								<td class="center">
									<a class="btn btn-success" href="#">
										<i class="btn-icon-only icon-facetime-video"></i>  
									</a>
									<a class="btn btn-info" href="<?= $edit_item_url ?>">
										<i class="btn-icon-only icon-edit"></i>  
									</a>
									<a class="btn btn-default" href="#">
										<i class="btn-icon-only icon-envelope"></i> 
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