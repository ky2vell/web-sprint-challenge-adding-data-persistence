exports.seed = async function (knex) {
  await knex('resources').insert([
    {
      name: 'Concrete',
      description: 'Quikrete 80 lb. Concrete Mix-110180'
    },
    {
      name: 'Steel',
      description: 'Stainless steel'
    },
    {
      name: 'Ski masks',
      description: '100% cotton ski masks, perfect for robbing banks'
    },
    {
      name: 'Tommy Gun',
      description: "Thompson submachine gun, perfect for bank robbin'"
    },
    {
      name: 'Raw meat',
      description: '20lbs of uncooked meat, from parts unknown'
    },
    {
      name: 'Candy bars',
      description: "Heath Bars, Hershey's Bars, Clark Bars"
    },
    {
      name: 'Briefcase full of money',
      description: 'For unspecified purposes'
    }
  ]);
};
