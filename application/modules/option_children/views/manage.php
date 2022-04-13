<h1>Manage options</h1>


<?php
//var_dump($query->result());
if (isset($flash))
{
    echo $flash;
}

?>

<?php 

$test = $this->uri->segment(3);
$create_account_url = base_url()."option_children/create";
?>



<?php
?>


            <div class="row-fluid sortable">        
                <div class="box span12">
                    <div class="box-header" data-original-title>
                        <h2><i class="halflings-icon white user"></i><span class="break">
                        <div class="box-icon">
                            <a href="#" class="btn-setting"><i class="halflings-icon white wrench"></i></a>
                            <a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
                            <a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
                        </div>
                    </div>
                    <div class="box-content">
                        <table class="table table-striped table-bordered bootstrap-datatable datatable">
                          <thead>
                              <tr>
                                  
                                  <th>option</th>
                                  <th> catagory</th>
                              </tr>
                          </thead>   
                          <tbody>
                          <?php foreach ($options->result() as $row)
                                {
                                    
                                    $edit_item_url = base_url()."option_children/create/".$row->optionid;
                                    //$create_account_url = base_url()."models/create_model_for_make/".$row->make_id;
                                    
                                //  if ($status == 1)
                                //  {
                                //      $status_label = "success";
                                        $status_desc = "Active";
                                //  } else 
                                //  {
                                    //  $status_label = "default";
                                    //  $status_desc = "Not Active";
                                    //}
                                    
                                ?>
                    
                            <tr>
                            
                              
                                <td class="center"><?= $row->option_name ?></td>
                                <td class="center"><?= $row->parent_name ?></td>
                            
                                <td class="center">
                                
                                    <a class="btn btn-info" href="<?= $edit_item_url ?>">
                                        edit
                                        <i class="btn-icon-only icon-edit"></i>  
                                    </a>
                                    <a class="btn btn-danger" href="#">
                                        delete
                                        <i class="btn-icon-only icon-trash"></i> 
                                    </a>
                                </td>
                            </tr>
                            <?php
                             }
                            ?>
                    
                          </tbody>
                      </table>            
                    </div>

                </div><!--/span-->
                                    <a href="<?php echo $create_account_url?>"><button type="button" class="btn btn-primary">Add New Option</button></a>
</p>
            </div><!--/row-->