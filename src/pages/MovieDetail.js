import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import MoviesDetailItem from '../components/MoviesDetailItem';
import { Spinner, Alert } from 'react-bootstrap';

export default function MovieDetail(props) {
    console.log(props);
    const INPUT_DATA = gql`{
        details(movieId:${props.match.params.id}){
            id
            title
            poster_path
            overview
        }
    }`;
    return (
        <div className="container">

            <div className="row">
                <Query query={INPUT_DATA}>
                    {({ loading, error, data }) => {
                        if (loading) return <Spinner animation="border" variant="primary" />;
                        if (error) return <Alert variant={error}></Alert>;
                        console.log(data);
                        return (
                            <MoviesDetailItem item={data.details} />
                        );
                    }
                    }
                </Query >
            </div>
        </div>
    )
}
