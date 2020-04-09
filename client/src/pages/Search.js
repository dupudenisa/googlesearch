/*
User can search for books via the Google Books API and render them here. 
User has the option to "View" a book, bringing them to the book on Google Books, 
or "Save" a book, saving it to the Mongo database.

#Include the following functionality
-Input field that turns input into search query that is linked to the google docs api
-passes book from API into component that renders books
-Once a book is found by the API, click button to see page (URL of Book linked to page of book on GP)
-Post request, Can click Save to save the book to the mongo DB.
*/

import React from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";


function Search() {
    return(
        <h1>This is the Search Page</h1>
    );
}

export default Search;