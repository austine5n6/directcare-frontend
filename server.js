const app = require('./app')

const dotenv = require('dotenv');

dotenv.config();

require('./routes/api')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port: ${port}`));
