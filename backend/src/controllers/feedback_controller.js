
const express = require("express");
const router = express.Router();

const Feedback = require("../models/Feedback_model");
const mongoose = require("mongoose");

//create
router.post("/create-Feedback", (req, res, next) => {
   console.log("here");
   const { feedbacked_by,
      feedback,
   } = req.body;
   const r = new Feedback(
      {
         feedbacked_by,
         feedback,

      }
   );
   return r
      .save()
      .then((Feedback) => res.status(200).json({ Feedback }))
      .catch((error) => res.status(500).json({ error }));
})

//read
router.get("/", (req, res, next) => {
   return Feedback.find()
      .then(Feedbacks => res.status(200).json({ Feedback_count: Feedbacks.length, Feedbacks }))
      .catch(err => res.status(500).json({ message: `${err}` }))
})

//read one
router.get("/:id", (req, res, next) => {
   const __id = req.params.id;
   return Feedback.findById(__id)
      .then((Feedback) => {
         if (Feedback) return res.status(200).json(Feedback)
         else return res.status(404).json({ message: "Feedback not found" })
      })
      .catch(err => res.status(500).json({ message: `${err}` }))
})

//update
router.put("/update-Feedback/:id", (req, res, next) => {
   const __id = req.params.id;
   return Feedback.findById(__id)
      .then((Feedback) => {
         if (Feedback) {
            Feedback.set(req.body);
            return Feedback
               .save()
               .then((Feedback) => {
                  return res.status(200).json({ Feedback });
               })
               .catch((err) => {
                  return res.status(500).json({ err });
               });
         } else {
            return res.status(404).send({ error: "Feedback not found" });
         }
      })
      .catch((err) => {
         return res.status(500).json({ err });
      });
})

//delete
router.delete("/delete-Feedback/:id", (req, res, next) => {
   const __id = req.params.id;
   return Feedback.findByIdAndDelete(__id)
      .then(() => res.status(200).json({ success: true }))
      .catch((error) => res.status(500).json({ error }));
})

module.exports = router