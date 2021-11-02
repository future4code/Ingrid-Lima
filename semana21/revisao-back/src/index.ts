import app from "./app";

app.get('/ping', (req, res)=> {
    try {
        res.send("pong")
    }catch (error: any) {
    console.log(error.message)
}
})