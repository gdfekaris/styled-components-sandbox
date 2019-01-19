const express = require(`express`);
const app = express();

app.use(express.static(`${__dirname}/../public`));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});