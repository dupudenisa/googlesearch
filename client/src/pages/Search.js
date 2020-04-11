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

import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/Form";



function Search() {

    const [newBook, storeBooks] = useState([])
    const [more, domore] = useState([])

    // Allows the Save Books method to access the state and edit them. 
    useEffect(() => {
        loadBook()
    }, [])

    function loadBook(){
        const newBook = [1, 1, 1]
        storeBooks(newBook);
        console.log(storeBooks)
    }

    // function saveBook(newBook){
    //     API.saveBook(newBook)
    //         .then(res => 
    //             console.log(res.data)
    //         )
    //         .catch(err => console.log(err.message))
    // }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };
    
      
      function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
          API.saveBook({
            title: formObject.title,
            author: formObject.author,
            synopsis: formObject.synopsis
          })
            .then(() => setFormObject({
              title: "",
              author: "",
              synopsis: ""
            }))
            .then(() => loadBooks())
            .catch(err => console.log(err));
        }
      };

    return(
        <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Google Books!</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
                value={formObject.author}
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
                value={formObject.synopsis}
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }

       

     



export default Search;