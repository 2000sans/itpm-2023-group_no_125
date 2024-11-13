const router = require('express').Router();
let Userdonate = require('../models/Userdonate.model');

router.route('/').get((req, res) => {
    Userdonate.find()
        .then(Userdonate => res.json(Userdonate))
        .catch(Userdonate => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const State = req.body.State;
    const Item1 = req.body.Item1; 
    const Item2 = req.body.Item2;
    const Item3 = req.body.Item3;
    const Item4 = req.body.Item4;
    const Qty1 = req.body.Qty1;
    const Qty2 = req.body.Qty2; 
    const Qty3 = req.body.Qty3;
    const Qty4 = req.body.Qty4;
    const Note = req.body.Note;
    const Sendbeforedate = req.body.Sendbeforedate;
    const Status = req.body.Status;
    const SpecialNote = req.body.SpecialNote;



    const newUserdonate = new Userdonate({
        State,
        Item1,
        Item2,
        Item3,
        Item4,
        Qty1,
        Qty2,
        Qty3,
        Qty4,
        Note,
        Sendbeforedate,
        Status,
        SpecialNote,
       

    });



    newUserdonate.save()
        .then(() => res.json('Userdonate added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Userdonate.findById(req.params.id)
        .then(Userdonate => res.json(Userdonate))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Userdonate.findByIdAndDelete(req.params.id)
        .then(() => res.json('Userdonate deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Userdonate.findById(req.params.id)
        .then(Userdonate => {
            Userdonate.State = req.body.State;
            Userdonate.Item1 = req.body.Item1;
            Userdonate.Item2 = req.body.Item2;
            Userdonate.Item3 = req.body.Item3;
            Userdonate.Item4 = req.body.Item4;
            Userdonate.Qty1 = req.body.Qty1;
            Userdonate.Qty2 = req.body.Qty2;
            Userdonate.Qty3 = req.body.Qty3;
            Userdonate.Qty4 = req.body.Qty4;
            Userdonate.Note = req.body.Note;
            Userdonate.Sendbeforedate = req.body.Sendbeforedate;
            Userdonate.Status = req.body.Status;
            Userdonate.SpecialNote = req.body.SpecialNote;
           

            Userdonate.save()
                .then(() => res.json('Userdonate updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;