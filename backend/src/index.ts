import express from "express"
import "dotenv/config.js"
import http from "http"
const app = express()
import { Server } from "socket.io"
import cors from "cors"

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://rps-game-et-moi.netlify.app/"],
    methods: ["GET", "Post"],
  },
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/api/", (req, res) => {
  res.status(200).json({ message: "OK" })
})

app.post("/room/:id", (req, res) => {
  const id = req.params.id
  res.send(id)
  // console.log(id)
})

io.on("connection", (socket) => {
  console.log("a user connected =>", socket.id)

  // socket.on('join_room', (data) => {
  //   const { username, room } = data; // Data sent from client when join_room event emitted
  //   socket.join(room); // Join the user to a socket room
  // });
})

// io.on("connection", (socket) => {
//   console.log("a user connected")
//   socket.on("disconnect", () => {
//     console.log("user disconnected")
//   })
// })
server.listen(process.env.PORT, () => {
  console.log("app running on port " + process.env.PORT)
})
