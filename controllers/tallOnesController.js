const express = require('express');
const router = express.Router();
//////////////////////////////////////////////////////
const Peaks = require('../models/8000mPeaks.js');


// Index Route
router.get('/', (req, res) => {
  Peaks.find({}, (err, foundPeaks) => {
      res.render('peaks/index.ejs', {
        peaks: foundPeaks
      });
  });

});



// New Route
router.get('/new', (req, res) => {
  res.render('peaks/new.ejs');
});

// 
router.get('/:id', (req, res) => {
  Peaks.findById(req.params.id, (err, foundPeaks) => {
    res.render('peaks/show.ejs', {
      peaks: foundPeaks
    });
  });
});

//
router.get('/:id/edit', (req, res) => {

  Peaks.findById(req.params.id, (err, foundPeaks) => {
    res.render('peaks/edit.ejs', {
      peaks: foundPeaks
    });
  });

});


//
router.put('/:id', (req, res) => {
  Peaks.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPeaks)=> {
    console.log(updatedPeaks, ' this is updatedPeaks');
    res.redirect('/peaks');
  });
});
//
router.post('/', (req, res) => {
  console.log(req.body)
  Peaks.create(req.body, (err, createdPeak) => {
    console.log(createdPeak, ' this is the createdPeak');
    res.redirect('/peaks');
  });

});



router.delete('/:id', (req, res) => {

  Peaks.findByIdAndRemove(req.params.id, (err, deletedPeak) => {
    console.log(deletedPeak, ' this is deletedPeak');
    res.redirect('/peaks')
  })

});



module.exports = router;