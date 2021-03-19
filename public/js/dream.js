

document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded");
  }

  // Get references to html elements
  // For create, read
  // let buttonAdd = document.getElementById("btn-add");
  let title = document.getElementById("title");
  let tags = document.getElementById("tags");
  let description = document.getElementById("description");
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
          .then((response) => { console.log(response);
           window.location = `/api/read/${id}`;
          })


          // .then(data => {
          //   console.log(data)
          //   dream = data;

          //   // title = data.title,
          //   //   createdAt = data.createdAt,
          //   //   tags = data.tags,
          //   //   description = data.description
          // })
          .catch(error => console.log(error));

      });

    });
  };





//   body: JSON.stringify(readDream),
// }).then((response) => {
//   // Check that the response is all good
//   // Reload the page so the user can see the new quote
//   if (response.ok) {
//     console.log("WORKED!!!!!!!!");
//     response.render("read", { dream } );
//   } else {
//     alert('something went wrong!');
//   }
// });
// });
// });
// }


  //DOCUMENT END TAG
});



