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
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Update Form</h2>
						<div class="box-icon">
							
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<div class="box-content">
					<?php 
					$form_location= base_url()."store_accounts/update_pwd/".$update_id;
					
					?>
					
						<form class="form-horizontal" method="post" action="<?php echo $form_location; ?>">
						 <fieldset>
<div class="control-group"> <label class="control-label" for="typeahead">Password</label> <div class="controls"> <input type="password" class="span6" name="pword"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Confirm Password</label> <div class="controls"> <input type="password" class="span6" name="repeat_pword"> </div> </div>

							  <button type="submit" class="btn btn-primary" name="submit" value="Submit">Update Password</button>
							  <button type="submit" class="btn" name="submit" value="Cancel">Cancel</button>
							</div>
						  </fieldset>
						</form>   
					</div>
				</div><!--/span-->
			</div><!--/row-->

	