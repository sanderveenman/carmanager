<?php 
$this->load->module('timedate');
foreach ($query->result() as $row)
{
	$date_published = $this->timedate->get_nice_date($row->date_published, 'mini');
	$article_preview = word_limiter($row->page_content, 50);
	$picture = $row->picture;
	$thumbnail_name = str_replace('.', '_thumb.', $picture);
	$thumbail_path = base_url().'pictures/'.$thumbnail_name;
	$article_url = base_url()."blog/article/".$row->page_url;
?>


<div class="row" style="margin-bottom: 12px;">
<div class="col-md-3"><img src="<?= $thumbail_path ?>" alt="..." class="img-responsive img-thumbnail"></div>
<div class="col-md-9">
<h4><a href="<?= $article_url ?>"><?= $row->page_title ?></a></h4>
<p style="font-size: 0.7em"><?= $row->author ?> -
<span style="color: #999;"><?= $date_published ?></span>
</p>
<p><?= $article_preview ?></p>

</div>

</div>
<?php 
}
?>