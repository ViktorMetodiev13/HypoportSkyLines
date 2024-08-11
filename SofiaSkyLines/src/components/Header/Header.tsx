import "./header.css";

import React from "react";

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-logo-title-section">
                <img src=".././images/logo-img.jpg" alt="header image" className="header-logo" />

                <h2 className="header-title">SofiaSkyLines</h2>
            </div>
        </div>
    )
}