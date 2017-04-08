import React from 'react';
if (process.env.BROWSER) {
  require("../style/Home.scss");
}

export default function Home() {
    return (
        <div className="container">
            <h2>Home</h2>
            <p>Welcome to the site!</p>
        </div>
    );
};
