export function setupSocket(io) {
    io.on('connection', (socket) => {
        console.log("Socket connected.. ", socket.id);
        socket.on("message", (data) => {
            console.log("Message from server: ", data);
            socket.emit("message", data);
        });
        socket.on("disconnect", () => {
            console.log("Socket disconnected.. ", socket.id);
        });
    });
}
