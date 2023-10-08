let idcounter = 1;
function createnote() {
  let titlepop = document.getElementById('titlepop').value;
  let tagpop2 = localStorage.getItem('tagpop');
  // let tagpop;
  // if (tagpop2 == 'IMP') {
  //   tagpop = 'IMP';
  //   tag.style.border = '2px solid red';
  // } else if (tagpop2 == 'PRIMARY') {
  //   tagpop = 'PRI';
  //   tag.style.border = '2px solid rgb(0, 135, 193)';
  // } else if (tagpop2 == 'SECONDARY') {
  //   tagpop = 'SEC';
  //   tag.style.border = '2px solid rgb(4, 133, 54)';
  // }

  let descpop = document.getElementById('enterdescription').value;

  let mainparentdiv = document.getElementById('mainbar');
  let newmainnote = document.createElement('div');
  newmainnote.classList.add('notesdiv');
  newmainnote.classList.add(idcounter + 'a');
  newmainnote.setAttribute('id', idcounter + 'a');

  mainparentdiv.appendChild(newmainnote);
  idcounter++;
  console.log(idcounter);

  let firstsection = document.createElement('div');
  firstsection.className = 'firstsection';
  let secondsection = document.createElement('div');
  secondsection.className = 'secondsection';
  let thirdsection = document.createElement('div');
  thirdsection.className = 'thirdsection';

  //firstsection

  let titlenotesmain = document.createElement('div');
  titlenotesmain.className = 'titlenotesmain';
  titlenotesmain.innerText = titlepop;
  let tag = document.createElement('div');
  let tagpop;
  if (tagpop2 == 'IMP') {
    tagpop = 'IMP';
    tag.style.border = '2px solid red';
  } else if (tagpop2 == 'PRIMARY') {
    tagpop = 'PRI';
    tag.style.border = '2px solid rgb(0, 135, 193)';
  } else if (tagpop2 == 'SECONDARY') {
    tagpop = 'SEC';
    tag.style.border = '2px solid rgb(4, 133, 54)';
  }
  tag.className = 'tag';
  tag.innerText = tagpop;

  firstsection.appendChild(titlenotesmain);
  firstsection.appendChild(tag);

  //secondsection

  let textsection = document.createElement('div');
  textsection.className = 'textsection';
  textsection.innerText = descpop;

  secondsection.appendChild(textsection);

  //third section

  let done = document.createElement('img');
  done.className = 'done';
  done.src = 'done.png';
  done.width = '25px';
  done.onclick = tocompletetask;

  let edit = document.createElement('img');
  edit.className = 'edit';
  edit.src = 'edit.png';
  edit.width = '25px';

  let delet = document.createElement('img');
  delet.className = 'delete';
  delet.src = 'delete.png';
  delet.width = '25px';
  delet.onclick = todeletemain;

  thirdsection.appendChild(done);
  thirdsection.appendChild(edit);
  thirdsection.appendChild(delet);

  newmainnote.appendChild(firstsection);
  newmainnote.appendChild(secondsection);
  newmainnote.appendChild(thirdsection);

  //to complete task toggle
  let togglestrike = 0;
  function tocompletetask() {
    if (togglestrike % 2 == 0) {
      titlenotesmain.style.textDecoration = 'line-through';
      titlenotesmain.style.transition = 'all 0.2s';
      togglestrike++;
      done.src = 'notdone.png';
    } else {
      titlenotesmain.style.textDecoration = 'none';
      togglestrike++;
      done.src = 'done.png';
      done.src.style.transition = 'all 0.5s';
    }
  }

  //for sidebar

  let parentdiv = document.getElementById('utilitydiv');
  let newnote = document.createElement('div');
  newnote.setAttribute('id', idcounter);
  newnote.classList.add('notehead');
  newnote.classList.add(idcounter);
  newnote.onclick = todeleteside;
  parentdiv.appendChild(newnote);

  let firstsidesection = document.createElement('div');
  firstsidesection.className = 'firstsidesection';

  let secondsidesection = document.createElement('div');
  secondsidesection.className = 'secondsidesection';

  let titleside = document.createElement('div');
  titleside.className = 'titleside';
  titleside.innerText = titlepop;

  let tagside = document.createElement('div');
  tagside.className = 'tagside';
  tagside.innerText = tagpop;
  tagside.classList.add('tag');

  firstsidesection.appendChild(titleside);
  firstsidesection.appendChild(tagside);

  //SECOND SIDE ELEMENTS

  let textsidesection = document.createElement('div');
  textsidesection.className = 'textsidesection';
  textsidesection.innerText = descpop;
  secondsidesection.appendChild(textsidesection);

  newnote.appendChild(firstsidesection);
  newnote.appendChild(secondsidesection);
}

