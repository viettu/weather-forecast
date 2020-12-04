
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

import './Search.css';

const Search = ({onSearch, placeholder}) => {
    const [term, setTerm] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        onSearch(term);
    }

    return (
        <Form onSubmit={onFormSubmit} className="Search-form" data-testid="search-form">
            <Form.Control
                data-testid="search-control"
                className="Search-control"
                type="text"
                placeholder={placeholder}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            >
            </Form.Control>
        </Form>
    );
}

Search.propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string
}
Search.defaultProps = {
    placeholder: "Search"
}

export default Search;