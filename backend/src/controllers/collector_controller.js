const express = require("express");
const router = express.Router();

const Collector = require("../models/collector_model");
const mongoose = require("mongoose");

//create
router.post("/create-Collector", (req, res, next) => {
   const { name,
      email,
      phone_number,
      address,
      nic_number, } = req.body;
   const r = new Collector(
      {
         name,
         email,
         phone_number,
         address,
         nic_number,
      }
   );
   return r
      .save()
      .then((Collector) => res.status(200).json({ Collector }))
      .catch((error) => res.status(500).json({ error }));
})

//read
router.get("/", (req, res, next) => {
   return Collector.find()
      .then(Collectors => res.status(200).json({ Collector_count: Collectors.length, Collectors }))
      .catch(err => res.status(500).json({ message: `${err}` }))
})

//read one
router.get(":id", (req, res, next) => {
   const __id = req.params.id;
   return Collector.findById(__id)
      .then((Collector) => {
         if (Collector) return res.status(200).json(Collector)
         else return res.status(404).json({ message: "Collector not found" })
      })
      .catch(err => res.status(500).json({ message: `${err}` }))
})

//update
router.put("/update-Collector/:id", (req, res, next) => {
   const __id = req.params.id;
   return Collector.findById(__id)
      .then((Collector) => {
         if (Collector) {
            Collector.set(req.body);
            return Collector
               .save()
               .then((Collector) => {
                  return res.status(200).json({ Collector });
               })
               .catch((err) => {
                  return res.status(500).json({ err });
               });
         } else {
            return res.status(404).send({ error: "Collector not found" });
         }
      })
      .catch((err) => {
         return res.status(500).json({ err });
      });
})

//delete
router.delete("/delete-Collector/:id", (req, res, next) => {
   const __id = req.params.id;
   return Collector.findByIdAndDelete(__id)
      .then(() => res.status(200).json({ success: true }))
      .catch((error) => res.status(500).json({ error }));
})

module.exports = router