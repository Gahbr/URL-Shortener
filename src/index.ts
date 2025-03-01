import app from "./app";
const port = process.env.PORT || 3000;
require("dotenv").config();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`reading env -  ${process.env.MONGO_URI}`);
});
