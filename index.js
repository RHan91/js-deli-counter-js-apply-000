var katzDeliLine = [];


function takeANumber(katzDeliLine, newCustomer) {


  katzDeliLine.push(newCustomer);

  console.log(`Welcome , ${newCustomer}. You are number ${katzDeliLine.length } in line.`);


}




function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1) {
    console.log("There is nobody waiting to be served!");
  }
  else {
   console.log(`Now serving ${katzDeliLine[0]} !`);
   katzDeliLine.splice(0,1);

   ///another way to remove ?///
  }
}




function currentLine(katzDeliLine){
  if (katzDeliLine.length < 1) {
    console.log("The line is currently empty.");
  }
  else {
    console.log(`The line is currently: ${katzDeliLine}`);
  }
}
