// const query = require('./connection.js')
// const client = require('./database.js');
// const extraRunss = async () => {

//   const extraRuns=`select batting_team_id , sum(cast((extra_runs) as int)) from deliveriesfinal
//   where match_id in (select id from matchesfinal where season_id = '2016')
//   group by batting_team_id;`
//     const extraRunsIn2016 = await client.query(extraRuns).catch((err) => {
//         console.log(err);
//     });
//     try {
//         console.table(extraRunsIn2016.rows);
//     } catch (error) {
//         console.log(error);
//     }

//     return extraRunsIn2016.rows;

// }

// module.exports={extraRunss}