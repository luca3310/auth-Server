import express from "express";

import getAccessToken from "./accessToken/getAccessToken";
import verifyToken from "./accessToken/verifyToken";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/getAccessToken", getAccessToken);
app.post("/verifyToken", verifyToken);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
