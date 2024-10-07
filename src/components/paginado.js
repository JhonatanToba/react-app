import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

function Paginado(props) {
  
  const items = props.info;
  const totalPages = items.pages;

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    props.page(pageNumber);
  };

  useEffect(() => {
    props.page(currentPage);    
  }, [currentPage, props]);

  //console.log(currentPage);
  

  return (
    <div className='d-flex justify-content-center'>
      <Pagination>
        {currentPage !== 1 && 
          <>
            <Pagination.First onClick={() => paginate(1)} />
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
            <Pagination.Item onClick={() => paginate(1)} active={currentPage === 1}>1</Pagination.Item>
          </>
        }

        {currentPage > 3 && <Pagination.Ellipsis />}

        {currentPage > 2 && <Pagination.Item onClick={() => paginate(currentPage - 1)}>{currentPage - 1}</Pagination.Item>}
        <Pagination.Item active>{currentPage}</Pagination.Item>
        {currentPage < totalPages - 1 && <Pagination.Item onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</Pagination.Item>}

        {currentPage < totalPages - 2 && <Pagination.Ellipsis />}

        {currentPage !== totalPages && 
          <>
            <Pagination.Item onClick={() => paginate(totalPages)} active={currentPage === totalPages}>{totalPages}</Pagination.Item>
            <Pagination.Next onClick={() => paginate(currentPage + 1)} />
            <Pagination.Last onClick={() => paginate(totalPages)} />
          </>
        }

        
      </Pagination>
    </div>
  );
}

export default Paginado;
