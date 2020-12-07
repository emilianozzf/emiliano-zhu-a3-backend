const express = require('express');
const { creatURL, findAllURL, findURLById, updateURL, deleteURL } = require('../model/url.model');
const router = express.Router();

// GET localhost:3000/api/url
router.get('/', function (req, res) {
    return findAllURL().then(
        response => res.status(200).send(response),
        error => res.status(404).send("Errors getting urls")
        );
})

// GET localhost:3000/api/url/aribnb
router.get('/:id', function (req, res) {
    return findURLById(req.params.id).then(
        response => res.status(200).send(response),
        error => res.status(404).send("No url found!")
        );
})

// POST localhost:3000/api/url/
router.post('/', function (req, res) {
    return creatURL(req.body).then(
        response => res.status(200).send(response),
        error => res.status(404).send("Errors creating a new url")
        );
})

// PUT localhost:3000/api/url/1
router.put('/:id/', function (req, res) {
    return updateURL(req.params.id, req.body).then(
        response => res.status(200).send('Successfully updated url'),
        error => res.status(404).send("No url found!")
        );
})

// DELETE localhost:3000/api/url/1
router.delete('/:id', function (req, res) {
    return deleteURL(req.params.id).then(
        response => res.status(200).send('URL has been removed'),
        error => res.status(404).send("No url found!")
        );
})

module.exports = router;