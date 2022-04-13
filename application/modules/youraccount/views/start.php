<?php 
$form_location = base_url().'youraccount/submit';

?>

<h1>Create Account</h1>
<?php  
echo validation_errors("<p style ='color: red;'>", "</p>");
?>
<form class="form-horizontal" method="post" action ="<?= $form_location ?>">
<fieldset>

<!-- Form Name -->
<legend>Please enter your details to create an account</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Username</label>  
  <div class="col-md-4">
  <input id="textinput" name="username" type="text" value="<?= $username ?>" placeholder="Enter an Username" class="form-control input-md" required="">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">First name</label>  
  <div class="col-md-4">
  <input id="textinput" name="firstname" type="text" value="<?= $firstname ?>" placeholder="Firstnamer" class="form-control input-md">
  </div>
</div>



<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Last name</label>  
  <div class="col-md-4">
  <input id="textinput" name="lastname" type="text" value="<?= $lastname ?>" placeholder="Last Name" class="form-control input-md">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Company</label>  
  <div class="col-md-4">
  <input id="textinput" name="company" type="text" value="<?= $company ?>" placeholder="Company" class="form-control input-md" required="">
  </div>
</div>


<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">address line 1</label>  
  <div class="col-md-4">
  <input id="textinput" name="address1" type="text" value="<?= $address1 ?>" placeholder="address line 1" class="form-control input-md" required="">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">address line 2</label>  
  <div class="col-md-4">
  <input id="textinput" name="address2" type="text" value="<?= $address2 ?>" placeholder="address line 2" class="form-control input-md" required="">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">town</label>  
  <div class="col-md-4">
  <input id="textinput" name="town" type="text" value="<?= $town ?>" placeholder="Town" class="form-control input-md" required="">
  </div>
</div>


<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Country</label>  
  <div class="col-md-4">
  <input id="textinput" name="country" type="text" value="<?= $country ?>" placeholder="Country" class="form-control input-md" required="">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Postcode</label>  
  <div class="col-md-4">
  <input id="textinput" name="postcode" type="text" value="<?= $postcode ?>" placeholder="postcode" class="form-control input-md" required="">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">E-mail</label>  
  <div class="col-md-4">
  <input id="textinput" name="email" type="text" value="<?= $email ?>" placeholder="E-mail Address" class="form-control input-md">

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">telnum</label>  
  <div class="col-md-4">
  <input id="textinput" name="telnum" type="text" value="<?= $telnum ?>" placeholder="telnum Number" class="form-control input-md" required="">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">pword</label>  
  <div class="col-md-4">
  <input id="textinput" name="pword" type="password" placeholder="pword" class="form-control input-md">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Confirm pword</label>  
  <div class="col-md-4">
  <input id="textinput" name="confirmpwd" type="password" placeholder="Confirm pword" class="form-control input-md" required="">
  </div>
</div>


<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="singlebutton">Create Account?</label>
  <div class="col-md-4">
    <button id="singlebutton" name="submit" value="Submit" class="btn btn-primary">Yes</button>
  </div>
</div>
</fieldset>
</form>
