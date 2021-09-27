import { useState } from "react";
import styles from "./Pagination.module.sass"


function Pagination({ currentPage, onPageChange, totalUsersCount, pageSize, setPortionNumber, portionNumber }) {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let [portionSize] = useState(10);

    let pagination = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagination.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={styles.pagination}>
            <div className={styles.content}>
                {portionNumber > 1 &&
                    <button className={styles.prev + ' btn btn-primary'} onClick={ () => { setPortionNumber(portionNumber - 1) }}>prev</button>
                }
                {pagination
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span className={currentPage === p ? styles.current : undefined}
                            onClick={(e) => { onPageChange(p) }} key={p} >{p}</span>
                    })}
                
                { portionCount > portionNumber &&
                    <button className={styles.next + ' btn btn-primary'} onClick={ () => { setPortionNumber(portionNumber + 1) }}>next</button>
                }
            </div>
        </div>
    )
}

export default Pagination;