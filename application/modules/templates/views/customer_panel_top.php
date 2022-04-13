<?php 
function _attempt_make_active($link_text)
{
	if((current_url()==base_url()."youraccount/welcome") AND $link_text=="Your messages")
	{
		echo ' class="active"';
	}
}

?>


<ul class="nav nav-tabs" style="margin-top: 24px;">
  <li role="presentation"<?= _attempt_make_active('Your messages') ?>><a href="<?= base_url() ?>youraccount/welcome">Your messages</a></li>
  <li role="presentation"<?= _attempt_make_active('Your orders') ?>><a href="<?= base_url() ?>yourorders/browse"">your orders</a></li>
  <li role="presentation"<?= _attempt_make_active('Update your profile') ?>><a href="#">Update your profile</a></li>
  <li role="presentation"><a href="<?= base_url() ?>youraccount/logout">logout</a></li>
</ul>