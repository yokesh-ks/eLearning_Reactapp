import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

function navbar(){
    return(
        <div class="navbar">
            <div class="navbar-left">eLearning</div>
            <ul class="navbar-right">
                <li><Link class="link" to="/">Home</Link></li>
                <li><Link class="link" to="/viewcourse">View-Course</Link></li>
                <li><Link class="link" to="/create">Create-Course</Link></li>
                <li>User</li>
            </ul>
        </div>
    );
}

export default navbar;