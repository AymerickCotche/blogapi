const app = require('./server');

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;+

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});