function fetchAndVisualizeData(){
    fetch("./matchesPlayedPerYear.json")
        .then(r=>r.json())
        .then(visualizeData);
}

fetchAndVisualizaData();
function visualizeData(data){
    visualizeMachesPlayedPerYear(data.matchesmatchesPlayedPerYear);
    return;
}
function visualizeMachesPlayedPerYear(matchesmatchesPlayedPerYear){
    const seriesData = [];
    for(let year in matchesmatchesPlayedPerYear){
        seriesData.push([year, matchesmatchesPlayedPerYear[year]]);
    }


    
}


