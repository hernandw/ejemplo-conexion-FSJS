const express = require("express");
/* import express from "express"; */
const router = express.Router();
const getProductos = require('../queries/consultas')


router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get('/about', (req, res) => {
  res.send("About page!!");
})

router.get('/products', async (req, res) => {
  try {
    const products = await getProductos();
    res.json(products);
  } catch (error) {
    console.log(error)
  }
})

router.get('*', (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
})


module.exports = router
/* export default router */