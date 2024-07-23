import React from 'react';

const Header = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const todayString = today.toLocaleDateString('ko-KR', options);

    return (
        <header>
            <h1>To-Do List</h1>
            <time className="date">{todayString}</time>
        </header>
    );
};

export default Header;
