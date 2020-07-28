import React from 'react';
import { Card, Col, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Course(props) {
    const { id, title, overview, poster_path } = props.movie;
    return (
        <Col>
            <Card className="item-gird">
                <Card.Body>
                    <CardImg top width="100%" src={poster_path} alt="Card image cap" />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {overview}
                    </Card.Text>
                    <Link className="btn btn-danger" to={`/movie/${id}`}>Read More</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
