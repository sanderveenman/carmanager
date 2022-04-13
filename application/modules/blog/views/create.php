<h1><?php echo $headline;?></h1>
<?php 
echo validation_errors("<p style='color: red;'>", "</p>");?>

<?php 
if (isset($flash))
{
	echo $flash;
}
?>



<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>news article Details</h2>
						<div class="box-icon">
							
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<div class="box-content">
					<?php 
					$form_location= base_url()."blog/create/".$update_id;
					
					?>
					
						<form class="form-horizontal" method="post" action="<?php echo $form_location; ?>">
						  <fieldset>
							<div class="control-group">
							  <label class="control-label" for="typeahead">Page Title </label>
							  <div class="controls">
								<input type="text" class="span6" name="page_title" value="<?php echo $page_title;?>">
								<p></p>
							  </div>
							</div>
							
							<div class="control-group">
							  <label class="control-label" for="typeahead">headline </label>
							  <div class="controls">
								<input type="text" class="span6" name="page_headline" value="<?php echo $page_headline;?>">
								<p></p>
							  </div>
							</div>
							
								<div class="control-group">
							  <label class="control-label" for="typeahead">Date Published </label>
							  <div class="controls">
								<input type="text" class="input-xlarge datepicker" name="date_published" value="<?php echo $date_published;?>">
								<p></p>
							  </div>
							</div>
							
							<div class="control-group">
							  <label class="control-label" for="typeahead">Author </label>
							  <div class="controls">
								<input type="text" class="span6" name="author" value="<?php echo $author;?>">
								<p></p>
							  </div>
							</div>
							       
							  <div class="control-group">
							  <label class="control-label" for="typeahead">Keywords </label>
							  <div class="controls">
								<textarea rows="3" class="span6" name="page_keywords" ><?php echo $page_keywords;?></textarea>
								<p></p>
							  </div>
							</div>
							
							 <div class="control-group">
							  <label class="control-label" for="typeahead">Description</label>
							  <div class="controls">
							  <textarea rows="3" class="span6" name="page_description" ><?php echo $page_description;?></textarea>
								<p></p>
							  </div>
							</div>
							
						
				
							<div class="control-group hidden-phone">
							  <label class="control-label" for="textarea2">page content</label>
							  <div class="controls">
								<textarea class="cleditor" id="textarea2" rows="3" name="page_content"><?php echo $page_content;?></textarea>
							  </div>
							</div>
<?php
if ($picture=="")
{
?>						
<a href="<?= base_url() ?>blog/upload_image/<?= $update_id?>"><button type="button" class="btn btn-primary">Upload Item Image</button></a>
<?php 
} else {
?>
<a href="<?= base_url() ?>blog/delete_image/<?= $update_id?>"><button type="button" class="btn btn-danger">Delete Item Image</button></a>
<?php 
}
?>
							<div class="form-actions">
							  <button type="submit" class="btn btn-primary" name="submit" value="Submit">Save changes</button>
							  <button type="submit" class="btn" name="submit" value="Cancel">Cancel</button>
							</div>

						  </fieldset>
						</form>   
					</div>
				</div><!--/span-->
			</div><!--/row-->
	<?php 
	
	if ($picture!="")
	{
	?>		
			
			<div class="row-fluid sortable">
	<div class="box span12">
		<div class="box-header" data-original-title>
			<h2><i class="halflings-icon white edit"></i><span class="break"></span>Image preview</h2>
			<div class="box-icon">
							
				<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
				<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
			</div>
		</div>
		<div class="box-content">
					
<img src="<?= base_url()?>pictures/<?= $picture ?>">
			</div>
		</div><!--/span-->
	</div><!--/row-->
	<?php
 }
 ?>
	
