<?php 
$arr = get_defined_vars();
//var_dump($query[0]);
var_dump($arr);
//var_dump($images->result()[0]);
//echo $images->result()[0]->file_name;
?>
<!DOCTYPE html>
<html lang="nl">
<head>
		<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
	<meta name="description" content="">
	<meta name="author"      content="title auto&#8217;s">
  			<link rel="shortcut icon" href="https://titleautos.nl/wp-content/themes/car-manager/images/car-manager.ico">
  	<title>Voertuiginformatie &#8211; title auto&#8217;s</title>
<style type="text/css">

    div#jsvehiclemanager-header-main-wrapper{background:#4d89dc;border-bottom: 5px solid #4d4d4d;box-shadow: 0px 4px 1px #d4d4d5;}
    div#jsvehiclemanager-header-main-wrapper a.headerlinks{color:#ffffff;}
    div#jsvehiclemanager-header-main-wrapper a.headerlinks:hover{background-color: #4d4d4d}
    div#jsvehiclemanager-wrapper div.control-pannel-header{border-bottom:2px solid #4d4d4d;}
    div#jsvehiclemanager-wrapper div.control-pannel-header span.heading{color:#373435;}
    div#jsvehiclemanager-wrapper div.control-pannel-header a.jsvehiclemanager-cmp-goto-compare{color:#4d89dc;border:1px solid #4d89dc;background:#fafafa;}
    div#jsvehiclemanager-wrapper div.control-pannel-header a.jsvehiclemanager-vehicle-alert-show-popup{color:#4b4b4d;border:1px solid #d4d4d5;background:#f5f5f5;}


    /* Vehicles listing */
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper{border:1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_cmp_sel_wrapper{border:1px solid #4d89dc;}
    /*div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper:hover{border:1px solid ;*/}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_slide_wrap div.jsvehiclemanager_vehicle_slide_image {border:1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_right_content div.jsvehiclemanager_vehicle_content_top_row {border-bottom: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_right_content div.jsvehiclemanager_vehicle_content_top_row span.jsvehiclemanager_vehicle_title a span.title {color: #4d89dc;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_right_content div.jsvehiclemanager_vehicle_content_top_row span.jsvehiclemanager_vehicle_price {background:#fafafa;border-left: 1px solid #d4d4d5;color: #373435}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_right_content div.jsvehiclemanager_vehicle_detail_row span.jsvehiclemanager_vehicle_create_date{color: #4b4b4d}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_right_content div.jsvehiclemanager_vehicle_detail_row span.jsvehiclemanager_vehicle_fuel_title {color: #373435}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_right_content div.jsvehiclemanager_vehicle_detail_row span.jsvehiclemanager_vehicle_value {color: #4b4b4d}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_right_content div.jsvehiclemanager_vehicle_detail_row span.jsvehiclemanager_vehicle_loction_title {color: #373435}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_right_content div.jsvehiclemanager_vehicle_detail_row span.jsvehiclemanager_vehicle_location_value {color: #4b4b4d}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_top_wrap div.jsvehiclemanager_vehicle_right_content div.jsvehiclemanager_vehicle_status a {border:1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_bottom_wrap {border-top: 1px solid #d4d4d5;background:#fafafa;color: #4b4b4d;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_bottom_wrap div.jsvehiclemanager_vehicle_left div.jsvehiclemanager_vehicle_option{border-right: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_bottom_wrap div.jsvehiclemanager_vehicle_left div.jsvehiclemanager_vehicle_option span.jsvehiclemanager_vehicle_condions_new {color:#ffffff ;background: #ff7b04;/*border:1px solid .d25500;*/}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_bottom_wrap div.jsvehiclemanager_vehicle_right_button div.jsvehiclemanager_vehicle_button_area a.jsvehiclemanager_vehicle_btn {background:#f5f5f5;border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_bottom_wrap div.jsvehiclemanager_vehicle_right_button div.jsvehiclemanager_vehicle_button_area a.jsvehiclemanager_vehicle_btn:hover {border: 1px solid #4d89dc;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_vehicle_bottom_wrap div.jsvehiclemanager_vehicle_right_button div.jsvehiclemanager_vehicle_button_area a.jsvehiclemanager_cmp_selected {border: 1px solid #4d89dc;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_tags{border-bottom:1px solid #4d89dc;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_tags div.jsvehiclemanager_featured_tag{color:#ffffff;background:#4d89dc;}
    div#jsvehiclemanager-wrapper a.jsvehiclemanager-plg-showmoreautoz {background-color:#4d4d4d;color:#ffffff;}
    div#jsvehiclemanager-wrapper a.jsvehiclemanager-plg-showmoreautoz span {color:#ffffff;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_my_comments {border-top: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_my_comments span.jsvehiclemanager_my_comments_label{color:#373435;}
    div#jsvehiclemanager-wrapper div.jsvehiclemanager_vehicle_wrapper div.jsvehiclemanager_my_comments span.jsvehiclemanager_my_comments_text{color:#4b4b4d;}
    /*Detail Vehicles*/
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-date-section {border: 1px solid #d4d4d5; background: #fafafa;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-date-section div#jsvehiclemanager-date-area span#jsvehiclemanager-date-text {color: #4b4b4d;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-date-section  div#jsvehiclemanager-social-icons a {border: 1px solid #d4d4d5;background: #f5f5f5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-date-section  div#jsvehiclemanager-social-icons a:hover {border: 1px solid #4d4d4d;background:#fff}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-model-price div#jsvehiclemanager-model { border-left:3px solid #4d89dc; }
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-model-price div#jsvehiclemanager-model span#jsvehiclemanager-model-text {color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-model-price div#jsvehiclemanager-price span#jsvehiclemanager-price-text {background: #4d89dc;color: #ffffff;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-detail-images-wrapper{border-top:1px solid #ccc;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-detail-images-wrapper div#jsvehiclemanager-left-side {border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-detail-images-wrapper div#jsvehiclemanager-right-side  div#jsvehiclemanager-thumbs div#jsvehiclemanager-thumbnails div#jsvehiclemanager-thumbsetting {}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-detail-images-wrapper div#jsvehiclemanager-right-side div#jsvehiclemanager-thumbs div#jsvehiclemanager-thumbnails div#jsvehiclemanager-thumbsetting a img{border:1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-data div.jsvehiclemanager-condition-featured-detail {border: 1px solid #d4d4d5;color: #373435; }
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-data div.jsvehiclemanager-condition-featured-detail img {background: #fafafa;border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-data div.jsvehiclemanager-condition-featured-detail span.jsvehiclemanager-middle-sec-value {color: #4b4b4d;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-data div.jsvehiclemanager-condition-featured-detail span.jsvehiclemanager-bottom-sec-value {background: #fafafa ;border-top: 1px solid #d4d4d5;color: #373435;} 
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-data div.jsvehiclemanager-condition-featured-detail:hover {border-color: #4d89dc;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-data div.jsvehiclemanager-condition-featured-detail a:hover img {border-color:#4d89dc;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-data div.jsvehiclemanager-condition-featured-detail a:hover {border-color: 1px solid #4d89dc;color: #4d89dc;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-data div.jsvehiclemanager-condition-featured-detail a:hover span.jsvehiclemanager-middle-sec-value{color: #4d89dc;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-data div.jsvehiclemanager-condition-featured-detail a:hover span.jsvehiclemanager-bottom-sec-value{background-color: #4d89dc;color: #ffffff;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz {border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz div#jsvehiclemanager-flex-autoz-image img {border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz div#jsvehiclemanager-middle-sec-wrap div#jsvehiclemanager-flex-autoz-middle-sec div#jsvehiclemanager-flex-header {border-bottom: 1px solid #d4d4d5 ;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz div#jsvehiclemanager-middle-sec-wrap div#jsvehiclemanager-flex-autoz-middle-sec div#jsvehiclemanager-flex-header a {color: #4d89dc ;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz div#jsvehiclemanager-middle-sec-wrap div#jsvehiclemanager-flex-autoz-middle-sec div#jsvehiclemanager-flex-det-row {color: #4b4b4d ;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz div#jsvehiclemanager-middle-sec-wrap div#jsvehiclemanager-flex-autoz-dealer-information-wrapper div#jsvehiclemanager-flex-autoz-dealer-information {border-left: 1px solid #d4d4d5 ;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz div#jsvehiclemanager-middle-sec-wrap div#jsvehiclemanager-flex-autoz-dealer-information-wrapper span#jsvehiclemanager-flex-autoz-dealer-information-text {background: #f5f5f5 ;border: 1px solid #d4d4d5;color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz div#jsvehiclemanager-middle-sec-wrap div#jsvehiclemanager-flex-autoz-dealer-information-wrapper span#jsvehiclemanager-flex-autoz-dealer-information-text:hover {border:1px solid #4d4d4d ;background:#fff;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div.jsvehiclemanager-vehicle-detail-tabs ul li a{border: 1px solid #d4d4d5;color: #373435;background: #f5f5f5 ;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div.jsvehiclemanager-vehicle-detail-tabs ul li a:hover {background: #4d89dc;color: #ffffff;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-overview div.jsvehiclemanager-feature-detail-list div.jsvehiclemanager-feature-detail-sub-heading span.jsvehiclemanager-sub-heading-text{border-left: 4px solid #4d89dc;color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div.jsvehiclemanager-feature-detail-list div.jsvehiclemanager-vehicle-details-wrapper{border-left: 3px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div.jsvehiclemanager-feature-detail-list div.jsvehiclemanager-vehicle-details-wrapper div.jsvehiclemanager-vehicle-detail span.jsvehiclemanager-detail-title{color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div.jsvehiclemanager-feature-detail-list div.jsvehiclemanager-vehicle-details-wrapper div.jsvehiclemanager-vehicle-detail span.jsvehiclemanager-details-value{color: #4b4b4d;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-features div.jsvehiclemanager-feature-presnet-text{color:#4b4b4d;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-features div.jsvehiclemanager-feature-detail-list div.jsvehiclemanager-feature-detail-sub-heading span.jsvehiclemanager-sub-heading-text{border-left: 4px solid #4d89dc;color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-features div.jsvehiclemanager-feature-detail-list div#jsvehiclemanager-feature-tab-sub-heading {border-left: 3px solid #4d89dc;background: #fafafa ;color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-features div.jsvehiclemanager-feature-detail-list div#jsvehiclemanager-feat-tab-wrap div#jsvehiclemanager-feature-tab-data div#jsvehiclemanager-feat-tab-row {border:1px solid #d4d4d5;color: #4b4b4d;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-gallery div.jsvehiclemanager-feature-detail-list div.jsvehiclemanager-feature-detail-sub-heading span.jsvehiclemanager-sub-heading-text{border-left: 4px solid #4d89dc;color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-gallery div#jsvehiclemanager-vehicle-detail-galary {border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-gallery div#jsvehiclemanager-vehicle-detail-galary div#jsvehiclemanager-auto-gallerythumbssetting {border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-feature-detail-sub-heading span.jsvehiclemanager-sub-heading-text{border-left: 4px solid #4d89dc;color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-dealer-information-wrapper{border:1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-dealer-information-wrapper div.jsvehiclemanager-dealer-info-name-wrapper div.jsvehiclemanager-dealer-info-img{border:1px solid #d4d4d5;}

    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-dealer-information-wrapper div.jsvehiclemanager-dealer-info-name-wrapper div.jsvehiclemanager-dealer-info-name-right div.jsvehiclemanager-dealer-info-prop-label{border-left: 3px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-dealer-information-wrapper div.jsvehiclemanager-dealer-info-name-wrapper div.jsvehiclemanager-dealer-info-name-right div.jsvehiclemanager-dealer-info-prop-label span.jsvehiclemanager-dealer-info-prop-label-text{color:#373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-dealer-information-wrapper div.jsvehiclemanager-dealer-info-name-wrapper div.jsvehiclemanager-dealer-info-name-right div.jsvehiclemanager-dealer-info-prop-value{border-left: 3px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-dealer-information-wrapper div.jsvehiclemanager-dealer-info-name-wrapper div.jsvehiclemanager-dealer-info-name-right div.jsvehiclemanager-dealer-info-prop-value span.jsvehiclemanager-dealer-info-prop-value-text{color:#4b4b4d;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div.jsvehiclemanager-social-links-wrapper span.jsvehiclemanager-social-link-icon{border-left:1px solid #d4d4d5;border-right:1px solid #d4d4d5;}


    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-feature-detail-list div#jsvehiclemanager-veh-view-dealer-wrapper div#jsvehiclemanager-dealer-left-side div#jsvehiclemanager-dealer-left-big-image {border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-feature-detail-list  div#jsvehiclemanager-veh-view-dealer-wrapper div#jsvehiclemanager-right-part-detail div#jsvehiclemanager-right-detail-info div#jsvehiclemanager-title {border-left: 2px solid #d4d4d5;color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-feature-detail-list  div#jsvehiclemanager-veh-view-dealer-wrapper div#jsvehiclemanager-right-part-detail div#jsvehiclemanager-right-detail-info div#jsvehiclemanager-value {border-left: 2px solid #d4d4d5;color: #4b4b4d;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-features div.jsvehiclemanager-feature-detail-list div.jsvehiclemanager-vehicle-details-wrapper{border-left: 3px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-features div.jsvehiclemanager-feature-detail-list div.jsvehiclemanager-vehicle-details-wrapper div.jsvehiclemanager-detail-title{color: #4b4b4d;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-features div.jsvehiclemanager-feature-detail-list div.jsvehiclemanager-vehicle-details-wrapper div.jsvehiclemanager-details-value{color: #373435;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-features div.jsvehiclemanager-feature-detail-list div#jsvehiclemanager-description-wrapper {border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-sellerinformation div.jsvehiclemanager-feature-detail-list div#jsvehiclemanager-veh-view-dealer-wrapper div#jsvehiclemanager-description-wrapper {border: 1px solid #d4d4d5;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div.jsvehiclemanager-form-section-checkbox-wrap div.jsvehiclemanager-checkbox-headings{border-left: 4px solid#4d89dc;color: ;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div.jsvehiclemanager-form-section-checkbox-wrap div.jsvehiclemanager-checkbox-sections div.jsvehiclemanager-checkboxes{color: #4b4b4d;}
    div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div.jsvehiclemanager-social-links-wrapper {background-color:#fafafa;border:1px solid #d4d4d5;}
   
   
  
    /* paginatnion */
    div#jsvehiclemanager-pagination span.page-numbers.current{color:#4d89dc;}
    div#jsvehiclemanager-pagination a.page-numbers.next{background:#4d89dc;color:#f5f5f5;}
    div#jsvehiclemanager-pagination a.page-numbers.prev{background:#4d89dc;color:#f5f5f5;}
    /* Vehicle List */
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsjobs-header-main-wrapper{background-color: #4d89dc; border-bottom-color:#4d89dc;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div.js_effect_preview div.vehicle_list {color:#373435;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanagers-wrapper{border-top: 3px solid #4d89dc;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanagers-wrapper div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_top_wrap div#jsvehiclemanager_vehicle_right_content div#jsvehiclemanager_vehicle_content_top_row span#jsvehiclemanager_vehicle_price{background-color:#fafafa;border-left-color:#d4d4d5  ;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanagers-wrapper div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_top_wrap div#jsvehiclemanager_vehicle_right_content div#jsvehiclemanager_vehicle_content_top_row span#jsvehiclemanager_vehicle_title span#title{color:#4d89dc ;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanagers-wrapper div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_bottom_wrap div#jsvehiclemanager_vehicle_left div#jsvehiclemanager_vehicle_option{color:#4b4b4d;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanagers-wrapper div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_top_wrap div#jsvehiclemanager_vehicle_right_content div#jsvehiclemanager_vehicle_content_top_row span#jsvehiclemanager_vehicle_price span#price{color:#373435 ;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanager_vehicle_wrapper{border-color:#d4d4d5 ;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_bottom_wrap{background-color:#fafafa;border-top-color:#d4d4d5;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_bottom_wrap div#jsvehiclemanager_vehicle_left div#jsvehiclemanager_vehicle_option span#jsvehiclemanager_vehicle_condions_new {background-color:#ff7b04;border:1px solid #d25500;color:white;}
    
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_bottom_wrap div#jsvehiclemanager_vehicle_right_button div#jsvehiclemanager_vehicle_button_area a#jsvehiclemanager_vehicle_btn{background-color: #f5f5f5;border 1px solid <php $color5;?>;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_top_wrap div#jsvehiclemanager_vehicle_right_content div#jsvehiclemanager_vehicle_detail_row span#jsvehiclemanager_vehicle_create_date{color:#4b4b4d ;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_top_wrap div#jsvehiclemanager_vehicle_right_content div#jsvehiclemanager_vehicle_detail_row span#jsvehiclemanager_vehicle_value{color:#4b4b4d ;}
    div#jsvehiclemanageradmin-wrapper div#jsvehiclemanageradmin-data div#jsvehiclemanagers-wrapper div#jsvehiclemanager_vehicle_wrapper div#jsvehiclemanager_vehicle_top_wrap div#jsvehiclemanager_vehicle_right_content div#jsvehiclemanager_vehicle_detail_row{color:#373435 ;}
  

    div.pictures_eyes div.pictures_eyes_in div.cm_vehicle_detail span.cm_vlb_price{background: #4d89dc}


    @media(max-width:480px){
        div#jsvehiclemanager-wrapper div#jsvehiclemanager-credit-pack-wrap div#jsvehiclemanager-credit-pack-wrapper div.jsvehiclemanager-credit-pack-data div.jsvehiclemanager-credit-pack-data-top span.jsvehiclemanager-credit-pack-top-right{border-top:1px solid #d4d4d5;}
        div#jsvehiclemanager-wrapper div#jsvehiclemanager-credits-log-wrap div.jsvehiclemanager-credits-log-wrapper div.jsvehiclemanager-credits-log-row-wrap span.jsvehiclemanager-credits-log-desc {border-top: 1px solid #d4d4d5;}
        div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz div#jsvehiclemanager-middle-sec-wrap div#jsvehiclemanager-flex-autoz-dealer-information-wrapper div#jsvehiclemanager-flex-autoz-dealer-information {border-top: 1px solid #d4d4d5;}
    }
    @media(max-width:650px){
        div#jsvehiclemanager-wrapper div#jsvehiclemanager-credits-log-wrap div.jsvehiclemanager-credits-log-wrapper div.jsvehiclemanager-credits-log-row-wrap span.jsvehiclemanager-credits-log-desc {border-top: 1px solid #d4d4d5;}
        div#jsvehiclemanager-wrapper div#jsvehiclemanager-veh-detail-wrapper div#jsvehiclemanager-flex-autoz-wrapper div#jsvehiclemanager-detail-flex-autoz div#jsvehiclemanager-middle-sec-wrap div#jsvehiclemanager-flex-autoz-dealer-information-wrapper div#jsvehiclemanager-flex-autoz-dealer-information {border-top: 1px solid #d4d4d5;}
    }

    </style>


<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />


<link rel='stylesheet' id='bootstrap-css'  href='<?php echo base_url();?>dist/css/bootstrap.min.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='bootstraptheme-css'  href='<?php echo base_url();?>dist/css/bootstrap-theme.min.css?ver=4.9.8' type='text/css' media='all' />

<link rel="stylesheet" href="<?php echo base_url();?>dist/css/grid.css" /> 
  <link rel='stylesheet' href='<?php echo base_url();?>dist/css/tablet.css?ver=4.9.8' type='text/css' media='(min-width: 601px) and (max-width: 782px)' />

<link rel='stylesheet' href='<?php echo base_url();?>dist/css/mobile.css?ver=4.9.8' type='text/css' media='(min-width: 401px) and (max-width: 600px)' />

<link rel='stylesheet' href='<?php echo base_url();?>dist/css/oldmobile.css?ver=4.9.8' type='text/css' media='(max-width: 400px)' />

<style id='car-manager-main-inline-css' type='text/css'>


 
    
    a{color: #004274; text-decoration: none;}
    a:hover{color: #23282d; text-decoration: none;}
    .thumbnail{border:1px solid #D4D4D4;}

    /*navbar*/
    div.navbar,
    div.navbar div.navbar-header *,
    div.navbar div.navbar-collapse *{
        font-family: Roboto;font-style: ;font-weight: 400;font-size: 14px;line-height: 14px;text-align: ;
    }

    /*header*/
    div.header_row{font-family: Lato;font-style: ;font-weight: ;font-size: 13px;line-height: 20px;text-align: ;  }

    /*body*/
    body{font-family: Roboto !important;font-style:  ;font-weight: 300 ;font-size: 14px;line-height: 14px ;text-align:  ;   }
    
    /*footer*/
    footer{font-family: Lato;font-style: ;font-weight: ;font-size: 13px;line-height: 20px;text-align: ; }
    /*headings*/
    h1{font-family: Basic;font-style: ;font-weight: 400;font-size: 35px;line-height: 35px;text-align: ; }
    h2{font-family: Basic;font-style: ;font-weight: 400;font-size: 27px;line-height: 27px;text-align: ; }
    h3{font-family: Basic;font-style: ;font-weight: 400;font-size: 24px;line-height: 30px;text-align: ; }
    h4{font-family: Lato;font-style: ;font-weight: 400;font-size: 21px;line-height: 30px;text-align: ;}
    h5{font-family: Lato;font-style: ;font-weight: 400;font-size: 18px;line-height: 25px;text-align: ;}
    h6{font-family: Lato;font-style: ;font-weight: 700;font-size: 15px;line-height: 30px;text-align: ;}
            .navbar a.navbar-brand{
                padding-top: 0;
                padding-left: 0;
                padding-right: 0;
                padding-bottom: 0;
                width: 55%;
                height: 55%;
            }
            .navbar a.navbar-brand img{
                max-width: 55%;
                max-height: 55%;
                
            }
        
/*back to top link*/

a#back-to-top {
    background: #004274;
    color: #FFFFFF;
    border: 0px;
    border-radius: 0px;
}


/*sticky*/

div.sticky {
    background: #f7f7f7;
}

div.sticky.blog_list_wrapper div.sticky_tag {
    background: #004274;
    color: #FFFFFF;
}

div.blog_list_wrapper div.nr_excerpt table th {
    background: #004274;
    color: #FFFFFF;
}

div.blog_list_wrapper div.nr_excerpt table th * {
    color: #FFFFFF;
}

div.content_wrapper div#comments table th {
    background: #004274;
    color: #FFFFFF;
}

div.content_wrapper div#comments table th * {
    color: #FFFFFF;
}


/* SlideShow */

#foxiswitch_caption div.jsvehiclemanager-ss-data.title div.text {
    border-left: 5px solid #004274;
}

#foxiswitch_caption div.jsvehiclemanager-ss-data.price div.text {
    background: rgba( 0,66,116, .5);
}

#foxiswitch_container,
#foxiswitch_image {
    background: #000000;
}

/* Menu bar */

div.header_row {
    border-bottom: 1px solid #FFFFFF;
    background: #23282d;
}

div.header_topbar span {
    color: #ffffff;
}

div.header_topbar span a {
    color: #ffffff;
}

div.header_topbar span i {
    color: #ffffff;
}

div.header_topbar div.cmtb_language {
    border-left: 1px solid #D4D4D4;
}

div.header_topbar div.cmtb_language i {
    color: #ffffff;
}

div.header_topbar div.cmtb_language span.wpml_language {
    color: #ffffff;
}

div.header_topbar a.socialicon {
    color: #ffffff;
    border-left: 1px solid #D4D4D4;
}

div.header_topbar a.socialicon:last-child {
    border-right: 1px solid #D4D4D4;
}

div.header_topbar a.socialicon.facebook:hover {
    color: #FFFFFF;
    background: #3b5998;
}

div.header_topbar a.socialicon.twitter:hover {
    color: #FFFFFF;
    background: #55acee;
}

div.header_topbar a.socialicon.linkedin:hover {
    color: #FFFFFF;
    background: #007bb5;
}

div.header_topbar a.socialicon.googleplus:hover {
    color: #FFFFFF;
    background: #dd4b39;
}

div.header_topbar a.socialicon.pinterest:hover {
    color: #FFFFFF;
    background: #cb2027;
}

div.header_topbar a.socialicon.instagram:hover {
    color: #FFFFFF;
    background: #125688;
}

div.navbar.transparent {
    background: rgba(242,242,242, .5);
}

div.header_row.transparent {
    background: rgba( 35,40,45, .5);
}


/* Menu bar 600px */

@media screen and (max-width:600px) {
    div.navbar.transparent {
        background: #f2f2f2;
    }
    div.header_row.transparent {
        background: #23282d;
    }
}


/*navbar*/

div.navbar {
    background: #f2f2f2;
}

header.affix div.navbar.transparent {
    background: #f2f2f2;
}

header.affix div.header_row.transparent {
    background: #23282d;
}

div.navbar div.navbar-collapse.collapse ul.navbar-nav li a {
    color: ##004274;
    background: #f2f2f2
}

div.navbar.transparent div.navbar-collapse.collapse ul.navbar-nav li a {
    background: none;
}

div.navbar div.navbar-collapse.collapse ul.navbar-nav ul.dropdown-menu {
    border-top: 2px solid #f2f2f1;
    border-bottom: 2px solid #f2f2f1 background: #f2f2f2;
}

div.navbar.transparent div.navbar-collapse.collapse ul.navbar-nav ul.dropdown-menu {
    background: unset;
}

div.navbar div.navbar-collapse.collapse ul.navbar-nav ul.dropdown-menu li a {
    border-bottom: 1px solid #111111;
    color: ##004274;
    background: #f2f2f2
}

div.navbar.transparent div.navbar-collapse.collapse ul.navbar-nav ul.dropdown-menu li a {
    background: rgba( 242.','.242.','.242;
    , .5);
}

div.navbar div.navbar-collapse.collapse ul.navbar-nav li a:hover {
    color: #004274;
    background: #f2f2f1;
}

div.navbar.transparent div.navbar-collapse.collapse ul.navbar-nav li a:hover {
    background: rgba( 242,242,241, .5);
}

div.navbar div.navbar-collapse.collapse ul.navbar-nav li.active a {
    color: #004274;
    background: #f2f2f1;
}

div.navbar.transparent div.navbar-collapse.collapse ul.navbar-nav li.active a {
    background: rgba( 242,242,241, .5);
}

div.navbar div.navbar-collapse.collapse ul.navbar-nav li.active a:hover {
    color: #004274;
    background: #f2f2f1;
}

div.navbar.transparent div.navbar-collapse.collapse ul.navbar-nav li.active a:hover {
    background: rgba(242,242,241, .5);
}

div.navbar div.navbar-collapse.collapse ul.navbar-nav ul.dropdown-menu li.active a {
    color: #004274;
    background: #f2f2f1;
}

div.navbar.transparent div.navbar-collapse.collapse ul.navbar-nav ul.dropdown-menu li.active a {
    background: rgba(242,242,241, .5);
}

div.navbar div.navbar-collapse.collapse ul.navbar-nav ul.dropdown-menu li a:hover {
    color: #004274;
    background: #f2f2f1;
}

div.navbar.transparent div.navbar-collapse.collapse ul.navbar-nav ul.dropdown-menu li a:hover {
    background: rgba(242,242,241, .5);
}

div.navbar li a {
    color: ##004274;
}

div.navbar li a:hover {
    color: #004274;
}


/*table*/

table#js-table thead tr {
    background: #f7f7f7;
}

table#js-table tbody tr {
    border-top: 1px solid #D4D4D4;
    background: #fff;
}

table#js-table tbody tr td {
    border-top: none;
}


/*header topbar*/

.header_topbar div.cmtb_language div.cm_lang_select {
    background: #004274;
    color: #FFFFFF;
}

.header_topbar div.cmtb_language div.cm_lang_select div.cm_lang_row {
    border-bottom: 1px solid #FFFFFF;
}


/*faq*/

.vc_general.vc_tta.cm_faq_wrap.cm_faq_wrap div.vc_tta-panels-container div.vc_tta-panels div.cm_faq.vc_active div.vc_tta-panel-heading {
    background: #004274;
}

.vc_general.vc_tta.cm_faq_wrap.cm_faq_wrap div.vc_tta-panels-container div.vc_tta-panels div.cm_faq.vc_active div.vc_tta-panel-heading .vc_tta-panel-title a {
    color: #FFFFFF;
}

.vc_general.vc_tta.cm_faq_wrap.cm_faq_wrap div.vc_tta-panels-container div.vc_tta-panels div.cm_faq.vc_active div.vc_tta-panel-heading .vc_tta-panel-title a i.vc_tta-controls-icon::after,
.vc_general.vc_tta.cm_faq_wrap.cm_faq_wrap div.vc_tta-panels-container div.vc_tta-panels div.cm_faq.vc_active div.vc_tta-panel-heading .vc_tta-panel-title a i.vc_tta-controls-icon::before {
    border-color: #FFFFFF;
}

.vc_general.vc_tta.cm_faq_wrap.cm_faq_wrap div.vc_tta-panels-container div.vc_tta-panels div.cm_faq div.vc_tta-panel-heading {
    background: #f7f7f7;
}

.vc_general.vc_tta.cm_faq_wrap.cm_faq_wrap div.vc_tta-panels-container div.vc_tta-panels div.cm_faq div.vc_tta-panel-body {
    background: #FFFFFF;
}

.vc_general.vc_tta.cm_faq_wrap.cm_faq_wrap div.vc_tta-panels-container div.vc_tta-panels div.cm_faq.vc_active div.vc_tta-panel-body div.wpb_text_column.wpb_content_element div.wpb_wrapper p {
    color: #0a0a0a;
}


/*3featurebox style2*/

div.veh-3featurebox-style2 div.thumbnail div.caption.txt-algin {
    color: #464646;
}

div.veh-3featurebox-style2 div.thumbnail div.caption.txt-algin h3 {
    color: #171717;
}

h3.nr_title {
    border-bottom: 1px solid #004274;
}





/*count*/

div.count-main-wrap div.count-wrap.style2 h2 {
    color: #FFFFFF;
}

div.count-main-wrap div.count-wrap.style2 h4 {
    color: #FFFFFF;
}





/*3feature box style 2*/

div.veh-3featurebox-style2 div.thumbnail {
    box-shadow: 0px 4px 3px lightgray;
}

div.veh-3featurebox-style2 div.thumbnail span.veh-info-img-wrap {
    background: #004274;
    box-shadow: 0px 0px 2px #000;
}

div.veh-3featurebox-style2 div.thumbnail span.veh-info-img-wrap i.fa {
    color: #FFFFFF;
}

div.veh-3featurebox-style3 div.thumbnail {
    box-shadow: 0px 4px 3px lightgray;
}

div.veh-3featurebox-style3 div.thumbnail span.veh-info-img-wrap i.fa {
    color: #004274;
}

div.veh-3featurebox-style3 div.thumbnail div.caption.txt-algin h4 {
    color: #464646;
}

div.veh-3featurebox-style3 div.thumbnail div.caption.txt-algin h3 {
    color: #0a0a0a;
}

div.veh-3featurebox-style3 div.thumbnail div.caption.txt-algin p {
    color: #464646;
}


/*slider bottom*/

div.silder-bottom {
    background: #004274;
}

div.silder-bottom .silder-bottom-txt {
    color: #FFFFFF;
}

div.silder-bottom span.silder-bottom-btn a.silder-bottom-btn-buy {
    color: #FFFFFF;
    background: #23282d;
    border: 1px solid #004274;
}




/*info area*/

div.veh-info {
    background: #23282d;
}

div.veh-info div.thumbnail {
    background: none;
    border: 0px;
}

div.veh-info div.thumbnail div.txt-algin {
    color: #FFFFFF;
}

div.veh-info div.thumbnail div.txt-algin h3 {
    color: #FFFFFF;
}

div.veh-info div.thumbnail span.veh-info-img-wrap {
    color: #FFFFFF;
    background: #004274;
    box-shadow: 0px 3px 5px #000;
}

div.veh-info div.thumbnail span.veh-info-img-wrap span.color-icon {
    color: #0a0a0a;
}





/* Featured vehicles */

div.main-wrap h2.vehicles-heading span.vehicles-headings-wrap {
    color: #0a0a0a;
}
div.main-wrap .vehicles-heading span.vehicles-headings-wrap span.vehicles-headings-wrap-first-word{
    border-bottom:3px solid #004274;
}

div.main-wrap .featuredvehicles-text-wrap {
    color: #171717;
}

div.featuredvehicles-list-wrap div.thumbnail .featuredvehicles-list-price {
    background: rgba(0,66,116, 0.6);
    color: #FFFFFF;
}

div.featuredvehicles-list-wrap div.thumbnail div.featuredvehicles-list-top .featuredvehicles-list-title {
    border-left: 2px solid #004274;
}

div.featuredvehicles-list-wrap div.thumbnail div.featuredvehicles-list-top .featuredvehicles-list-title .featured-title {
    border-bottom: 1px solid #D4D4D4;
}

div.featuredvehicles-list-wrap div.thumbnail div.featuredvehicles-list-top span.featuredvehicles-list-data {
    color: #464646;
}

div.featuredvehicles-list-wrap div.thumbnail div.featuredvehicles-list-top span.featuredvehicles-list-data span.featuredvehicles-list-data-tit {
    color: #171717;
}

div.featuredvehicles-list-wrap div.thumbnail div.featuredvehicles-list-bottom {
    border-top: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.featuredvehicles-list-wrap div.thumbnail div.featuredvehicles-list-bottom span.featuredvehicles-list-option {
    border-left: 1px solid #D4D4D4;
    color: #171717;
}


/* Hot vehicles */

div.main-wrap .vehicles-heading-wrap {
    border-bottom: 3px solid #337ab7;
}

div.thumbnail div.caption span.hot-vehicles-heading {
    border-bottom: 1px solid #D4D4D4;
}

div.thumbnail div.caption span.hot-vehicles-price {
    color: #FFFFFF;
}

a.thumbnail.vehiclemakes:hover {
    border: 1px solid #004274;
}

div.main-wrap .vehicles-text-wrap {
    color: #171717;
}




/* Newest Vehicles */

div.thumbnail div.newest-vehicles-img-wrap {
    border: 1px solid #D4D4D4;
    border-left: 3px solid #004274;
    background: #FFFFFF;
}

div.thumbnail div.newest-vehicles-data-wrap:hover {
    box-shadow: 0px 0px 5px #999;
}

div.thumbnail div.newest-vehicles-data-wrap div.newest-vehicles-data-top {
    border-bottom: 1px solid #D4D4D4;
}

div.thumbnail div.newest-vehicles-data-wrap div.newest-vehicles-data-top span.newest-vehicles-data-tit a {
    color: #0a0a0a;
}

div.thumbnail div.newest-vehicles-data-wrap div.newest-vehicles-data-top .newest-vehicles-data-price {
    background: #004274;
    color: #FFFFFF;
}

div.thumbnail div.newest-vehicles-data-wrap div.newest-vehicles-data-bottom {
    background: #f7f7f7;
}

div.thumbnail div.newest-vehicles-data-wrap div.newest-vehicles-data-bottom span.newest-vehicles-data-optn {
    color: #171717;
}

a.show-more-btn {
    background: #004274;
    color: #FFFFFF;
}

a.show-more-btn:hover {
    color: #FFFFFF;
}

a#showmoreautoz {
    background: #004274;
    color: #FFFFFF;
}

a#showmoreautoz:hover {
    color: #FFFFFF;
}

h2.nvs2.text-center {
    color: #0a0a0a;
}

div.main-wrap .nvs2 {
    color: #171717;
}


/* Count Box */

div.count-main-wrap div.count-wrap span.count-wrapper span.count {
    border: 3px solid #FFFFFF;
    background: #004274;
    color: #FFFFFF;
}

div.count-main-wrap div.count-wrap span.count-wrapper .count-tit {
    color: #FFFFFF;
}

div.count-bottom-wrap {
    background: #004274
}

div.count-bottom-wrap div.count-bottom-txt-wrap .count-bottom-txt-top {
    color: #FFFFFF;
}

div.count-bottom-wrap div.count-bottom-txt-wrap .count-bottom-txt-btom {
    color: #FFFFFF;
}

div.count-bottom-wrap div.count-bottom-btn-wrap a.count-bottom-btn-buynow {
    background: #23282d;
    color: #FFFFFF;
}


/* Hot vehicles */

div.hot-veh-wrap .vehicles-heading-wrap {
    border-bottom: 3px solid #004274;
}

div.hot-veh-wrap .vehicles-heading-wrap h2.vehicles-heading {
    color: #0a0a0a;
}

div.hot-veh-wrap div.hot-veh-list div.thumbnail div.caption span.hot-vehicles-heading {
    border-bottom: 1px solid #D4D4D4;
}

div.hot-veh-wrap div.hot-veh-list div.thumbnail div.caption span.hot-vehicles-price {
    color: #FFFFFF;
}





/* Contact form 7 */

.wpcf7-mail-sent-ok {
    background: #004274;
    ?> !important;
    color: #171717;
}

#popup_contact > a.button {
    color: rgba(0, 0, 0, .5);
    background: #004274;
}

#popup_contact .popup_contact_wrapper form input[type='text'],
#popup_contact .popup_contact_wrapper form input[type='email'],
#popup_contact .popup_contact_wrapper form textarea {
    background: #004274;
}


/* Carousel multi item slide */


/* Carousel row slide */


/* Vehicle makes */


/* Footer */





/*search widget*/

div.widget_search form#searchform input#s {
    color: #0a0a0a;
}

div.widget_search form#searchform input#searchsubmit {
    color: #0a0a0a;
}

div.widget_pages {
    border: 1px solid #D4D4D4;
    box-shadow: 0px 4px 3px lightgray;
}

div.widget_pages ul li {
    border-bottom: 1px solid #D4D4D4;
}

div.widget_pages ul li a {
    text-decoration: none;
}

div.widget_text div.textwidget {
    color: #171717;
}




/* Contact US */

div.meet-us-wrap div.contact-form-wrap form.contact-form {
    background: #FFFFFF;
}

div.meet-us-wrap div.meet-us h3.m-meet-us-title {
    color: #0a0a0a;
}

div.meet-us-wrap div.meet-us span.meet-us-text {
    color: #171717;
}

div.meet-us-wrap div.contact-form-wrap form.contact-form input[type=submit] {
    background: #004274;
}

div.meet-us-wrap div.meet-us span.cont {
    color: #464646;
}

div.meet-us-wrap div.meet-us span.cont span.email {
    color: #004274;
}

div.meet-us-wrap div.contact-form-wrap {
    border: 1px solid #D4D4D4;
}

div.meet-us-wrap div.contact-form-wrap div.form-title-wrap {
    border-bottom: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.meet-us-wrap div.contact-form-wrap div.form-title-wrap .form-text {
    color: #0a0a0a;
}

div.meet-us-wrap div.contact-form-wrap div.form-title-wrap .form-text span.blue {
    color: #004274;
}

div.cont-detail-info {
    background: #004274;
}

div.cont-detail-info div.text {
    color: #0a0a0a;
}

div.cont-detail-info div.btn-area button.buy {
    background: #004274;
    color: #FFFFFF;
}


/*popups*/

div#jsvehiclemanager-popup {
    border-bottom: 10px solid #004274;
}

div#jsvehiclemanager-popup span.popup-title {
    background: #004274;
}

