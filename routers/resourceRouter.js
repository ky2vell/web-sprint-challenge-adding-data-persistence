const express = require('express');

const Resources = require('../data/helpers/resourceModel');

const router = express.Router();

// @desc    Get all resources
// @route   GET /api/resources
router.get('/', async (req, res, next) => {
  try {
    const resources = await Resources.getResources();

    res.status(200).json({ count: resources.length, data: resources });
  } catch (err) {
    next(err);
  }
});

// @desc    Add single resource
// @route   POST /api/resources
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: 'Missing resource name!' });
    }

    const resource = await Resources.add({
      name: req.body.name,
      description: req.body.description
    });

    res.status(201).json({ data: resource });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
