import "../css/pagination.css"
import usePagination, { DOTS } from "../hooks/usePagination";
import { nanoid } from "nanoid";

function Pagination({
    onPageChange,
    totalCount,
    pageSize,
    currentPage
}){

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        pageSize,
      });

    const onNext = () => {
        onPageChange(currentPage + 1);
    };
    const onPrevious = () =>{
        onPageChange(currentPage - 1);
    };


    return(
        <>
            <ul className="pagList">
                <li className="paginationItem">
                    <button
                    type="button"
                    className="arrowButton left"
                    onClick={onPrevious}
                    disabled={currentPage === 1}
                    >
                    Prev
                    </button>
                </li>

                {paginationRange.map((pageNumber) => {
                    const key = nanoid();

                    if (pageNumber === DOTS) {
                    return (
                        <li key={key} className="dots">
                        &#8230;
                        </li>
                    );
                    }

                    return (
                    <li
                        key={key}
                        className="paginationItem"
                    >
                        <button
                        type="button"
                        onClick={() => onPageChange(pageNumber)}
                        disabled={currentPage === pageNumber}
                        >
                        {pageNumber}
                        </button>
                    </li>
                    );
                })}


                <li className="paginationItem">
                    <button
                    type="button"
                    onClick={onNext}
                    disabled={currentPage >= (totalCount/pageSize)} // change this line to disable a button.
                    >
                    Next
                    </button>
                </li>
            </ul>
        </>
    );
}

export default Pagination;