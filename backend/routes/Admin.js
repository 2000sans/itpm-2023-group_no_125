const router = require("express").Router();
const { response } = require("express");
let Admin = require("../models/Admin");

//POST
router.route("/add").post((req, res) => {
  const { security_pin, user_name, email, contact, nic_number, password } = req.body;
    const newAdmin = new Admin({
        security_pin,
        user_name,
        email,
        contact,
        nic_number,
        password 
    })

    newAdmin.save().then(() => {
        res.json("User Added")
    }).catch((err) => {
        console.log(err);
    })
})

//GET
router.route("/").get((req, res) => {
    Admin.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err)
    })
})



//GET ONE
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Admin.findById(userId).then((users) => {
        res.status(200).send({ status: "User fetched", users })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user", error: err.message })
    })
})



//PUT
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { security_pin,user_name,email,contact,nic_number,password  } = req.body;
    const updateUser = {
        security_pin,
        user_name,
        email,
        contact,
        nic_number,
        password
    }
    const update = await Admin.findByIdAndUpdate(userId, updateUser).then(() => {
        res.status(200).send({ status: "User updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", errror: err.message });
    });
})



//DELETE
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

      await Admin.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "User deleted" });
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.message });
    })
})



//SEARCH
router.route("/search/num/:keyword").get(async (req, res) => {
    let keyword = req.params.keyword;
    await Admin.find({ "user_id": `${keyword}` }).then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user", error: err.message });
    })
})
module.exports=router;