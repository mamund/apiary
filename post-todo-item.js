var request = require("request");
 
request({
  url: "http://4da0.mamund.apiary.io/todo/",
  body: "title=this+is+a+new+title",
  headers: {"Accept": "text/thml", "Authorization": "Basic xxxxxxxxxxxxxxxxxxxx", "Content-Type": "application/x-www-form-urlencoded"}, 
  method: "POST"
}, function (error, response, body) {
  console.log("Status", response.statusCode);
  console.log("Headers", JSON.stringify(response.headers));
  console.log("Reponse received", body);
});