import React from 'react';

const Pagination = ({
  postsPerPage,
  totalPosts,
  pageNumberClick,
  nextPage,
  prevPage,
  currentPage,
}) => {
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <br />
      <ul className={!pageNumbers.length ? 'invisible' : 'pagination'}>

        {/* PREVIOUS PAGE */}
        <li className={currentPage === 1 ? 'invisible' : 'page-item-prev'}
          onClick={() => prevPage()} >
          Previous
        </li>

        {/* DISPLAY PAGE NUMBERS */}
        {pageNumbers.map((num) => (
          <li className='page-item' key={num} onClick={() => pageNumberClick(num)}>
            <span className={num === currentPage ? 'activeLink' : ''}>
              {num}
            </span>
          </li>
        ))}

        {/* NEXT PAGE */}
        <li className={currentPage === pageNumbers.length ? 'invisible' : 'page-item-next'}
          onClick={() => nextPage()}>
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
