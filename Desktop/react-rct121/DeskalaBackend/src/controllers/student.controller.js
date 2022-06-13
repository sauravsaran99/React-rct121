

const express = require("express");
const router = express.Router();
const Student = require("../models/student.model");

router.get("", async (req, res) => {
    try {
        const students = await Student.find({userid: req.query.id}).lean().exec();
        return res.send(students);
    } catch (err) {
        res.send({ msg: err.message });
    }
})

router.post('', async (req, res) => {

    try {
        const student = await Student.create(req.body);
        return res.send(student);
    } catch (err) {
        res.send({ msg: err.message });
    }
})

router.patch('/:_id', async(req, res) => {
    try {
        const account = await Student.findByIdAndUpdate(req.params._id, req.body, {
            new: true
        })
        return res.send(account)
    } catch (err) {
        return res.send(err.message)
    }
})


router.delete('/:id', async(req, res) => {
    try {
             let cartData = await Student.findByIdAndDelete({_id: req.params.id}).lean().exec();

            return res.send(cartData);
            
    } catch (err){
        res.send({msg:err.message})
    }
})


module.exports = router;