import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Movie from './Movie';
import { Row } from 'react-bootstrap';

function Movies(props) {
    const { currentPage, handleClick,

        nextPaging, prevPaging, sortFilter, filterData } = props;
    console.log(sortFilter);
    const INPUT_DATA = gql`{
            nowPlaying(page:${currentPage}){
                movies{
                  id
                  title,
                  overview,
                  poster_path
                }
              }
    }`;
    // const SORT_DATA = [
    //     { title: 'Asc', value: 'asc' },
    //     { title: 'Desc', value: 'desc' },
    // ]
    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) {
        pageNumbers.push(i);
    }
    // pageNumbers.map(item => item + 1);
    console.log(pageNumbers);
    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <>
                <li className={currentPage === number ? "page-item active" : "page-item"} key={number}  >
                    <span className="page-link" id={number} onClick={(e) => handleClick(e)} > {number}</span></li>
            </>
        );
    });

    return (
        <>
            {/* <div className="filter-sort">
                <select onChange={(event) => sortFilter(event)}>
                    {SORT_DATA.map((item, index) => <option key={index} value={item.value}>{item.title}</option>)}
                </select>
            </div> */}
            <Row md={4} className="list-group-movie" >
                <Query query={INPUT_DATA}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading ...</p>;
                        if (error) return <p>Error :(</p>;
                        const dataNew = filterData(data.nowPlaying.movies);
                        return (
                            dataNew.map(item => <Movie movie={item} />)
                        );
                    }
                    }
                </Query >
            </Row>
            {
                pageNumbers.length > 1 ?
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            {currentPage > 1 ? <li className="page-item" onClick={() => prevPaging()}><span className="page-link">Previous</span></li> : ""}
                            {renderPageNumbers}
                            {currentPage < pageNumbers.length ? <li onClick={() => nextPaging()}><span className="page-link">Next</span></li> : ""}
                        </ul>
                    </nav>
                    : ''
            }



        </>
    )
};

export default Movies;