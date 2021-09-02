import React from "react";

import ChatMonitor from "../chatMonitor";
import MessegeInput from "../messegeInput";

export function App () {

    return (
        <div>
            <span>Reacted</span>
            <ChatMonitor />
            <MessegeInput />
        </div>
    );
}