import React from "react";
import NavLinker from "./Navlinker";

const CollapseOverlay = ({ links }) => {
return (
    <ul className="flex flex-col py-4 items-center">
    {links.map((link, index) => (
        <li key={index}>
        <NavLinker href={link.path} title={link.title} />
        </li>
    ))}
    </ul>
);
};

export default CollapseOverlay;
