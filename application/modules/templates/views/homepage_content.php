
<!-- Example row of columns -->
<div class="row">
<div class= "col-md-12">

	<h2><span class="headingtest">Nieuw</span> BINNEN</h2>
	<?php 
	//echo Modules::run('blog/_draw_feed_homepage');
	?>
</div>
</div><!-- end row-->
<div class="row">
<div class="col-md-12" style="padding-top: 30px;">
	<?php
	echo Modules::run('vehicles/draw_new_vehicles');
	?>
</div>
</div><!--end row-->
<div class="row">
<div class="col-md-12">
	<?php
	//echo Modules::run('RSS/_draw_rss_feed');
	?>
</div>
	</div><!--end row-->
