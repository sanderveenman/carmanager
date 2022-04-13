<div class="app-title">
        <div>
		  <h1><i class="fa fa-pencil-square-o"></i> <?php echo $headline;?></h1>
		  <!--
          <p>A free and open source Bootstrap 4 admin template</p>
-->
		</div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        </ul>
      </div>
<?php 
echo validation_errors("<p style='color: red;'>", "</p>");?>

<?php 
if (isset($flash))
{
	echo $flash;
}
?>



					<?php 
					$form_location= base_url()."webpages/create/".$update_id;
					
					?>
					
				

						 <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="row">
              <div class="col-lg-6">
							<form action="<?php echo $form_location; ?>" method="post" enctype="multipart/form-data">
<fieldset>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input class="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email"><small class="form-text text-muted" id="emailHelp">We'll never share your email with anyone else.</small>
									</div>

<div class="from-group">
							  <label class="control-label" for="typeahead">Page Title </label>
								<input class ="form-control"type="text" name="page_title" value="<?php echo $page_title;?>">
								<p></p>
							  </div>

	<div class="form-group">
							  <label class="control-label" for="typeahead">headline </label>
								<input type="text" class="form-control" name="page_headline" value="<?php echo $page_headline;?>">
								<p></p>
								</div>
								
								<div class="form-group">
							  <label for="typeahead">Keywords </label>
							 
								<textarea rows="3" class="form-control" name="page_keywords" ><?php echo $page_keywords;?></textarea>
								<p></p>
							  </div>
					
								<div class="form-group">
							  <label for="typeahead">Description</label>
							  <textarea class="form-control" rows="3" name="page_description" ><?php echo $page_description;?></textarea>
								
								<p></p>
							  </div>
							

							<div class="control-group hidden-phone">
							  <label for="textarea2">page content</label>
								<textarea class="form-control" id="textarea2" rows="3" name="page_content"><?php echo $page_content;?></textarea>
								</div>
								
								<div class="title-footer">
							  <button type="submit" class="btn btn-primary" name="submit" value="Submit">Save changes</button>
							  <button type="submit" class="btn" name="submit" value="Cancel">Cancel</button>
							</div>
</fieldset>
</form>
</div>
</div>
</div>
</div>
</div>
	
