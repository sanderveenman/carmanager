<style type="text/css">

.sort {
	list-style: none;
	border: 1px #ccc solid;
	color: #333;
	padding: 10px;
	margin-bottom: 4px;

}
</style>


<ul id="sortlist">
<?php
$this->load->module('homepage_blocks');
$this->load->module('homepage_offers');

foreach ($query->result() as $row)
{
	$view_item_url = base_url()."homepage_blocks/view/".$row->id;
	$edit_item_url = base_url()."homepage_blocks/create/".$row->id;
	$block_title = $row->block_title;
	?>
	<li class="sort" id="<?= $row->id ?>"><i class="icon-sort"></i><?= $block_title ?>
 
		<?php
		$num_items = $this->homepage_offers->count_where('block_id', $row->id);
	
				
				if ($num_items==1)
				{
					$entity = "homepage offer";
			} else {
				$entity = "homepage offers";
			}

			$sub_cat_url= base_url('store_categories/manage/'.$row->id);
			?>
		<a class="btn btn-default" href="<?= base_url() ?>">
		<i class="halflings-icon white eye-open"></i>
		<?php 
		echo $num_items." ".$entity;
		?>
		</a>
		<a class="btn btn-success" href="<?= $edit_item_url ?>">
		<i class="halflings-icon white edit"></i>
		</a>

</li>
	
<?php 
	}
?>
</ul>