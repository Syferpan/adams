import React from "react"

import './layout.css';

export const Wrapper = ( props )  =>(
    <div className="layout-wrapper">
        { props.children }
    </div>
);

export const Header = ( props )  =>(
    <div className="layout-header">
        { props.children }
    </div>
);


export const Content = ( props )  =>(
    <div className="layout-content">
        { props.children }
    </div>
);

export const Footer = ( props )  =>(
    <div className="layout-footer">
        { props.children }
    </div>
);

