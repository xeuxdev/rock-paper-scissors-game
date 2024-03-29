import express from "express"
import "dotenv/config.js"
import http from "http"
const app = express()
import { Server } from "socket.io"
import cors from "cors"

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ["https://rps-game-et-moi.netlify.app"],
    methods: ["GET", "Post"],
  },
})

io.on("connection", (socket) => {
  console.log("a user connected =>", socket.id)

  socket.on("send_choice", (data) => {
    const { username, choice, roomId, role } = data

    // console.log(roomId)

    // console.log(username, choice, roomId, role)
    if (roomId === "") {
      // socket.broadcast.emit("received_choice", data)
      // console.log("no room joined")
    } else {
      socket.to(roomId).emit("received_choice", data)
    }

    // socket.to(roomId).emit("received_choice", data)
    // socket.to(roomId).emit("received_choice", data)
  })

  socket.on("join_room", (data, cb) => {
    const { username, roomId } = data // Data sent from client when join_room event emitted
    // Join the user to a socket room
    socket.join(roomId)
    cb("Joined room", roomId, "as ", username)

    socket.to(roomId).emit("joined_room", username)
    // console.log(username, roomId)
  })

  socket.on("reset", (data) => {
    const { roomId } = data
    socket.to(roomId).emit("reset_choice", roomId)
  })

  socket.on("leave_room", (data) => {
    const { roomId } = data
    socket.leave(roomId)
  })

  // socket.on("play_again", (data) => {
  //   const { roomId } = data
  //   socket.to(roomId).emit("play", roomId)
  // })
})

server.listen(process.env.PORT, () => {
  console.log("app running on port " + process.env.PORT)
})
