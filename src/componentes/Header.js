import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>NOTAS</h1>
            <button
             onClick={() =>
                handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                    )
                }
                 className="save"
                 >Alterar</button>

        </div>
    )
}

export default Header;