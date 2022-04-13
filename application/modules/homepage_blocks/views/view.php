<h1><?= $block_title ?></h1>
<p><?= $showing_statement ?>
<?php 
echo $pagination;

//
//<nav aria-label="Page navigation">
//  <ul class="pagination">
//    <li>
//      <a href="#" aria-label="Previous">
//        <span aria-hidden="true">&laquo;</span>
//      </a>
//    </li>
//    <li><a href="#">1</a></li>
//    <li><a href="#">2</a></li>
//    <li><a href="#">3</a></li>
//    <li><a href="#">4</a></li>
//    <li><a href="#">5</a></li>
//    <li>
//      <a href="#" aria-label="Next">
//        <span aria-hidden="true">&raquo;</span>
//      </a>
//    </li>
//  </ul>
//</nav>
//
?>


	<div class="row">
<?php foreach($query->result() as $row)
{
	$small_pic = $row->small_pic;
	$small_pic__path = base_url().'small_pics/'.$small_pic;
	$was_price= $row->was_price;
	$item_page = base_url().$item_segments.$row->item_url;
?>	
<a href="<?= $item_page ?>">
<div class="col-md-2 img-thumbnail" style="margin-bottom: 25px; min-height: 300px;"><img src="<?= $small_pic__path ?>" title="<?= $row->item_title ?>" class="img-responsive">
<h6><?= $row->item_title ?></h6>
<div style="clear: both; color: red; font-weight: bold;">&euro; <?= $row->item_price ?> 
<?php if($was_price > 0)
{ ?>
<span style="font-weight: normal; color: #999; text-decoration: line-through;"><?= $was_price?></span>
<?php }?>
</div>


</div>
</a>
<?php 
}
?>
</div>
<?= $pagination ?>




