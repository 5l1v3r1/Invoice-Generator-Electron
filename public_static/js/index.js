/**
 * Created by bhavyaagg on 29/12/17.
 */

$(document).ready(function () {

  const {ipcRenderer} = require('electron');

  const $invoicesButton = $('#invoicesButton')
    , $partyMasterButton = $('#partyMasterButton')
    , $productButton = $('#productButton')
    , $subHeader = $('#subHeader')
    , $mainContent = $('#mainContent')
    , $resultRow = $('#resultRow');


  $invoicesButton.click(function () {
    $subHeader.empty();
    $subHeader.append(`
      <div class="col text-center">
        <button id="addInvoiceButton" class="btn btn-primary">Add Invoice</button>
      </div>
      <div class="col text-center">
        <button id="viewInvoicesButton" class="btn btn-primary">View Invoices</button>
      </div>
    `)
  });

  $partyMasterButton.click(function () {
    $subHeader.empty();
    $subHeader.append(`
      <div class="col text-center">
        <button id="addPartyMaster" class="btn btn-primary">Add Party Master</button>
      </div>
      <div class="col text-center">
        <button id="viewPartyMaster" class="btn btn-primary">View Party Master</button>
      </div>
    `);

    $('#addPartyMaster').click(function () {

      $mainContent.empty();
      $mainContent.append(`
      
        <div class="form-group row">
          <label for="partyName" class="col-3 col-form-label">Party Name: </label>
          <div class="col-9">
            <input class="form-control" type="text" value="" id="partyName">
          </div>
        </div>
        
        <div class="form-group row">
          <label for="destination" class="col-3 col-form-label">Destination: </label>
          <div class="col-9">
            <input class="form-control" type="text" value="" id="destination">
          </div>
        </div>
        
        <div class="form-group row">
          <label for="marka" class="col-3 col-form-label">Marka: </label>
          <div class="col-9">
            <input class="form-control" type="text" value="" id="marka">
          </div>
        </div>
        
        <div class="form-group row">
          <label for="openingBalance" class="col-3 col-form-label">Opening Balance: </label>
          <div class="col-9">
            <input class="form-control" type="number" id="openingBalance">
          </div>
        </div>
        
        <div class="form-group row">
          <label for="openingBalanceDate" class="col-3 col-form-label">Opening Balance Date: </label>
          <div class="col-9">
            <input class="form-control" type="date" value="2011-08-19" id="openingBalanceDate">
          </div>
        </div>
        
        <div class="form-group row">
          <label for="transport" class="col-3 col-form-label">Transport: </label>
          <div class="col-9">
            <input class="form-control" type="text" value="" id="transport">
          </div>
        </div>
        
        <div class="form-group row">
          <label for="discount" class="col-3 col-form-label">Discount(%): </label>
          <div class="col-9">
            <input class="form-control" type="number" id="discount">
          </div>
        </div>       
         
        <div class="form-group row">
          <label for="splDiscount" class="col-3 col-form-label">Spl. Discount(%): </label>
          <div class="col-9">
            <input class="form-control" type="number" id="splDiscount">
          </div>
        </div>        
        
        <div class="form-group row">
          <label for="cd" class="col-3 col-form-label">CD(%): </label>
          <div class="col-9">
            <input class="form-control" type="number" id="cd">
          </div>
        </div>   
        
        <div class="col text-center">
          <button id="submitParty" class="btn btn-primary">Submit</button>
        </div>      
      `)

      $('#submitParty').click(function () {
        ipcRenderer.send('submitParty', {
          partyName: $('#partyName').val(),
          destination: $('#destination').val(),
          marka: $('#marka').val(),
          openingBalance: $('#openingBalance').val(),
          openingBalanceDate: $('#openingBalanceDate').val(),
          transport: $('#transport').val(),
          discount: $('#discount').val(),
          splDiscount: $('#splDiscount').val(),
          cd: $('#cd').val()
        });
      });

    })
  });


  $productButton.click(function () {
    $subHeader.empty();
    $subHeader.append(`
      <div class="col text-center">
        <button id="addProductButton" class="btn btn-primary">Add Product</button>
      </div>
      <div class="col text-center">
        <button id="viewProductsButton" class="btn btn-primary">View Products</button>
      </div>
      <div class="col text-center">
        <button id="addProductCategoryButton" class="btn btn-primary">Add Product Category</button>
      </div>
      <div class="col text-center">
        <button id="viewProductCategoriesButton" class="btn btn-primary">View Product Categories</button>
      </div>
    `);

    const $addProductButton = $('#addProductButton');
    const $viewProductsButton = $('#viewProductsButton');
    const $addProductCategoryButton = $('#addProductCategoryButton');
    const $viewProductCategoriesButton = $('#viewProductCategoriesButton');

    $addProductButton.click(function () {
      $mainContent.empty();
      $mainContent.append(`
        <div class="form-group row">
          <label for="productName" class="col-3 col-form-label">Product Name: </label>
          <div class="col-9">
            <input id="productName" class="form-control" type="text" placeholder="Enter Product Name">
          </div>
        </div>
      `)
    })

    $viewProductsButton.click(function () {
      $mainContent.empty();
      $mainContent.append(`
        <div class="form-group row">
          <label for="productName" class="col-3 col-form-label">Product Name: </label>
          <div class="col-9">
            <input id="productName" class="form-control" type="text" placeholder="Enter Product Name">
          </div>
        </div>
      `)
    })

    $addProductCategoryButton.click(function () {
      $mainContent.empty();
      $mainContent.append(`
        <div class="form-group row">
          <label for="productCategoryName" class="col-4 col-form-label">Product Category Name: </label>
          <div class="col-8">
            <input id="productCategoryName" class="form-control" type="text" placeholder="Enter Product Category Name">
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col text-center">
            <button id="submitProductCategory" class="btn btn-success">Submit</button>
          </div>
          <div class="col text-center">
            <button id="resetProductCategory" class="btn btn-danger">Reset</button>
          </div>
        </div>
        <div class="row"></div>
      `)

      const $submitProductCategory = $('#submitProductCategory');
      const $resetProductCategory = $('#resetProductCategory');

      $submitProductCategory.click(function () {
        ipcRenderer.send('addProductCategory', {
          productCategoryName: $('#productCategoryName').val()
        });
        ipcRenderer.on('addedProductCategory', function (event, data) {
          $mainContent.empty();
          $resultRow.empty();
          if (data.success) {
            $resultRow.removeClass('text-danger').addClass('text-success');
            $resultRow.text("Product Category Has Been Added");
          } else {
            $resultRow.removeClass('text-success').addClass('text-danger');
            $resultRow.text("Product Category Could Not Be Added Because " + data.error);
          }
        })
      });

      $resetProductCategory.click(function () {
        $('#productCategoryName').val("");
      })
    });

    $viewProductCategoriesButton.click(function () {
      ipcRenderer.send('viewProductCategories');
      ipcRenderer.on('getProductCategories', function (event, data) {
        $mainContent.empty();
        $resultRow.empty();
        if (data.success) {
          let str = `
            <ul class="list-group text-center">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-12">
                    <b>Product Category Name</b>
                  </div>
                </div>
              </li>
          `;

          data.productCategories.forEach(function (productCategory) {
            str += `
            <li class="list-group-item">
                <div class="row">
                  <div class="col-12">
                    ${productCategory.name}
                  </div>
                </div>
              </li>
            `
          });

          $mainContent.append(str);
        } else {
          $resultRow.removeClass('text-success').addClass('text-danger');
          $resultRow.text("Product Category Could Not Be Viewed Because " + data.error);
        }
      });
    })

  });
});