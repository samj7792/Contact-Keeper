const express = require('express');

// initialize express
const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API...' })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
