<h1><?php echo $headline;?></h1>
<?php 
echo validation_errors("<p style='color: red;'>", "</p>");?>

<?php 
if (isset($flash))
{
	echo $flash;
}


if (is_numeric($update_id)){ ?>
	


<div class="row-fluid sortable">
	<div class="box span12">
		<div class="box-header" data-original-title>
			<h2><i class="halflings-icon white edit"></i><span class="break"></span>Account options</h2>
			<div class="box-icon">
							
				<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
				<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
			</div>
		</div>
		<div class="box-content">

<a href="<?= base_url() ?>store_accounts/update_pwd/<?= $update_id?>"><button type="button" class="btn btn-primary">Update password</button></a>
<a href="<?= base_url() ?>store_accounts/deleteconf/<?= $update_id?>"><button type="button" class="btn btn-danger">Delete Account</button></a>

			</div>
		</div><!--/span-->
	</div><!--/row-->
<?php
}
?>

<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Account Details</h2>
						<div class="box-icon">
							
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<div class="box-content">
					<?php 
					$form_location= base_url()."store_accounts/create/".$update_id;
					
					?>
					
						<form class="form-horizontal" method="post" action="<?php echo $form_location; ?>">
						 <fieldset>
<div class="control-group"> <label class="control-label" for="typeahead">Username</label> <div class="controls"> <input type="text" class="span6" name="username" value="<?= $username ?>"> </div> </div>

<div class="control-group"> <label class="control-label" for="typeahead">First Name</label> <div class="controls"> <input type="text" class="span6" name="firstname" value="<?= $firstname ?>"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Last Name</label> <div class="controls"> <input type="text" class="span6" name="lastname" value="<?= $lastname ?>"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Date of birth</label> <div class="controls"> <input type="text" class="span6" name="dateofbirth" value="<?= $dateofbirth ?>"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Address 1</label> <div class="controls"> <input type="text" class="span6" name="address1" value="<?= $address1 ?>"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Address 2</label> <div class="controls"> <input type="text" class="span6" name="address2" value="<?= $address2 ?>"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Town</label> <div class="controls"> <input type="text" class="span6" name="town" value="<?= $town ?>"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Country</label> <div class="controls"> <input type="text" class="span6" name="country" value="<?= $country ?>"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Postcode</label> <div class="controls"> <input type="text" class="span6" name="postcode" value="<?= $postcode ?>"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Tel number</label> <div class="controls"> <input type="text" class="span6" name="telnum" value="<?= $telnum ?>"> </div> </div>
<div class="control-group"> <label class="control-label" for="typeahead">Email</label> <div class="controls"> <input type="text" class="span6" name="email" value="<?= $email ?>"> </div> </div>

							  <button type="submit" class="btn btn-primary" name="submit" value="Submit">Save changes</button>
							  <button type="submit" class="btn" name="submit" value="Cancel">Cancel</button>
							</div>
						  </fieldset>
						</form>   
					</div>
				</div><!--/span-->
			</div><!--/row-->

	