import express from "express";
import Product from "../../models/Product.js";

//get all products

export const getAllProducts = async (req, res) => {
  console.log("get all products");
    try {
        const products = await Product.find();
        res.status(200).send(products);
    }
    catch (error) {
        res.status(404).send
}
}


