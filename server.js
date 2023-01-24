const app = require('./app')

require('./routes/api')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port: ${port}`));
