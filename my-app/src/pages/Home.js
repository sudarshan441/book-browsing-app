import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import BookForm from "../components/BookForm";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, updatePage, updateQuantity, updateQuery, updateSortBy, updateSorting } from "../redux/books/booksActions";

export default function Home() {
    const dispatch = useDispatch();
    const { query, suggestions, selectedOption, sortOrder, books,page,quantity,totalPages } = useSelector(
        (state) => state.books
    );

    const selectStyle = {
        width: '150px',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: 'white',
    };

    useEffect(() => {

        dispatch(getBooks({ query: query,selectedOption: selectedOption,sortOrder: sortOrder,page:page,quantity:quantity}))
        // Fetch suggestions and update state based on query
        // Implement your suggestion logic and sorting here
        // Update the state using actions and dispatch
    }, [query, selectedOption, sortOrder,page,quantity]);

    const handleQueryChange = (e) => {
        const newQuery = e.target.value;
        dispatch(updateQuery(newQuery));
    };

    const handleSortBy = (e) => { 
        dispatch(updateSortBy(e.target.value));
    };

    const handleSortingChange = (e) => {
        dispatch(updateSorting(e.target.value));
    };
    const handleQuantityChange = (e) => {
        dispatch(updateQuantity(e.target.value));
    };

    const handlePageChange =(data)=>{
        dispatch(updatePage(data))
    }

    return (
        <div style={{ width: "90%", display: "flex", justifyContent: "space-between", gap: "10px", margin: "auto" }}>
            <div style={{ width: "30%" }}>
                <BookForm />
            </div>
            <div style={{ width: "60%" }}>
                <h1>Books</h1>
                <div style={{ width: "90%", display: "flex", justifyContent: "space-between", margin: "auto" }}>
                    <div>
                        <input
                            value={query}
                            style={{ width: "200px", height: "15px", padding: "10px", borderRadius: "20px" }}
                            type="text"
                            placeholder="Search books"
                            onChange={handleQueryChange}
                        />
                        <ul>
                            {suggestions.map((suggestion, index) => (
                                <li key={index}>{suggestion}</li>
                            ))}
                        </ul>

                    </div>
                    <div>
                        <select value={selectedOption}
                          onChange={handleSortBy} style={selectStyle}>
                            <option value={""} style={{ fontStyle: 'italic' }}>Sort by</option>
                            <option value={"Name"}>Name</option>
                            <option value={"Author"}>Author</option>
                            <option value={"Price"}>Price</option>
                            <option value={"Genre"}>Genre</option>
                        </select>
                    </div>
                    <div>
                        <select  value={sortOrder}
                        onChange={handleSortingChange} style={selectStyle}>
                            <option value={"asc"}>Asc</option>
                            <option value={"desc"}>Desc</option>
                        </select>
                    </div>
                    <div>
                        <select value={quantity} onChange={handleQuantityChange} style={selectStyle}>
                            <option value={""} style={{ fontStyle: 'italic' }}>Per Page</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                </div>

                <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginTop: "15px" }}>
                    {books.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))}
                </div>
                <Pagination totalPages={totalPages} currentPage={page} onPageChange={handlePageChange} ></Pagination>

            </div>

        </div>

    )
}