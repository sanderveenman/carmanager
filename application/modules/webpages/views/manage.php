<div class="app-title">
        <div>
		  <h1><i class="fa fa-dashboard"></i>Content Management System</h1>
		  
          <p>Manage your homepage</p>

		</div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        </ul>
      </div>


<?php
if (isset($flash))
{
	echo $flash;
}

?>




<?php 
$create_page_url = base_url()."webpages/create";

?>

<p style="margin-top: 30px">
<a href="<?php echo $create_page_url?>"><button type="button" class="btn btn-primary">Add New page</button></a>
</p>



			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white file"></i><span class="break"></span>CMS pages overview</h2>
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
								  <th>page Title</th>
								  <th>Page URL</th>
								  <th>page_description</th>
								  <th>Headline</th>
								  <th>Actions</th>
							  </tr>
						  </thead>   
						  <tbody>
						  <?php foreach ($query->result() as $row)
						  		{
						  			$edit_page_url = base_url()."webpages/create/".$row->id;
						  			$view_page_url = base_url().$row->page_url;
						  			
						  		?>
						  
							<tr>
								<td><?= $row->page_title ?></td>
								<td class="center"><?= $view_page_url ?></td>
								<td class="center"><?= $row->page_description ?></td>
								<td class="center"><?= $row->page_headline ?></td>
								<td class="center">
									<a class="btn btn-success" href="<?= $view_page_url ?>">
										<i class="halflings-icon white eye-open"></i>  
									</a>
									<a class="btn btn-info" href="<?= $edit_page_url ?>">
										<i class="halflings-icon white edit"></i>  
									</a>
									
									<?php 
									if ($row->id > 2)
									{
										
									?>
									<a class="btn btn-danger" href="<?= base_url()."webpages/deleteconf/".$row->id;?>">
										<i class="halflings-icon white trash"></i> 
									</a>
								</td>
							</tr>
							<?php
							 }
						  		}
							?>
					
						  </tbody>
					  </table>            
					</div>
				</div><!--/span-->
			
			</div><!--/row-->