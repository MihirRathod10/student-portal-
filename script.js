function register() {
  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPassword").value;

  if(email && pass){
    localStorage.setItem(email, JSON.stringify({first:first,last:last,password:pass}));
    alert("Registration successful!");
    window.location.href = "index.html";
  } else {
    alert("Please fill all fields!");
  }
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;
  let user = JSON.parse(localStorage.getItem(email));

  if(user && user.password === pass){
    localStorage.setItem("loggedInUser", email);
    window.location.href = "main.html";
  } else {
    alert("Invalid credentials!");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

window.onload = function(){
  if(window.location.pathname.includes("main.html")){
    let email = localStorage.getItem("loggedInUser");
    if(email){
      let user = JSON.parse(localStorage.getItem(email));
      document.getElementById("welcome").innerText = "Hello " + user.first + " " + user.last + "!";
    } else {
      window.location.href = "index.html";
    }
  }
}


function initMarquee(id="marqueeText"){
  const el=document.getElementById(id); if(!el) return;
  const box=el.parentElement; let speed=parseFloat(el.dataset.speed)||100;
  let x=box.offsetWidth, last=performance.now();
  function tick(t){
    const dt=(t-last)/1000; last=t;
    x-=speed*dt; el.style.transform=`translateX(${x}px)`;
    if(x<-el.offsetWidth) x=box.offsetWidth;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.addEventListener("DOMContentLoaded",()=>{ if(document.getElementById("marqueeText")) initMarquee(); });


function logout() {
  localStorage.removeItem("loggedInUser"); 
  window.location.href = "index.html"; 
}


