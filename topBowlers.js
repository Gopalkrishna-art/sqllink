// const query = require('./connection.js')
// const client = require('./database.js');
// const topBowlerss = async () => {

//     const topBowlers = ` SELECT pt.bowler as player_name,SUM(total_runs::decimal)/(COUNT(total_runs::decimal)/6.0) as total_runs_in_2015
//     FROM deliveriestable as dt
//     INNER JOIN playertable as pt
//     ON pt.id = dt.bowler_id
//     WHERE match_id 
//     IN (
//     SELECT id 
//     FROM matchefinal
//     WHERE season_id
//     IN (
//     SELECT id 
//     FROM seasonstable
//     WHERE season = '2015')) 
//     GROUP BY pt.bowler
//     ORDER BY total_runs_in_2015
//     LIMIT 10
// `
//     const topEconimicalBowlers = await client.query(topBowlers).catch((err) => {
//         console.log(err);
//     });
//     try {
//         console.table(topEconimicalBowlers.rows);
//     } catch (error) {
//         console.log(error);
//     }
//     return topEconimicalBowlers.rows;

// }

// module.exports={topBowlerss}