div#jsvehiclemanager-popup div.icon {
    background: #004274;
}

div#jsvehiclemanager-popup div.popup-row.button-wrap a.proceed {
    background: #004274;
}


/* Footer Widgets */

div.cmf_aus_title {
    border-bottom: 2px solid #004274;
    color: #004274;
}

div.cmf_aus_description {
    color: #FFFFFF;
}

footer div.footer1 {
    background: #23282d;
    border-top: 5px solid #004274;
    padding-top: 40px;
    padding-bottom: 40px;
}

footer div.footer2 {
    background: #004274;
    color: #ffffff;
}

footer div.cmf_aus_title {
    border-bottom: 2px solid #004274;
    color: #ffffff;
}

footer div.cmf_aus_description {
    color: #c4c4c4;
}

div.widget div.widget ul.cmf_usefullinks_list li {
    border-bottom: 1px solid #c4c4c4;
}

footer div.widget h2 {
    color: #ffffff;
    background: #23282d;
}

footer ul.cmf_usefullinks_list li a {
    color: #c4c4c4;
}

footer ul.cmf_usefullinks_list li a:hover {
    color: ##ffffff;
}

footer {
    color: #c4c4c4;
}

footer a {
    color: #c4c4c4;
}

footer a:hover {
    color: ##ffffff;
}


