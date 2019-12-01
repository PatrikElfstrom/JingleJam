import React from "react";
import { BellIcon } from "./BellIcon";
import { CreateNotification } from "../CreateNotification";
import "./style.scss";

export const NotificationButton = () => {
    const handleClick = event => {
        event.stopPropagation();
        CreateNotification();
    };

    return (
        <button className="notification-toggle-button" onClick={handleClick}>
            <BellIcon color="#fff" />
        </button>
    );
};
