<style type="text/css">

.sort {
	list-style: none;
	border: 1px #ccc solid;
	color: #333;
	width: 150px;
	padding: 10px;
	margin-bottom: 4px;

}
</style>


<ul id="sortlist">
 <?php 
 $max_per_row = 4;
$item_count = 0;
$this->load->module('mdl_fileupload');

foreach ($query as $image)
		{

			 if ($item_count == $max_per_row)
    {
        echo "</tr><tr>";
        $item_count = 0;
    }
		?>
<td>
	<li class="sort" id="<?= $image->id ?>"><i class="icon-sort"></i><?= $image->file_name ?>
	
	<?php
	
	echo '<img src="';
    echo base_url()."uploads/files/";
    echo $image->file_name;
    echo  '"class="img-responsive" style="height: 150px""/>';
			

	$sub_cat_url= base_url('store_categories/manage/'.$image->file_name);
$item_count++;
	}
?>

</li>
	</td>
<?php 
	
?>
</ul>
