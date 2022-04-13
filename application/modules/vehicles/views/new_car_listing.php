
<?php
$arr = get_defined_vars();
//var_dump($vehicles->result());
//var_dump($test[0]->vehicleid);
//var_dump($test);
//var_dump($vehicles->result);
$today = date('Y-m-j'); 

?>




<div class = "container-fluid">


<div class ="row">

    <?php
    foreach ($test as $row) {
    ?>

<div  class="advertisement col-xs-12 col-sm-6 col-md-4 gallery-view" data-lease-object>
    <div data-popover-trigger class="card card-body bg-light relatief">
        <a class="photo-a" 
           href="<?= base_url()?>vehicles/vehicle_details/<?= $row->vehicleid?>" 
        data-ga-event data-ga-category="Galerij mouseover" data-ga-action="mouseenter" data-ga-label="Alfa Romeo 147 (38-GS-BP)" data-ga-value="3310728"
           title="<?php echo $row->make." ".$row->model;?> - title Auto's">
            <img 
 data-lazyloader data-lazyloader-src="<?php echo base_url()."uploads/files/".$row->file_name; ?>"
    data-image-switch="autodealers" 
    data-timeslider data-timeslider-image="<?= $row->listfiles ?>" 
                 class="photo-img img-rounded" 
                 itemprop="image" 
                 src="//svl.autodealers.nl/img/img-loader-320.gif" 
                 name="foto" 
                 alt="Alfa Romeo 147 occasion - AutoCentrum A. van Den Broek" />
            <img class="photo-new" alt="Nieuwe occasion" src="<?= base_url()?>pictures/nieuw_binnen.png" />
        </a>
        <div class="row show-grid">
            <div class="col-xs-12 margin-bottom-md merk-model-minheight">
                <strong>
                <a style="color: #004274;" href="https://www.type1-tech.com/titleautos/vehicles/vehicle_details/44" >
<?php echo $row->make." ".$row->model;?>
                  </a>
                    <a href="#3310728" 
                       class="hidden-xs"
                       title="Alfa Romeo 147" 
                       tabindex="0" 
                       >
                        <i class="glyphicon glyphicon-info-sign"></i>
                    </a>
                    <div class="verberg model-uitvoering">
                        <span class="uitvoering-type"><?php echo $row->modelline;?></span>
                    </div>
                    <div data-popover-content class="d-none">
                        <table class="popover-table margin-bottom-md">
                            <tbody>
                                <tr class="uitvoering">
                                    <td class="uitvoering" colspan="2">
                                        <b><?php echo $row->modelline;?></b>
                                    </td>
                                </tr>
                                <tr class="bouwjaar" data-lease-build="2001">
                                    <td>
                                        <span>Bouwjaar:</span>
                                    </td>
                                    <td>
                                        <b><?php echo $row->year;?></b>
                                    </td>
                                </tr>
                                <tr class="Carrosserie">
                                    <td>
                                        <span>Carrosserie:</span>
                                    </td>
                                    <td>
                                        <b>Hatchback</b>
                                    </td>
                                </tr>
                                <tr class="Kilometerstand">
                                    <td>
                                        <span>Km. stand:&nbsp;</span>
                                    </td>
                                    <td>
                                        <b><?php echo $row->mileage;?> km <img class="NAPlogo" src="//svl.autodealers.nl/img/icons/nap-klein.gif" alt="Dit voertuig heeft NAP" /></b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="<?= base_url()?>vehicles/vehicle_details/<?= $row->vehicleid?>" class="btn btn-primary float-right">
Bekijk occasion
                        </a>
                        <div class="clear-fix"></div>
                    </div>
                </strong>
                        <table class="margin-bottom-xs margin-top-xs verberg tbl-gly-specs">
                            <tbody>
                                <tr class="bouwjaar" data-lease-build="2001">
                                    <td>
                                        <span>Bouwjaar:</span>
                                    </td>
                                    <td>
                                        <b><?php echo $row->year;?></b>
                                    </td>
                                </tr>
                                <tr class="Carrosserie">
                                    <td>
                                        <span>Carrosserie:</span>
                                    </td>
                                    <td>
                                        <b>Hatchback</b>
                                    </td>
                                </tr>
                                <tr class="Brandstof">
                                    <td>
                                        <span>Brandstof:</span>
                                    </td>
                                    <td>
                                        <b><?php echo $row->fueltype;?></b>
                                    </td>
                                </tr>
                                <tr class="Transmissie">
                                    <td>
                                        <span>Transmissie:</span>
                                    </td>
                                    <td>
                                        <b><?php echo $row->transmission;?></b>
                                    </td>
                                </tr>
                                <tr class="Kilometerstand">
                                    <td>
                                        <span>Km. stand:&nbsp;</span>
                                    </td>
                                    <td>
                                        <b><?php echo $row->mileage;?> km <img class="NAPlogo" src="<?= base_url()?>pictures/nap-klein.gif" alt="Dit voertuig heeft NAP" /></b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            </div>
            <div class="prijs  col-xs-12 col-sm-6 gal-prijs-bottom" data-lease-price="999">
<span data-section="prijs">
&euro; <?php echo $row->sellprice;?>,-
</span>
<span class="gallery-marge-btw verberg">Marge</span>
            </div>
            <div class="col-xs-12 col-sm-6 gal-btn-bottom">
                <a class="hidden-xs btn btn-primary float-right" 
                   href="<?= base_url()?>vehicles/vehicle_details/<?= $row->vehicleid?>"
                   title="<?= $row->make?> <?= $row->model?> <?= $row->modelline?>">
Bekijk occasion
                </a>
                <a class="d-sm-none d-md-none d-lg-none btn btn-block btn-primary float-right" 
                   href="<?= base_url()?>vehicles/vehicle_details/<?= $row->vehicleid?>"
                   title="<?= $row->make?> <?= $row->model?> <?= $row->modelline?>">
Bekijk occasion
                </a>
                <div class="clear-fix"></div>
            </div>
        </div>
    </div>
</div>


<?php
}
?>







    </div><!-- end row-->

</div><!-- end container fluid-->

