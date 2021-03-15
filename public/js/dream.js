document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded");
  }

  // #1 Get all dreams -- NOT NEEDED????
  fetch("/api/dreams", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success in getting all dreams", data);
      dreams = data.catch((error) => console.error("Error:", error));
    });

  // #2 Create a new dream
  const buttonAdd = document.getElementbyId("btn-add");
  const titleInput = document.getElementbyId("title");
  const tagsInput = document.getElementbyId("tags");
  const descriptionInput = document.getElementbyId("description");
  
    buttonAdd.addEventListener("submit", (e) => {
      e.preventDefault();

      const newDream = {
        title: titleInput.value.trim(),
        tags: tagsInput.value.trim(),
        description: descriptionInput.value.trim(),
      };
console.log(newDream)
      fetch("/api/dreams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
    body: JSON.stringify(newDream),
      })
        .then((response) => response.json())
        console.log("THIS IS THE " + response)
        .then((data) => {
          console.log("Success adding a new dream", data);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    });





});
