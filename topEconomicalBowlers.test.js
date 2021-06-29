
const topEconomicalBowlers = require('./ipl/topEconomicalBowlers.js');
const fetchData = require('./ipl/fetchdata.js');

let data;

async function receiveData() {
  data = await fetchData();
  return data;
}


test('TopEconomicalBowlers', async() => {
  data= await receiveData();

  expect(topEconomicalBowlers(data)).toEqual({
    
        "RN ten Doeschate": 3.43,
        "J Yadav": 4.14,
        "V Kohli": 5.45,
        "R Ashwin": 5.7,
        "S Nadeem": 5.86,
        "MC Henriques": 6.04,
        "Z Khan": 6.04,
        "Parvez Rasool": 6.2,
        "MA Starc": 6.42,
        "Sandeep Sharma": 6.75
    
  });
});



test('TopEconomicalBowlers', async() => {
  matchesData= await receiveData();
expect(()=>{
  topEconomicalBowlers();
}).toThrow('Matches not defined')
  
  });


  test('TopEconomicalBowlers', async() => {
    matchesData= await receiveData();
  expect(()=>{
    topEconomicalBowlers(null);
  }).toThrow('Matches not defined')
    
    });
  
   
  test('TopEconomicalBowlers', async() => {
    matchesData= await receiveData();
  expect(()=>{
    topEconomicalBowlers(undefined);
  }).toThrow('Matches not defined')
    
    });


    test('TopEconomicalBowlers', async() => {
      data= await receiveData();
    
      expect(topEconomicalBowlers(data)).toEqual({
        
            "RN ten Doeschate": 3.43,
            "J Yadav": 4.14,
            "V Kohli": 5.45,
            "R Ashwin": 5.7,
            "S Nadeem": 5.86,
            "MC Henriques": 6.04,
            "Z Khan": 6.04,
            "Parvez Rasool": 6.2,
            "MA Starc": 6.42,
            "Sandeep Sharma": 6.75
        
      });
    });
    
    