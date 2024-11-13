const router = require('express').Router();
let Donee = require('../models/Donee.model');

router.route('/').get((req, res) => {
    Donee.find()
        .then(Donee => res.json(Donee))
        .catch(Donee => res.status(400).json('Error: ' + err));
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



    const newDonee = new Donee({
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



    newDonee.save()
        .then(() => res.json('Donee added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Donee.findById(req.params.id)
        .then(Donee => res.json(Donee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Donee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Donee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Donee.findById(req.params.id)
        .then(Donee => {
            Donee.State = req.body.State;
            Donee.Item1 = req.body.Item1;
            Donee.Item2 = req.body.Item2;
            Donee.Item3 = req.body.Item3;
            Donee.Item4 = req.body.Item4;
            Donee.Qty1 = req.body.Qty1;
            Donee.Qty2 = req.body.Qty2;
            Donee.Qty3 = req.body.Qty3;
            Donee.Qty4 = req.body.Qty4;
            Donee.Note = req.body.Note;
            Donee.Sendbeforedate = req.body.Sendbeforedate;
            Donee.Status = req.body.Status;
            Donee.SpecialNote = req.body.SpecialNote;
           

            Donee.save()
                .then(() => res.json('Donee updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;