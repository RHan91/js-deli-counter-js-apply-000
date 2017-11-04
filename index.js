var katzDeliLine = [];


function takeANumber(katzDeliLine, newCustomer) {


  katzDeliLine.push(newCustomer);

  return `Welcome  , ${newCustomer}. You are number ${katzDeliLine.length } in line.`;


}




function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else {
   return `Currently serving ${katzDeliLine[0]}.`,

   katzDeliLine.splice(0,1);

   ///another way to remove ?///
  }
}




function currentLine(katzDeliLine){
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }
  else {
    return `The line is currently: ${katzDeliLine}`;
  }
}
