import App from '../app.js';
import http from 'http';
import https from "https"
import path from "path"

const port = process.env.PORT || "8000"
App.app.set("port", port)

const server = http.createServer(App.app)

server.listen(port, ()=> console.log(`SERVER HTTP RUNNING IN PORT: ${port}\n\nhttp://localhost:${port}`))
