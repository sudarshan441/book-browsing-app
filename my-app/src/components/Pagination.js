import React, { useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const pageItemStyle = {
    margin: '0 5px',
  };

  const pageLinkStyle = {
    padding: '5px 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: currentPage === 1 ? 'lightgray' : 'white',
  };

  return (
    <nav style={paginationStyle}>
      <button
        style={{ ...pageLinkStyle, marginRight: '10px' }}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          style={{ ...pageLinkStyle, backgroundColor: page === currentPage ? 'lightblue' : 'white' }}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        style={{ ...pageLinkStyle, marginLeft: '10px' }}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
