// const express = require('express');
// const path=require('path');
// const{arr}=require('./matchesPlayed.js')
// const{matchesWon}=require('./matchesWon.js')
// const logger = require('./logger.js');
// const exphbs = require('express-handlebars')

// const app = express();
// const PORT = process.env.PORT||5000;

//  app.use(logger);

// app.engine('handlebars', exphbs({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars');

// let matchesPlayedperteam;
// let matchesWonPerteam

// (async function getdata(){
//     matchesPlayedPer=await arr();
// })();
// (async function fetchdata(){
//     matchesWonPerteam=await matchesWon();
// })();
// app.get('/',(req,res)=>res.render('index',{
//     title:"testing",
//     matchesPlayedPer,
// matchesWonPerteam
// }));
// //  app.use(express.static(path.join(__dirname, '')));

// app.listen(PORT, () => console.log(`Server started at ${PORT}`));