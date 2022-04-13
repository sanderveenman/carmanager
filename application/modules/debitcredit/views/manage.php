
<div class="app-title">
        <div>
		  <h1><i class="fa fa-balance-scale"></i>Invoices for <?php echo $car[0]->make ; ?> <?php echo $car[0]->model; ?>, Chassisnr: <?php echo $car[0]->chassisnumber;?></h1>
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
$form_location = base_url().'debitcredit/delete/';
?>



<script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<a href="#my_modal" data-toggle="modal" data-book-id="500">Open Modal</a>

<div class="modal fade" id="my_modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          <h4 class="modal-title">Confirm Delete Action</h4>
      </div>
      <div class="modal-body">
      	<form class="form-horizontal" action ="<?= $form_location ?>" method="post" >
        <p>Are you sure you want to delete this invoice?</p>
        <input type="hidden" name="bookId" value=""/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</form>
</div>



<?php
if (isset($flash))
{
	echo $flash;
}

//$arr = get_defined_vars();
//var_dump($arr);
$test = $this->uri->segment(3);
$create_account_url = base_url()."debitcredit/create/".$test;
?>


			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon  white folder-open"></i><span class="break"></span>Invoices</h2>
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
								  <th>date</th>
								  <th>description</th>
								  <th>Amount</th>
								  <th>Tax</th>
								  <th>debit/credit</th>
							  </tr>
						  </thead>   
						  <tbody>
						  <?php foreach ($query->result() as $row)
						  		{
						  			
						  			$edit_item_url = base_url()."debitcredit/create/".$row->id;
						  			$delete_item_url = base_url()."debitcredit/delete/".$row->id
						  			;
						  			$status_desc = "Active";
						  		?>
					
							<tr>
								<td class="center"><?= $row->date ?></td>
								<td class="center"><?= $row->description ?></td>
								<td class="center"><?= $row->amount ?></td>
								<td class="center"><?= $row->tax ?></td>
								<td class="center"><?= $row->sort ?></td>
								<td class="center">
								
									<a class="btn btn-info" href="<?= $edit_item_url ?>">
										<i class="btn-icon-only fa fa-pencil-square-o"></i>  
									</a>
									<a class="btn btn-danger trigger-btn" href="#my_modal" data-toggle="modal" data-book-id="<?php echo $row->id;?>">
										<i class="fa fa-trash-o"></i> 
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
									<a href="<?php echo $create_account_url?>"><button type="button" class="btn btn-primary">Add New invoice</button></a>
</p>
			</div><!--/row-->


<?php
$total = 0;
//echo 'inkoop : '.$car[0]->sellprice;
foreach ($query->result() as $row){

//	echo '<div class="cart-row">';
// 	echo '<div class="span8">';
// 	echo '<h2>'.$row->description. '</h2>';
//	echo '</div>';
// 	echo '<div class="span2">';
// 	echo '<h2 class="form-signin-heading">'.$row->amount.'</h2>';
// 	echo '</div>';
// 	echo '<div class="span2">';
// 	echo '<img src="';
// 	echo base_url().'pictures/pdf-icon.png" height="30" width="30">';
// 	echo '<img src="';
// 	echo base_url().'pictures/edit-icon.png" height="30" width="30">';
// 	echo '<img src="';
// 	echo base_url().'pictures/delete-icon.png" height="30" width="30">';
// 	echo '</div>';
// 	echo '</div>';
	$total = $total + $row->amount;
 }


 //echo '<div class="cart-row">';
 //echo '<div class="span8">';
 //echo '<h2></h2>';
 //echo '</div>';
 //echo '<div class="span4">';
 //echo '<h2 class="form-signin-heading">___________ +</h2>';
 //echo '</div>';
 //echo '</div>';
 //echo '<div class="cart-row">';
 //echo '<div class="span8">';
 //echo '<h2>Totaal kosten</h2>';
 //echo '</div>';
 //echo '<div class="span4">';
 //echo '<h2 class="form-signin-heading">'.$total.'</h2>';
 //echo '</div>';
 //echo '</div>';
 ?>
<?php

$total_cost = $total + $car[0]->purchaseprice;
$profit = $car[0]->sellprice-$total_cost;
$profitmargin = ($profit/$car[0]->sellprice)*100;

?>

			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon  white folder-open"></i><span class="break"></span>Vehicle Profit margin</h2>
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
								  <th>inkoop</th>
								  <th>kosten</th>
								  <th>verkoop</th>
								  <th>winst</th>
								  <th>winstmarge</th>
							  </tr>
						  </thead>   
						  <tbody>
							<tr>
								<td class="center"><?= $car[0]->purchaseprice ?></td>
								<td class="center"><?= $total ?></td>
								<td class="center"><?= $car[0]->sellprice ?></td>
								<td class="center"><?= $profit ?></td>
								<td class="center"><?= $profitmargin ?>%</td>
							</tr>
						  </tbody>
					  </table>            
					</div>

				</div>
							
							</p>
			</div>

		<script>
$('#my_modal').on('show.bs.modal', function(e) {
    var bookId = $(e.relatedTarget).data('book-id');
    $(e.currentTarget).find('input[name="bookId"]').val(bookId);
});
</script>