//№1
const div = document.getElementById("div");
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function addFecth() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Деректер алынуда...");
      }
      return response.json();
    })
    .then((data) => {
      addElement = data.title;
      addElement = data.id;
      addElement;

      document.body.innerHTML = `
      <p>Title:${title}</p>
      <p>id:${id}</p>`;
    })
    .catch((apiUrl) => {
      console.log("Деректер алынуда...");
    });
}

addFecth();

//№2
const apiKey = "https://jsonplaceholder.typicode.com/users";
fetch(apiKey)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Қате шығарылды");
    }
    return response.json();
  })
  .then((data) => {
    const oldElement = data.username;
    oldElement = data.phone;
    oldElement = data.website;
    oldElement = data.email;
    oldElement;

    document.body.innerHTML = `
    <p>Usename:${username}</p>
    <p>Phone:${phone}</p>
    <p>Website:${website}</p>
    <p>Email:${email}</p>
    `;
  })
  .catch((apiKey) => {
    console.log("Қате шығарылды");
  });
