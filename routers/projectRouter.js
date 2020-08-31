const express = require('express');

const Projects = require('../data/helpers/projectModel');

const router = express.Router();

// @desc    Get all projects
// @route   GET /api/projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getProjects();

    res.status(200).json({ count: projects.length, data: projects });
  } catch (err) {
    next(err);
  }
});

// @desc    Add single project
// @route   POST /api/projects
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: 'Missing project name!' });
    }

    const project = await Projects.add({
      name: req.body.name,
      description: req.body.description,
      completed: req.body.completed || false
    });

    res.status(201).json({ data: project });
  } catch (err) {
    next(err);
  }
});

// @desc    Get all tasks for project
// @route   GET /api/projects/:id/tasks
router.get('/:id/tasks', async (req, res, next) => {
  try {
    const tasks = await Projects.getProjectTasks(req.params.id);

    res.status(200).json({ count: tasks.length, data: tasks });
  } catch (err) {
    next(err);
  }
});

// @desc    Add task for project
// @route   POST /api/projects/:id/tasks
router.post('/:id/tasks', async (req, res, next) => {
  if (!req.body.description) {
    return res.status(400).json({ message: 'Missing task description!' });
  }

  try {
    const newTask = await Projects.addTask({
      description: req.body.description,
      notes: req.body.notes,
      completed: req.body.completed || false,
      project_id: req.params.id
    });
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
