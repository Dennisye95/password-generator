function generate(){
  var concatenation = shuffle();
  generatepassword(concatenation,8);
}

function shuffle(){
  var keywords = [];
  keywords.push(document.getElementById("topleft").value);
  keywords.push(document.getElementById("topmiddle").value);
  keywords.push(document.getElementById("topright").value);
  keywords.push(document.getElementById("bottomleft").value);
  keywords.push(document.getElementById("bottommiddle").value);
  keywords.push(document.getElementById("bottomright").value);
  var i;
  for (i=0; i<keywords.length; i++){
    var j = Math.floor(Math.random()*6);
    var temp = keywords[i];
    keywords[i] = keywords[j];
    keywords[j] = temp;
  }
  var concatenation = "";
  for (keyword in keywords){
    concatenation += keywords[keyword];
  }
  document.getElementById("shuffled").innerHTML = concatenation;
  return concatenation;
}

function sortNumber(a,b){
  return a - b;
}

function generatepassword(concatenation,pwlength){
  var indices = [];
  var length = concatenation.length;
  if (length < pwlength){
    return;
  }
  var i;
  for (i=0; i<pwlength; i++){
    var num = Math.floor(Math.random()*length);
    while(indices.indexOf(num,0)!==-1){
      num = Math.floor(Math.random()*length);
    }
    indices.push(num);
  }
  indices.sort(sortNumber);
  var password = " "
  for (i in indices){
    password += concatenation.charAt(indices[i]);
  }
  document.getElementById("password").innerHTML = password;
}
