const { response } = require("express");

document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded");
  }

  // Get references to html elements
  // For create, read
  let buttonAdd = document.getElementById("btn-add");
  let buttonRead = document.getElementById("btn-read");
  const titleInput = document.getElementById("title");
  const tagsInput = document.getElementById("tags");
  const descriptionInput = document.getElementById("description");
  //For read
  const createdAt = document.getElementById("createdAt");
  const allCard = document.getElementById("all-card");


  // #1 Get all dreams -- NOT NEEDED????

  const getDreams = () => {

    fetch("/api/dreams", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Got all dreams");
        dreams = data
      })
      // .catch(error => console.log("Error:", error));
  }
getDreams();


// #2 Create a new dream
buttonAdd.addEventListener("submit", (e) => {
  e.preventDefault();
console.log(e)
  const newDream = {
    title: titleInput.value.trim(),
    tags: tagsInput.value.trim(),
    description: descriptionInput.value.trim(),
  };

  console.log(newDream);
  fetch("/api/dreams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //"Accept": "application/json"
    },
    body: JSON.stringify(newDream),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success adding a new dream", data);
      //????set Attribute not needed????
      allCard.setAttribute("data-dream", JSON.stringify(id))
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
});

//**********HELP************* */ #3 READ: get one dream by ID

// let url = window.location.search;
// let dataDream = document.getElementById("data-dream");
// let dreamId;

buttonRead.addEventListener("click", (e) => {
  e.preventDefault();
  if (e) {
    alert("E!")
  }
  let id = document.getElementById("data-dream");

  fetch(`api/dreams/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Found dream id# ${id}`)
      dream = data
    })
    .catch((error) => console.log("Error: ", error))
});



//TEST
const getOneDream = () => {

  fetch("/api/dreams/4", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Got all dreams");
      dreams = data
    })

    // .catch(error => console.log("Error:", error));
}
getOneDream();



// ******************#4 DELETE
// const buttonDelete = document.getElementById("btn-delete");

// buttonDelete.addEventListener("click", (e) => {
//   e.preventDefault();


//   if (e) {
//     console.log("hello");
//   }

//   const deleteid = e.target.getAttribute("data-dream");

//   fetch(`/api/dreams/${deleteId}`, {
//     method: "DELETE",
//   })
//   .then((res) => {
//     console.log(res);
//     console.log(`Deleted id ${deleteId}`);
//     location.reload;
//   });


  //DOCUMENT END TAG
});