/*footer contact us widget*/

ul.cmf_usefullinks_list li a {
    text-decoration: none;
    color: #FFFFFF;
}

div.cmf_cu_email {
    border-bottom: 1px solid #c4c4c4;
}

div.cmf_cu_address {
    border-bottom: 1px solid #c4c4c4;
}

div.cmf_cu_phone {
    border-bottom: 1px solid #c4c4c4;
}


/*footer contact us scial icons */

div.cmf_socailicons a.socialicon.footer {
    color: #FFFFFF;
    border-left: 1px solid #D4D4D4;
}

div.cmf_socailicons a.socialicon.footer:last-child {
    border-right: 1px solid #D4D4D4;
}

div.cmf_socailicons a.socialicon.footer.facebook:hover {
    color: #FFFFFF;
    background: #3B5998;
}

div.cmf_socailicons a.socialicon.footer.twitter:hover {
    color: #FFFFFF;
    background: #33CCFF;
}

div.cmf_socailicons a.socialicon.footer.linkedin:hover {
    color: #FFFFFF;
    background: #4875B4;
}

div.cmf_socailicons a.socialicon.footer.googleplus:hover {
    color: #FFFFFF;
    background: #C63D2D;
}

div.cmf_socailicons a.socialicon.footer.pinterest:hover {
    color: #FFFFFF;
    background: #4E433C;
}

div.cmf_socailicons a.socialicon.footer.instagram:hover {
    color: #FFFFFF;
    background: #e95950;
}


/*hot vehicles*/

div.hot-veh-data {
    border: 1px solid #DEDEDE;
    box-shadow: 0px 3px 0px #cfcfcf;
}

div.hot-veh-data:hover {
    border-color: #004274;
}

div.hot-veh-data .hot-veh-data-title {
    border-bottom: 1px solid #D4D4D4;
    color: #0a0a0a;
}

div.hot-veh-data span.hot-veh-data-loc {
    color: #171717;
}

div.hot-veh-data span.hot-veh-data-price {
    border-bottom: 1px solid #D4D4D4;
    color: #004274;
}

div.hot-veh-data div.hot-veh-data-vd-btn a.hot-veh-data-vd-btn-txt {
    border: 1px solid #004274;
    color: #171717;
}


/*new vehicles*/

div.new-veh-sa-btn-wrp a.new-veh-sa-btn {
    border: 1px solid #004274;
    color: #0a0a0a;
}

div.new-veh-det-wrap div.new-veh-det-box {
    box-shadow: 0 3px 3px #cccccc;
}

div.new-veh-det-wrap div.new-veh-det-box div.new-veh-det-top span.new-veh-det-tit span.new-veh-det-tit-txt {
    color: #0a0a0a;
}

div.new-veh-det-wrap div.new-veh-det-box .new-veh-det-price {
    background: rgba( 0,66,116, 0.61) none repeat scroll 100% 100%;
    color: #FFFFFF;
}

div.new-veh-det-wrap div.new-veh-det-box div.new-veh-det-top div.new-veh-det-opt-wrp {
    border-top: 1px solid #D4D4D4;
    border-bottom: 1px solid #D4D4D4;
}

