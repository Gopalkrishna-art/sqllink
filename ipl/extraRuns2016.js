const extraRuns2016 = (deliveries, matches, season = '2016') => {
  if(!matches || !deliveries || !season){
    throw new Error('Matches not defined');
  }
  let seasonId = matches
    .filter(match => match.season === season)
    .reduce((years, match) => {
      years[match.id] = match;
   
      return years;
    }, {});

  return deliveries
    .filter(delivery => seasonId[delivery.match_id])
    .reduce((extraRuns, delivery) => {
      if (extraRuns[delivery.bowling_team] === undefined) {
        extraRuns[delivery.bowling_team] = 0;
      }
      extraRuns[delivery.bowling_team] += parseInt(delivery.extra_runs);
     
      return extraRuns;
    }, {});
};

module.exports = extraRuns2016;