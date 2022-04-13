
<style>
	div.jsvm_cm-main-wrap h2 span.jsvm_cm-news-heading-wrap {
    border-bottom: 1px solid #004274;
    color: #0a0a0a;
}

div.jsvm_cm-main-wrap .jsvm_cm-news-text-wrap {
    color: #171717;
}
div.jsvm_cm-news-list-wrap div.thumbnail {
    box-shadow: 0px 3px 0px #cfcfcf;
}

div.jsvm_cm-news-list-wrap div.thumbnail div.jsvm_cm-news-date-coment .jsvm_cm-news-date-box {
    background: #004274;
    color: #FFFFFF;
}

div.jsvm_cm-news-list-wrap div.thumbnail div.jsvm_cm-news-date-coment {
    border-top: 5px solid #004274;
}

div.jsvm_cm-news-list-wrap div.thumbnail div.caption h5 span.jsvm_cm-news-heading {
    border-bottom: 1px solid #004274;
}

div.jsvm_cm-news-list-wrap div.thumbnail a.btn.btn-primary {
    background: #004274;
    color: #FFFFFF;
    border: 0px;
}
</style>

<div class="row" style="border-top: 1px solid; margin-top: 50px;">
        <div class="col-sm-12 col-md-12 jsvm_nopadding" style="padding-top: 50px;">
            <h2 class="jsvm_cm-news-and-rumors">
                <span class="jsvm_cm-news-heading-wrap headingtest">NIEUWS</span>
            </h2>
            <h5 class="jsvm_cm-news-text-wrap text-muted"></h5>
        </div>
</div>



<div class="row" style="padding-bottom: 50px;">
  <div class="col-md-4 jsvm_cm-news-list-wrap">
   <div class="thumbnail">
        <img class ="img-responsive" src="<?php echo $test0['rssimage']->url?>">
        	<div class="caption jsvm_cm-news-date-coment">
            <h4 class="jsvm_cm-news-date-box">
                14 mrt
            </h4>
        	</div>
       
        <div class="caption">
            <h5>
                <?php 
					echo $test0['rsstitle'];
				?>
                <span class="jsvm_cm-news-heading"><?php //echo $rsstitle; ?></span> 
                
            </h5>
            	<div class="jsvm_bigfont" style="margin-bottom: 50px;">
                <?php echo $test0['rssdesc']; ?>
            	</div>
            <p><a title="Lees meer.." href="<?php echo $test0['rssurl']; ?>" class="btn btn-primary" role="button">Lees Meer...</a></p>
        </div>

    </div>
</div>


 <div class="col-md-4 jsvm_cm-news-list-wrap">
   <div class="thumbnail">
        <img class ="img-responsive" src="<?php echo $test1['rssimage']->url?>">
      <div class="caption jsvm_cm-news-date-coment">
            <h4 class="jsvm_cm-news-date-box">
                14 mrt
            </h4>
        
       </div>
        <div class="caption">
            <h5>
                 <?php 
					echo $test1['rsstitle'];
				?>
                <span class="jsvm_cm-news-heading"><?php //echo $rsstitle; ?></span> 
                
            </h5>
            <div class="jsvm_bigfont" style="margin-bottom: 50px;">
                 <?php echo $test1['rssdesc']; ?>
            </div>
            <p><a title="Lees meer.." href="<?php echo $test1['rssurl']; ?>" class="btn btn-primary" role="button">Lees Meer...</a></p>
        </div>

    </div>
</div>


  <div class="col-md-4 jsvm_cm-news-list-wrap">
   <div class="thumbnail">
        <img class ="img-responsive" src="<?php echo $test2['rssimage']->url?>">
        <div class="caption jsvm_cm-news-date-coment">
            <h4 class="jsvm_cm-news-date-box">
                14 mrt
            </h4>
        
        </div>
        <div class="caption">
            <h5>
                 <?php 
					echo $test2['rsstitle'];
				?>
                <span class="jsvm_cm-news-heading"><?php //echo $rsstitle; ?></span> 
                
            </h5>
            <div class="jsvm_bigfont" style="margin-bottom: 50px;">
               <?php echo $test2['rssdesc']; ?>
            </div>
            <p><a title="Lees meer.." href="<?php echo $test2['rssurl']; ?>" class="btn btn-primary" role="button">Lees Meer...</a></p>
        </div>

    </div>
</div>

</div><!--end row-->

