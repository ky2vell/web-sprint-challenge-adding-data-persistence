exports.seed = async function (knex) {
  await knex('projects').insert([
    {
      name: 'Build Skyscraper',
      description: "Build world's largest skyscraper",
      completed: false
    },
    {
      name: 'Rob Bank',
      description: 'Rob small town bank with little security',
      completed: true
    },
    {
      name: 'Gain 200 pounds',
      description: 'Eat lots of food',
      completed: false
    }
  ]);
};
