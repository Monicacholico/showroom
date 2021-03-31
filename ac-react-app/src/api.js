import API_KEY from "./credentials";


function Execute() {
  const url = 'https://sahmed93846.activehosted.com/api/3/contacts?status=-1&orders[email]=ASC';
  const options = {
      method: "GET",
      headers: {
          "Api-Token": `${API_KEY}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Headers": "Content-Type",
          // "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
      }
  };
  return fetch(url, options).then(
      response => {
          return response.json();
      })
      .then(data => {
          console.log(data.results);
      })

}

Execute();

export default Execute;
