buildFloor = function (floorNumber){
  let floorLength = (pyramidHeight*2)-1;
  let nSpaces = floorNumber-1;
  let nChar = floorLength-(2*nSpaces);
  let j = nSpaces+nChar;
  var floor="#";

  if(nSpaces>0){
    floor = " ";
  }

  for(i=1;i<nSpaces;i++){
    floor+=" ";
  }
  i=0;
  if (nSpaces<=0) i++;
  while(i<nChar){
    
    floor+="#";
    i++;
  }
  return floor;
}


console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log("la fonction readline n'est pas définie.\n J'ai vu qu'elle est utilisée par spiderMonkey \n compatible avec les navigateur MozillafireFox. \n pour cela j'ai utilisé la fonction prompt");

var pyramidHeight=prompt("Combien d'étages veux-tu ?");
console.log("Voici la pyramide :");

pyramidHeight=parseInt(pyramidHeight);

if ((pyramidHeight <= 25) && (pyramidHeight >= 1)){
  let i = pyramidHeight;

  while(i>0){
    console.log(buildFloor(i));
    i--;
  }
}
else{
  console.log("Merci de donner un entier inférieur ou égale 25");
}



