import React, {useState} from 'react';
import {Form, Button, Container, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Search.css';

const Search = ({onSearch, placeholder, autoFocus}) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (onSearch) {
            onSearch(term);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="Search-form" data-testid="search-form">
            <Container>
                <Row>
                    <Form.Control
                        className="Search-control"
                        type="text"
                        autoFocus={autoFocus}
                        placeholder={placeholder}
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    ></Form.Control>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Row>
            </Container>
        </Form>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
};
Search.defaultProps = {
    placeholder: 'Search',
};

export default Search;
