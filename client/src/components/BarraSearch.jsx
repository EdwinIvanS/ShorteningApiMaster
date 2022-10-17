import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BarraSearch = () => {
    return(
        <Container className="container-Search">
            <Form.Group className="mb-3">
                <Form.Control placeholder="Disabled input" />
                <Button> Shorten It! </Button>
            </Form.Group>
        </Container>
    )
}

export default BarraSearch;