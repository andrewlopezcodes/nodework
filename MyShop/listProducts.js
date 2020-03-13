var faker = require("faker");


function consumerGood(number){
  for(var a = 0; a < number; a++){
   console.log(faker.fake("{{commerce.productName}}, {{commerce.price}}"));
  };
}

consumerGood(10);

//code writen by github: @andrewlopezcodes 