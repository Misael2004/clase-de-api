import app from "./src/server.js";

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is lister on port ${PORT}`);
})