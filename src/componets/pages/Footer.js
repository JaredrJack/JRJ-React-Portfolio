import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <footer>
                <ul className="list-group list-group-horizontal d-flex justify-content-center">
                    <a href="https://github.com/JaredrJack">
                        <FaGithub className="m-3" size={42}></FaGithub>
                    </a>
                    <a href="https://www.linkedin.com/in/jared-jackson93/">
                    <FaLinkedin className="m-3" size={42}/>
                    </a>
                    <a href="https://stackoverflow.com/">
                        <FaStackOverflow className="m-3" size={42}/>
                    </a>
                </ul>  
            </footer>
        </div>
    );
}