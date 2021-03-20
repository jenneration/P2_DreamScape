document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded");
  }

  // Get references to html elements
  // For create, read
  // let buttonAdd = document.getElementById("btn-add");
  let titleInput = document.getElementById("title");
  let tagsInput = document.getElementById("tags");
  let descriptionInput = document.getElementById("description");
  //For read
  let createdAt = document.getElementById("createdAt");
  let dataDream;

  // #1 VIEW ALL dreams - working, no fetch needed
  // #2 CREATE a new dream - working, no fetch needed

  // if (url.indexOf("?data-dream=") != -1) {
  //   dataDream = url.split("=")[1];
  //   getOneDream(id);
  // }

  const btnRead = document.querySelectorAll("#btn-read");
  let dream;
  // #3 READ: get one dream by ID
  if (btnRead) {
    btnRead.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("CLICK");

        const id = e.target.getAttribute("data-dream");
        console.log(id);

        fetch(`/api/read/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response);
            window.location = `/api/read/${id}`;
          })
          .catch((error) => console.log(error));
      });
    });
  }

  // #4 Redirect to edit/delete page
  const btnEdit = document.querySelector("#btn-edit");

  btnEdit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("CLICK");
    console.log(e);

    const id = e.target.getAttribute("data-dream");
    console.log(id);

    fetch(`/api/edit/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        window.location.href = `/api/edit/${id}`;
      })
      .catch((error) => console.log(error));
  });

  // #5 Edit/Update a dream and redirect to "All dreams" page

  const btnUpdate = document.querySelector("#btn-update");
  btnUpdate.addEventListener("click", updateDream);

  const currentDream = {
    title: titleInput.value.trim(),
    tags: tagsInput.value.trim(),
    description: descriptionInput.value(),
    id: e.target.getAttribute("data-dream")
  };

  const updateDream = (currentDream) => {
    fetch("/api/dreams", {
      method: "PUT",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify(currentDream),
    }).then((response) => console.log(response));
  };


  //DOCUMENT END TAG
});
