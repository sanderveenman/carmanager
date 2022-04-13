
<?php
$this->load->module('homepage_offers');
$this->load->module('site_settings');
$item_segments= $this->site_settings->_get_item_segments();

foreach ($query->result() as $row)
{
	$block_id = $row->id;
	$num_items_on_block = $this->homepage_offers->count_where('block_id', $block_id);

if($num_items_on_block>0)
{
	?>
<h3 class="ui-bar ui-bar-a ui-corner-all"><?= $row->block_title ?></h3>
  <div class="panel-heading">
 
		<?php 
		$block_data['block_id'] = $block_id;
		$block_data['item_segments'] = $item_segments;
		$this->homepage_offers->_draw_offers($block_data, TRUE);
}			
}?>