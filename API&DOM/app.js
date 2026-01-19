const target = document.getElementById("title");

target.style.color = "blue";
// target.style.background = 'red';

// const allBox = document.getElementsByClassName('box');

// for(let i=0; i<allBox.length; i++){
//     const element = allBox[i];
//     element.style.backgroundColor = 'green';

//     if(element.innerText == 'box-5'){
//         element.style.backgroundColor = 'red';
//     }
// }

// for(let i=0; i<allBox.length; i++){
//     const element = allBox[i];
//     if(element.innerText == 'box-1' || element.innerText == 'box-3' || element.innerText == 'box-5' || element.innerText == 'box-7'){
//         element.style.backgroundColor = 'Red';
//     }
//     else{
//         element.style.backgroundColor = 'green';
//     }
// }

// wa

// way - 1 || traditional way
document.getElementById("handleADD").addEventListener("click", (event) => {
  const inputValue = document.getElementById("search-box").value;
  const container = document.getElementById("comment-container");

  const p = document.createElement("p");
  p.classList.add("child"); // akhon jotogulo p tag create hobe sob gulor common class hobe 'child'
  p.innerText = inputValue;

  container.appendChild(p);

  document.getElementById("search-box").value = "";

  const allComments = document.getElementsByClassName("child");

  for (const element of allComments) {
    element.addEventListener("click", (e) => {
      e.target.parentNode.removeChild(element);
    });
  }
});

// // way - 2
// const handleSearch = (event) =>{
//     console.log('Hello Box');
// }
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    displayData(data);
  })
  .catch((err) => {
    console.log(err);
  });


  const displayData = (userData) => {
  const container = document.getElementById("userData-Container");

  userData.forEach((user) => {
    const div = document.createElement("div");
    div.classList.add("user");

    div.innerHTML = `
        <h4>title</h4>
        <p>Description</p>
        <button>Details</button>
        
        `;
    container.appendChild(div);
  });
};