div.new-veh-det-wrap div.new-veh-det-box div.new-veh-det-bottom span.new-veh-det-data {
    border-bottom: 1px solid #D4D4D4;
    color: #464646;
}

div.new-veh-det-wrap div.new-veh-det-box div.new-veh-det-bottom span.new-veh-det-data span.new-veh-det-data-value {
    color: #464646;
}


/*price box*/

div.price-box-wrp {
    background-color: rgba( 35,40,45, .8);
}



/* Vehicle detail */

div.veh-detail-top {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-detail-top span.vehicle-detail-created {
    color: #171717;
}

div.veh-detail-top a.print-button {
    border: 1px solid #D4D4D4;
    background: #FFFFFF;
    color: #171717;
}

div.vehicle-detail div.vehicle-detail-top-title {
    border-bottom: 2px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-top-title .make-model {
    border-left: 3px solid #004274;
    color: #0a0a0a;
}

div.vehicle-detail div.vehicle-detail-top-title .vehicle-detail-price {
    border: 1px solid #D4D4D4;
    color: #FFFFFF;
    background: #004274;
}

div.vehicle-detail div.vehicle-detail-left-part div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info {
    border: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-left-part div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info img {
    border: 1px solid #D4D4D4;
    box-shadow: 0px 0px 5px #CCCCCC;
    background: #f7f7f7;
}

div.vehicle-detail div.vehicle-detail-left-part div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info span.veh-main-info-title {
    border-top: 1px solid #D4D4D4;
    color: #0a0a0a;
    background: #f7f7f7;
}

div.vehicle-detail div.vehicle-detail-left-part div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info span.veh-main-info-value {
    color: #171717;
}

div.vehicle-detail div.vehicle-detail-left-part div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:hover {
    border: 1px solid #004274;
    background: #f7f7f7;
}

div.vehicle-detail div.vehicle-detail-left-part div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:hover img {
    background: #FFFFFF;
}

div.vehicle-detail div.vehicle-detail-left-part div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:hover span.veh-main-info-value {
    color: #004274;
}

div.vehicle-detail div.vehicle-detail-left-part div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:hover span.veh-main-info-title {
    background: #004274;
    color: #FFFFFF;
}

div.vehicle-detail div.vehicle-detail-left-part div.fuel-portion {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.vehicle-detail div.vehicle-detail-left-part div.fuel-portion div.fuel-portion-left div.fuel-portion-title {
    border-bottom: 1px solid #D4D4D4;
    color: #0a0a0a;
}

div.vehicle-detail div.vehicle-detail-left-part div.fuel-portion div.fuel-portion-left span {
    color: #171717;
}

div.vehicle-detail div.vehicle-detail-left-part div.fuel-portion div.fuel-portion-right {
    color: #171717;
}

div.vehicle-detail div.vehicle-detail-left-part div.fuel-portion div.fuel-portion-right .bold {
    color: #0a0a0a;
}

div.vehicle-detail div.vehicle-detail-left-part .vehicle-detail-section-heading {
    border: 1px solid #D4D4D4;
    border-left: 4px solid #004274;
    color: #0a0a0a;
    background: #f7f7f7;
}

div.vehicle-detail div.vehicle-detail-left-part .vehicle-detail-description {
    border: 1px solid #D4D4D4;
    color: #0a0a0a;
    background: #f7f7f7;
}

div.vehicle-detail div.vehicle-detail-left-part div.vehicle-detail-info-wrapper div.info-title {
    color: #171717;
}

div.vehicle-detail div.vehicle-detail-left-part div.vehicle-detail-info-wrapper div.info-value {
    color: #464646;
}

div.vehicle-detail div.vehicle-detail-left-part div.vehicle-detail-info-wrapper {
    border-left: 2px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-left-part div.feature-section-section-wrapper .vehicle-detail-feature-section-heading {
    border-bottom: 2px solid #D4D4D4;
    color: #0a0a0a;
}

div.vehicle-detail div.vehicle-detail-left-part div.vehicle-detail-tabs div#tabInner {
    border: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-left-part div.vehicle-detail-tabs {
    border: 0px;
}

div.vehicle-detail div.vehicle-detail-left-part div.vehicle-detail-tabs ul {
    background: none;
    border: 0px;
}

div.vehicle-detail div.vehicle-detail-left-part div.vehicle-detail-tabs ul li a.tab-links {
    border: 1px solid #D4D4D4;
    color: #0a0a0a;
    background: #f7f7f7;
}

div.vehicle-detail div.vehicle-detail-left-part div.vehicle-detail-tabs ul li a.tab-links:last-child {
    border-right: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-left-part div.vehicle-detail-tabs ul li a.tab-links.blue {
    border-top: 2px solid #004274;
    color: #004274;
    background: #FFFFFF;
}

div.vehicle-detail div.vehicle-detail-right-part div.views-and-stock {
    border: 1px solid #FA8470;
    background: #FEF6EE;
    color: #4b4b4d;
}

div.vehicle-detail div.vehicle-detail-right-part div.views-and-stock div.img-wrapper {
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
}

div.vehicle-detail-left-part div.veh-deatail-slide-wrap div.veh-deatail-slide-img-wrap {
    border: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-button-section {
    border-bottom: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-button-section a {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
    color: #0a0a0a;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-button-section a:hover {
    border: 1px solid #004274;
    background: #FFFFFF;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section {
    border: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section .right-section-heading {
    border-bottom: 2px solid #004274;
    background: #f7f7f7;
    color: #0a0a0a;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section.seller-info-section div.seller-info-section-wrapper div.image-wrapper {
    border: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section.seller-info-section div.seller-info-section-wrapper div.seller-info-title {
    border-bottom: 1px solid #D4D4D4;
    color: #004274;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section.seller-info-section div.seller-info-section-wrapper div.seller-info-bottom-value {
    color: #464646;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section.seller-info-section div.seller-info-section-wrapper div.send-message-bold {
    color: #171717;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section.seller-info-section div.seller-info-section-wrapper input.inputbox {
    border: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section.seller-info-section div.seller-info-section-wrapper textarea {
    border: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section.seller-info-section div.seller-info-section-wrapper button.send-message-button {
    background: #004274;
    color: #FFFFFF;
    box-shadow: 0px 0px 3px #aeaeae;
}

div.vehicle-detail div.vehicle-detail-right-part div.vehicle-detail-right-section.seller-info-section div.seller-info-section-wrapper button.send-message-button img {
    padding-right: 5px;
}

div.vehicle-detail div.vehicle-detail-description {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
    color: #171717;
}

div.vehicle-detail div.vehicle-detail-left-part div.feature-section-section-wrapper div.feature-section-info {
    color: #171717;
}

div.veh-detail-top-row-wrap {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
    color: #171717;
}

div.veh-detail-top-row-wrap span.vehicle-detail-created {
    color: #171717;
}

div.veh-detail-top-row-wrap span.vehicle-detail-stack-num {
    border: 1px solid #FAB47D;
    background: #FEF6EE;
}

div.veh-detail-top-portion {
    border-bottom: 2px solid #D4D4D4;
}

div.veh-detail-top-portion .make-model {
    border-left: 2px solid #004274;
    color: #0a0a0a;
    ?>
}

div.veh-detail-top-portion .vehicle-detail-price {
    border: 1px solid #D4D4D4;
    color: #FFFFFF;
    background: #004274;
}

div.vehicle-top-portion-button a {
    border: 1px solid #D4D4D4;
    background: rgba(247,247,247,0.17);
    color: #0a0a0a;
}


/*vehicle detail full width*/

div.jsvehiclemanager-vehicle-detail-full div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info {
    border: 1px solid #D4D4D4;
    background: #FFFFFF;
}

div.jsvehiclemanager-vehicle-detail-full div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:hover {
    border: 1px solid #004274;
    background: #f7f7f7;
}

div.jsvehiclemanager-vehicle-detail-full div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info img {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
    box-shadow: 0px 0px 5px #CCCCCC;
}

div.jsvehiclemanager-vehicle-detail-full div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info span.veh-main-info-title {
    border-top: 1px solid #D4D4D4;
    color: #171717;
    background: #f7f7f7;
}

div.jsvehiclemanager-vehicle-detail-full div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:last-child {
    border-right: 1px solid #D4D4D4;
}

div.jsvehiclemanager-vehicle-detail-full div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:hover:last-child {
    border: 1px solid #004274;
}

div.jsvehiclemanager-vehicle-detail-full div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:hover img {
    background: #FFFFFF;
}

div.jsvehiclemanager-vehicle-detail-full div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:hover span.veh-main-info-value {
    color: #004274;
}

div.jsvehiclemanager-vehicle-detail-full div.jsvehiclemanager-vehicle-data div.vehicle-detail-veh-main-info:hover span.veh-main-info-title {
    background: #004274;
    color: #FFFFFF;
}

div.jsvehiclemanager-vehicle-detail-full div.fuel-portion {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.jsvehiclemanager-vehicle-detail-full div.fuel-portion div.fuel-portion-left span {
    color: #171717;
}

div.jsvehiclemanager-vehicle-detail-full div.fuel-portion div.fuel-portion-left div.fuel-portion-title {
    border-bottom: 1px solid #D4D4D4;
    color: #0a0a0a;
}

div.jsvehiclemanager-vehicle-detail-full div.fuel-portion div.fuel-portion-right {
    color: #171717;
}

div.jsvehiclemanager-vehicle-detail-full div.fuel-portion div.fuel-portion-right .mileages {
    color: #0a0a0a;
    margin: 0px;
}

div.jsvehiclemanager-vehicle-detail-full .vehicle-detail-section-heading {
    border: 1px solid #D4D4D4;
    border-left: 4px solid #004274;
    color: #0a0a0a;
    background: #f7f7f7;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-info-wrapper div.info-title {
    color: #171717;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-info-wrapper div.info-value {
    color: #464646;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-info-wrapper {
    border-left: 2px solid #D4D4D4;
}

div.jsvehiclemanager-vehicle-detail-full div.feature-section-section-wrapper .vehicle-detail-feature-section-heading {
    border-bottom: 1px solid #D4D4D4;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-tabs div#tabInner {
    border: 1px solid #D4D4D4;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-tabs ul li a.tab-links {
    border: 1px solid #D4D4D4;
    color: #0a0a0a;
    background: #f7f7f7;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-tabs ul li a.tab-links:last-child {
    border-right: 1px solid #D4D4D4;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-tabs ul li a.tab-links.blue {
    border-top: 2px solid #004274;
    color: #004274;
    background: #FFFFFF;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-section.seller-section div.seller-info-left-part {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-section.seller-section div.seller-info-left-part div.seller-image-wrap {
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-section.seller-section div.seller-info-left-part div.seller-info-title {
    border-bottom: 1px solid #D4D4D4;
    color: #004274;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-section.seller-section div.seller-info-left-part div.seller-info-value {
    color: #171717;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-section.seller-section div.seller-info-right-part div.send-message-bold {
    color: #171717;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-section.seller-section div.seller-info-right-part input.inputbox {
    border: 1px solid #D4D4D4;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-section.seller-section div.seller-info-right-part textarea {
    border: 1px solid #D4D4D4;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-section.seller-section div.seller-info-right-part button.send-message-button {
    background: #004274;
    color: #FFFFFF;
}

div.jsvehiclemanager-vehicle-detail-full div.feature-section-section-wrapper div.feature-section-info {
    color: #171717;
}

div.jsvehiclemanager-vehicle-detail-full div.vehicle-detail-description {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
    color: #171717;
}

div.vehicle-detail div.vehicle-detail-left-part div.veh-deatail-slide-wrap div.veh-main-img-wrp {
    border: 1px solid #D4D4D4;
}

div.vehicle-detail div.vehicle-detail-left-part div.veh-deatail-slide-wrap div.veh-deatail-slide-img-main-wrap div.veh-deatail-slide-img {
    border: 1px solid #D4D4D4;
}

div.veh-deatail-slide-wrap div.veh-main-img-wrp {
    border: 1px solid #D4D4D4;
}

div.veh-deatail-slide-wrap div.veh-deatail-slide-img-main-wrap div.veh-deatail-slide-img {
    border: 1px solid #D4D4D4;
}




/* Refine Search Pppup */

div.refine-search-popup {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.refine-search-popup div.refine-serach-tag {
    background: #004274;
    color: #FFFFFF;
}

div.overlay-for-popup {
    background: #004274;
}

div.refine-search-popup .popup-header {
    background: #004274;
    color: #FFFFFF;
}

div.refine-search-popup div.popup-bottom-buttons input {
    border: 1px solid #D4D4D4;
    color: #0a0a0a;
}

div.refine-search-popup div.popup-bottom-buttons input#search {
    color: #FFFFFF;
    background: #004274;
}


/* My Profile */

div.my-profile-wrapper div.my-profile-top-portion div.profile-left-part {
    border: 1px solid #004274;
}

div.my-profile-wrapper div.my-profile-top-portion div.profile-right-part .top-part {
    border-bottom: 1px solid #D4D4D4;
    color: #0a0a0a;
}

div.my-profile-wrapper div.my-profile-top-portion div.profile-right-part .top-part a {
    border: 1px solid #004274;
    background: #004274;
    color: #FFFFFF;
}

div.my-profile-wrapper div.my-profile-tabs a.tab-links {
    color: #464646;
    border-right: 1px solid #D4D4D4;
    border-top: 1px solid #D4D4D4;
    border-left: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.my-profile-wrapper div.my-profile-tabs a.tab-links.blue {
    color: #0a0a0a;
    border-top: 3px solid #004274;
    border-left: 1px solid #D4D4D4;
    border-right: 1px solid #D4D4D4;
    background: #FFF;
}

div.pictures_eyes div.pictures_eyes_in div.cm_vehicle_detail span.cm_vlb_price {
    background: #004274;
}

div.my-profile-wrapper div.my-profile-top-portion div.profile-right-part .bottom-part {
    color: #171717;
}


/* profile credits log tab */

div.plogh-wrp {
    border: 1px solid #D4D4D4;
}

div.plogh-wrp div.crdts-wrp {
    border-bottom: 1px solid #D4D4D4;
}

div.plogh-wrp div.crdts-wrp div.crdts-det-wrp {
    border: 1px solid #D4D4D4;
    box-shadow: 0 4px 4px -1px #cccccc;
    background: #fff;
}

div.plogh-wrp div.crdts-wrp div.crdts-det-wrp.tot-crdts div.credts-img-wrp {
    background: #518e11;
}

div.plogh-wrp div.crdts-wrp div.crdts-det-wrp.rem-crdts div.credts-img-wrp {
    background: #5637df;
}

div.plogh-wrp div.crdts-wrp div.crdts-det-wrp.spd-crdts div.credts-img-wrp {
    background: #d7484f;
}

div.plogh-wrp table.table {
    border: 1px solid #D4D4D4;
}

div.plogh-wrp table.table thead.tablehead {
    background: #f7f7f7;
    color: #171717;
}

div.plogh-wrp table.table tr td a {
    color: #004274;
}

div.plogh-wrp table.table tr td {
    color: #464646;
}

div.plogh-wrp table.table tr td.crd-txt {
    color: #171717;
}








/* Profile Vehicle Alert part */

div.veh-alert-tabl-wrapper {
    border: 1px solid #D4D4D4;
}

div.veh-alert-tabl-wrapper table.veh-alert-tabl {
    border: 1px solid #D4D4D4;
}

div.veh-alert-tabl-wrapper table.veh-alert-tabl thead.veh-alert-tab-head {
    background: #f7f7f7;
}

div.veh-alert-tabl-wrapper table.veh-alert-tabl thead.veh-alert-tab-head tr th {
    padding-top: 10px;
    color: #171717;
}

div.veh-alert-tabl-wrapper table.veh-alert-tabl tbody tr td span.veh-alert-tab-email {
    color: #004274;
}

div.veh-alert-tabl-wrapper table.veh-alert-tabl tbody tr td span.veh-alert-tab-type {
    color: #171717;
}

div.veh-alert-tabl-wrapper table.veh-alert-tabl tbody tr td span.veh-alert-tab-cri {
    color: #464646;
}

div.veh-alert-tabl-wrapper table.veh-alert-tabl tbody tr td.veh-alert-act a.actn-btn {
    border: 1px solid #D4D4D4;
}




/* Form Vehicle Image Part */

div.form-vehicle-main-img-wrapper {
    border: 1px solid #D4D4D4;
}

div.form-vehicle-small-img-main-wrapper div.img-button-wrap div.img-wrap {
    border: 1px solid #D4D4D4;
}

div.form-vehicle-small-img-main-wrapper div.img-button-wrap div.img-wrap div.backgroud-overlay-for-img {
    background: #004274;
}

div.form-vehicle-main-img-wrapper.img-wrap div.backgroud-overlay-for-img {
    background: #004274;
}


/*Vehicles By Type*/

div#jsvehiclemanager-vehicles-details a div.jsvehiclemanager-record-wraper {
    border: 1px solid #dbdbdc;
}

div#jsvehiclemanager-vehicles-details a div.jsvehiclemanager-record-wraper:hover {
    border-color: #004274;
}

div#jsvehiclemanager-vehicles-details a div.jsvehiclemanager-record-wraper div.jsvehiclemanager-record-types-title {
    color: #0a0a0a;
}

div#jsvehiclemanager-vehicles-details a div.jsvehiclemanager-record-wraper div.jsvehiclemanager-record-types-title span.jsvehiclemanager-record-number {
    color: #004274;
}



/* Vehicle list */

div.veh-select-optn-wrap {
    background: #f7f7f7;
    border: 1px solid #D4D4D4;
}

div.veh-select-optn-wrap div.veh-select-optn-wrapper div.veh-select-optn-right div.view-right span.view-right-text {
    color: #171717;
}

div.veh-select-optn-wrap div.veh-select-optn-wrapper div.veh-select-optn-left a.cm_mv_av {
    background: #FFF;
    color: #0a0a0a;
    border: 1px solid #d4d4d4;
}

div.veh-select-optn-wrap div.veh-select-optn-wrapper div.veh-select-optn-left a.veh-select-optn-short-btn {
    border: 1px solid #D4D4D4;
    background: #FFFFFF;
    color: #171717;
}

div.veh-select-optn-wrap div.veh-select-optn-wrapper div.veh-select-optn-left a.veh-select-optn-short-btn:hover {
    border: 1px solid #004274;
}

div.veh-select-optn-wrap div.veh-select-optn-wrapper div.veh-select-optn-left a.veh-select-optn-short-btn span.glyphicon {
    color: #23282d;
}

div.veh-select-optn-wrap div.veh-select-optn-wrapper div.veh-select-optn-right div.view-right a.th-list {
    border: 1px solid #004274;
    color: #0a0a0a;
}

div.veh-select-optn-wrap div.veh-select-optn-wrapper div.veh-select-optn-right div.view-right a.list {
    border: 1px solid #D4D4D4;
    color: #7c7c7c;
    background: #FFFFFF;
}

div.veh-select-optn-wrap div.veh-select-optn-wrapper div.veh-select-optn-right div.view-right a.list:hover {
    border: 1px solid #004274;
}

div.veh-list-featured {
    border-bottom: 3px solid #004274;
}

div.veh-list-featured span.veh-list-feature {
    background: #004274;
    ;
    color: #FFFFFF;
}

div.veh-list-wrapper div.veh-list-wrap {}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap {
    border-left: 1px solid #D4D4D4;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-top-wrap {
    border-bottom: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-top-wrap .veh-list-top-title {
    color: #004274;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-middle-wrap div.veh-list-middle-val {
    color: #464646;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-middle-wrap div.veh-list-middle-val span.veh-list-middle-tit {
    color: #171717;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-bottom-wrap span.veh-list-bottom-optn-wrap span.veh-list-bottom-optn {
    color: #171717;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-top-wrap .veh-list-top-price {
    border-left: 1px solid #D4D4D4;
    background: #004274;
    ;
    color: #FFFFFF;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-middle-wrap div.veh-list-middle-img {
    border: 1px solid #D4D4D4;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-bottom-wrap {
    border-top: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-bottom-wrap div.veh-list-bottom-btn-wrap div.veh-list-bottom-btns a.veh-list-bottom-btn {
    border: 1px solid #D4D4D4;
    background: #FFFFFF;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-bottom-wrap div.veh-list-bottom-btn-wrap div.veh-list-bottom-btns a.veh-list-bottom-btn.selected {
    border: 1px solid #004274;
}


/* search form  */

input.search-btn {
    color: #FFFFFF;
    border: 2px solid #004274;
    background: #004274;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.55);
    -webkit-box-shadow: -1px 10px 24px -3px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: -1px 10px 24px -3px rgba(0, 0, 0, 0.53);
    box-shadow: -1px 10px 24px -3px rgba(0, 0, 0, 0.53);
}

input.seller-list-btn.btn-search {
    color: #FFFFFF;
    border: 2px solid #004274;
    background: #004274;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.55);
    -webkit-box-shadow: -1px 3px 8px -3px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: -1px 3px 8px -3px rgba(0, 0, 0, 0.53);
    box-shadow: -1px 3px 8px -3px rgba(0, 0, 0, 0.53);
}

input.seller-list-btn.btn-reset {
    border: 1px solid #D4D4D4;
    color: #0a0a0a;
    background: #fff;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.55);
    -webkit-box-shadow: -1px 3px 8px -3px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: -1px 3px 8px -3px rgba(0, 0, 0, 0.53);
    box-shadow: -1px 3px 8px -3px rgba(0, 0, 0, 0.53);
}

div.form-group div.search-fm-map-optn input.marker-button {
    border: 1px solid #D4D4D4;
    background: #0a0a0a;
}

div.form-group label {
    color: #171717;
}





/* form vehicle  */

.veh-fm-checkbox-heading {
    border: 1px solid #D4D4D4;
    background: #004274;
    color: #FFFFFF;
}

.veh-fm-secsion-heding {
    border-bottom: 2px solid #D4D4D4;
}

div.veh-fm-checkbox {
    border: 1px solid #D4D4D4;
}

input.inputval,
input.inputval:disabled {
    border: 1px solid #D4D4D4;
    color: #FFFFFF;
}

input.veh-save-btn {
    border: 2px solid #004274;
    background: #004274;
    color: #FFFFFF;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.55);
    -webkit-box-shadow: -1px 10px 24px -3px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: -1px 10px 24px -3px rgba(0, 0, 0, 0.53);
    box-shadow: -1px 10px 24px -3px rgba(0, 0, 0, 0.53);
}

div.fileUpload input.upload {
    background: #004274;
    color: #FFFFFF;
    border: 0px;
    outline: 0px;
}

div.fileUpload {
    background: #004274;
    !important;
    color: #FFFFFF !important;
    border: 1px solid #004274;
    !important;
    border-radius: 0px;
    outline: 1px solid #004274;
    !important;
}


/* Vehicles list 2*/

div.veh-list-vert-featured {
    border-bottom: 3px solid #004274;
}

div.veh-list-vert-featured span.veh-list-vert-feature {
    background: #004274;
    ;
    color: #FFFFFF;
}

div.veh-list-vert-wrap div.veh-list-vert .veh-list-vert-price {
    color: #FFFFFF;
    background-color: rgba( 0,66,116, 0.79)
}

div.veh-list-vert-wrap div.veh-list-vert div.veh-list-vert-caption div.veh-list-vert-heading {
    border-bottom: 1px solid #D4D4D4;
}

div.veh-list-vert-wrap div.veh-list-vert div.veh-list-vert-caption div.veh-list-vert-heading .veh-list-vert-head {}

div.veh-list-vert-wrap div.veh-list-vert div.veh-list-vert-contn-wrap div.veh-list-vert-contnt-btn a.veh-list-vert-btn {
    display: inline-block;
    border: 1px solid #D4D4D4;
}

div.veh-list-vert-wrap div.veh-list-vert div.veh-list-vert-contn-wrap div.veh-list-vert-contnt-btn a.veh-list-vert-btn.selected {
    display: inline-block;
    border: 1px solid #004274;
}

div.veh-list-vert-wrap div.veh-list-vert div.veh-list-vert-bottom {
    border-top: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-list-vert-wrap div.veh-list-vert div.veh-list-vert-bottom span.veh-list-vert-bottom-optn {
    border-right: 1px solid #D4D4D4;
    color: #171717;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-bottom-wrap div.veh-list-side-bottom-optn-wrap span.veh-list-side-bottom-optn {
    color: #171717;
}

div.veh-list-wrapper div.veh-list-wrap div.veh-list div.veh-list-data-wrap div.veh-list-bottom-wrap div.veh-list-bottom-optn-wrap span.veh-list-bottom-optn {
    color: #171717;
}

div.veh-list-vert-wrap div.veh-list-vert div.veh-list-vert-bottom span.veh-list-vert-bottom-optn span.veh-list-vert-bottom-optn-condn {
    border: 1px solid #D4D4D4;
    background: #004274;
    color: #FFFFFF;
}


/* vehicles list 2 side */

div.veh-list-side-wrap div.veh-list-side-vert-featured {
    border-bottom: 3px solid #004274;
}

div.veh-list-side-wrap div.veh-list-side-vert-featured span.veh-list-side-vert-feature {
    background: #004274;
    color: #FFFFFF;
}

div.veh-list-side-wrap div.veh-list-side-vert .veh-list-side-vert-price {
    color: #FFFFFF;
    background-color: rgba( 0,66,116, 0.79)
}

div.veh-list-side-wrap div.veh-list-side-vert div.veh-list-side-vert-caption div.veh-list-side-vert-heading {
    border-bottom: 1px solid #D4D4D4;
}

div.veh-list-side-wrap div.veh-list-side-vert div.veh-list-side-vert-caption div.veh-list-side-vert-heading .veh-list-side-vert-head {}

div.veh-list-side-wrap div.veh-list-side-vert div.veh-list-side-vert-contn-wrap div.veh-list-side-vert-contnt-btn a.veh-list-side-vert-btn {
    border: 1px solid #D4D4D4;
}

div.veh-list-side-wrap div.veh-list-side-vert div.veh-list-side-vert-contn-wrap div.veh-list-side-vert-contnt-btn a.veh-list-side-vert-btn.selected {
    border: 1px solid #004274;
}

div.veh-list-side-wrap div.veh-list-side-vert div.veh-list-side-vert-bottom {
    border-top: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-list-side-wrap div.veh-list-side-vert div.veh-list-side-vert-bottom span.veh-list-side-vert-bottom-optn {
    border-right: 1px solid #D4D4D4;
    color: #171717;
}

div.veh-list-side-wrap div.veh-list-side-vert div.veh-list-side-vert-bottom span.veh-list-side-vert-bottom-optn span.veh-list-side-vert-bottom-optn-condn {
    background: #004274;
    color: #FFFFFF;
}


/*End*/


/* Vehicles list 3*/

a.list-vehicle-title-link {
    color: #004274;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-wrap .veh-form-side-heading span.veh-form-side-tit2 {
    color: #004274;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-wrap input.marker-button {
    border: 1px solid #D4D4D4;
    background: #004274;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-wrap div.search-btn-list-wrap {
    border-top: 1px solid #D4D4D4;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-wrap div.search-btn-list-wrap input.search-btn-list {
    border: 1px solid #D4D4D4;
    color: #FFFFFF;
    background: #004274;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-wrap div.search-btn-list-wrap input.reset-btn-list {
    border: 1px solid #D4D4D4;
    color: #0a0a0a;
    background: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-wrap div.search-btn-list-wrap input.cancel-btn-list {
    border: 1px solid #D4D4D4;
    color: #0a0a0a;
    background: #f7f7f7;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-wrap div.veh-form-side-wrap form {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-wrap .veh-form-side-heading span.veh-form-side-tit1 {
    color: #0a0a0a;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-featured {
    border-bottom: 3px solid #004274;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-featured span.veh-list-side-feature {
    background-color: #004274;
    color: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap {
    background-color: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-top-wrap div.veh-list-side-img-wrap {
    border-right: 1px solid #D4D4D4;
    background: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-top-wrap div.veh-list-side-data-wrap {
    background: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-top-wrap div.veh-list-side-data-wrap div.veh-list-side-top-wrap {
    border-bottom: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-top-wrap div.veh-list-side-data-wrap div.veh-list-side-top-wrap .veh-list-side-top-price {
    border-left: 1px solid #D4D4D4;
    background: #004274;
    color: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-bottom-wrap {
    border-top: 1px solid #D4D4D4;
    background: #f7f7f7;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-bottom-wrap div.veh-list-side-bottom-btn-wrap div.veh-list-side-bottom-btns a.veh-list-side-bottom-btn {
    border: 1px solid #D4D4D4;
    background: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-bottom-wrap div.veh-list-side-bottom-btn-wrap div.veh-list-side-bottom-btns a.veh-list-side-bottom-btn.selected {
    border: 1px solid #004274;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-top-wrap div.veh-list-side-data-wrap div.veh-list-side-middle-img {
    border: 1px solid #D4D4D4;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-right-wrap .veh-form-side-heading {
    color: #004274;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-right-wrap .veh-form-side-heading .veh-form-side-tit1 {
    color: #0a0a0a;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-right-wrap input.marker-button {
    border: 1px solid #D4D4D4;
    background: #004274;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-right-wrap div.search-btn-list-wrap {
    border-top: 1px solid #D4D4D4;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-right-wrap div.search-btn-list-wrap input.search-btn-list {
    border: 0;
    background: #004274;
    color: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-right-wrap div.search-btn-list-wrap input.reset-btn-list {
    border: 1px solid #D4D4D4;
    color: #171717;
    background: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-right-wrap div.search-btn-list-wrap input.cancel-btn-list {
    border: 1px solid #D4D4D4;
    ;
    color: #171717;
    background: #FFFFFF;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-sides-right-wrap div.veh-form-side-wrap form {
    border: 1px solid #D4D4D4;
    background: #f7f7f7;
}



/* Pagination */

ul.pagination li.active span {
    background: #004274;
    border-color: #D4D4D4;
}

ul.pagination li.active span:hover {
    border: 1px solid #D4D4D4;
    color: #FFFFFF;
    background: #004274;
}

ul.pagination li a {
    border: 1px solid #D4D4D4;
    color: #004274;
}

ul.pagination li a:hover {
    color: #FFFFFF;
    background: #004274;
}




/*popup modals*/

. div.modal-wrp {
    border: 1px solid #004274;
    background: #f7f7f7;
}

div.modal-wrp div.modal-data-wrp h2.modal-title {
    color: #0a0a0a;
    border-bottom: 1px solid #004274;
    font-weight: 500;
}

div.modal-wrp div.modal-data-wrp a.modal-close-icon-wrap i {
    color: #000000;
}

div.modal-wrp div.modal-data-wrp div.modal-left-image-wrp {
    background: #004274;
}

div.modal-wrp div.modal-data-wrp div.modal-body {
    color: #464646;
}

div.modal-wrp div.modal-data-wrp div.modal-body div.modal-form-wrp div.modal-form-btn input.modal-form-btn-inpf {
    background: #004274;
    color: #FFFFFF;
    border: 0px;
}

div.modal-wrp div.modal-data-wrp div.modal-body div.modal-form-wrp div.modal-form-btn input.modal-form-btn-inpf {
    background: #004274;
    color: #FFFFFF;
    border: 0px;
}

div.news-list-wrap div.thumbnail {
    box-shadow: 0px 3px 0px #cfcfcf;
}

div.news-list-wrap div.thumbnail a.btn.btn-primary {
    background: #004274;
    color: #FFFFFF;
    border: 0px;
}

ul.breadcrumb {
    background: #f7f7f7;
    border: 1px solid #D4D4D4;
}

ul.breadcrumb li a {
    color: #004274;
}


/*error message*/

div.cm_error_message_wrapper.background_grad {
    border: 1px solid #D4D4D4;
}

div.cm_error_message_wrapper div.cm_error_message_button a.primary-btn {
    background: #004274;
    color: #FFFFFF;
}

div.cm_error_message_wrapper div.cm_error_message_button a.secondry-btn {
    border: 1px solid #004274;
    color: #004274;
    background: #f7f7f7;
}


/*featured vehicle*/

div.featured-vehicle-section div.vehicle-detail-related-wrappper {
    border: 1px solid #D4D4D4;
}




/*vehicle lsiting*/

div.condition-title-listing.full-width {
    background: #fff;
}

div.condition-title-listing.three-column {
    background: #fff;
    border-right: 1px solid #D4D4D4;
}


/* Login Page */

div.login-popup form#loginform-custom p.login-username input.input {
    color: #B9BBBD;
    border: 1px solid #D4D4D4;
}

div.login-popup form#loginform-custom p.login-password input.input {
    color: #B9BBBD;
    border: 1px solid #D4D4D4;
}

div.login-popup form#loginform-custom p.login-remember label {
    color: #4B4B4D;
}

div.login-popup form#loginform-custom p.login-submit input.button-primary {
    background: #004274;
    color: #ffffff;
}

div.login-popup div.login-or-area {
    background: #ffffff;
    color: #004274;
    border-top: 1px solid #D4D4D4;
    border-bottom: 1px solid #D4D4D4
}

div.modal-wrp div.modal-data-wrp div.modal-body div.modal-desc {
    background: #ffffff;
    border: 1px solid #D4D4D4;
}


/*terms and conditions*/

div.termsconditions-checkbox {
    border: 1px solid #D4D4D4;
}

div.cm_veh_vis_wrapper div.cm_veh_vis_message {
    border: 1px solid #004274;
    color: #0a0a0a;
}

div.cm_veh_vis_wrapper div.cm_veh_vis_message a.cm_veh_vis_btn {
    background: #004274;
    color: #FFFFFF;
}


/*vehicle listing*/

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-top-wrap div.veh-list-side-data-wrap div.veh-list-side-middle-wrap div.veh-list-side-middle-val {
    color: #464646;
}

div.veh-list-side-wrapper div.veh-list-sides div.veh-list-side-wrap div.veh-list-side div.veh-list-side-top-wrap div.veh-list-side-data-wrap div.veh-list-side-middle-wrap div.veh-list-side-middle-val span.veh-list-side-middle-tit {
    color: #171717;
}

div.veh-list-vert-wrap div.veh-list-vert div.veh-list-vert-contn-wrap div.veh-list-vert-contnt {
    color: #464646;
}

div.veh-list-vert-wrap div.veh-list-vert div.veh-list-vert-contn-wrap div.veh-list-vert-contnt span.veh-list-vert-contnt-tit {
    color: #171717;
}

div.veh-list-side-wrap div.veh-list-side-vert div.veh-list-side-vert-contn-wrap div.veh-list-side-vert-contnt {
    color: #464646;
}

div.veh-list-side-wrap div.veh-list-side-vert div.veh-list-side-vert-contn-wrap div.veh-list-side-vert-contnt span.veh-list-side-vert-contnt-tit {
    color: #171717;
}

#foxiswitch_caption div.jsvehiclemanager-ss-data-wrapper {
    border-left: 5px solid #004274;
}

#foxiswitch_caption div.jsvehiclemanager-ss-data-wrapper div.jsvehiclemanager-ss-data-price {
    background: #004274;
}


/*thank you*/

div.veh-thank-wrap {
    border: 1px solid #D4D4D4;
}

div.veh-thank-wrap div.veh-thank-button-wrap a.veh-thank-button-back {
    border: 1px solid #004274;
    background: #004274;
    color: #FFFFFF;
}

div.veh-thank-wrap div.veh-thank-title-wrap {
    color: #0a0a0a;
}

div.veh-thank-wrap div.veh-thank-massge-wrap {
    color: #171717;
}




/*cookie law*/

div#cookie-law-info-bar {
    border-color: #004274;
    !important;
}

.cli-plugin-button,
.cli-plugin-button:visited,
.medium.cli-plugin-button,
.medium.cli-plugin-button:visited {
    background: #004274;
    !important;
}


/*footer copyright and paginantion*/

footer#footer_custom {
    margin-top: 0px;
    float: left;
    width: 100%;
}
div.cmf_copyright a.footer_logo {
    border-right: 1px solid #FFF;
}

div#jsvehiclemanager-pagination a.page-numbers.prev {
    color: #fff;
    background-color: #004274;
}

div#jsvehiclemanager-pagination a.page-numbers.next {
    color: #fff;
    background-color: #004274;
}

div#jsvehiclemanager-pagination span.page-numbers.current {
    color: #fff;
    background-color: #004274;
}

div#jsvehiclemanager-pagination a.page-numbers:hover {
    color: #fff;
    background-color: #004274;
}

div.cm_slicksliderwrapper div.featuredvehicles-list-wrap div.thumbnail {
    border: 1px solid #d4d4d4;
}

form#commentform p input[type=submit] {
    border: 1px solid #004274;
    background: #004274;
    color: #FFFFFF;
}

div.post_tag_wrapper .tag_link {
    background: #f7f7f7;
}

div.post_tag_wrapper .tag_link:hover {
    border-color: #004274;
}

div.widget_search form#searchform input#searchsubmit {
    border: 1px solid #004274;
    background: #004274;
    color: #FFFFFF;
}

div.blog_list_wrapper div.nr_excerpt a.nr_readmore {
    border: 1px solid #004274;
    background: #004274;
    color: #FFFFFF;
}

div.blog_list_wrapper div.nr_excerpt.bigfont input[type='submit'] {
    border: 1px solid #004274;
    background: #004274;
    color: #FFFFFF;
}

h3.nr_title a.postitle {
    color: #004274;
    ?>
}

div.pos-title-border-bottom {
    border-bottom: 1px solid #d4d4d4;
}

div.widget_recent_entries ul li,
div.widget_rss ul li,
div.widget_nav_menu ul li,
div.widget_search ul li,
div.widget_recent_comments ul li,
div.widget_archive ul li,
div.widget_categories ul li,
div.widget_meta ul li,
div.widget_pages ul li {
    border-bottom: 1px solid #d4d4d4;
}

div.cm_newestvehicle3.cm_wrapper div.container {
    border-bottom: 1px solid #d4d4d4;
}

div.new-veh-det-wrap div.new-veh-det-box div.new-veh-det-bottom span.new-veh-det-data:last-child {
    background: #f7f7f7;
}

div.imagetext1.cm_wrapper {
    border-bottom: 1px solid #d4d4d4;
}

div.cm_popularvehicle2.cm_wrapper div.container {
    border-bottom: 1px solid #d4d4d4;
}

div.cm_popularvehicle2.cm_wrapper {
    border-top: 1px solid #d4d4d4;
}

div.row.veh-3featurebox-style3 div.container {
    border-bottom: 1px solid #d4d4d4;
}

div.veh-3featurebox-style2 div.container {
    border-bottom: 1px solid #d4d4d4;
}

div.profile-dashboard div.pro-dashb-srtveh-wrp .pro-dashb-srtveh-title.purchase {
    background: #84716b;
}

div.profile-dashboard div.pro-dashb-srtveh-wrp .pro-dashb-srtveh-title.log {
    background: #0098da;
}

div.widget_categories ul.children li:first-child {
    border-top: 1px solid #d4d4d4;
}

div.widget_pages ul.children li:first-child {
    border-top: 1px solid #d4d4d4;
}
div.thumbnail div.imagewrapper-link-overlay{
    background: #004274;
}

div.veh-looking-sale-btn-wrap-style-2 div.veh-looking{
    border-top: 5px solid #004274;
    background:#004274;
    color:#fff;
}
div.veh-looking-sale-btn-wrap-style-2 div.veh-sale{
    border-top: 5px solid #004274;
    color:#fff;
}

div.veh-looking-sale-btn-wrap-style-2 div.veh-sale-looking-button-overlay{
    background:#004274;
}
div.veh-looking-sale-btn-wrap-style-2 a.veh-sale-looking-button{
    color:#fff;
    border:1px solid #fff;
}


div.veh-looking-sale-btn-wrap-style-2 div.veh-looking .veh-looking-txt-heading {
    color:#171717;
}
div.veh-looking-sale-btn-wrap-style-2 div.veh-sale .veh-sale-txt-heading {
    color:#171717;
}

div.veh-looking-sale-btn-wrap-style-2 div.veh-looking .veh-looking-txt {
    color:#464646;
}
div.veh-looking-sale-btn-wrap-style-2 div.veh-sale .veh-sale-txt {
    color:#464646;
}

div.veh-looking-sale-btn-wrap-style-2 div.veh-looking:hover .veh-looking-txt-heading {
    color:#fff;
}
div.veh-looking-sale-btn-wrap-style-2 div.veh-sale:hover .veh-sale-txt-heading {
    color:#fff;
}

div.veh-looking-sale-btn-wrap-style-2 div.veh-looking:hover .veh-looking-txt {
    color:#fff;
}
div.veh-looking-sale-btn-wrap-style-2 div.veh-sale:hover .veh-sale-txt {
    color:#fff;
}

div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-single span.veh-stats-img-wrap i{
    background: #23282d;
}
div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-single span.veh-stats-img-wrap{
    border:1px solid #004274;
}
div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-single span.veh-stats-img-wrap div.txt-algin h4{
   color:#23282d; 
}

div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-desc h4{
   color:#23282d; 
}

div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-single div.txt-algin h4{
   color:#23282d; 
}
div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-single div.txt-algin p{
    color:#7c7c7c;
}
div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-title span.carmanager-stats-border-left {
    border-bottom: 3px solid #004274;
}
div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-title span.carmanager-stats-border-center{
    background: #004274;
}
div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-single:hover span.veh-stats-img-wrap i{
    background: #004274;
}
div.carmanager-stats-module-wrapper div.carmanager-stats-module-left div.car-manager-stats-module-single:hover div.txt-algin h4{
   color:#004274; 
}

div.count-main-wrap div.count-wrap.style4 span.count-wrapper{
    color:#fff;
    border-left: 3px solid #fff;
}
div.count-main-wrap div.count-wrap.style4 span.count-wrapper span.countbox-primaryborder{
    background:#004274;
}

div.newsrumors-silde-main-wrap div.newsrumors-silde-heading-wrap span.news-slide-heading{
    border-bottom: 2px solid #004274;
}

div.newsrumors-silde-main-wrap div.newsrumors-silde-heading-wrap .newsrumors-pg-tit{
    color:#0a0a0a;
}
div.news-slide-wrap div.newsrumors-slide-rightpart .newsrumorslide-title{
    color:#004274;
}
div.news-slide-wrap div.newsrumors-slide-rightpart .newsrumorslide-title span.news-slide-heading{
    border-bottom: 2px solid #004274;
}
div.news-slide-wrap div.newsrumors-slide-rightpart .news-slide-date-coment{
    color:#7c7c7c;
}
div.news-slide-wrap div.newsrumors-slide-rightpart a.btn.btn-primary{
    background:#004274;
}
div.newsrumors-silde-main-wrap{
    border-bottom:3px solid #004274;
}

div.clients-testi.style2  div.clients-testi-style2-left-part .clients-testi-pg-tit{
    color:#23282d;
}
div.clients-testi.style2  div.clients-testi-style2-left-part .clients-testi-pg-tit span.testi-heading{
    border-bottom: 3px solid #004274;
}

div.clients-testi.style2  div.clients-testi-style2-left-part .testi-style2-left-title{
    color: #464646;
}
div.clients-testi.style2  div.clients-testi-style2-left-part .testi-style2-left-text{
    color:#7c7c7c;
}
div.clients-testi.style2 div.carousel blockquote .testi-txt h4.testiathor{
    color:#004274;
}

div.style2 div.main-wrap h2.vehicles-heading span.vehicles-headings-wrap{
        color:#fff;
}
div.style2 div.main-wrap .vehicles-text-wrap{
    color:#fff;
}

a.vehiclemakes.style2 div.vehicle-by-types-style2-img span.vehicle-by-types-style2-border1{
    background:#004274;
}

a.vehiclemakes.style2 div.vehicle-by-types-style2-img span.vehicle-by-types-style2-border2{
    background:#004274;
}

a.vehiclemakes.style2:hover div.vehicle-by-types-style2-background{
    background:#004274;
}


a.vehiclemakes.style2:hover div.vehicle-by-types-style2-img span.vehicle-by-types-style2-border1{
    background:#fff;
}

a.vehiclemakes.style2:hover div.vehicle-by-types-style2-img span.vehicle-by-types-style2-border2{
    background:#fff;
}
a.vehiclemakes.style2 div.vehicle-by-types-style2-text{
    color:#fff;
}
div.carmanager-stats-module-wrapper{
    border-top:3px solid #d4d4d4;
}
.jsvm-ad-wrap{
	width:1170px;
	float:left;
}

.adslot_1 {  
	display:inline-block;
	width:737px;
	height:150px; 
}
.user_seller_list_filter_form_wrapper{
    background:#f7f7f7;
    border:1px solid #d4d4d5;
}


a.vehicle-detail-map-wrapper div.vdm-image-wrapper{border:1px solid #d4d4d5;}

a.vehicle-detail-map-wrapper div.vdm-top-portion{border-bottom:1px solid #004274;color:#004274;background:#f7f7f7;}
a.vehicle-detail-map-wrapper div.vdm-bottom-portion div.vdm-bottom-portion-left div.vdm-condition{display: inline-block;padding: 4px;text-align: center;}
a.vehicle-detail-map-wrapper div.vdm-bottom-portion div.vdm-bottom-portion-left div.vdm-fueltype{color:#0a0a0a;}
a.vehicle-detail-map-wrapper div.vdm-bottom-portion div.vdm-bottom-portion-right{color:#fff;background:#004274;}
a.vehicle-detail-map-wrapper{ font-family: Roboto !important;font-style:  ;font-weight: 300 ;font-size: 14px;line-height: 14px ;
}


a.seller-detail-map-wrapper div.vdm-image-wrapper{border:1px solid #d4d4d5;}
a.seller-detail-map-wrapper div.vdm-top-portion{border-bottom:1px solid #004274;color:#004274;background:#f7f7f7;}
a.seller-detail-map-wrapper{ font-family: Roboto !important;font-style:  ;font-weight: 300 ;font-size: 14px;line-height: 14px ;
}

@media screen and (max-width:782px) {
	.adslot_1 { 
		display:inline-block;
		width: 728px ;
		height: 90px ;
	} 
	.jsvm-ad-wrap{width:782px;}
}
@media screen and (max-width:600px) {
	.adslot_1 { display:inline-block;width: 468px ; height: 60px ; }
	.jsvm-ad-wrap{width:600px !important;}
}

@media screen and (max-width:400px) {
	.adslot_1 { display:inline-block;width: 320px ; height: 100px; }
	.jsvm-ad-wrap{width:400px !important; }
	
}

</style>

<link rel='stylesheet' id='jquery-foxiswitch-0.2-css'  href='https://titleautos.nl/wp-content/themes/car-manager/css/jquery-foxiswitch-0.2.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='fontawesome-css'  href='https://titleautos.nl/wp-content/themes/car-manager/css/font-awesome.min.css?ver=4.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='js_composer_front-css'  href='https://titleautos.nl/wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=5.5.2' type='text/css' media='all' />
<link rel='stylesheet' id='redux-google-fonts-car_manager_options-css'  href='https://fonts.googleapis.com/css?family=Lato%3A400%2C700%7CRoboto%3A400%2C300%7CBasic%3A400&#038;subset=latin&#038;ver=1536438344' type='text/css' media='all' />
<--
<script type='text/javascript' src="<?php echo base_url();?>dist/js/jquery-3.2.1.min.js"></script>
-->
<!--
<script type='text/javascript' src='https://titleautos.nl/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>-->
<script type='text/javascript' src="<?php echo base_url();?>dist/js/jquery-ui.js"></script>
<!--
<script type='text/javascript' src='https://titleautos.nl/wp-content/plugins/revslider/public/assets/js/jquery.themepunch.tools.min.js?ver=5.4.8'></script>
<script type='text/javascript' src='https://titleautos.nl/wp-content/plugins/revslider/public/assets/js/jquery.themepunch.revolution.min.js?ver=5.4.8'></script>
-->
<!--[if IE]>
<script type='text/javascript' src='https://titleautos.nl/wp-content/themes/car-manager/js/html5shiv.js?ver=4.9.8'></script>
<![endif]-->
<!--[if IE]>
<script type='text/javascript' src='https://titleautos.nl/wp-content/themes/car-manager/js/respond.min.js?ver=4.9.8'></script>
<![endif]-->

		<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
		<meta name="generator" content="Powered by WPBakery Page Builder - drag and drop page builder for WordPress."/>
<!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="https://titleautos.nl/wp-content/plugins/js_composer/assets/css/vc_lte_ie9.min.css" media="screen"><![endif]--><meta name="generator" content="Powered by Slider Revolution 5.4.8 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
<script type="text/javascript">function setREVStartSize(e){									
						try{ e.c=jQuery(e.c);var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
							if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})					
						}catch(d){console.log("Failure at Presize of Slider:"+d)}						
					};</script>
<style type="text/css" title="dynamic-css" class="options-output">.site-header{padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;}h2.site-description{font-family:Lato;line-height:20px;font-weight:normal;font-style:normal;font-size:13px;}h2.site-description{font-family:Roboto;line-height:14px;font-weight:400;font-style:normal;font-size:14px;}h2.site-description{font-family:Roboto;line-height:14px;font-weight:300;font-style:normal;font-size:14px;}h2.site-description{font-family:Lato;line-height:20px;font-weight:normal;font-style:normal;font-size:13px;}h2.site-description{font-family:Basic;line-height:35px;font-weight:400;font-style:normal;font-size:35px;}h2.site-description{font-family:Basic;line-height:27px;font-weight:400;font-style:normal;font-size:27px;}h2.site-description{font-family:Basic;line-height:30px;font-weight:400;font-style:normal;font-size:24px;}h2.site-description{font-family:Lato;line-height:30px;font-weight:400;font-style:normal;font-size:21px;}h2.site-description{font-family:Lato;line-height:25px;font-weight:400;font-style:normal;font-size:18px;}h2.site-description{font-family:Lato;line-height:30px;font-weight:700;font-style:normal;font-size:15px;}</style><noscript><style type="text/css"> .wpb_animate_when_almost_visible { opacity: 1; }</style></noscript></head>
<body data-rsssl=1 class="page-template page-template-templates page-template-template-fullwidth page-template-templatestemplate-fullwidth-php page page-id-27  fixed_top_menu wpb-js-composer js-comp-ver-5.5.2 vc_responsive" >
		
	<header data-spy="affix" data-offset-top="1" class="menu_header">
				<!-- Fixed navbar -->
		<nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#"><img src="<?php echo base_url();?>dist/images/logo.png" height="100" width="120"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="<?php echo base_url();?>">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?php echo base_url();?>vehicles/vehicle_list">Occassions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="<?php echo base_url();?>vehicles/sold">Zoekopdracht</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="<?php echo base_url();?>contactus">Contact</a>
          </li>
          
        </ul>
        
      </div>
    </nav>
	</header>
	<!-- /.navbar -->
	<body>
     
<div class="container-fluid">
    
    <div class="veh-detail-top-portion" >
        <h3 class="make-model"><?php echo $query[0]->make ; ?>&nbsp;<?php echo $query[0]->model ; ?>&nbsp;<?php echo $query[0]->year ; ?></h3>

                <h3 class="vehicle-detail-price">
            € <?php echo $query[0]->sellprice;?>        </h3>
    </div>
        <div class="vehicle-top-portion-button bigfont" >
                        
                            <a title="PDF" target="_blank" class="text-muted" href="https://titleautos.nl/?page_id=27&#038;jsvmme=vehicle&#038;jsvmlt=pdf&#038;jsvehiclemanagerid=39"><img src="<?php echo base_url();?>dist/images/pdf-2.png" alt="PDF Icon" title="PdF" />PDF</a>
                    <a title="Print" id="print-link" class="text-muted" href="" data-vehicleid="39"><img src="<?php echo base_url();?>dist/images/detail-print.png" alt="Print Icon" title="Print" /> Afdrukken</a>
                    </div>
        <div class="veh-deatail-slide-wrap">
        <div class="veh-main-img-wrp" >
        <?php
        $imagepath = ""; ?>
                        <img alt="Vehicle Image" title="Vehicle Image" src="<?php echo base_url();?>uploads/files/<?php echo $images->result()[0]->file_name;?>" id="main-image" data-imagenumber="0" />
                    </div>
        <div class="veh-deatail-slide-img-main-wrap" >
        <?php
        $i=0;
         foreach ($images->result() as $row){
            $imgclass = 'changed';
            $imagepath = base_url()."uploads/files/".$row->file_name; ?>
         
            <div class="veh-deatail-slide-img">
            <img alt="Vehicle Detail Slide Image" title="Vehicle Detail Slide Image" src="<?php echo base_url()."uploads/files/".$row->file_name;?>" class="img-responsive changed"  data-file='https://titleautos.nl/wp-content/uploads/jsvehiclemanager_data/data/vehicle/vehicle_39/' data-vehicledetail = "1" data-filename='<?php echo $row->file_name;?>'  data-imagenumber="<?php echo $i; ?>" />
            </div>
            <?php
            $i++;
        }
        ?>
                                </div>
    </div>
    <div class="jsvehiclemanager-vehicle-detail-full">
        <div class="jsvehiclemanager-vehicle-data">
            <div class="vehicle-detail-veh-main-info">
                <img alt="Condition Icon" title="Condition" src="<?php echo base_url();?>dist/images/condion-s.png"/>
                <span class="veh-main-info-value bigfont">Occassion</span><!--end of middle-sec-value -->
                <span class="veh-main-info-title">Conditie</span><!--end of bottom-sec-value -->
            </div>
            <div class="vehicle-detail-veh-main-info">
                <img alt="Mileages Icon" title="Mileages" src="<?php echo base_url();?>dist/images/milage-s.png"/>
                <span class="veh-main-info-value bigfont">
                    <?php echo $query[0]->mileage." ";?>KM              </span><!--end of middle-sec-value -->
                <span class="veh-main-info-title">Kilometerstand</span><!--end of bottom-sec-value -->
            </div>
            <div class="vehicle-detail-veh-main-info">
                <img alt="Fuel Icon" title="Fuel" src="<?php echo base_url();?>dist/images/fuel-s.png"/>
                <span class="veh-main-info-value bigfont"><?php echo $query[0]->fueltype;?></span><!--end of middle-sec-value -->
                <span class="veh-main-info-title">Brandstof</span><!--end of bottom-sec-value -->
            </div>
            <div class="vehicle-detail-veh-main-info">
                <img alt="Engine Capacity Icon" title="Engine Capacity" src="<?php echo base_url();?>dist/images/power-s.png"/>
                <span class="veh-main-info-value bigfont"><?php echo $query[0]->enginevolume;?></span><!--end of middle-sec-value -->
                <span class="veh-main-info-title">Motorinhoud</span><!--end of bottom-sec-value -->
            </div>
            <div class="vehicle-detail-veh-main-info">
                <img alt="Transmission Icon" title="Transmission" src="<?php echo base_url();?>dist/images/transmission-s.png"/>
                <span class="veh-main-info-value bigfont"><?php echo $query[0]->transmission;?></span><!--end of middle-sec-value -->
                <span class="veh-main-info-title">Transmissie</span><!--end of bottom-sec-value -->
            </div>
        </div>
                <div id="tabs" class="tabs vehicle-detail-tabs">
            <ul>
                <li><a class="tab-links blue" href="#overview">Algemeen</a></li>
                                    <li><a class="tab-links" href="#features">Kenmerken</a> </li>
                                                    <li><a class="tab-links" href="#gallery">Afbeeldingen</a></li>
                            </ul>
            <div id="tabInner">
                <div id="overview">
                                        <h6 class="vehicle-detail-section-heading" >
                        Beschrijving                    </h6>
                    <div class="vehicle-detail-description" >
                        <p><?php echo $query[0]->description;?></p>
                    </div>
                                        <h6 class="vehicle-detail-section-heading" >
                        Specificaties                   </h6>
                    <div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Voertuig type:
                </div>
                <div class="info-value" >
                    <?php echo $query[0]->vehicletype ; ?>
                </div>
            </div><div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Merk:
                </div>
                <div class="info-value" >
                <?php echo $query[0]->make ; ?>
                </div>
            </div><div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Model:
                </div>
                <div class="info-value" >
                <?php echo $query[0]->model ; ?>
                </div>
            </div><div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Bouwjaar:
                </div>
                <div class="info-value" >
                <?php echo $query[0]->year ; ?>
                </div>
            </div><div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Kenteken:
                </div>
                <div class="info-value" >
                    <?php echo $query[0]->licenseplate ; ?>
                </div>
            </div>                                      <h6 class="vehicle-detail-section-heading" >
                        Aandrijflijn                    </h6>
                    <div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Aantal cilinders:
                </div>
                <div class="info-value" >
                <?php echo $query[0]->cylinders ; ?>
                </div>
            </div><div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Transmissie:
                </div>
                <div class="info-value" >
                <?php echo $query[0]->transmission ; ?>
                </div>
            </div><div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Motorinhoud:
                </div>
                <div class="info-value" >
                    <?php echo $query[0]->enginevolume;?>
                </div>
            </div><div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Vermogen:
                </div>
                <div class="info-value" >
                    <?php echo $query[0]->enginepower;?>pk
                </div>
            </div><div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    CO2 uitstoot:
                </div>
                <div class="info-value" >
                    ---
                </div>
            </div>                                                          <h6 class="vehicle-detail-section-heading" >
                        Uiterlijk                   </h6>
                    <div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Conditie:
                </div>
                <div class="info-value" >
                    Occassion
                </div>
            </div><div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Kleur exterieur:
                </div>
                <div class="info-value" >
                    <?php echo $query[0]->exteriourcolour;?>
                </div>
            </div>                                                          <h6 class="vehicle-detail-section-heading" >
                        Prijs                   </h6>
                    <div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Prijs:
                </div>
                <div class="info-value" >
                    € <?php echo $query[0]->sellprice ; ?>
                </div>
            </div>                                                                  <h6 class="vehicle-detail-section-heading" >
                                Overige kenmerken                           </h5> <div class="vehicle-detail-info-wrapper">
                <div class="info-title" >
                    Uitvoering:
                </div>
                <div class="info-value" >
                <?php echo $query[0]->modelline ; ?>
                </div>
            </div>                                      
                                                        
                </div><!-- End of overview tab -->




























                <div id="features" >
                    <div class="sections-wrapper" >
                                                <div class="feature-section-section-wrapper" >
                            <div class="vehicle-detail-feature-section-heading bigfont" >
                                Carosserie                          </div>
                                                                    <div class="feature-section-info" >
                                            5 Deurs                                     </div>
                                                            </div><!-- End of body section -->
        <div class="feature-section-section-wrapper" >
                            <div class="vehicle-detail-feature-section-heading bigfont" >
                                Opties                          </div>
        <div class="feature-section-info" >
            Stuurbekrachtiging</div>
                                                                            <div class="feature-section-info" >
            Airconditioning </div>
                                                                            <div class="feature-section-info" >
                                            Centrale vergrendeling                                      </div>
                                                                            <div class="feature-section-info" >
                                            Bumpers in carrosseriekleur                                     </div>
                                                                            <div class="feature-section-info" >
                                            Bestuurdersstoel in hoogte verstelbaar                                      </div>
                                                            </div><!-- End of drivetrain section -->
                                            </div><!-- End of sections wrapper -->
                    <div class="sections-wrapper" >
                                                <div class="feature-section-section-wrapper" >
                            <div class="vehicle-detail-feature-section-heading bigfont" >
                                Exterieur                           </div>
                                                                    <div class="feature-section-info" >
                                            Metallic lak                                        </div>
                                            <div class="feature-section-info" >
                                            poep
                                        </div>
                                         <div class="feature-section-info" >
                                            poep
                                        </div>
                                         <div class="feature-section-info" >
                                            poep
                                        </div>
                                         <div class="feature-section-info" >
                                            poep
                                        </div>
                                         <div class="feature-section-info" >
                                            poep
                                        </div>
                                         <div class="feature-section-info" >
                                            poep
                                        </div>
                                                            </div><!-- End of exterior section -->
                    <div class="feature-section-section-wrapper" >
                            <div class="vehicle-detail-feature-section-heading bigfont" >
                                Interieur                           </div>
                                                    </div><!-- End of interior section -->
                                            </div><!-- End of sections wrapper -->
                    <div class="sections-wrapper" >
                                                <div class="feature-section-section-wrapper" >
                            <div class="vehicle-detail-feature-section-heading bigfont" >
                                Elektronica                         </div>
                        <div class="feature-section-info" >
                                            Radio CD-speler                                     </div>
                                                                            <div class="feature-section-info" >
    USB aansluiting </div>
                                                                            <div class="feature-section-info" >
    AUX aansluiting </div>
                                                                            <div class="feature-section-info" >
                       Startblokkering                                      </div>
            </div><!-- End of electronics section -->
            <div class="feature-section-section-wrapper" >
                            <div class="vehicle-detail-feature-section-heading bigfont" >
                                Veiligheid                          </div>
                <div class="feature-section-info" >
                                            ABS remsysteem                                      </div>
                                                                            <div class="feature-section-info" >
            Airbag bestuurder                                       </div>
                                                                            <div class="feature-section-info" >
    Airbag passagier                                        </div>
                                                                            <div class="feature-section-info" >
        zij-Airbags                                     </div>
                                                            </div><!-- End of safetyfeatures section -->
                                            </div><!-- End of sections wrapper -->
                </div><!-- End of features tab -->







































                <div id="gallery">
                    <div class="gallery-section-img-mian-wrapper" >
                        

        <?php foreach ($images->result() as $row) { ?>
            <div class="gallery-section-img-wrapper" >
                                <img alt="Vehicle Image" title="Vehicle Image" class="vehcileimage" src="<?php echo base_url()."uploads/files/".$row->file_name;?>" />
                            </div>
                            <?php
                            }       
                                ?>
                    </div>
                </div>
            </div><!-- End of tab inner -->
        </div>
                        
                    
                <div id="light-box-loading" style="display:none;">
            <img class="mainimage" src="<?php echo base_url();?>dist/images/loading.gif" title="Loading" alt="Loading"/>
        </div>
    
    </div>
</div>



<footer id="footer_custom" class="top-space">
                <div class="footer1">
                <div class="container">
                                                                                <div class="col-md-6 widget">
                                    <div id="widget_cm_footeraboutus-1" class="block widget widget_cm_footeraboutus"><div class="lead cmf_aus_title"><h2>title auto's</h2></div><div class="cmf_aus_description">                     </div></div>                                </div>
                                                                                        <div class="col-md-6 widget">
                                    <div id="widget_cm_footercontactus-2" class="block widget widget_cm_footercontactus"><h2>Contact</h2><div class="cmf_cu_email">
                    <i class="fa fa-envelope"></i>&nbsp;verkoop@titleautos.nl
                </div><div class="cmf_cu_address">
                    <i class="fa fa-map-marker"></i>&nbsp;Pastoor van der Marckstraat 5-B
6551 ZN Weurt
                </div><div class="cmf_cu_phone">
                    <i class="glyphicon glyphicon-phone-alt"></i><i class="fa fa-whatsapp"></i>&nbsp;06 53 655 268
                </div></div>                                </div>
                                                                                                                        </div>
            </div>
                    <div class="footer2">
                <div class="container">
                                                    <div class="col-xs-7 col-md-7 nopadding nomargin widget">
                                                                    <div class="cmf_copyright">
                                                                                <img class="size-full wp-image-120 alignright" src="https://titleautos.nl/wp-content/uploads/2018/08/rdw-erkend-1.png" alt="" width="121" height="36" />                                  </div>
                                                                                            </div>
                                                <div class="col-xs-5 col-md-5 nopadding nomargin widget">
                            <div class="row cmf_socailicons text-right">
                                                            </div>
                                                    </div>
                </div>
            </div>
            </footer>








<script type='text/javascript'>

(function($, window, document){
    "use strict";
    $(document).ready(function($){
        $("#back-to-top").tooltip("show");
        $(".wpml_language").click(function(){
            $(".cm_lang_select").toggle();
        });
        function cm_is_touch_device() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }
        $(".dropdown").hover(
            function() {
                var dropdownList = $(this).find(".dropdown-menu");
                var dropdownOffset = $(this).offset();
                var offsetLeft = dropdownOffset.left;
                        if($(this).hasClass("dropdown-submenu")){
                            offsetLeft += $(this).width();
                        }
                var dropdownWidth = dropdownList.width();
                var docWidth = $(window).width();
                var isDropdownVisible = ((offsetLeft + dropdownWidth) < docWidth);
                if (!isDropdownVisible) {
                    $(dropdownList).addClass("pull-right");
                }else{
                    $(dropdownList).removeClass("pull-right");
                }
                if(!cm_is_touch_device()){
            $(this).find(".dropdown-menu:first").stop(true, true).css({"margin-top":"10px","opacity":0});
            $(this).addClass("open");
            $(this).find("a.dropdown-toggle:first").attr("aria-expanded", "true");
            $(this).find(".dropdown-menu:first").animate({"margin-top":"0px","opacity":1},200);
                }
            },
            function() {
                if(!cm_is_touch_device()){
            $(this).find(".dropdown-menu:first").animate({"margin-top":"10px","opacity":0},200,function(){
                $(this).parent().removeClass("open");
                $(this).css({"margin-top":"0px","opacity":1});
            });
                }
            }
        );

    $("li.dropdown a").on("click",function(e){
        var ariavalue = $(this).attr("aria-expanded");
        if(ariavalue == "true"){
            e.stopPropagation();
        }
    });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $("#back-to-top").fadeIn();
                $("div#menu_site").addClass("scroll");
            } else {
                $("#back-to-top").fadeOut();
                $("div#menu_site").removeClass("scroll");
            }
            if($(this).scrollTop() <= 10 || $(this).scrollTop() > 50){
                setTimeout(function(){
                    if($("header").hasClass("affix")){
                        $("header div.header_row").slideUp("slow");
                    }else{
                        $("header div.header_row").slideDown("slow");
                    }
                }, 300);
            }
        });
        // scroll body to 0px on click
        $("#back-to-top").click(function () {
            $("#back-to-top").tooltip("hide");
            $("body,html").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        setTimeout(function(){
            $("div.ui-datepicker").hide();
        },500);

    });
})(jQuery, window, document);


(function($, document){
"use strict";
var shortlist_rating;
var stars = "";
document.emailverify = function (email) {
var emailParts = email.toLowerCase().split("@");
if (emailParts.length == 2) {
    regex = /^[a-zA-Z0-9.!#$%&‚Äô*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email)
}
return false;
}

$("#tellafriend").on("show.bs.modal", function (e) {
var button = $(e.relatedTarget);
showloading();
var vehicletitle = $(button).attr("data-vehicletitle");
var vehicleimg = $(button).attr("data-vehicleimg");
var vehicleid = $(button).attr("data-vehicleid");
$("#tellafriend").find("img.media-object").attr("src",vehicleimg);
$("#tellafriend").find("h4.modal-media-heading").html(vehicletitle);
$("#tellafriend").find("input#fevehicleid").val(vehicleid);
$("#tellafriend").find("input#vehicletitle").val(vehicletitle);
hideloading();
});

$("div.modal").on("hidden.bs.modal", function (e) {
$("div.multi-popup-overlay").hide();
$("div.popup-multi-resp-message").hide();
});

$(document).delegate("div.popup-multi-resp-message","close.bs.alert",function(){
$("div.multi-popup-overlay").hide();
$("a.modal-close-icon-wrap").click();
});

$("#shortlist").on("show.bs.modal", function (e) {
var button = $(e.relatedTarget);
showloading();
$("textarea#srtcomments").val("");// to handle an issue
var vehicletitle = $(button).attr("data-vehicletitle");
var vehicleimg = $(button).attr("data-vehicleimg");
var vehicleid = $(button).attr("data-vehicleid");
if(vehicleimg != null){
    $("#shortlist").find("img.media-object").attr("src",vehicleimg);
}
if(vehicletitle != null){
    $("#shortlist").find("h4.modal-media-heading").html(vehicletitle);
}

if(vehicleid != null){
    $("#shortlist").find("input#srtvehicleid").val(vehicleid);
}else{
   vehicleid = $("#shortlist").find("input#srtvehicleid").val();
}

var rting = 0;
$.post(common.ajaxurl ,{action: "jsvehiclemanager_ajax",jsvmme: "vehicle",task: "getDataForShortlistForTemplate",vehicleid: vehicleid} , function (data) {
   if (data) {
        var obj = $.parseJSON(data);
        $("textarea#srtcomments").val(obj.comments);
        $("input#srtid").val(obj.id);
        $("input#shortliststars").val(obj.rate);
        rting = obj.rate;
        stars.setRating(rting);

   }else{
        $("textarea#srtcomments").val("");
        $("input#srtid").val("");
        $("input#shortliststars").val(0);
        rting = 0;
        stars.setRating(rting);
   }
    hideloading();
});
//rating
if(stars == ""){
    stars = $("#jRate").jRate({
        onSet: function(rating) {
            shortlist_rating = rating;
            $("input#shortliststars").val(rating);
        },
        rating: rting,
        precision: 0.5,
        width: 30,
        height: 30,
        startColor: "#FFD700",
        endColor: "#FFA500"
    });
}
});
$(document).ready(function(){
$(".custom_date").datepicker({dateFormat: "yy-m-d"});
})
})(jQuery, document);



(function($, document){
"use strict";



document.addMarker = function (latlang){
var marker = new google.maps.Marker({
    position: latlang,
    map: document.map,
    scrollwheel: false,
    draggable: false,
});
marker.setMap(document.map);
}

var ajaxurl = "https://www.type1-tech.com/development/wp-admin/admin-ajax.php";



$("a.tab-links").click(function () {
$("a.tab-links").removeClass("blue");
$(this).toggleClass("blue");
});
var print_link = document.getElementById("print-link");
if (print_link) {
var href = "https://www.type1-tech.com/development/?page_id=89&jsvmme=vehicle&jsvmlt=printvehicle&jsvehiclemanagerid=16";
print_link.addEventListener("click", function (event) {
    print = window.open(href, "print_win", "width=1024, height=800, scrollbars=yes");
    event.preventDefault();
}, false);
}
$(document).ready(function(){


$("#tabs").tabs();
$("img.changed").click(function(){
    var file = $(this).attr("data-file");
    var baseurl = window.location.origin;
    var filename = $(this).attr("data-filename");
    var imgnum = $(this).attr("data-imagenumber");
    var vehicldetail = $(this).attr("data-vehicledetail");
    console.log(baseurl);
    $("img#main-image").attr("data-imagenumber",imgnum);
    $("img#main-image").attr("src",baseurl + '/titleautos/uploads/files/'+filename);
    if(vehicldetail == 2){
        var imgpath = String(file+"m_"+filename);
    }else{
        var imgpath = String(file+"lw_"+filename);
    }
    var $image = $("img#main-image");
    var $downloadingImage = $("<img>");
    $downloadingImage.on('load',function(){
        $image.attr("src", $(this).attr("src"));
    });
    $downloadingImage.attr("src", imgpath);
});
$("img#main-image").click(function(){
    $("div#light-box-loading").show();
    var imgnum = $(this).attr("data-imagenumber");
    $("li.slid-img_237413896").picEyes({
        "fuelgage": "<?php echo base_url();?>dist/images/light-box-milage.png",
        "transmission": "<?php echo base_url();?>dist/images/light-box-transmission.png",
        "fueltype": "<?php echo base_url();?>dist/images/light-box-fuel.png",
    });
    $("li img[data-imagenumber="+imgnum+"]").click();
    $("div#light-box-loading").hide();
});
})

})(jQuery, document);
var oapcaptcha;
var stdcaptcha;
var sellercaptcha;
var tafcaptcha;

var CaptchaCallback = function(){
if( jQuery("#oapcaptcha").length > 0 ){
oapcaptcha = grecaptcha.render("oapcaptcha", {"sitekey" : "6Lc-2TMUAAAAABvaQW7dQhrzr2fUFwgCyU9x4NV2"});
}
if( jQuery("#stdcaptcha").length > 0 ){
stdcaptcha = grecaptcha.render("stdcaptcha", {"sitekey" : "6Lc-2TMUAAAAABvaQW7dQhrzr2fUFwgCyU9x4NV2"});
}    
if( jQuery("#sellercaptcha").length > 0 ){
sellercaptcha = grecaptcha.render("sellercaptcha", {"sitekey" : "6Lc-2TMUAAAAABvaQW7dQhrzr2fUFwgCyU9x4NV2"});
}      
if( jQuery("#tafcaptcha").length > 0 ){
tafcaptcha = grecaptcha.render("tafcaptcha", {"sitekey" : "6Lc-2TMUAAAAABvaQW7dQhrzr2fUFwgCyU9x4NV2"});
}
};



</script>

    </body>