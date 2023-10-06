let idcounter = 1;
function createnote() {
  let parentdiv = document.getElementById('utilitydiv');
  let newnote = document.createElement('div');
  newnote.setAttribute('id', idcounter);
  newnote.classList.add('notehead');
  newnote.classList.add(idcounter);
  newnote.onclick = todeleteside;

  parentdiv.appendChild(newnote);

  let mainparentdiv = document.getElementById('mainbar');
  let newmainnote = document.createElement('div');
  newmainnote.classList.add('notesdiv');
  newmainnote.classList.add(idcounter + 'a');
  newmainnote.setAttribute('id', idcounter + 'a');
  newmainnote.onclick = todeletemain;
  mainparentdiv.appendChild(newmainnote);
  idcounter++;
  console.log(idcounter);
}

function todeleteside(e) {
  let removeid = e.target.id;
  console.log(removeid);
  let mainparentdiv = document.getElementById('mainbar');
  let parentdiv = document.getElementById('utilitydiv');
  let sideelremove = document.getElementById(removeid);
  let mainelremove = document.getElementById(removeid + 'a');
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
  let removeid = e.target.id;
  let idlength = removeid.length;
  let sideremoveid;
  if (idlength == 2) {
    sideremoveid = removeid.charAt(0);
  }
  if (idlength == 3) {
    sideremoveid = removeid.substring(0, 2);
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
    alert('User Didnt Confirm');
  }
}
