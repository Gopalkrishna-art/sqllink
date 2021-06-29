function matchesWonPerTeam(matches) {
    if(!matches){
        throw new Error('Matches data not defined')
    }
    return matches.reduce((years, match) => {
        if (years[match.season] === undefined) {
            years[match.season] = {};
        }
        if (years[match.season][match.winner]) {
            years[match.season][match.winner] += 1;
        } else {
            years[match.season][match.winner] = 1;
        }
       
        return years;

    }, {});

}
module.exports = matchesWonPerTeam;