const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("xClone");
});

app.listen(3000, () => {
    console.log("ポート3000でサーバー起動しました。");
});