function todeleteside(e) {
  let removeidch = e.target.parentNode;
  let removeid = removeidch.parentNode.id;
  console.log(removeid);
  let mainparentdiv = document.getElementById('mainbar');
  let parentdiv = document.getElementById('utilitydiv');
  let sideelremove = document.getElementById(removeid);
  let mainelremove = document.getElementById(removeid - 1 + 'a');
  let userconfirm = confirm(
    ' Are you Sure You Want To Delete the Note with Id :' + removeid
  );
  if (userconfirm) {
    if (parentdiv && sideelremove) {
      parentdiv.removeChild(sideelremove);
      if (mainparentdiv && mainelremove) {
        mainparentdiv.removeChild(mainelremove);
      }
    }
  } else {
    alert('User Didnt Confirm');
  }
}

function todeletemain(e) {
  let removeid1 = e.target.parentNode;
  let removeid = removeid1.parentNode.id;

  let idlength = removeid.length;
  let sideremoveid;
  if (idlength == 2) {
    sideremoveid = removeid.charAt(0);
    sideremoveid = parseInt(sideremoveid) + 1;
  }
  if (idlength == 3) {
    sideremoveid = removeid.substring(0, 2);
    sideremoveid = parseInt(sideremoveid) + 1;
  }

  console.log(removeid);
  console.log(sideremoveid);
  let mainparentdiv = document.getElementById('mainbar');
  let parentdiv = document.getElementById('utilitydiv');
  let sideelremove = document.getElementById(sideremoveid);
  let mainelremove = document.getElementById(removeid);
  let userconfirm = confirm(
    ' Are you Sure You Want To Delete the Note with Id :' + removeid
  );
  if (userconfirm) {
    if (mainparentdiv && mainelremove) {
      mainparentdiv.removeChild(mainelremove);
      if (parentdiv && sideelremove) {
        parentdiv.removeChild(sideelremove);
      }
    }
  } else {
    alert('User Didnt Confirm to delete');
  }
}

function addtaskpop() {
  let popmaindiv = document.getElementById('addtaskpopupdiv');
  let addtaskpop = document.getElementById('addtaskpop');
  let titlepop = (document.getElementById('titlepop').value = '');

  let descpop = (document.getElementById('enterdescription').value = '');
  popmaindiv.style.display = 'flex';
  popmaindiv.style.transition = 'all 0.8s';
  addtaskpop.style.scale = '1';
  addtaskpop.style.transition = 'all 1s';
}
function addtaskpopclose() {
  let popmaindiv = document.getElementById('addtaskpopupdiv');
  let addtaskpop = document.getElementById('addtaskpop');
  popmaindiv.style.display = 'none';
  popmaindiv.style.transition = 'all 0.8s';
  addtaskpop.style.scale = '0';
  addtaskpop.style.transition = 'all 1s';
}

//tag onclick color changes
let tagcolorcounter = 0;

function impbuttoncolor() {
  if (tagcolorcounter % 2 == 0) {
    let impbutton = document.getElementById('impbuttonpop');
    impbutton.style.backgroundColor = 'red';
    impbutton.style.color = 'white';
    tagcolorcounter++;
    localStorage.setItem('tagpop', impbutton.innerText);
  } else if (tagcolorcounter % 2 != 0) {
    let impbutton = document.getElementById('impbuttonpop');
    impbutton.style.backgroundColor = 'transparent';
    impbutton.style.color = 'red';
    tagcolorcounter++;
    localStorage.removeItem('tagpop', impbutton.innerText);
  }
}

function pributtoncolor() {
  if (tagcolorcounter % 2 == 0) {
    let impbutton = document.getElementById('pributtonpop');
    impbutton.style.backgroundColor = 'rgb(0, 135, 193)';
    impbutton.style.color = 'white';
    tagcolorcounter++;
    localStorage.setItem('tagpop', impbutton.innerText);
  } else if (tagcolorcounter % 2 != 0) {
    let impbutton = document.getElementById('pributtonpop');
    impbutton.style.backgroundColor = 'transparent';
    impbutton.style.color = 'rgb(0, 135, 193)';
    tagcolorcounter++;
    localStorage.removeItem('tagpop', impbutton.innerText);
  }
}

function secbuttoncolor() {
  if (tagcolorcounter % 2 == 0) {
    let impbutton = document.getElementById('secbuttonpop');
    impbutton.style.backgroundColor = 'rgb(4, 133, 54)';
    impbutton.style.color = 'white';
    tagcolorcounter++;
    localStorage.setItem('tagpop', impbutton.innerText);
  } else if (tagcolorcounter % 2 != 0) {
    let impbutton = document.getElementById('secbuttonpop');
    impbutton.style.backgroundColor = 'transparent';
    impbutton.style.color = 'rgb(4, 133, 54)';
    tagcolorcounter++;
    localStorage.removeItem('tagpop', impbutton.innerText);
  }
}

function extractalltheinfoformpopup() {}
