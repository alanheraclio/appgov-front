console.log("Table script running!!!...");
let url = 'https://jsonplaceholder.typicode.com/posts';

// HTTP GET
function getTableData(){
  console.log("function running");
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}
getTableData();

//DUMMY
var data = {
  userId: '256',
  id: '256',
  title: "Test",
  body: "Test"
};

// HTTP POST
function postTableData(){
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}
postTableData();
