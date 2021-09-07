import React from "react";
import ChatMonitor from "../chatMonitor/chatMonitor";
import MessageInput from "../messageInput/messageInput";

export function ChatPage () {
    return (
        <div>
            <ChatMonitor />
            <MessageInput />
        </div>
    );
}