
let navList = {
  activate(which) {
    let prevs = document.querySelectorAll('.active');
    prevs.forEach(el => {
      el.className = '';
    });

    let curr = document.getElementById(which);
    curr.className = 'active';
  }
}

function pr(elId){
  var el=document.getElementById(elId);
  console.log(el.innerHTML);
}

