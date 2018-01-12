'use strict';
var mainStep;
var board = document.getElementById('board');
var fieldsArr = document.querySelectorAll('.field');
var letterABC;
var arrABC = ['a','b','c','d','e','f','g','h'];
var checkersArr = document.createElement('div');
///////////////START  GAME//////////////////////////////////////////////////////
for (var i = 0; i < fieldsArr.length; i++) {
  mainStep = 0;
  if (i===16||i===17||i===23||i===24||i===25) {
    let clone = checkersArr.cloneNode(false);
    clone.className = 'checker dS ';
    clone.id = 'child'+i;
    fieldsArr[i].appendChild(clone);
  }
  if (i===0||i===21||i===27) {
    let clone = checkersArr.cloneNode(false);
    clone.className = 'checker wS ';
    clone.id = 'child'+i;
    fieldsArr[i].appendChild(clone);
  }
}
////////////////////////////////////////////////////////////////////////////////

attacCheck();

function attacCheck() {
  var ind;
  var field1, field2, field3, field4;
  for (var i = 0; i < fieldsArr.length; i++) {
    try {
      if (fieldsArr[i].firstChild.classList[1] === 'wS') {
        indexABC(fieldsArr[i].id);
        field1 = arrABC[letterABC+1]+(+fieldsArr[i].id.charAt(1)+1);
        field2 = arrABC[letterABC-1]+(+fieldsArr[i].id.charAt(1)+1);
        field3 = arrABC[letterABC+1]+(+fieldsArr[i].id.charAt(1)-1);
        field4 = arrABC[letterABC-1]+(+fieldsArr[i].id.charAt(1)-1);
        if (
         (document.getElementById(field1).firstChild.classList[1] === 'dS')||
         (document.getElementById(field2).firstChild.classList[1] === 'dS')||
         (document.getElementById(field3).firstChild.classList[1] === 'dS')||
         (document.getElementById(field4).firstChild.classList[1] === 'dS')) {
           indexABC(field1);
           field1 = arrABC[letterABC+1]+(+field1.charAt(1)+1);
           indexABC(field2);
           field2 = arrABC[letterABC-1]+(+field2.charAt(1)+1);
           indexABC(field3);
           field3 = arrABC[letterABC+1]+(+field3.charAt(1)-1);
           indexABC(field4);
           field4 = arrABC[letterABC-1]+(+field4.charAt(1)-1);
           if (document.getElementById(field1).childElementCount === 0||
               document.getElementById(field2).childElementCount === 0||
               document.getElementById(field3).childElementCount === 0||
               document.getElementById(field4).childElementCount === 0) {
                 ind = true;console.log('check');
           }
        }
      }else{
        console.log("the attac it's inpossible");
      }
    } catch (e) {}//try-catch
  }
}

function indexABC(x1) {
  for (var i = 0; i < arrABC.length; i++) {
    if (arrABC[i] === x1.charAt(0)) {
      letterABC = i;
    }
  }
}




//
