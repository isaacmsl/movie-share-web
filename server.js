const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const debug = require('debug')('server')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static('public'))

let currentUsers = new Map()
let isPaused = true
let currentVideoSrc = ''

io.on('connection', (socket) => {
    socket.on('setUsername', username => {
        let thereIsUsername = false
        currentUsers.forEach(existingUsername => {
            if (existingUsername === username) {
                thereIsUsername = true
                socket.emit('existingUsername')
                return
            }
        })

        if (thereIsUsername) return

        debug('new user -> ' + username)
        currentUsers.set(socket.id, username)
        socket.emit('canWatch', isPaused, currentVideoSrc)
        io.emit('broadcast', 'newUser', username)

    })

    socket.on('setVideoSrc', videoSrc => {
        currentVideoSrc = videoSrc
    })

    socket.on('disconnect', () => {
        const username = currentUsers.get(socket.id)
        if (username) {
            debug('user disconnected -> ' + username)
            io.emit('broadcast', 'userDisconnected', username)
            currentUsers.delete(socket.id)
        }
    })

    socket.on('action', (action, value) => {
        if (action === 'pause') {
            isPaused = true
        } else if (action === 'play') {
            isPaused = false
        }

        io.emit('broadcast', action, value)
    })
})

server.listen(process.env.PORT || 3000)