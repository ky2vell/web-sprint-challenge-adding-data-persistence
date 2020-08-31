exports.seed = async function (knex) {
  await knex('tasks').insert([
    {
      description: 'Eat lots of chocolate',
      notes: 'To gain weight',
      completed: true,
      project_id: 3
    },
    {
      description: 'Pour concrete into hole',
      notes: "Don't step into concrete",
      completed: false,
      project_id: 1
    },
    {
      description: 'Disable secuity cameras with spray paint',
      notes: 'Use black spray paint',
      completed: true,
      project_id: 2
    },
    {
      description: 'Eat any roadkill found while driving',
      notes: 'Cook thouroughly',
      completed: false,
      project_id: 3
    },
    {
      description: 'Pay off the teamsters union',
      notes: 'Use shell account for payment',
      completed: false,
      project_id: 1
    },
    {
      description: 'Learn police response time if silent alarm is activated',
      notes: 'Purchase police scanner',
      completed: true,
      project_id: 2
    },
    {
      description: 'Drink kitchen grease outside local restaurants',
      notes: 'Go easy with this one',
      completed: false,
      project_id: 3
    }
  ]);
};
