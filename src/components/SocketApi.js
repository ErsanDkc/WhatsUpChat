import { io } from "socket.io-client";

let socket;
export const init = () => {
    console.log("Sunucuya bağlanılıyor...")
    socket = io("localhost:3000"  ,  {
        transports: ["websocket"], 
    })

    socket.on("connect", () => console.log("Sunucuya bağlantı başarıyla gerçekleşti.!"))
}

export const send = (message) => {
    if(socket) socket.emit("new-message", message)
}

export const subscribeChat = (cb) => {
    if(!socket) return;

    socket.on("receive-message", (message) => {
    console.log("Yeni mesajın var!", message)
    cb(message)
    })
    
}