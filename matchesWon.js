// const query = require('./connection.js')
// const client = require('./database.js');
// const matchesWon = async () => {
//    // await client.connect();

//     const matchesWonPerTeam = `SELECT seasons.season, teams.team1,COUNT(teams.team1)
//     FROM matchesfinal as matches
//     JOIN seasontable as seasons
//     ON matches.season_id = seasons.id
//     JOIN teamtable as teams
//     ON matches.team1_id = teams.id
//     GROUP BY seasons.season,teams.team1
//     ORDER BY seasons.season
//     `

//     const teamsWon = await client.query(matchesWonPerTeam).catch((err) => {
//         console.log(err);
//     });
//     try {
//         console.table(teamsWon.rows);
//     } catch (error) {
//         console.log(error);
//     }
   
//     return teamsWon.rows;

// }

// module.exports={matchesWon}