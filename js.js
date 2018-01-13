'use strict';
var mainStep;
var board = document.getElementById('board');
var fieldsArr = document.querySelectorAll('.field');
var letterABC;
var arrABC = ['a','b','c','d','e','f','g','h'];
var checkersArr = document.createElement('div');
var ind;
///////////////START  GAME//////////////////////////////////////////////////////
for (var i = 0; i < fieldsArr.length; i++) {
  mainStep = 0;
  if (i===16||i===17||i===23||i===24||i===25) {
    let clone = checkersArr.cloneNode(false);
    clone.className = 'checker dS ';
    clone.id = 'child'+i;
    fieldsArr[i].appendChild(clone);
  }
  if (i===0||i===21||i===26) {
    let clone = checkersArr.cloneNode(false);
    clone.className = 'checker wS ';
    clone.id = 'child'+i;
    fieldsArr[i].appendChild(clone);
  }
}
////////////////////////////////////////////////////////////////////////////////
for (var i = 0; i < fieldsArr.length; i++) {
  fieldsArr[i].addEventListener('click', function (e) {
    attacCheck(e.target.classList[1], e.target.offsetParent.id);
  });
}
function attacCheck(x, y) {
  var field1, field2, field3, field4;
  try {
    if (x === 'wS') {
      indexABC(y);
      field1 = arrABC[letterABC-1]+(+y.charAt(1)+1);
      field2 = arrABC[letterABC+1]+(+y.charAt(1)+1);
      field3 = arrABC[letterABC-1]+(+y.charAt(1)-1);
      field4 = arrABC[letterABC+1]+(+y.charAt(1)-1);
      if (
      document.getElementById(field1).firstChild&&
      document.getElementById(field1).firstChild.classList[1]||
      document.getElementById(field2).firstChild&&
      document.getElementById(field2).firstChild.classList[1]||
      document.getElementById(field3).firstChild&&
      document.getElementById(field3).firstChild.classList[1]||
      document.getElementById(field4).firstChild&&
      document.getElementById(field4).firstChild.classList[1] === 'dS') {
        indexABC(field1);
        field1 = arrABC[letterABC-1]+(+field1.charAt(1)+1);
        indexABC(field2);
        field2 = arrABC[letterABC+1]+(+field2.charAt(1)+1);
        indexABC(field3);
        field3 = arrABC[letterABC-1]+(+field3.charAt(1)-1);
        indexABC(field4);
        field4 = arrABC[letterABC+1]+(+field4.charAt(1)-1);
        if (
            !document.getElementById(field1).firstChild||
            !document.getElementById(field2).firstChild||
            !document.getElementById(field3).firstChild||
            !document.getElementById(field4).firstChild ) {
              ind = true;
        }
      }
      console.log(ind);
    }else {
      ind = false;
      console.log(ind);
    }
  } catch (e) {}
}

function indexABC(x) {
  for (var i = 0; i < arrABC.length; i++) {
    if (arrABC[i] === x.charAt(0)) {
      letterABC = i;
    }
  }
}


//
