import React from 'react';
import {HiOutlineInboxIn, } from 'react-icons/hi';
import {IoTodayOutline, } from 'react-icons/io5';
import {BiCalendarWeek, BiChevronDownCircle, } from 'react-icons/bi';

export const Sidebar = () => (

<div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
        <li>
            <span>
                <HiOutlineInboxIn />
            </span>
            <span>Inbox</span>
        </li>

        <li>
            <span>
                <IoTodayOutline />
            </span>
            <span>Today</span>
        </li>

        <li>
            <span>
                <BiCalendarWeek />
            </span>
            <span>Next 7 Days</span>
        </li>
    </ul>

    <div className="sidebar__middle">
        <span>
            <BiChevronDownCircle />
        </span>
        <h2>Projects</h2>
    </div>

     <ul className="sidebar__projects">Projects will be here!</ul>
     Add Projects Here!!!

</div>
);