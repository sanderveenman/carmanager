<div data-role="navbar">
<ul>
<?php foreach($top_nav_btns as $value)
{
	if ($value['btn_target_url']== $current_url)
	{
		$top_nav_css = ' class="ui-btn-active"';
	} else 
	{
		$top_nav_css = '';
	}

?>

<li><a href="<?php echo $value['btn_target_url']; ?>" rel="external" data-icon="<?= $value['icon'] ?>" <?= $top_nav_css ?>><?= $value['text']?></a></li>
<?php 
}
?>

</ul>
</div><!-- /navbar -->

