import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Movies from '../components/Movies';

export default class MoviesList extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            todosPerPage: 20,
            sortData: 'asc',
            numberStart: 1,
            numberEnd: 10
        }
        this.handleClick = this.handleClick.bind(this);
        this.nextPaging = this.nextPaging.bind(this);
        this.prevPaging = this.prevPaging.bind(this);
        this.sortFilter = this.sortFilter.bind(this);
        this.filterData = this.filterData.bind(this);
        this.nextNumberPaging = this.nextNumberPaging.bind(this);
        this.prevNumberPaging = this.prevNumberPaging.bind(this);
    }
    handleClick(event) {
        console.log(event.target.id);
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    nextPaging() {
        let currentPage = this.state.currentPage;
        this.setState({
            currentPage: currentPage + 1
        })
    }
    prevPaging() {
        let currentPage = this.state.currentPage;

        this.setState({
            currentPage: currentPage - 1
        })
    }
    nextNumberPaging() {
        let numberE = this.state.numberEnd;
        let numberS = this.state.numberStart;

        numberE = numberE + 10;
        numberS = numberS - 10;
        this.setState({
            numberEnd: numberE,
            numberStart: numberS
        })
    }
    prevNumberPaging() {
        let number = this.state.numberEnd;
        number = number - 10;
        this.setState({
            numberEnd: number
        })
    }

    /// sort
    sortFilter(event) {
        const value = event.target.value;
        console.log(value);
        this.setState({
            sortData: value
        })
    }
    filterData(data) {
        console.log(this.state.sortData);
        if (this.state.sortData === 'desc') {
            data.reverse();
        } else if (this.state.sortData === 'desc') {
            data.sort();
        }
        return data;
    }

    render() {
        return (
            <div className="container" >
                <h1 className="list-page text-center">List Page</h1>
                <Container>
                    <Movies
                        {...this.state}
                        handleClick={this.handleClick}
                        nextPaging={this.nextPaging}
                        prevPaging={this.prevPaging}
                        sortFilter={this.sortFilter}
                        filterData={this.filterData}
                        nextNumberPaging={this.nextNumberPaging}
                        prevNumberPaging={this.prevNumberPaging}

                    />

                </Container>
            </div>
        )
    }

}
