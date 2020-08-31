const db = require('../config');

function getProjects() {
  return db('projects');
}

function findById(id) {
  return db('projects').where({ id }).first();
}

function add(project) {
  return db('projects')
    .insert(project)
    .then(id => findById(id[0]));
}

function getProjectTasks(projectId) {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .where('t.project_id', projectId)
    .select(
      't.id',
      't.description as task',
      't.notes',
      't.completed',
      'p.name as projectName',
      'p.description as projectDescription'
    );
}

function findTaskById(id) {
  return db('tasks').where({ id }).first();
}

function addTask(task) {
  return db('tasks')
    .insert(task)
    .then(id => findTaskById(id[0]));
}

module.exports = { getProjects, add, getProjectTasks, addTask };
