<?php
//$first_bit = $this->uri->segment(1);
$first_bit = "fileupload";
$third_bit = $this->uri->segment(3);

if($third_bit!="")
{
	//we have 3 segments on the url so....
	$start_of_target_url = "../../";
} else 
{
	// we probalbly have 2 bits on the url , so...
$start_of_target_url = "../";
}
?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script type="text/javascript">

$(document).ready(function(){

	$( "#sortlist" ).sortable({
		stop: function(event, ui) {saveChanges();}
});
	$( "#sortlist" ).disableSelection();
	
});

	function saveChanges()
	{
		var $num = $('#sortlist > li').size();
		$dataString = "number=" +$num;
		for($x=1;$x<=$num;$x++)
		{
			var $catid = $('#sortlist li:nth-child('+$x+') ').attr('id');
			$dataString = $dataString + "&order"+$x+"="+$catid;
			console.log($dataString);
			$test = "<?php echo $start_of_target_url.$first_bit; ?>/sort";
			console.log($test);
		}			$.ajax({
			type : "POST",
			url : "<?php echo $start_of_target_url.$first_bit; ?>/sort",
			data : $dataString
		});
		return false;
	}
			
</script>