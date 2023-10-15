import React, { useState } from "react";
import "./Book.css"; // Import your CSS file with styles

// @ts-ignore
const Book = ({ pageCount, initialPage = 1 }) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const nextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (<div>

            <button onClick={prevPage}>Previous Page</button>
            <button onClick={nextPage}>Next Page</button>

            <div className="book">
                <div className={`page page-${currentPage}`}>
                    <div className="content">
                        <h1>Page {currentPage}</h1>
                        <p>Page content goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
