// const query = require('./connection.js')
// const client = require('./database.js');
// const arr = async () => {
//     await client.connect();
//     const matchesPlayedPerYear = `SELECT seasons.season,COUNT(seasons.season) as matchesPlayed
//     FROM matchesfinal as matches
//     JOIN seasontable as seasons
//     ON matches.season_id = seasons.id
//     GROUP BY seasons.season
//         `
//     const perTeam = await client.query(matchesPlayedPerYear).catch((err) => {
//         console.log(err);
//     });
//     try {
//         console.table(perTeam.rows);
//     } catch (error) {
//         console.log(error);
//     }
//     client.end();
// return perTeam.rows;

// }
// // arr();
// module.exports={arr}