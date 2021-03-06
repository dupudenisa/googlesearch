/*
Renders all books saved to the Mongo database. User has an option to "View" the book, 
bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

#Include the following Functionality
-Renders books to the page, (passes in the list of books from the getRequest to the component tht renders the books HTML one by one.)
-View function allowing to see the Google Books page
-Delete API requests, removing from DB
*/

import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";

function Saved() {
    const [bookStorage, storeBooks] = useState([])
    const [more, domore] = useState([])

    // Allows the Save Books method to access the state and edit them. 
    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res =>
                storeBooks(res.data)
            )
            .catch(err => console.log(err.message));
    };

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err.message));
    }



    return (
        <div>
            <h1>This is the Saved Page</h1>
           
        </div>
    );
}

export default Saved;

