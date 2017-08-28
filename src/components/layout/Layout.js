import React from "react"
import './Layout.css';

export const Wrapper = ( props )  =>(
    <div className="layout-wrapper">
        { props.children }
    </div>
);

export const Header = ( props )  =>(
    <div style={{gridArea: 'head', ...props.style}}>
        { props.children }
    </div>
);


export const Side = ( props )  =>(
    <div style={{gridArea: 'side', ...props.style}}>
        { props.children }
    </div>
);


export const Content = ( props )  =>(
    <div style={{gridArea: 'main', ...props.style}}>
        { props.children }
    </div>
);

export const Footer = ( props )  =>(
    <div style={{gridArea: 'foot', ...props.style}}>
        { props.children }
    </div>
);

