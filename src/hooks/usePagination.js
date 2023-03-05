export const DOTS = "...";

function usePagination({currentPage, totalCount, pageSize}) {
  const lastPage = Math.ceil(totalCount/pageSize);
  if(totalCount <= pageSize){
    return[1];
  }
  if(lastPage <= 2){
    return [1,2]
  }
  if(lastPage <= 3){
    return [1, 2, 3]
  }
  if((currentPage === 1 || currentPage === 2)){
    return [1, 2, 3, DOTS, lastPage];
  }
  if(currentPage === lastPage || currentPage === lastPage-1){

    return [1, DOTS, lastPage-2, lastPage-1, lastPage];
  }

  return [1, DOTS, currentPage-1, currentPage, currentPage+1,DOTS, lastPage]
}

export default usePagination;
