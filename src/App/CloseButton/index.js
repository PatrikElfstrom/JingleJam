import React from "react";
import { CloseIcon } from "./CloseIcon";
import "./style.scss";

export const CloseButton = props => (
    <button {...props} className="close-button">
        <CloseIcon />
    </button>
);
