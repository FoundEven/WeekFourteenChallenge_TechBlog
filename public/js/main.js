const gotoLogin = (event) => {
  //const response = await fetch("/login", {
  //  method: "GET",
  //});

  document.location.replace("/login");
};

const makePost = (event) => {
  //const response = await fetch("/login", {
  //  method: "GET",
  //});

  document.location.replace("/post");
};

const viewPost = (event) => {
  //const response = await fetch("/login", {
  //  method: "GET",
  //});

  document.location.replace("/update");
};

document.querySelector("#login").addEventListener("click", gotoLogin);

document.querySelector("#post").addEventListener("click", makePost);

document.querySelector(".postit").addEventListener("click", viewPost);

