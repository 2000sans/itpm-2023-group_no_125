const router = require("express").Router();
const { response } = require("express");
let Donor = require("../models/Donor");

//POST
router.route("/add").post((req, res) => {
  const { user_id, user_name, email, contact, nic_number, address, password } = req.body;
    const newUser = new Donor({
        user_id,
        user_name,
        email,
        contact,
        nic_number,
        address,
        password 
    })

    newUser.save().then(() => {
        res.json("User Added")
    }).catch((err) => {
        console.log(err);
    })
})

//GET
router.route("/").get((req, res) => {
    Donor.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err)
    })
})



//GET ONE
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Donor.findById(userId).then((users) => {
        res.status(200).send({ status: "User fetched", users })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user", error: err.message })
    })
})



//PUT
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { user_id,user_name,email,contact,nic_number,address,password  } = req.body;
    const updateUser = {
        user_id,
        user_name,
        email,
        contact,
        nic_number,
        address,
        password
    }
    const update = await Donor.findByIdAndUpdate(userId, updateUser).then(() => {
        res.status(200).send({ status: "User updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", errror: err.message });
    });
})



//DELETE
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

      await Donor.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "User deleted" });
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.message });
    })
})



//SEARCH
router.route("/search/num/:keyword").get(async (req, res) => {
    let keyword = req.params.keyword;
    await Donor.find({ "user_id": `${keyword}` }).then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user", error: err.message });
    })
})
module.exports=router;