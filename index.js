var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/views'))

// app.get('/', function(request, response) {
//   response.send('Hello World!')
// })

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] != 'https') {
      
// checa se o header é HTTP ou HTTPS

      res.redirect("https://" + req.headers.host + req.url);
      
// faz o redirect para HTTPS

  } else {
      next();
      
// segue com a sequência das rotas

  }
});