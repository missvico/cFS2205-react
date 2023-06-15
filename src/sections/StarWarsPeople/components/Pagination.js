function Pagination(props){

    const prevClass = props.page==1? "page-item disabled" : "page-item"
    const nextClass = props.page==props.totalPages? "page-item disabled" : "page-item"
    
    const pageNumbers = []
    for(let i=1; i<=props.totalPages; i++){
        const pageClass = props.page == i? "page-item active" : "page-item" 
        pageNumbers.push(<li class={pageClass}><a class="page-link" key={i} id={i} onClick={props.handleClick}>{i}</a></li>)
    }

    return(
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class={prevClass}><a class="page-link" onClick={props.handlePrevious} disabled={props.page===1}>Previous</a></li>
                {pageNumbers}
                <li class={nextClass}><a class="page-link" onClick={props.handleNext} disabled={props.page===props.totalPages}>Next</a></li>
             </ul>
        </nav>
    )
}

export default Pagination