<h1>Update News items (blog)</h1>


<?php
if (isset($flash))
{
	echo $flash;
}

?>




<?php 
$create_page_url = base_url()."blog/create";

?>

<p style="margin-top: 30px">
<a href="<?php echo $create_page_url?>"><button type="button" class="btn btn-primary">Add News article</button></a>
</p>



			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white file"></i><span class="break"></span>News articles overview</h2>
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
								  <th>Picture</th>
								  <th>Date Published</th>
								  <th>Author</th>
								  <th>blog URL</th>
								  <th>Blog Headline</th>
								  <th>Actions</th>
							  </tr>
						  </thead>   
						  <tbody>
						  <?php 
						  
						  $this->load->module('timedate');
						  foreach ($query->result() as $row)
						  		{
						  			$edit_page_url = base_url()."blog/create/".$row->id;
						  			$view_page_url = base_url().$row->page_url;
						  			$date_published = $this->timedate->get_nice_date($row->date_published, 'mini');
						  			$picture = $row->picture;
						  			$thumbnail_name = str_replace('.', '_thumb.', $picture);
						  			$thumbail_path = base_url().'pictures/'.$thumbnail_name;
						  			
						  		?>
							<tr>
								<td><img src="<?= $thumbail_path ?>"></td>
								<td class="center"><?= $date_published ?></td>
								<td class="center"><?= $row->author ?></td>
								<td class="center"><?= $view_page_url ?></td>
								<td class="center"><?= $row->page_headline ?></td>
								<td class="center">
									<a class="btn btn-success" href="<?= $view_page_url ?>">
										<i class="halflings-icon white eye-open"></i>  
									</a>
									<a class="btn btn-info" href="<?= $edit_page_url ?>">
										<i class="halflings-icon white edit"></i>  
									</a>
									<a class="btn btn-danger" href="<?= base_url()."blog/deleteconf/".$row->id;?>">
										<i class="halflings-icon white trash"></i> 
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