var express = require('express');
var router = express.Router();
const BTCPAY_PRIV_KEY = "364870e426d755c7a26d243634c24775e9e4031dffd0d636673531e2b3df8e1c";
const BTCPAY_MERCHANT_KEY = "EpmSWhZysHLoEVAyeQrCRVM2GxYaHuMJBNtZVo4oShKD";

// Initialize the client
const btcpay = require('btcpay')
const keypair = btcpay.crypto.load_keypair(new Buffer.from(BTCPAY_PRIV_KEY, 'hex'));
const client = new btcpay.BTCPayClient('https://lightning.filipmartinsson.com', keypair, {merchant: BTCPAY_MERCHANT_KEY})


/* get & verify invoice. */
router.get('/:id', async function(req, res, next) {

});

/* Create invoice. */
router.post('/', function(req, res, next) {
    console.log(req.body.ammount);
    client.create_invoice({price:req.body.ammount,currency:"INR"})
    .then(function(invoice){
        console.log(invoice);
        res.render('invoice',{invoiceId:invoice.id});
    })
    .catch(err=>console.log(err));
});


module.exports = router;
