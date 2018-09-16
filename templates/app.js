const http = require('http');
const port = 3300;
const studentsData = require('./student_data.json');
http.createServer((req, res) => {
res.writeHead(200, {
"Content-Type": "application/json"
});
res.write(JSON.stringify(studentsData[0].firstname));
res.end();
}).listen(port);
console.log(`Node Server is running on port : ${port}`)