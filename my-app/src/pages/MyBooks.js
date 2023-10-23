import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getMyBook = async (token) => {
    return await axios.get(`https://book-zh1g.onrender.com/user/book`, {
        headers: {
            token: token,
        },
    });
}
const deleteMyBook = async (token,id) => {
    return await axios.delete(`https://book-zh1g.onrender.com/book/${id}`, {
        headers: {
            token: token,
        },
    });
}
export default function MyBooks() {
    let LocalToken = JSON.parse(localStorage.getItem("token"));
    const [data, setData] = useState([]);
    useEffect(() => {
        getMyBook(LocalToken.token).then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            alert(err)
        })
    }, [])

   const handleDelete =(id)=>{
    deleteMyBook(LocalToken.token,id).then((res) => {
        getMyBook(LocalToken.token).then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            alert(err)
        })
    }).catch((err)=>{
        alert(err)
    })
   }

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    const titleStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    };

    const authorStyle = {
        fontSize: '1rem',
        color: '#555',
    };

    const priceStyle = {
        fontSize: '1.2rem',
        color: 'green',
    };

    const genresStyle = {
        fontSize: '1.2rem',
        color: 'black',
    }
    

    if(!data.length){
        return <h1>you have not added any books yet</h1>
    }


    return (
        
        <div style={{width:"90%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",padding:"10px"}}>
            {data.map((book) => (<div style={cardStyle}>
                <h3 style={titleStyle}>Name: {book.Name}</h3>
                <p style={authorStyle}>Author: {book.Author}</p>
                <p style={priceStyle}>Price: ${book.Price}</p>
                <p style={genresStyle}>Genre: {book.Genre}</p>
                <div style={{marginBottom:"10px"}}><Link to={`/book/${book._id}`}>view in detail</Link></div>
                <button onClick={()=>{
                    handleDelete(book._id);
                }} >delete</button>
            </div>))}
        </div>
    )
}