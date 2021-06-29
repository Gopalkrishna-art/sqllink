const writeData=require('./ipl/writeData.js')
const matchesPlayedPerYear=require('./ipl/matchesPlayedPerYear.js');
const matchesWonPerTeam= require('./ipl/matchesWonPerTeam.js');
const extraRuns2016= require('./ipl/extraRuns2016.js');
const topEconomicalBowlers= require('./ipl/topEconomicalBowlers.js');
const fetchData = require("./ipl/fetchdata.js");


const {
  writePathMatchesPlayedPerYear,
  writePathMatchesWonPerTeam,
  writePathExtraRuns2016,
  writePathTopEconomicalBowlers,
  matchesFilePath,deliveriesFilePath
} = require('./ipl/constants.js');

async function getData() {

  const [matches, deliveries] = await fetchData(matchesFilePath, deliveriesFilePath);
  const matchesPlayedResult = matchesPlayedPerYear(matches);
  writeData(writePathMatchesPlayedPerYear, matchesPlayedResult);


  const matchesWinPerTeamResult = matchesWonPerTeam(matches);
  writeData(writePathMatchesWonPerTeam, matchesWinPerTeamResult);


  const extraRunsResult = extraRuns2016(deliveries, matches);
  writeData(writePathExtraRuns2016, extraRunsResult);

 
  const economicalBowlersResult = topEconomicalBowlers(deliveries, matches);
  writeData(writePathTopEconomicalBowlers, economicalBowlersResult);
}
getData();
