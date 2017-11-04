var katzDeliLine = [];


function takeANumber(katzDeliLine, newCustomer) {

  if (newCustomer === undefined){
    console.log("No number was taken");
  }
  else {
  katzDeliLine.push(newCustomer);

  console.log(`Welcome , ${newCustomer}.You are number ${katzDeliLine.length } in line !  `);

  }
}




function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    console.log("There is nobody waiting to be served!");
  }
  else {
   console.log(`Now serving ${katzDeliLine[0]} !`);
  }
}




function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    console.log("The line is currently empty.");
  }
  else {
    console.log(`The line is currently: ${katzDeliLine}`);
  }
}
