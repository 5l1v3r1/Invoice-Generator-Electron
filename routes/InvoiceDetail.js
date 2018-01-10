/**
 * Created by nimit95 on 09/01/18.
 */


const models = require('./../db/models');

function viewInvoiceDetailsById(event, data) {
  console.log(data);
  models.InvoiceDetail.findAll({
    where: {
      invoiceId: data.invoiceId
    },
    include: [models.Product]
  }).then(resultRows => {
    if (resultRows.length > 0) {
      event.sender.send('getInvoiceDetailById', {
        success: true,
        invoiceItems: resultRows.map(v=>{
          v = v.get();
          v.product = v.product.get();
          return v;
        })
      })
    }
    else{
      event.sender.send('getInvoiceDetailById', {
        success: false,
        error: "No object Found"
      })
    }
  }).catch(err => {
    event.sender.send('getInvoiceDetailById', {
      success: false,
      error: err
    })
  })
}

module.exports = exports = {
  viewInvoiceDetailsById
};