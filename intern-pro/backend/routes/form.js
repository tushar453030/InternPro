 const express= require('express')
 const User = require('../models/Form');
 const router= express.Router();
 const { body, validationResult } = require('express-validator');
// Creating a user using : POST "/api/form/"
 router.post('/',[
   body('name','Enter a valid name').isLength({ min: 3 }),
   body('email','Enter a valid email').isEmail(),
  
 ],(req,res)=>{
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   User.create({
      name: req.body.name,
      email: req.body.email,  
      batch: req.body.batch,
      payment: req.body.payment,
    }).then(user => res.json(user)).catch(err => {console.log(err)
   res.json({error: 'Email already exists'})})
 })

 module.exports= router