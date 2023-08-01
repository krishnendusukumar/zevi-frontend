import React from "react";
import ZeviLogo from '../../assets/png/logo_zevi.png'

import './Logo.scss'

const Logo: React.FunctionComponent = () => {
    return (
        <div className="logo-container">
            <img src={ZeviLogo} alt="connnection error " />
        </div>
    )
}

export default Logo