import React from 'react';
import {GrSuse, } from 'react-icons/gr';
import {AiOutlinePlus, } from 'react-icons/ai';

export const Header = () => {

    return <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="settings">
                <ul>
                    <li>
                        <AiOutlinePlus />
                    </li>
                    <li>
                        <GrSuse />
                    </li>
                </ul>
            </div>
        </nav>

    </header>;


};