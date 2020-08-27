let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  const getToys = () => {
    fetch('http://localhost:3000/toys')
      .then(function(response){
        return response.json();
      })
      .then(function(toyCollection){
        console.log(toyCollection);

        for(const toy of toyCollection) {
          const collection = document.getElementById('toy-collection');
          const div = document.createElement('div');
          div.className = "card";

          const h2 = document.createElement('h2');
          h2.innerText = toy.name;

          const img = document.createElement('img');
          img.src = toy.image;

          const p = document.createElement('p');
          p.innerText = toy.likes;

          const likeBtn = document.createElement('button');
          likeBtn.className = "like-btn"; 

          div.append(h2);
          div.append(img);
          div.append(p);
          div.append(likeBtn);
          collection.append(div);


        }

      })
  }

  getToys();


});



//TODO
//Create Server
//Fetch Toys from db
//Add Toy info to div class card
  //make card for each toy
    //make toy elements
    //add toy elements to toy card
  //add each card to toy collection div
//Add New Toy upon submition of form
//Increase Toy likes