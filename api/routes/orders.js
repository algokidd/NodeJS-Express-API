const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Orders were fetched!'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message : 'Order was Created'
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
        res.status(200).json({
            message : 'Order Details!',
            id : id
        });    
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message : 'Updated Product!'
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message : 'Deleted Order!',
        id : req.params.orderId
    });
});

module.exports = router;
